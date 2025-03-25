import { Module } from '@nestjs/common';
import { ManualsService } from './manuals.service';
import { ManualsController } from './manuals.controller';

@Module({
  controllers: [ManualsController],
  providers: [ManualsService],
})
export class ManualsModule {}
