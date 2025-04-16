import { Manual } from '../../mikroorm/entities/Manual';

export class RetrieveManualDto {
  constructor(manual: Manual) {
    this.id = manual.id;
    this.manualName = manual.manualName;
  }
  id: number;
  manualName: string;
  size: number;
}
