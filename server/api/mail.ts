import { H3Event, readBody } from 'h3'
import { useNodeMailer } from './services/mailer'

export default defineEventHandler(async (event: H3Event) => {
    const { sendMail } = useNodeMailer()
    const body = await readBody(event)
    const { name, email, phone, message } = body

    try {
        await sendMail({
            subject: `${name} has sent a message from the site`,
            text: `My email is ${email} and my phone number is ${phone}.<br> ${message}`,
            to: 'danielemilnedelcu@gmail.com',
        })

        return { success: true, message: 'Email sent successfully' }
    } catch (error) {
        console.error('Email error:', error)
        throw createError({ statusCode: 500, statusMessage: 'Email failed to send' })
    }
})