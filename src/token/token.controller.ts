import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { Token, Usuario } from '@prisma/client';
import { AuthService } from 'src/auth/auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Controller('token')
export class TokenController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}


  // @Post()
  // async create(@Body() data: { userId: string }): Promise<Token> {
  //   const token = await this.prisma.token.create({
  //     data: {
  //       userId: data.userId,
  //       token: await this.authService.generateAccessToken(data.userId),
  //     },
  //   });
  //   return token;
  // }

  // @Post('/save')
  // async saveToken(token: Token, usuario: Usuario): Promise<Token> {
  //   const existingToken = await this.prisma.getClient().token.findUnique({
  //     where: { email: usuario.email },
  //   });

  //   if (existingToken) {
  //     await this.prisma.getClient().token.update({
  //       where: { email: usuario.email },
  //       data: token,
  //     });
  //     return token;
  //   } else {
  //     const createdToken = await this.prisma.getClient().token.create({
  //       data: {
  //         ...token,
  //         id: { connect: { email: usuario.email } },
  //       },
  //     });
  //     return createdToken;
  //   }
  // }

  // @Post('/refresh')
  // async refreshToken(@Body() refreshToken: string): Promise<Token> {
  //   const token = await this.authService.verifyRefreshToken(refreshToken);
  //   if (!token) {
  //     throw new UnauthorizedException('Invalid refresh token');
  //   }
  //   const user = await this.authService.validateUser(token.userId);
  //   if (!user) {
  //     throw new UnauthorizedException('Invalid user');
  //   }
  //   const accessToken = await this.authService.generateAccessToken(user);
  //   const newRefreshToken = await this.authService.generateRefreshToken(user);
  //   const newTokenData = { accessToken, refreshToken: newRefreshToken };
  //   return await this.saveToken(newTokenData, user);
  // }

  // @Post('/get')
  // async getToken(@Body() user: User): Promise<Token> {
  //   const existingToken = await this.prisma.token.findUnique({
  //     where: { userId: user.id },
  //   });

  //   if (existingToken) {
  //     return existingToken;
  //   } else {
  //     const accessToken = await this.authService.generateAccessToken(user);
  //     const refreshToken = await this.authService.generateRefreshToken(user);
  //     const tokenData = { accessToken, refreshToken };
  //     return await this.saveToken(tokenData, user);
  //   }
  // }

}
