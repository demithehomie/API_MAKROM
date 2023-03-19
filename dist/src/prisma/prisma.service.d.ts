import { PrismaClient } from '@prisma/client';
export declare class PrismaService {
    private client;
    constructor();
    getClient(): PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation>;
}
