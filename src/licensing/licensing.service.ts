import { Injectable } from '@nestjs/common';
import { LicensingRepository } from 'src/mikroorm/repo';
import { LicensingQueryDto } from './dto/licensing-query.dto';
import { RetrieveLicenseDto } from './dto/retrieve-license.dto';

@Injectable()
export class LicensingService {
  constructor(private readonly LicensingRepo: LicensingRepository) {}

  async findAll(query: LicensingQueryDto) {
    const licenses = await this.LicensingRepo.findWithQuery(query);

    return licenses.map((license) => new RetrieveLicenseDto(license));
  }
}
