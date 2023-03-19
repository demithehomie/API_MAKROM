import { EmailService } from "./email.service";
export declare class EmailController {
    private readonly emailService;
    constructor(emailService: EmailService);
    exibirForm(): void;
    enviarEmail(req: any): Promise<void>;
}
