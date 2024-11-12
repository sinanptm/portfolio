import nodemailer from "nodemailer";
const { NODEMAILER_PASSKEY, SENDER_EMAIL, RECEIVER_EMAIL } = process.env;

export default class NodeMailerService {
    async sendMail(name: string, contact: string, content: string): Promise<void> {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: SENDER_EMAIL,
                pass: NODEMAILER_PASSKEY,
            },
        });

        const mailOptions = {
            from: SENDER_EMAIL,
            to: RECEIVER_EMAIL,
            subject: "New Message from Your Portfolio",
            text: `
            Name: ${name}
            Contact: ${contact}
            Message:
            ${content}
            `,
            html: `
                <h3>New Message from Your Portfolio</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Contact:</strong> ${contact}</p>
                <p><strong>Message:</strong></p>
                <p>${content}</p>
            `
        };

        await transporter.sendMail(mailOptions);
    }
}