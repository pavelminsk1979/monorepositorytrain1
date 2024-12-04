import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class MathController {
  @MessagePattern({ cmd: 'sum1' })
  async accumulate(data: number[]): Promise<number> {
    console.log('333333');
    return data.reduce((a, b) => a + b);
  }
}
