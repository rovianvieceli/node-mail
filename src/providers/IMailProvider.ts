import {IMessage} from "./IMailMessageProvider";

export interface IMailProvider {
    sendMail(message: IMessage): Promise<void>
}
