import { HttpModule } from '@nestjs/axios/dist';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import { CobrancaController } from './cobranca.controller';

@Module({
  imports: [
    HttpModule,
    ConfigModule
  ],
  controllers: [CobrancaController],
  providers: [
    PrismaService
  ],
  exports: []
})
export class CobrancaModule {}