import { NestFactory } from '@nestjs/core';
import { NewthirdModule } from './newthird.module';

async function bootstrap() {
  const app = await NestFactory.create(NewthirdModule);
  await app.listen(process.env.port ?? 3001);
}

bootstrap();
