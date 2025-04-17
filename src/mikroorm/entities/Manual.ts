import { Collection, Entity, ManyToMany, PrimaryKey, Property } from '@mikro-orm/core';
import { Simulator } from './Simulator';

@Entity()
export class Manual {
  @PrimaryKey()
  id!: number;

  @ManyToMany(() => Simulator)
  simulators = new Collection<Simulator>(this);

  @Property()
  manualName!: string;

  @Property()
  manualRef!: string;
}
