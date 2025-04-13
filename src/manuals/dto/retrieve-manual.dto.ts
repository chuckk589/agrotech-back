import { Manual } from '../../mikroorm/entities/Manual';

export class RetrieveManualDto {
  constructor(manual: Manual) {
    this.id = manual.id;
    this.manualName = manual.manualName;
    this.manualRef = manual.manualRef;
  }
  id: number;
  manualName: string;
  manualRef: string;
  size: number;
}
