import { Entity, PrimaryKey, Property } from '@mikro-orm/postgresql';

@Entity()
export class Config {
  @PrimaryKey()
  id!: number;

  @Property()
  name: string;

  @Property()
  value: string;
}
