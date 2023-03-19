import { HttpModule } from '@nestjs/axios/dist';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import { AssinaturaController } from './assinatura.controller';

@Module({
  imports: [
    HttpModule,
    ConfigModule
  ],
  controllers: [AssinaturaController],
  providers: [
    PrismaService
  ],
  exports: []
})
export class AssinaturaModule {}