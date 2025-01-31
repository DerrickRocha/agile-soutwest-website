import {NextResponse} from "next/server";
import nodemailer from 'nodemailer';


export async function POST(request: Request) {
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
        return NextResponse.json({error: "Error sending email"}, {status: 500})
    }
}