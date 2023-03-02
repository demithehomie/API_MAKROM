import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { TokenController } from './token.controller';

@Module({
  imports: [
    AuthModule,
    UsuarioModule
  ],
  controllers: [TokenController],
  providers: [
    PrismaService
  ],
  exports: [PrismaService]
})
export class TokenModule {}