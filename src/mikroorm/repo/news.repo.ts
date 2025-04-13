import { FilterQuery, FindOptions } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';
import { RetrieveNewsQuery } from 'src/news/query/retrieve-news.query';
import { News } from '../entities/News';
import { BaseRepo } from './base.repo';

@Injectable()
export class NewsRepository extends BaseRepo<News> {
  get populateKeys(): never[] {
    return [];
  }
  get entityName() {
    return News;
  }
  async findWithQuery(filters: RetrieveNewsQuery) {
    const findOptions: FindOptions<News> = {
      limit: filters.limit,
      orderBy: { date: 'DESC' },
    };
    const where: FilterQuery<News> = {
      ...(filters.type && { type: filters.type }),
    };

    if (filters.range) {
      //filters.range comes in days
      const date = new Date();
      date.setDate(date.getDate() - filters.range);
      where.date = { $gte: date };
    }
    const news = await this._em.find(this.entityName, where, findOptions);
    return news;
  }
}
