import { MailerService } from '@nestjs-modules/mailer';
export declare class EmailService {
    private mailerService;
    constructor(mailerService: MailerService);
    enviarEmail(email: string, mensagem: string): Promise<void>;
}
