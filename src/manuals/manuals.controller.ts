import { Controller } from '@nestjs/common';
import { ManualsService } from './manuals.service';

@Controller('manuals')
export class ManualsController {
  constructor(private readonly manualsService: ManualsService) {}

  // @Post()
  // create(@Body() createManualDto: CreateManualDto) {
  //   return this.manualsService.create(createManualDto);
  // }

  // @Get()
  // @ApiResponse({ status: 200, description: 'Retrieve all manuals', isArray: true, type: RetrieveManualDto })
  // findAll(@Query() query: ManualQueryDto) {
  //   return this.manualsService.findAll(query);
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.manualsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateManualDto: UpdateManualDto) {
  //   return this.manualsService.update(+id, updateManualDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.manualsService.remove(+id);
  // }
}
