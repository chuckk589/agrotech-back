import { News, NewsType } from 'src/mikroorm/entities/News';

export class RetrieveNewsDto {
  constructor(partial: News) {
    this.id = partial.id;
    this.title = partial.title;
    this.type = partial.type;
    this.date = partial.date;
    this.html = partial.html;
    this.sliderMedia = partial.sliderMedia;
    this.preview = partial.preview;
  }
  id: number;
  title: string;
  type: NewsType;
  date: Date;
  html: string;
  sliderMedia?: string[];
  preview?: string;
}
