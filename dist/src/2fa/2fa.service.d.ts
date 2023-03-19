import { Usuario } from "@prisma/client";
import { UsuarioController } from "src/usuario/usuario.controller";
import { ConfigService } from "@nestjs/config";
export declare class TwofaService {
    private readonly usuarioCtrl;
    private readonly configService;
    constructor(usuarioCtrl: UsuarioController, configService: ConfigService);
    gerarSecret2fa(user: Usuario): Promise<{
        secret: string;
        otpAuthUrl: string;
    }>;
}
