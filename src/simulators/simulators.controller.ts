import { Controller, Get, Query } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { RetrieveSimulatorDto } from './dto/retrieve-simulator.dto';
import { SimulatorsService } from './simulators.service';

@Controller('simulators')
export class SimulatorsController {
  constructor(private readonly simulatorsService: SimulatorsService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Get all simulators', type: RetrieveSimulatorDto, isArray: true })
  findAll(@Query('os') os: string) {
    return this.simulatorsService.findAll(os);
  }
}
