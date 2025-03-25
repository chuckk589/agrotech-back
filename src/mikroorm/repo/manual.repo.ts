import { Injectable } from '@nestjs/common';
import { Manual } from '../entities/Manual';
import { BaseRepo } from './base.repo';

@Injectable()
export class ManualRepository extends BaseRepo<Manual> {
  // async findWithQuery(filters: ManualQueryDto) {
  //   const where: QBFilterQuery<Manual> = {};
  //   const _populateKeys = this.populateKeys;

  //   if (filters?.sim_id) {
  //     where.simulators = { id: { $eq: filters.sim_id } };
  //     _populateKeys.push('simulator');
  //   }

  //   if (filters?.os) {
  //     where.os = { $eq: filters.os };
  //   }
  //   const manuals = await this._em.find(Manual, where, { populate: _populateKeys });
  //   return manuals;
  // }

  get populateKeys() {
    return [];
  }

  get entityName() {
    return Manual;
  }
}
