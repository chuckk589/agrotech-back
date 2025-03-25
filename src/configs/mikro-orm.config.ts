import { MikroOrmModuleOptions } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import 'dotenv/config';

const MikroORMOptions: MikroOrmModuleOptions<PostgreSqlDriver> = {
  allowGlobalContext: true,
  ...(process.env.NODE_ENV === 'dev'
    ? { debug: false, logger: console.log.bind(console) }
    : {}),
  entities: ['./dist/mikroorm/entities/'],
  entitiesTs: ['./src/mikroorm/entities/'],
  clientUrl:
    process.env.NODE_ENV === 'dev'
      ? process.env.DB_URL_DEV
      : process.env.NODE_ENV === 'test'
        ? process.env.DB_URL_TEST
        : process.env.DB_URL,
  seeder: {
    path: './dist/src/modules/mikroorm/seeders', // path to the folder with seeders
    pathTs: './src/modules/mikroorm/seeders', // path to the folder with TS seeders (if used, we should put path to compiled files in `path`)
    defaultSeeder: 'ConfigSeeder', // default seeder class name
    glob: '!(*.d).{js,ts}', // how to match seeder files (all .js and .ts files, but not .d.ts)
    emit: 'ts', // seeder generation mode
    fileName: (className: string) => className, // seeder file naming convention
  },
  driver: PostgreSqlDriver,
};

export default MikroORMOptions;
