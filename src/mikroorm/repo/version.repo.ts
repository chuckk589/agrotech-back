import { QBFilterQuery } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { VersionQueryDto } from 'src/versions/dto/version-query.dto';
import { Version } from '../entities/Version';
import { BaseRepo } from './base.repo';

@Injectable()
export class VersionRepository extends BaseRepo<Version> {
  async findWithQuery(filters: VersionQueryDto) {
    const where: QBFilterQuery<Version> = {};
    const _populateKeys = this.populateKeys;

    if (filters?.sim_id) {
      where.simulator = { id: { $eq: filters.sim_id } };
      _populateKeys.push('simulator');
    }

    if (filters?.os) {
      where.os = { $eq: filters.os };
    }

    if (filters?.fullVersion) {
      const version = new Version();
      version.fromFullVersion(filters.fullVersion);

      where.simulator = { label: { $eq: version.simulator.label } };
      where.versionStr = { $eq: version.versionStr };
      where.os = { $eq: version.os };
    }
    const versions = await this._em.find(Version, where, { populate: _populateKeys });

    return versions;
  }

  get populateKeys() {
    return [];
  }

  get entityName() {
    return Version;
  }
}
