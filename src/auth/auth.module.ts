import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from 'src/prisma/prisma.service';
import { TokenModule } from 'src/token/token.module';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    PassportModule, 
    TokenModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),],
  providers: [
    AuthService, 
    LocalStrategy, 
    JwtStrategy, 
    PrismaService
  ],
  exports: [
    JwtModule, 
    AuthService, 
  ]
})
export class AuthModule {}
