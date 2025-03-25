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
}
