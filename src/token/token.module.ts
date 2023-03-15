import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { TokenController } from './token.controller';

@Module({
  imports: [
    UsuarioModule
  ],
  controllers: [TokenController],
  providers: [
    PrismaService
  ],
  exports: [PrismaService]
})
export class TokenModule {}