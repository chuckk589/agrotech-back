import { Version } from '../../mikroorm/entities/Version';
import { OS } from '../../mikroorm/types/enums';

export class RetrieveVersionDto {
  constructor(version: Version) {
    this.id = version.id;
    this.simulator = version.simulator.label;
    this.versionStr = version.versionStr;
    this.patchNote = version.patchNote;
    this.os = version.os;
    this.atLoad = version.atLoad;
    this.archiveSize = version.archiveSize;
    this.sys_req = version.sys_req;
    this.fullName = version.toString();
  }
  id: number;
  simulator: string;
  versionStr: string;
  patchNote: string;
  os: OS;
  atLoad: Date;
  archiveSize: number;
  sys_req: string[];
  fullName: string;
}
