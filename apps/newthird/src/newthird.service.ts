import { Injectable } from '@nestjs/common';

@Injectable()
export class NewthirdService {
  getHello(): string {
    return 'Hello World!';
  }
}
