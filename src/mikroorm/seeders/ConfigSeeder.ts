/* eslint "prettier/prettier": ['error', { printWidth: 100 }]*/
import { EntityManager } from '@mikro-orm/postgresql';
import { Seeder } from '@mikro-orm/seeder';

export class ConfigSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    // await em
    //   .getConnection()
    //   .execute(
    //     `INSERT INTO "licensing" ("id", "license_activator_ref", "license_manual_ref", "os") VALUES (1,	'https://disk.yandex.ru/d/uG9RhyLS3rJLCw',	'https://disk.yandex.ru/i/6ZMha5dwurmdgQ',	'LIN') ON CONFLICT ("id") DO UPDATE SET "id" = EXCLUDED."id";`,
    //   );

    // await em
    //   .getConnection()
    //   .execute(
    //     `INSERT INTO "manual" ("id", "manual_name", "manual_ref") VALUES (1,	'Настройка аппаратуры',	'https://disk.yandex.ru/i/VWZZd4sot8Px3Q') ON CONFLICT ("id") DO UPDATE SET "id" = EXCLUDED."id";`,
    //   );

    // await em
    //   .getConnection()
    //   .execute(
    //     `INSERT INTO "simulator" ("id", "label", "first_name", "second_name", "description", "product_key", "product_number", "icon", "main_image", "is_free", "edu_sim", "images") VALUES (1,	'AgroTechSIm',	'AgroTechSim',	'Десктопное ПО',	'Симулятор для полетов',	1,	1,	'images/logoARA.ico',	'/static/cat.png',	'0',	'0',	'/static/cat.png,/static/cat.png,/static/cat.png,/static/cat.png') ON CONFLICT ("id") DO UPDATE SET "id" = EXCLUDED."id";;`,
    //   );
    // await em
    //   .getConnection()
    //   .execute(
    //     `INSERT INTO "version" ("id", "simulator_id", "version_str", "build_ref", "patch_note", "image", "os", "at_load", "archive_size", "sys_req") VALUES (1,	1,	'0.4.11',	'https://disk.yandex.ru/d/oama_mdIY3Ig_Q',	'Версия симулятора EduTechSim от компании Прикладная робототехника. Предназначена для получения базовых навыков пилотирования и обслуживания БПЛА различных типов и размеров',	'images/image.PNG',	'WIN',	NULL,	3,	'2'),	(2,	1,	'0.4.12',	'https://disk.yandex.ru/d/oama_mdIY3Ig_Q',	'Версия симулятора EduTechSim от компании Прикладная робототехника. Предназначена для базовых навыков пилотирования и обслуживания БПЛА различных типов и размеров',	'images/image_qHIHiN2.PNG',	'LIN',	NULL,	3,	'2') ON CONFLICT ("id") DO UPDATE SET "id" = EXCLUDED."id";`,
    //   );

    // await em
    //   .getConnection()
    //   .execute(
    //     `INSERT INTO "manual_versions" ("manual_id", "version_id") VALUES (1, 1) ON CONFLICT ("manual_id", "version_id") DO UPDATE SET "manual_id" = EXCLUDED."manual_id";`,
    //   );

    await em.getConnection().execute(`
      SET session_replication_role = 'replica';
TRUNCATE "manual" CASCADE;
INSERT INTO "manual" ("id", "manual_name", "manual_ref") VALUES
(1,	'Настройка аппаратуры',	'https://disk.yandex.ru/i/VWZZd4sot8Px3Q');

TRUNCATE "manual_versions" CASCADE;
INSERT INTO "manual_versions" ("manual_id", "version_id") VALUES
(1,	1);

TRUNCATE "simulator" CASCADE;
INSERT INTO "simulator" ("id", "label", "first_name", "second_name", "description", "product_key", "product_number", "icon", "main_image", "images", "is_free", "edu_sim") VALUES
(1,	'AgroTechSIm',	'AgroTechSim',	'Десктопное ПО',	'Симулятор для полетов',	1,	1,	'images/logoARA.ico',	'/static/cat.png',	'/static/cat.png,/static/cat.png,/static/cat.png,/static/cat.png',	'0',	'0'),
(2,	'AgroTechSIm2',	'AgroTechSim2',	'Десктопное ПО',	'Симулятор для полетов',	2,	2,	'images/logoARA.ico',	'/static/cat.png',	'/static/cat.png,/static/cat.png,/static/cat.png,/static/cat.png',	'0',	'0'),
(4,	'AgroTechSIm4',	'AgroTechSim4',	'Десктопное ПО',	'Симулятор для полетов',	3,	3,	'images/logoARA.ico',	'/static/cat.png',	'/static/cat.png,/static/cat.png,/static/cat.png,/static/cat.png',	'0',	'0'),
(3,	'AgroTechSIm3',	'AgroTechSim3',	'Десктопное ПО',	'Симулятор для полетов',	4,	4,	'images/logoARA.ico',	'/static/cat.png',	'/static/cat.png,/static/cat.png,/static/cat.png,/static/cat.png',	'0',	'0');

TRUNCATE "version" CASCADE;
INSERT INTO "version" ("id", "simulator_id", "version_str", "build_ref", "patch_note", "image", "os", "at_load", "archive_size", "sys_req") VALUES
(1,	1,	'0.4.11',	'https://disk.yandex.ru/d/oama_mdIY3Ig_Q',	'Версия симулятора EduTechSim от компании Прикладная робототехника. Предназначена для получения базовых навыков пилотирования и обслуживания БПЛА различных типов и размеров',	'images/image.PNG',	'WIN',	NULL,	3,	'2'),
(2,	1,	'0.4.12',	'https://disk.yandex.ru/d/oama_mdIY3Ig_Q',	'Версия симулятора EduTechSim от компании Прикладная робототехника. Предназначена для базовых навыков пилотирования и обслуживания БПЛА различных типов и размеров',	'images/image_qHIHiN2.PNG',	'LIN',	NULL,	3,	'2'),
(3,	2,	'0.4.13',	'https://disk.yandex.ru/d/oama_mdIY3Ig_Q',	'Версия симулятора EduTechSim от компании Прикладная робототехника. Предназначена для получения базовых навыков пилотирования и обслуживания БПЛА различных типов и размеров',	'images/image.PNG',	'WIN',	NULL,	3,	'2'),
(4,	2,	'0.4.14',	'https://disk.yandex.ru/d/oama_mdIY3Ig_Q',	'Версия симулятора EduTechSim от компании Прикладная робототехника. Предназначена для базовых навыков пилотирования и обслуживания БПЛА различных типов и размеров',	'images/image_qHIHiN2.PNG',	'LIN',	NULL,	3,	'2'),
(5,	3,	'0.4.15',	'https://disk.yandex.ru/d/oama_mdIY3Ig_Q',	'Версия симулятора EduTechSim от компании Прикладная робототехника. Предназначена для получения базовых навыков пилотирования и обслуживания БПЛА различных типов и размеров',	'images/image.PNG',	'WIN',	NULL,	3,	'2'),
(6,	3,	'0.4.16',	'https://disk.yandex.ru/d/oama_mdIY3Ig_Q',	'Версия симулятора EduTechSim от компании Прикладная робототехника. Предназначена для базовых навыков пилотирования и обслуживания БПЛА различных типов и размеров',	'images/image_qHIHiN2.PNG',	'LIN',	NULL,	3,	'2'),
(7,	4,	'0.4.17',	'https://disk.yandex.ru/d/oama_mdIY3Ig_Q',	'Версия симулятора EduTechSim от компании Прикладная робототехника. Предназначена для получения базовых навыков пилотирования и обслуживания БПЛА различных типов и размеров',	'images/image.PNG',	'WIN',	NULL,	3,	'2'),
(8,	4,	'0.4.18',	'https://disk.yandex.ru/d/oama_mdIY3Ig_Q',	'Версия симулятора EduTechSim от компании Прикладная робототехника. Предназначена для базовых навыков пилотирования и обслуживания БПЛА различных типов и размеров',	'images/image_qHIHiN2.PNG',	'LIN',	NULL,	3,	'2');
SET session_replication_role = 'origin';`);
  }
}
