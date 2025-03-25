import { Entity, Enum, PrimaryKey, Property } from '@mikro-orm/core';
import { OS } from '../types/enums';

@Entity()
export class Licensing {
  @PrimaryKey()
  id!: number;

  @Property()
  licenseActivatorRef!: string;

  @Property()
  licenseManualRef!: string;

  @Enum(() => OS)
  os!: OS;

  toString(): string {
    return this.os;
  }
}
