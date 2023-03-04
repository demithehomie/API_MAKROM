import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  
  app.use(cors({
    origin: 'http://localhost:8100' //url do seu app ionic
  }));

  await app.listen(3000);
}
bootstrap();
