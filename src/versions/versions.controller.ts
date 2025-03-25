import { Controller, Get, Query } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { RetrieveVersionDto } from './dto/retrieve-version.dto';
import { VersionQueryDto } from './dto/version-query.dto';
import { VersionsService } from './versions.service';
@Controller('versions')
export class VersionsController {
  constructor(private readonly versionsService: VersionsService) {}

  // @Post()
  // create(@Body() createVersionDto: CreateVersionDto) {
  //   return this.versionsService.create(createVersionDto);
  // }

  @Get()
  @ApiResponse({ status: 200, description: 'Retrieve all versions', isArray: true, type: RetrieveVersionDto })
  findAll(@Query() query: VersionQueryDto) {
    return this.versionsService.findAll(query);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.versionsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateVersionDto: UpdateVersionDto) {
  //   return this.versionsService.update(+id, updateVersionDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.versionsService.remove(+id);
  // }
}
