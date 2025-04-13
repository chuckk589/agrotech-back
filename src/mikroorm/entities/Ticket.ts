import { Entity, PrimaryKey, Property } from '@mikro-orm/postgresql';

@Entity()
export class Ticket {
  @PrimaryKey()
  id!: number;

  @Property()
  subject: string;

  @Property({ nullable: true })
  attachments?: string[];

  @Property()
  applicant: string;

  @Property()
  contacts: string;
}
