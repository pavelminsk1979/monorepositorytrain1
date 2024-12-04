import { Test, TestingModule } from '@nestjs/testing';
import { NewthirdController } from './newthird.controller';
import { NewthirdService } from './newthird.service';

describe('NewthirdController', () => {
  let newthirdController: NewthirdController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NewthirdController],
      providers: [NewthirdService],
    }).compile();

    newthirdController = app.get<NewthirdController>(NewthirdController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(newthirdController.getHello()).toBe('Hello World!');
    });
  });
});
