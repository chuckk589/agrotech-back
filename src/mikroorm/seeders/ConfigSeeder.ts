/* eslint "prettier/prettier": ['error', { printWidth: 100 }]*/
import { EntityManager } from '@mikro-orm/postgresql';
import { Seeder } from '@mikro-orm/seeder';

export class ConfigSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    // const values = [
    //   `("VERSION", "0.0.1", "Текущая версbия приложения", NULL, "0")`,
    //   `("QUESTION_TIME", "4-10", "Время на ответ на вопрос мин - макс, в секундах, через дефис", NULL, "0")`,
    //   `("HOSTNAME", "http://195.161.114.112:3000", "Адрес сервера, используется при генерации расширения", NULL, "0")`,
    //   `("OPENAI_API_KEY", "OPENAI_API_KEY", "Ключ OpenAI API", NULL, "1")`,
    //   `("OPENAI_MODEL", "gpt-4-vision-preview", "Модель OpenAI", NULL, "0")`,
    //   `("OPENAI_REPEATS", "3", "Количество повторений запроса к OpenAI", NULL, "0")`,
    //   `("BOT_TOKEN", "1863509702:AAGBObPLJYd17777K26x0s1vsG8fva3NCag", "Api токен бота", NULL, "1")`,
    //   `("TG_CHANNEL_LINK", "https://t.me/joinchat/AAAAAF", "Ссылка на канал в телеграме", NULL, "0")`,
    //   `("ADMIN_PASSWORD", "$2a$12$rCAMTFMaj0zOct4rTtkugeicSt1xqpwK/09LOZZivCtVV01HfKAoq", "Пароль администратора", NULL, "1")`,
    // ];
    // await em
    //   .getConnection()
    //   .execute(
    //     `INSERT INTO config (name, value, description, category, is_secret) VALUES ${values.join(
    //       ',',
    //     )} ON DUPLICATE KEY UPDATE name=name;`,
    //   );
    // await em.getConnection().execute(
    //   `INSERT INTO permission (created_at, updated_at, name, display_name) VALUES
    //     (now(), now(),'quiz_edit_own', 'Редактирование своих тестов'),
    //     (now(), now(),'quiz_view_state', 'Доступ к истории ответов')
    //     ON DUPLICATE KEY UPDATE name=name;`,
    // );
    await em
      .getConnection()
      .execute(
        `INSERT INTO "licensing" ("id", "license_activator_ref", "license_manual_ref", "os") VALUES (1,	'https://disk.yandex.ru/d/uG9RhyLS3rJLCw',	'https://disk.yandex.ru/i/6ZMha5dwurmdgQ',	'LIN');`,
      );

    await em
      .getConnection()
      .execute(
        `INSERT INTO "manual" ("id", "manual_name", "manual_ref") VALUES (1,	'Настройка аппаратуры',	'https://disk.yandex.ru/i/VWZZd4sot8Px3Q');`,
      );
    await em
      .getConnection()
      .execute(`INSERT INTO "manual_versions" ("manual_id", "version_id") VALUES (1, 1);`);
    await em
      .getConnection()
      .execute(
        `INSERT INTO "simulator" ("id", "label", "first_name", "second_name", "description", "product_key", "product_number", "icon", "main_image", "is_free", "edu_sim", "images") VALUES (1,	'AgroTechSIm',	'AgroTechSim',	'Десктопное ПО',	'Симулятор для полетов',	1,	1,	'images/logoARA.ico',	'/static/cat.png',	'0',	'0',	'/static/cat.png,/static/cat.png,/static/cat.png,/static/cat.png');`,
      );
    await em
      .getConnection()
      .execute(
        `INSERT INTO "version" ("id", "simulator_id", "version_str", "build_ref", "patch_note", "image", "os", "at_load", "archive_size", "sys_req") VALUES (1,	1,	'0.4.11',	'https://disk.yandex.ru/d/oama_mdIY3Ig_Q',	'Версия симулятора EduTechSim от компании Прикладная робототехника. Предназначена для получения базовых навыков пилотирования и обслуживания БПЛА различных типов и размеров',	'images/image.PNG',	'WIN',	NULL,	3,	'2'),	(2,	1,	'0.4.12',	'https://disk.yandex.ru/d/oama_mdIY3Ig_Q',	'Версия симулятора EduTechSim от компании Прикладная робототехника. Предназначена для базовых навыков пилотирования и обслуживания БПЛА различных типов и размеров',	'images/image_qHIHiN2.PNG',	'LIN',	NULL,	3,	'2');`,
      );
  }
}
