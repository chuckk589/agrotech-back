import { Injectable } from '@nestjs/common';
import { VersionRepository } from 'src/mikroorm/repo/version.repo';
import { RetrieveVersionDto } from './dto/retrieve-version.dto';
import { VersionQueryDto } from './dto/version-query.dto';

@Injectable()
export class VersionsService {
  constructor(private readonly versionRepository: VersionRepository) {}

  async findAll(query: VersionQueryDto): Promise<RetrieveVersionDto[]> {
    const versions = await this.versionRepository.findWithQuery(query);
    return versions.map((version) => new RetrieveVersionDto(version));
  }
}
