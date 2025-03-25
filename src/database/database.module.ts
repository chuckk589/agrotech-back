import { Global, Module } from '@nestjs/common';
import * as repos from 'src/mikroorm/repo';
@Global()
@Module({
  controllers: [],
  providers: [...Object.values(repos)],
  exports: [...Object.values(repos)],
})
export class DatabaseModule {}
