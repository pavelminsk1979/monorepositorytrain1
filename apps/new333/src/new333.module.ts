import { Module } from '@nestjs/common';
import { New333Controller } from './new333.controller';
import { New333Service } from './new333.service';

@Module({
  imports: [],
  controllers: [New333Controller],
  providers: [New333Service],
})
export class New333Module {}
