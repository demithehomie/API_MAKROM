import { AuthService } from 'src/auth/auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
export declare class TokenController {
    private readonly prisma;
    private readonly authService;
    private readonly jwtService;
    constructor(prisma: PrismaService, authService: AuthService, jwtService: JwtService);
}
