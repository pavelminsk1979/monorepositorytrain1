import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from '../../monorepositorytrain1/src/app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [
          'amqps://olbqasdy:cBx2x02ArvGFnxwmBDm8-Fr-F2VnDrzK@sparrow.rmq.cloudamqp.com/olbqasdy',
        ],
        queue: 'cats_queue',
        queueOptions: {
          durable: false,
        },
      },
    },
  );
  console.log('start2');
  await app.listen();
}

bootstrap();
