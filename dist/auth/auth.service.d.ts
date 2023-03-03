import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { TokenController } from 'src/token/token.controller';
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    private token;
    constructor(prisma: PrismaService, jwtService: JwtService, token: TokenController);
    validateUser(email: string, senha: string): Promise<any>;
    login(usuario: any): Promise<{
        access_token: string;
    }>;
}
