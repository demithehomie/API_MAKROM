import { PrismaService } from 'src/prisma/prisma.service';
export declare class TokenController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: {
        email: string;
        hash: string;
    }): Promise<import(".prisma/client").Token>;
}
