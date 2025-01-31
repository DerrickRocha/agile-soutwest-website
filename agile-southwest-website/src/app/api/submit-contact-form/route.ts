import {NextResponse} from "next/server";
import nodemailer from 'nodemailer';
import {RateLimiterMemory} from "rate-limiter-flexible";

// Configure rate limiter
const rateLimiter = new RateLimiterMemory({
    points: 5, // Number of requests allowed
    duration: 60, // Time window in seconds (1 minute)
});

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

export async function POST(request: Request) {
    // Check rate limit
    const clientIp = getClientIp(request);  // Get client IP using the helper function
    await rateLimiter.consume(clientIp);  // Consume points for this IP address

    const { name, email, phone, message } = await request.json();
    if (!name || !email || !phone || message) {
        const status = { status: 400}
        NextResponse.json("Email, Name, and Message are required.", status)
    }
    try {
        const transporter = nodemailer.createTransport(
            {
                service: "gmail",
                auth: {
                    user: 'drocha616@gmail.com',
                    pass: 'qpym tgfn bynm vkwt'
                }
            }
        );
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
        return NextResponse.json({ message: 'Form submitted successfully' });
    } catch (error) {
        console.error(error)
        if (error instanceof Error && error.message === 'Too many requests') {
            return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
        }
        return NextResponse.json({error: "Error sending email"}, {status: 500})
    }
}