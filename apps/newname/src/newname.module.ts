import { Module } from '@nestjs/common';
import { MathController } from './newname.controller';

@Module({
  imports: [],
  controllers: [MathController],
  providers: [],
})
export class AppModule {}
