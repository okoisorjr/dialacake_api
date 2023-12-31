import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: ['http://localhost:9000'],
  });
  app.use(cookieParser());
  await app.listen(3000);
}
bootstrap();
