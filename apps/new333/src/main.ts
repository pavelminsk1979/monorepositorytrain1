import { NestFactory } from '@nestjs/core';
import { New333Module } from './new333.module';

async function bootstrap() {
  const app = await NestFactory.create(New333Module);
  await app.listen(process.env.port ?? 3000);
}

bootstrap();
