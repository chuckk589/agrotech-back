import { Injectable } from '@nestjs/common';
import { NewsRepository } from 'src/mikroorm/repo';
import { RetrieveNewsDto } from './dto/retrieve-news.dto';
import { RetrieveNewsQuery } from './query/retrieve-news.query';

@Injectable()
export class NewsService {
  constructor(private readonly newsRepository: NewsRepository) {}
  // async findOne(id: number) {
  //   const news = await this.newsRepository.findById(id, false);

  //   return new RetrieveNewsDto(news);
  // }
  async findAll(retrieveNewsQuery: RetrieveNewsQuery) {
    const news = await this.newsRepository.findWithQuery(retrieveNewsQuery);

    return news.map((news) => new RetrieveNewsDto(news));
  }
}
