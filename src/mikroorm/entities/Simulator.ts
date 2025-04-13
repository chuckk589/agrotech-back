import { Collection, Entity, OneToMany, PrimaryKey, Property } from '@mikro-orm/core';
import { Version } from './Version';

@Entity()
export class Simulator {
  @PrimaryKey()
  id!: number;

  @Property()
  label!: string;

  @Property()
  firstName!: string;

  @Property()
  secondName!: string;

  @Property()
  description!: string;

  @Property()
  featureNumber!: number;

  @Property()
  productNumber!: number;

  @Property()
  icon!: string;

  @Property()
  mainImage!: string;

  @Property({ nullable: true })
  images!: string[];

  @Property({ type: 'boolean', default: false })
  isFree!: boolean;

  @Property({ type: 'boolean', default: false })
  eduSim!: boolean;

  @OneToMany(() => Version, (version) => version.simulator)
  versions = new Collection<Version>(this);

  toString(): string {
    return this.label;
  }
}
