interface IMailTo {
    name: string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;
    attachment?: string; //attachment é um array de string, essa tipagem pode ser referenciada das seguintes formas // Array<String> ou string[]
}

interface IMessageDTO { // DTO: Data Transfer Object (DDD)
    to: IMailTo;
    message: IMailMessage;
}

interface IEmailService {
    sendEmail(request: IMessageDTO): void;
}

class EmailService {
    sendEmail({to, message}: IMessageDTO){
        console.log(`Email enviado para  ${to.name}: ${message.subject}`);
    }
}

export default EmailService;