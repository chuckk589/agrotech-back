import { FindOptions } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { Simulator } from '../entities/Simulator';
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

  async findAll(populate: boolean) {
    const options: FindOptions<Simulator> = {
      populateOrderBy: { versions: { versionStr: 'DESC' } },
    };

    if (populate) {
      options.populate = this.populateKeys as any;
    }

    const promise: Promise<Simulator[]> = this._em.find(this.entityName, {}, options);
    return promise;
  }
}
