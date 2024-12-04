import { Test, TestingModule } from '@nestjs/testing';
import { New333Controller } from './new333.controller';
import { New333Service } from './new333.service';

describe('New333Controller', () => {
  let new333Controller: New333Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [New333Controller],
      providers: [New333Service],
    }).compile();

    new333Controller = app.get<New333Controller>(New333Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(new333Controller.getHello()).toBe('Hello World!');
    });
  });
});
