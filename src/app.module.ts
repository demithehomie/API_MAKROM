import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssinaturaModule } from './assinatura/assinatura.module';
import { AuthModule } from './auth/auth.module';
import { ClienteModule } from './cliente/cliente.module';
import { CobrancaModule } from './cobranca/cobranca.module';
import { PagamentoModule } from './linkdepagamento/pagamento.module';
import { PrismaService } from './prisma/prisma.service';
import { AsaasService } from './services/asaas.service';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    AuthModule,
    AssinaturaModule,
    ClienteModule,
    CobrancaModule,
    ConfigModule,
    PagamentoModule,
    UsuarioModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, AsaasService],
  exports: [PrismaService],
})
export class AppModule {}
