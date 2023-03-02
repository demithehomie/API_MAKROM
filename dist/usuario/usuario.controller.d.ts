import { PrismaService } from 'src/prisma/prisma.service';
export declare class UsuarioController {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
}
