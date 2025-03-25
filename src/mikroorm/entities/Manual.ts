import { Collection, Entity, ManyToMany, PrimaryKey, Property } from '@mikro-orm/core';
import { Version } from './Version';

@Entity()
export class Manual {
  @PrimaryKey()
  id!: number;

  @ManyToMany(() => Version)
  versions = new Collection<Version>(this);

  @Property()
  manualName!: string;

  @Property()
  manualRef!: string;
}
