import { Controller, Get, Query } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { ConfigService } from './config.service';

@Controller('config')
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}

  @Get('theme')
  @ApiResponse({ status: 200, description: 'Returns active theme', type: String })
  findTheme() {
    return this.configService.getTheme();
  }

  @Get('download-link')
  @ApiResponse({ status: 200, description: 'Returns ya download link for requested ya disk local path', type: String })
  findDownloadLink(@Query('fullVersion') path: string) {
    return this.configService.getDownloadLink(path);
  }
}
