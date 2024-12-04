import { Controller, Get } from '@nestjs/common';
import { NewthirdService } from './newthird.service';

@Controller()
export class NewthirdController {
  constructor(private readonly newthirdService: NewthirdService) {}

  @Get()
  getHello(): string {
    return this.newthirdService.getHello();
  }
}
