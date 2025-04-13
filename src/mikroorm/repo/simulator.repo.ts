import { FindOptions } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { Simulator } from '../entities/Simulator';
import { OS } from '../types/enums';
import { NestedKeys } from '../types/populate';
import { BaseRepo } from './base.repo';

@Injectable()
export class SimulatorRepository extends BaseRepo<Simulator> {
  get populateKeys(): NestedKeys<Simulator>[] {
    return ['versions.manuals'];
  }

  get entityName() {
    return Simulator;
  }

  async findAllFiltered(filters: { os?: OS } = {}, populate: boolean = false) {
    const options: FindOptions<Simulator> = {
      populateOrderBy: { versions: { versionStr: 'DESC' } },
    };

    if (filters.os) {
      options.populateWhere = { versions: { os: filters.os } };
    }
    if (populate) {
      options.populate = this.populateKeys as any;
    }

    const promise: Simulator[] = await this._em.find(this.entityName, {}, options);
    return promise;
  }
}
