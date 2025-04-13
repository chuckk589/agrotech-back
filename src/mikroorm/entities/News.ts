import { Entity, Enum, PrimaryKey, Property } from '@mikro-orm/postgresql';

export enum NewsType {
  EVENT = 'event',
  UPDATE = 'update',
}

@Entity()
export class News {
  @PrimaryKey()
  id!: number;

  @Property()
  title: string;

  @Property({ comment: 'The URL of the image to be displayed in the preview, otherwise backdrop is used', nullable: true })
  preview: string;

  @Enum({ items: () => NewsType, nativeEnumName: 'news_type' })
  type: NewsType;

  @Property({ type: 'date' })
  date: Date;

  @Property({ type: 'text' })
  html: string;

  @Property({ comment: 'The URLs of the images to be displayed in the slider', nullable: true })
  sliderMedia: string[];
}
