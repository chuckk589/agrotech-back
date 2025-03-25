import { QBFilterQuery } from '@mikro-orm/core';
import { Injectable } from '@nestjs/common';
import { LicensingQueryDto } from 'src/licensing/dto/licensing-query.dto';
import { Licensing } from '../entities/Licensing';
import { BaseRepo } from './base.repo';

@Injectable()
export class LicensingRepository extends BaseRepo<Licensing> {
  async findWithQuery(filters: LicensingQueryDto) {
    const where: QBFilterQuery<Licensing> = {};

    if (filters?.os) {
      where.os = { $eq: filters.os };
    }
    const licenses = await this._em.find(Licensing, where, { populate: this.populateKeys });

    return licenses;
  }

  get populateKeys() {
    return [];
  }

  get entityName() {
    return Licensing;
  }
}
