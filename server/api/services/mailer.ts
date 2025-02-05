import nodemailer from 'nodemailer'

export const useNodeMailer = () => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT),
        secure: true,
        auth: {
            user: process.env.EMAIL_USER, // Set this in your .env file
            pass: process.env.EMAIL_PASSWORD, // Set this in your .env file
        },
    })

    const sendMail = async ({ to, subject, text }: { to: string; subject: string; text: string }) => {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            subject,
            to,
            html: text,
        }

        return transporter.sendMail(mailOptions)
    }

    return { sendMail }
}