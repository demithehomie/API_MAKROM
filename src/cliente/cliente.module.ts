import { HttpModule } from '@nestjs/axios/dist';
import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/auth/auth.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClienteController } from './cliente.controller';

@Module({
  imports: [
    HttpModule,
    ConfigModule
  ],
  controllers: [ClienteController],
  providers: [
    PrismaService
  ],
  exports: []
})
export class ClienteModule {}