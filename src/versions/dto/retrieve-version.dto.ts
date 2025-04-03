import { RetrieveManualDto } from '../../manuals/dto/retrieve-manual.dto';
import { Version } from '../../mikroorm/entities/Version';
import { OS } from '../../mikroorm/types/enums';

export class RetrieveVersionDto {
  constructor(version: Version) {
    this.id = version.id;
    this.simulator = version.simulator.label;
    this.versionStr = version.versionStr;
    this.buildRef = version.buildRef;
    this.patchNote = version.patchNote;
    this.image = version.image;
    this.os = version.os;
    this.atLoad = version.atLoad;
    this.archiveSize = version.archiveSize;
    this.manuals = version.manuals.map((manual) => new RetrieveManualDto(manual));
    this.sys_req = version.sys_req.split(';');
    this.fullName = version.toString();
  }
  id: number;
  simulator: string;
  versionStr: string;
  buildRef: string;
  patchNote: string;
  image: string;
  os: OS;
  atLoad: Date;
  archiveSize: number;
  manuals: RetrieveManualDto[];
  sys_req: string[];
  fullName: string;
}
