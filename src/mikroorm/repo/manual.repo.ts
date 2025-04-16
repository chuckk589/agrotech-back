import { Injectable } from '@nestjs/common';
import { Manual } from '../entities/Manual';
import { BaseRepo } from './base.repo';

@Injectable()
export class ManualRepository extends BaseRepo<Manual> {
  get populateKeys() {
    return [];
  }

  get entityName() {
    return Manual;
  }
}
