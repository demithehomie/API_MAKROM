import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { TokenController } from 'src/token/token.controller';

@Injectable()
export class AuthService {
  validateTwoFactorToken(id: any, token: string) {
      throw new Error('Method not implemented.');
  }
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private token: TokenController,
  ) {}

  async validateUser(email: string, senha: string): Promise<any> {
    const user = await this.prisma.getClient().usuario.findUnique({ where: { email } });
    if (!user) {
      throw new UnauthorizedException();
    }
    const isValidPassword = await bcrypt.compare(senha, user.senha);
    if (!isValidPassword) {
      throw new UnauthorizedException();
    }
    return user;
  }

  async generateToken(verificationData){}

  async login(usuario: any) {
    const payload = { sub: usuario.id, email: usuario.email };
    const token = this.jwtService.sign(payload)
    this.token.save(token, usuario.email)
    return {
      access_token: token,
    };
  }

}
