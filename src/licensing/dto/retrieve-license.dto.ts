import { Licensing } from 'src/mikroorm/entities/Licensing';
import { OS } from 'src/mikroorm/types/enums';

export class RetrieveLicenseDto {
  constructor(license: Licensing) {
    this.id = license.id;
    this.os = license.os;
    this.licenseActivatorRef = license.licenseActivatorRef;
    this.licenseManualRef = license.licenseManualRef;
  }
  id: number;
  os: OS;
  licenseActivatorRef: string;
  licenseManualRef: string;
}
