/* eslint "prettier/prettier": 'error', { printWidth: 100 }*/
import { EntityManager } from '@mikro-orm/postgresql';
import { Seeder } from '@mikro-orm/seeder';
import fs from 'fs';
export class ConfigSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    const sql = fs.readFileSync('src/mikroorm/seeders/export_202504161128.sql', 'utf8');

    await em.getConnection().execute(sql);
  }
}
