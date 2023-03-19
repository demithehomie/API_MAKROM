import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SmsMobileService } from 'src/2fa/sms/smsm.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly smsMobileService: SmsMobileService,
  ) {}

  @Post('login')
  async login(@Body() credentials: any) {
    const user = await this.authService.validateUser(
      credentials.username,
      credentials.password,
    );

    if (!user) {
      throw new UnauthorizedException();
    }

    // Gera o código de verificação
    const verificationCode = Math.floor(1000 + Math.random() * 9000);

    // Envie o código de verificação para o telefone celular do usuário via SMS Mobile
    await this.smsMobileService.sendVerificationCode(user.phone, verificationCode);

    return { message: 'Um código de verificação foi enviado para o seu telefone celular.' };
  }

  @Post('verify')
  async verify(@Body() verificationData: any) {
    // Verifique se o código de verificação inserido pelo usuário corresponde ao código de verificação criado anteriormente
    const isVerified = await this.authService.validateUser(
      verificationData.username,
      verificationData.code,
    );

    if (!isVerified) {
      throw new UnauthorizedException();
    }

    // Gere um token de acesso para o usuário
    const token = await this.authService.generateToken(verificationData.username);

    return { access_token: token };
  }
}
