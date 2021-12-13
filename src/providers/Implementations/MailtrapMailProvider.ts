import {IMailProvider} from "../IMailProvider";
import nodemailer from 'nodemailer'
import Mail from "nodemailer/lib/mailer";
import {IMessage} from "../IMailMessageProvider";

export class MailtrapMailProvider implements IMailProvider {
    private transporter: Mail

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.mailtrap.io',
            port: 2525,
            auth: {
                'user': 'c31ea72524bfe2',
                'pass': 'e2fba16fd20745'
            }
        })
    }

    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email
            },
            from: {
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body
        })
    }
}
