import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from 'src/auth/auth.service';
import { Usuario } from '@prisma/client';
export declare class UsuarioController {
    private readonly prisma;
    private authService;
    private usuarioRepository;
    constructor(prisma: PrismaService, authService: AuthService, usuarioRepository: PrismaService);
    findAll(): Promise<Usuario[]>;
    create(data: {
        email: string;
        senha: string;
    }): Promise<Usuario>;
    update(id: string, data: {
        senha: string;
        email: string;
    }): Promise<Usuario>;
    delete(id: string): Promise<Usuario>;
    login(req: any): Promise<{
        access_token: string;
    }>;
    setTwoFactorAuthenticationSecret(secret: any, user: any, _id: any): Promise<void>;
}
