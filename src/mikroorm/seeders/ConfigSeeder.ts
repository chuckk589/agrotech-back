// /* eslint "prettier/prettier": ['error', { printWidth: 100 }]*/
// import { EntityManager } from '@mikro-orm/core';
// import { Seeder } from '@mikro-orm/seeder';

// export class ConfigSeeder extends Seeder {
//   async run(em: EntityManager): Promise<void> {
//     const values = [
//       `("VERSION", "0.0.1", "Текущая версbия приложения", NULL, "0")`,
//       `("QUESTION_TIME", "4-10", "Время на ответ на вопрос мин - макс, в секундах, через дефис", NULL, "0")`,
//       `("HOSTNAME", "http://195.161.114.112:3000", "Адрес сервера, используется при генерации расширения", NULL, "0")`,
//       `("OPENAI_API_KEY", "OPENAI_API_KEY", "Ключ OpenAI API", NULL, "1")`,
//       `("OPENAI_MODEL", "gpt-4-vision-preview", "Модель OpenAI", NULL, "0")`,
//       `("OPENAI_REPEATS", "3", "Количество повторений запроса к OpenAI", NULL, "0")`,
//       `("BOT_TOKEN", "1863509702:AAGBObPLJYd17777K26x0s1vsG8fva3NCag", "Api токен бота", NULL, "1")`,
//       `("TG_CHANNEL_LINK", "https://t.me/joinchat/AAAAAF", "Ссылка на канал в телеграме", NULL, "0")`,
//       `("ADMIN_PASSWORD", "$2a$12$rCAMTFMaj0zOct4rTtkugeicSt1xqpwK/09LOZZivCtVV01HfKAoq", "Пароль администратора", NULL, "1")`,
//     ];
//     await em
//       .getConnection()
//       .execute(
//         `INSERT INTO config (name, value, description, category, is_secret) VALUES ${values.join(
//           ',',
//         )} ON DUPLICATE KEY UPDATE name=name;`,
//       );
//     await em.getConnection().execute(
//       `INSERT INTO permission (created_at, updated_at, name, display_name) VALUES
//         (now(), now(),'quiz_edit_own', 'Редактирование своих тестов'),
//         (now(), now(),'quiz_view_state', 'Доступ к истории ответов')
//         ON DUPLICATE KEY UPDATE name=name;`,
//     );
//   }
// }
