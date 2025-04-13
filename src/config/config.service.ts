import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';
import { join } from 'path';
import { ConfigRepository, VersionRepository } from 'src/mikroorm/repo';

@Injectable()
export class ConfigService {
  constructor(
    private readonly configRepository: ConfigRepository,
    private readonly versionRepo: VersionRepository,
  ) {}

  async getDownloadLink(fullVersion: string) {
    const version = await this.versionRepo.findWithQuery({ fullVersion });

    if (version.length !== 1) {
      throw new HttpException('Multiple versions found!', HttpStatus.NOT_FOUND);
    }
    const baseUrl = 'https://cloud-api.yandex.net/v1/disk/resources/download?path=';
    const localYandexPath = join('disk:', version[0].yaDiskPath).replace(/\\/g, '/');
    const url = `${baseUrl}${localYandexPath}`;

    const headers = {
      Authorization: `OAuth ${process.env.YANDEX_OAUTH_TOKEN}`,
    };
    const response = await axios.get(url, { headers }).catch((error) => {
      throw new HttpException(error.response.data, error.response.status);
    });
    const downloadLink = response.data.href;
    return downloadLink;
  }
  async getTheme() {
    const config = await this.configRepository.findByName('theme');
    if (config) {
      return config.value;
    }
  }
}
