import {APP_GUARD} from '@nestjs/core';
import { MiddlewareConsumer, Module, NestModule, forwardRef } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ThrottlerGuard } from '@nestjs/throttler/dist/throttler.guard';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailingModule } from './mailing/mailing.module';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
//import { } from 'middlewares/i'
import { ClienteModule } from './cliente/client.module';
import { CobrancaModule } from './cobranca/cobranca.module';
import { AssinaturaModule } from './assinatura/assinatura.module';
import { IonicCorsMiddleware } from './middlewares/ionic-cors.middleware';
import { PrismaService } from './prisma/prisma.service';
import { PDFModule } from './pdf/pdf.module';


//import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';

@Module({
  imports: [
    PDFModule,
    AssinaturaModule,
    ClienteModule,
    CobrancaModule,
    MailingModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
   // ThrottlerModule.forRoot({
     // ttl:60,
     // limit:100
    //  }),
    forwardRef(() => UserModule),
    forwardRef(() => AuthModule),
    MailerModule.forRoot({
      transport:  'smtps://user@domain.com:pass@smtp.domain.com',
   
      template: {
        dir: process.cwd() + '/templates/',
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, IonicCorsMiddleware //, {
    //provide: APP_GUARD,
   // useClass: ThrottlerGuard
 // }
],
  exports: [AppService]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(IonicCorsMiddleware).forRoutes('*');
  }
}
