import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';
import { join } from 'path';
import { ConfigRepository, ManualRepository, VersionRepository } from 'src/mikroorm/repo';

@Injectable()
export class ConfigService {
  constructor(
    private readonly configRepository: ConfigRepository,
    private readonly versionRepo: VersionRepository,
    private readonly manualRepo: ManualRepository,
  ) {}

  private async resolveYandexLink(path: string) {
    const baseUrl = 'https://cloud-api.yandex.net/v1/disk/resources/download?path=';

    const localYandexPath = join(process.env.YANDEX_DISK_ROOT_PATH + ':', path).replace(/\\/g, '/');

    const url = `${baseUrl}${localYandexPath}`;
    const headers = {
      Authorization: `OAuth ${process.env.YANDEX_OAUTH_TOKEN}`,
    };
    const response = await axios.get(url, { headers }).catch((error) => {
      throw new HttpException(error.response.data, error.response.status);
    });

    return response.data.href;
  }
  async getManualDownloadLink(manual_id: number) {
    const manual = await this.manualRepo.findById(manual_id, false);
    if (!manual) {
      throw new HttpException('Manual not found', HttpStatus.NOT_FOUND);
    }
    const url = await this.resolveYandexLink(manual.yaDiskPath);

    return url;
  }
  async getDownloadLink(fullVersion: string) {
    const version = await this.versionRepo.findWithQuery({ fullVersion });

    if (version.length !== 1) {
      throw new HttpException('Multiple versions found!', HttpStatus.NOT_FOUND);
    }

    const downloadLink = await this.resolveYandexLink(version[0].yaDiskPath);

    return downloadLink;
  }
  async getTheme() {
    const config = await this.configRepository.findByName('theme');
    if (config) {
      return config.value;
    }
  }
}
