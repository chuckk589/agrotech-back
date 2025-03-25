import { Module } from '@nestjs/common';
import { LicensingService } from './licensing.service';
import { LicensingController } from './licensing.controller';

@Module({
  controllers: [LicensingController],
  providers: [LicensingService],
})
export class LicensingModule {}
