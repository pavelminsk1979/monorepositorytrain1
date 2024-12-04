import { Module } from '@nestjs/common';
import { AppControllerMain } from './app.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NEW_NAME_SERVICE',
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
    ]),
  ],
  controllers: [AppControllerMain],
  providers: [],
})
export class AppModule {}
