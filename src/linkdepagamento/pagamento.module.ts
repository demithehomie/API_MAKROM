import { HttpModule } from '@nestjs/axios/dist';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import { PagamentoController } from './pagamento.controller';

@Module({
  imports: [
    HttpModule,
    ConfigModule
  ],
  controllers: [PagamentoController],
  providers: [
    PrismaService
  ],
  exports: []
})
export class PagamentoModule {}