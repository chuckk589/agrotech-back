import { Controller, Get, Query } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { LicensingQueryDto } from './dto/licensing-query.dto';
import { RetrieveLicenseDto } from './dto/retrieve-license.dto';
import { LicensingService } from './licensing.service';

@Controller('licensing')
export class LicensingController {
  constructor(private readonly licensingService: LicensingService) {}

  // @Post()
  // create(@Body() createLicensingDto: CreateLicensingDto) {
  //   return this.licensingService.create(createLicensingDto);
  // }

  @Get()
  @ApiResponse({ status: 200, description: 'Retrieve all licenses', type: RetrieveLicenseDto, isArray: true })
  findAll(@Query() query: LicensingQueryDto) {
    return this.licensingService.findAll(query);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.licensingService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateLicensingDto: UpdateLicensingDto) {
  //   return this.licensingService.update(+id, updateLicensingDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.licensingService.remove(+id);
  // }
}
