import { Injectable } from '@nestjs/common';

@Injectable()
export class NewnameService {
  getHello(): string {
    return 'Hello World22!';
  }
}
