import { Test, TestingModule } from '@nestjs/testing';
import { SimulatorsController } from './simulators.controller';
import { SimulatorsService } from './simulators.service';

describe('SimulatorsController', () => {
  let controller: SimulatorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SimulatorsController],
      providers: [SimulatorsService],
    }).compile();

    controller = module.get<SimulatorsController>(SimulatorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
