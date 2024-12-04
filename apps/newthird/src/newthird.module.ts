import { Module } from '@nestjs/common';
import { NewthirdController } from './newthird.controller';
import { NewthirdService } from './newthird.service';

@Module({
  imports: [],
  controllers: [NewthirdController],
  providers: [NewthirdService],
})
export class NewthirdModule {}
