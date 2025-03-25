import { Injectable } from '@nestjs/common';
import { ManualRepository } from 'src/mikroorm/repo/manual.repo';

@Injectable()
export class ManualsService {
  constructor(private readonly manualRepo: ManualRepository) {}

  // async findAll(query: ManualQueryDto) {
  //   const manuals = await this.manualRepo.findWithQuery(query);

  //   return manuals.map((manual) => new RetrieveManualDto(manual));
  // }
}
