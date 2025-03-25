import { Module } from '@nestjs/common';
import { SimulatorsService } from './simulators.service';
import { SimulatorsController } from './simulators.controller';

@Module({
  controllers: [SimulatorsController],
  providers: [SimulatorsService],
})
export class SimulatorsModule {}
