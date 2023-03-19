
import { Controller, Post, Request, Get, Render }from "@nestjs/common"
import { EmailService } from "./email.service";

@Controller()
export class EmailController {

    constructor(private readonly emailService: EmailService)  {}

    @Get('email')
    @Render('form')
    exibirForm() {
      //
    }

    @Post('enviar-email')
    enviarEmail(@Request() req){
        return this.emailService.enviarEmail(
            req.body.email,
            req.body.mensagem,
        );
    }
}