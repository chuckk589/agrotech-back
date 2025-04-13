import { Collection, Entity, Enum, ManyToMany, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { OS } from '../types/enums';
import { Manual } from './Manual';
import { Simulator } from './Simulator';

@Entity()
export class Version {
  @PrimaryKey()
  id!: number;

  @ManyToOne(() => Simulator)
  simulator!: Simulator;

  @ManyToMany(() => Manual, (manual) => manual.versions)
  manuals = new Collection<Manual>(this);

  @Property()
  versionStr!: string;

  @Property()
  yaDiskPath!: string;

  @Property()
  patchNote!: string;

  @Enum(() => OS)
  os!: OS;

  @Property({ type: 'date', nullable: true })
  atLoad?: Date;

  @Property()
  archiveSize!: number;

  @Property()
  sys_req: string[];

  toString(): string {
    return `${this.os}_${this.versionStr}_${this.simulator.label}`;
  }
  fromFullVersion(fullVersion: string) {
    const [os, versionStr, label] = fullVersion.split('_');
    this.os = os as OS;
    this.versionStr = versionStr;
    this.simulator = { label } as Simulator;
  }
}
