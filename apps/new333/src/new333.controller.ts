import { Controller, Get } from '@nestjs/common';
import { New333Service } from './new333.service';

@Controller()
export class New333Controller {
  constructor(private readonly new333Service: New333Service) {}

  @Get()
  getHello(): string {
    return this.new333Service.getHello();
  }
}
