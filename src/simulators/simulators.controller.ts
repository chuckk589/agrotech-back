import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { RetrieveSimulatorDto } from './dto/retrieve-simulator.dto';
import { SimulatorsService } from './simulators.service';

@Controller('simulators')
export class SimulatorsController {
  constructor(private readonly simulatorsService: SimulatorsService) {}

  // @Post()
  // create(@Body() createSimulatorDto: CreateSimulatorDto) {
  //   return this.simulatorsService.create(createSimulatorDto);
  // }

  @Get()
  @ApiResponse({ status: 200, description: 'Get all simulators', type: RetrieveSimulatorDto, isArray: true })
  findAll() {
    return this.simulatorsService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Get one simulator', type: RetrieveSimulatorDto })
  findOne(@Param('id') id: string) {
    return this.simulatorsService.findOne(+id);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateSimulatorDto: UpdateSimulatorDto,
  // ) {
  //   return this.simulatorsService.update(+id, updateSimulatorDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.simulatorsService.remove(+id);
  // }
}
