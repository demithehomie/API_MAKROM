import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

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
  
}