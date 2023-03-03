import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from 'src/auth/auth.service';
export declare class UsuarioController {
    private readonly prisma;
    private authService;
    constructor(prisma: PrismaService, authService: AuthService);
    findAll(): Promise<import(".prisma/client").Usuario[]>;
    create(data: {
        email: string;
        senha: string;
    }): Promise<import(".prisma/client").Usuario>;
    update(id: string, data: {
        senha: string;
        email: string;
    }): Promise<import(".prisma/client").Usuario>;
    delete(id: string): Promise<import(".prisma/client").Usuario>;
    login(req: any): Promise<{
        access_token: string;
    }>;
}
