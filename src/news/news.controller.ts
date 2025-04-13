import { Controller, Get, Query } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { RetrieveNewsDto } from './dto/retrieve-news.dto';
import { NewsService } from './news.service';
import { RetrieveNewsQuery } from './query/retrieve-news.query';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Get all news', type: RetrieveNewsDto, isArray: true })
  findAll(@Query() retrieveNewsQuery: RetrieveNewsQuery) {
    return this.newsService.findAll(retrieveNewsQuery);
  }

  // @Get(':id')
  // @ApiResponse({ status: 200, description: 'Get one entry', type: RetrieveNewsDto, isArray: false })
  // findOne(@Param('id') id: string) {
  //   return this.newsService.findOne(+id);
  // }
}
