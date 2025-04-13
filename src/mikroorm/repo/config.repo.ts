import { Injectable } from '@nestjs/common';
import { Config } from '../entities/Config';
import { BaseRepo } from './base.repo';

@Injectable()
export class ConfigRepository extends BaseRepo<Config> {
  get populateKeys(): never[] {
    return [];
  }

  get entityName() {
    return Config;
  }

  async findByName(name: string): Promise<Config | null> {
    const config = await this._em.findOne(Config, { name });
    return config || null;
  }
}
