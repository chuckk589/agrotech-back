import { Test, TestingModule } from '@nestjs/testing';
import { LicensingController } from './licensing.controller';
import { LicensingService } from './licensing.service';

describe('LicensingController', () => {
  let controller: LicensingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LicensingController],
      providers: [LicensingService],
    }).compile();

    controller = module.get<LicensingController>(LicensingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
