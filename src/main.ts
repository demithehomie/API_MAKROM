import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { LogInterceptor } from './interceptors/log.interceptor';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new LogInterceptor());

  app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));

  await app.listen(3000);
}

bootstrap();
