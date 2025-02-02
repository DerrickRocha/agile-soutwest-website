import {NextResponse} from "next/server";
import nodemailer from 'nodemailer';
import {RateLimiterMemory} from "rate-limiter-flexible";
import { IsEmail, IsPhoneNumber, Length, validate } from 'class-validator';
import xss from 'xss';  // Importing xss for sanitization
// Define the expected structure for the form data
interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}
class EmailData {
    @IsEmail()
    email: string;
    constructor(email: string) {
        this.email = email
    }
}
// Define a class to represent the form data structure
class ContactForm {
    @Length(1, 50)
    name: string;

    @IsPhoneNumber("US")
    phone: string;

    @Length(1, 500)
    message: string;

    constructor(name: string,phone: string, message: string) {
        this.name = name;
        this.phone = phone;
        this.message = message;
    }
}
// Configure rate limiter
const rateLimiter = new RateLimiterMemory({
    points: 5, // Number of requests allowed
    duration: 60, // Time window in seconds (1 minute)
});

// Helper function to sanitize the data
const sanitizeData = (data: ContactFormData) => {
    data.name = xss(data.name);
    data.email = xss(data.email);
    data.phone = xss(data.phone.replace(/\D/g, ''));
    data.message = xss(data.message);
    return data;
};

// Helper function to get IP address from headers
const getClientIp = (request: Request): string => {
    const xRealIp = request.headers.get('x-real-ip');  // Common for reverse proxies
    const xForwardedFor = request.headers.get('x-forwarded-for');  // Another common header
    const remoteAddress = request.headers.get('remote-address');  // Some proxies use this

    // Use the x-forwarded-for or x-real-ip headers if they exist
    if (xRealIp) {
        return xRealIp;
    } else if (xForwardedFor) {
        return xForwardedFor.split(',')[0];  // Extract the first IP from x-forwarded-for
    } else if (remoteAddress) {
        return remoteAddress;
    }
    // Fallback to a default IP (localhost for local dev environment)
    return '127.0.0.1';
};

const transporter = nodemailer.createTransport(
    {
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    }
);

export async function POST(request: Request) {
    // Check rate limit
    const clientIp = getClientIp(request);  // Get client IP using the helper function
    await rateLimiter.consume(clientIp);  // Consume points for this IP address

    const {name, email, phone, message} = await request.json();

    const sanitizedData = sanitizeData({ name, email, phone, message });
    // Create an instance of the ContactForm class
    const contactForm = new ContactForm(
        sanitizedData.name,
        sanitizedData.phone,
        sanitizedData.message
    );

    // Validate the sanitized data using class-validator
    const errors = await validate(contactForm);
    if (errors.length > 0) {
        const errorMessages = errors.map(error => error.toString());
        return NextResponse.json({ error: `Validation failed: ${errorMessages.join(', ')}` }, { status: 400 });
    }
    // Validate email separately since email field is optional.
    if (sanitizedData.email !== "") {
        const emailErrors = await validate(new EmailData(sanitizedData.email))
        if (emailErrors.length > 0) {
            const emailErrorMessages = emailErrors.map(error => error.toString());
            return NextResponse.json({ error: `Email validation failed: ${emailErrorMessages.join(', ')}` }, { status: 400 });
        }
    }

    try {
        const mailOptions = {
            from: email,
            to: "drocha616@gmail.com",
            subject: "" +
                "New Agile Southwest Contact Form Submission",
            text: `
                Name: ${name}
                Email: ${email}
                Phone: ${phone}
                Message: ${message}
            `,
        }
        await transporter.sendMail(mailOptions)
        return NextResponse.json({message: 'Form submitted successfully'});
    } catch (error) {
        console.error(error)
        if (error instanceof Error && error.message === 'Too many requests') {
            return NextResponse.json({error: 'Too many requests. Please try again later.'}, {status: 429});
        }
        return NextResponse.json({error: "Error sending email"}, {status: 500})
    }
}