import { Injectable } from '@nestjs/common';

@Injectable()
export class New333Service {
  getHello(): string {
    return 'Hello World!';
  }
}
