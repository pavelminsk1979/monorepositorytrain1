import { Test, TestingModule } from '@nestjs/testing';
import { NewnameController } from './newname.controller';
import { NewnameService } from './newname.service';

describe('NewnameController', () => {
  let newnameController: NewnameController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NewnameController],
      providers: [NewnameService],
    }).compile();

    newnameController = app.get<NewnameController>(NewnameController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(newnameController.getHello()).toBe('Hello World!');
    });
  });
});
