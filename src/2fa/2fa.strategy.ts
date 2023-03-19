import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-otp';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class TwoFactorStrategy extends PassportStrategy(Strategy, 'two-factor') {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(token: string, user: any):  Promise<any> {
    // Verifique se o token OTP é válido para o usuário
    const isTokenValid = this.authService.validateTwoFactorToken(user.id, token);
    //if (!isTokenValid) {
      //return null;
   // }

    return user;
  }
}
