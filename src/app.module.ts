import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import ORMOptionsProvider from './configs/mikro-orm.config';
import { DatabaseModule } from './database/database.module';
import { LicensingModule } from './licensing/licensing.module';
import { ManualsModule } from './manuals/manuals.module';
import { SimulatorsModule } from './simulators/simulators.module';
import { VersionsModule } from './versions/versions.module';
import { NewsModule } from './news/news.module';
import { TicketsModule } from './tickets/tickets.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    SimulatorsModule,
    VersionsModule,
    ManualsModule,
    DatabaseModule,
    LicensingModule,
    MikroOrmModule.forRoot(ORMOptionsProvider),
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', '/public/'), serveRoot: '/static' }),
    NewsModule,
    TicketsModule,
    ConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
