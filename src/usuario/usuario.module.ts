import { forwardRef, Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsuarioController } from './usuario.controller';

@Module({
  imports: [],
  controllers: [UsuarioController],
  providers: [PrismaService],
  exports: [ ]
})
export class UsuarioModule {}