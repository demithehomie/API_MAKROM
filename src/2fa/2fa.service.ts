import { Injectable } from "@nestjs/common";
import { Usuario } from "@prisma/client";
import { UsuarioController } from "src/usuario/usuario.controller";
import { authenticator } from 'otplib';
import { ConfigService } from "@nestjs/config";


@Injectable()
export class TwofaService {
    constructor (
        private readonly usuarioCtrl: UsuarioController,
        private readonly configService: ConfigService 
    ){}

    async gerarSecret2fa(user: Usuario) {
        const _id = null 
        const secret = authenticator.generateSecret()
        const otpAuthUrl = authenticator.keyuri(
            user.email,
            this.configService.get('TWO_FACTOR_AUTHENTICATION_APP_NAME'),
            secret,
        );
        await this.usuarioCtrl.setTwoFactorAuthenticationSecret(secret, user , _id);
        return {
            secret,
            otpAuthUrl,
        };
    }

}