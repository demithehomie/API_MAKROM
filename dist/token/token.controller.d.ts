import { PrismaService } from 'src/prisma/prisma.service';
export declare class TokenController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(email: string, hash: string): Promise<void>;
}
