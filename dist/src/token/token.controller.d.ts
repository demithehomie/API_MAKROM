import { PrismaService } from 'src/prisma/prisma.service';
export declare class TokenController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    save(hash: string, email: string): Promise<void>;
}
