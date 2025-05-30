INSERT INTO public.config (id,name,value) VALUES
	 (1,'theme','droneverse'),
	 (2,'backup_theme','droneverse');
INSERT INTO public.manual (id,manual_name,ya_disk_path) VALUES
	 (1,'Настройка аппаратуры','https://disk.yandex.ru/i/VWZZd4sot8Px3Q'),
	 (2,'Настройка аппаратуры','https://disk.yandex.ru/i/VWZZd4sot8Px3Q'),
	 (3,'Настройка аппаратуры','https://disk.yandex.ru/i/VWZZd4sot8Px3Q'),
	 (4,'Настройка аппаратуры','https://disk.yandex.ru/i/VWZZd4sot8Px3Q'),
	 (5,'Настройка аппаратуры','https://disk.yandex.ru/i/VWZZd4sot8Px3Q'),
	 (6,'Настройка аппаратуры','https://disk.yandex.ru/i/VWZZd4sot8Px3Q');

INSERT INTO public.news (id,title,preview,"type","date",html,slider_media) VALUES
	 (1,'Презентация новой версии на выставке АГРО ЭКСПО',NULL,'event'::public.news_type,'2025-04-09','<section>
        <h3>Вышла новая версия агродрона: инновации для эффективного сельского хозяйства</h3>
        <span>Компания название компании с гордостью представляет свою новую разработку — агродрон название модели
          версии 2.0. Это обновление призвано совершить переворот в области мониторинга и обработки сельскохозяйственных
          угодий, открывая перед фермерами и агропредприятиями новые горизонты для повышения урожайности и снижения
          затрат.</span>
        <figure>
          <img src="https://picsum.photos/200/300" alt="Агродрон" />
          <img src="https://picsum.photos/200/300" alt="Агродрон" />
        </figure>
      </section>
      <section>
        <h3>Что нового в версии 2.0?</h3>
        <ul>
          <li>Улучшенная автономность: время полета увеличено на 30%, что дает возможность охватывать большие площади
            без
            частой подзарядки</li>
          <li>Новые функции: добавлены режимы автоматического планирования маршрута и интеграция с системами
            управления фермами, что позволяет оптимизировать процессы обработки полей</li>
          <li>Расширенные возможности анализа: новые алгоритмы обработки данных обеспечивают более точные прогнозы
            урожайности и состояния почвы</li>
          <li>Улучшенная защита от неблагоприятных погодных условий: дрон теперь устойчив к дождю и сильному ветру,
            что позволяет проводить мониторинг в любых условиях</li>
          <li>Интуитивно понятный интерфейс: обновленное приложение для управления дроном стало еще более удобным и
            простым в использовании, что позволяет фермерам сосредоточиться на своих задачах, а не на
            технологиях</li>
          <li>Поддержка новых датчиков: дрон теперь совместим с различными типами сенсоров, включая тепловизоры и
            мультиспектральные камеры, что позволяет проводить более глубокий анализ состояния полей</li>
        </ul>
        <h4>Новая версия агродрона открывает перед фермерами множество преимуществ:</h4>
        <ul>
          <li>Снижение затрат на обработку полей за счет автоматизации процессов</li>
          <li>Увеличение урожайности благодаря точному мониторингу состояния растений и почвы</li>
          <li>Снижение воздействия на окружающую среду за счет оптимизации использования ресурсов</li>
          <li>Упрощение процессов управления фермой благодаря интеграции с существующими системами</li>
        </ul>
        <h4>Цена и доступность</h4>
        <span>Агродрон  версии 2.0 уже доступен для предзаказа на официальном сайте компании.
          Первые
          поставки
          начнутся с . Стоимость базовой комплектации составляет цена, однако для ранних заказчиков
          предусмотрены
          специальные скидки.
          «Мы стремимся сделать передовые технологии доступными для каждого фермера, — говорит имя представителя
          компании, должность. — Новая версия агродрона — это не просто инструмент, это шаг к устойчивому и
          эффективному
          сельскому хозяйству будущего».
        </span>
      </section>',NULL),
	 (2,'Презентация новой версии на выставке АГРО ЭКСПО',NULL,'update'::public.news_type,'2025-04-09','<section>
        <h3>Вышла новая версия агродрона: инновации для эффективного сельского хозяйства</h3>
        <span>Компания название компании с гордостью представляет свою новую разработку — агродрон название модели
          версии 2.0. Это обновление призвано совершить переворот в области мониторинга и обработки сельскохозяйственных
          угодий, открывая перед фермерами и агропредприятиями новые горизонты для повышения урожайности и снижения
          затрат.</span>
        <figure>
          <img src="https://picsum.photos/200/300" alt="Агродрон" />
          <img src="https://picsum.photos/200/300" alt="Агродрон" />
        </figure>
      </section>
      <section>
        <h3>Что нового в версии 2.0?</h3>
        <ul>
          <li>Улучшенная автономность: время полета увеличено на 30%, что дает возможность охватывать большие площади
            без
            частой подзарядки</li>
          <li>Новые функции: добавлены режимы автоматического планирования маршрута и интеграция с системами
            управления фермами, что позволяет оптимизировать процессы обработки полей</li>
          <li>Расширенные возможности анализа: новые алгоритмы обработки данных обеспечивают более точные прогнозы
            урожайности и состояния почвы</li>
          <li>Улучшенная защита от неблагоприятных погодных условий: дрон теперь устойчив к дождю и сильному ветру,
            что позволяет проводить мониторинг в любых условиях</li>
          <li>Интуитивно понятный интерфейс: обновленное приложение для управления дроном стало еще более удобным и
            простым в использовании, что позволяет фермерам сосредоточиться на своих задачах, а не на
            технологиях</li>
          <li>Поддержка новых датчиков: дрон теперь совместим с различными типами сенсоров, включая тепловизоры и
            мультиспектральные камеры, что позволяет проводить более глубокий анализ состояния полей</li>
        </ul>
        <h4>Новая версия агродрона открывает перед фермерами множество преимуществ:</h4>
        <ul>
          <li>Снижение затрат на обработку полей за счет автоматизации процессов</li>
          <li>Увеличение урожайности благодаря точному мониторингу состояния растений и почвы</li>
          <li>Снижение воздействия на окружающую среду за счет оптимизации использования ресурсов</li>
          <li>Упрощение процессов управления фермой благодаря интеграции с существующими системами</li>
        </ul>
        <h4>Цена и доступность</h4>
        <span>Агродрон  версии 2.0 уже доступен для предзаказа на официальном сайте компании.
          Первые
          поставки
          начнутся с . Стоимость базовой комплектации составляет цена, однако для ранних заказчиков
          предусмотрены
          специальные скидки.
          «Мы стремимся сделать передовые технологии доступными для каждого фермера, — говорит имя представителя
          компании, должность. — Новая версия агродрона — это не просто инструмент, это шаг к устойчивому и
          эффективному
          сельскому хозяйству будущего».
        </span>
      </section>',NULL),
	 (3,'Презентация новой версии на выставке АГРО ЭКСПО','https://picsum.photos/200/300','update'::public.news_type,'2025-04-09','<section>
        <h3>Вышла новая версия агродрона: инновации для эффективного сельского хозяйства</h3>
        <span>Компания название компании с гордостью представляет свою новую разработку — агродрон название модели
          версии 2.0. Это обновление призвано совершить переворот в области мониторинга и обработки сельскохозяйственных
          угодий, открывая перед фермерами и агропредприятиями новые горизонты для повышения урожайности и снижения
          затрат.</span>
        <figure>
          <img src="https://picsum.photos/200/300" alt="Агродрон" />
          <img src="https://picsum.photos/200/300" alt="Агродрон" />
        </figure>
      </section>
      <section>
        <h3>Что нового в версии 2.0?</h3>
        <ul>
          <li>Улучшенная автономность: время полета увеличено на 30%, что дает возможность охватывать большие площади
            без
            частой подзарядки</li>
          <li>Новые функции: добавлены режимы автоматического планирования маршрута и интеграция с системами
            управления фермами, что позволяет оптимизировать процессы обработки полей</li>
          <li>Расширенные возможности анализа: новые алгоритмы обработки данных обеспечивают более точные прогнозы
            урожайности и состояния почвы</li>
          <li>Улучшенная защита от неблагоприятных погодных условий: дрон теперь устойчив к дождю и сильному ветру,
            что позволяет проводить мониторинг в любых условиях</li>
          <li>Интуитивно понятный интерфейс: обновленное приложение для управления дроном стало еще более удобным и
            простым в использовании, что позволяет фермерам сосредоточиться на своих задачах, а не на
            технологиях</li>
          <li>Поддержка новых датчиков: дрон теперь совместим с различными типами сенсоров, включая тепловизоры и
            мультиспектральные камеры, что позволяет проводить более глубокий анализ состояния полей</li>
        </ul>
        <h4>Новая версия агродрона открывает перед фермерами множество преимуществ:</h4>
        <ul>
          <li>Снижение затрат на обработку полей за счет автоматизации процессов</li>
          <li>Увеличение урожайности благодаря точному мониторингу состояния растений и почвы</li>
          <li>Снижение воздействия на окружающую среду за счет оптимизации использования ресурсов</li>
          <li>Упрощение процессов управления фермой благодаря интеграции с существующими системами</li>
        </ul>
        <h4>Цена и доступность</h4>
        <span>Агродрон  версии 2.0 уже доступен для предзаказа на официальном сайте компании.
          Первые
          поставки
          начнутся с . Стоимость базовой комплектации составляет цена, однако для ранних заказчиков
          предусмотрены
          специальные скидки.
          «Мы стремимся сделать передовые технологии доступными для каждого фермера, — говорит имя представителя
          компании, должность. — Новая версия агродрона — это не просто инструмент, это шаг к устойчивому и
          эффективному
          сельскому хозяйству будущего».
        </span>
      </section>','{https://picsum.photos/200/300?random=1,https://picsum.photos/200/300?random=2,https://picsum.photos/200/300?random=3}'),
	 (4,'Презентация новой версии на выставке АГРО ЭКСПО','https://picsum.photos/200/300','update'::public.news_type,'2025-04-09','<section>
        <h3>Вышла новая версия агродрона: инновации для эффективного сельского хозяйства</h3>
        <span>Компания название компании с гордостью представляет свою новую разработку — агродрон название модели
          версии 2.0. Это обновление призвано совершить переворот в области мониторинга и обработки сельскохозяйственных
          угодий, открывая перед фермерами и агропредприятиями новые горизонты для повышения урожайности и снижения
          затрат.</span>
        <figure>
          <img src="https://picsum.photos/200/300" alt="Агродрон" />
          <img src="https://picsum.photos/200/300" alt="Агродрон" />
        </figure>
      </section>
      <section>
        <h3>Что нового в версии 2.0?</h3>
        <ul>
          <li>Улучшенная автономность: время полета увеличено на 30%, что дает возможность охватывать большие площади
            без
            частой подзарядки</li>
          <li>Новые функции: добавлены режимы автоматического планирования маршрута и интеграция с системами
            управления фермами, что позволяет оптимизировать процессы обработки полей</li>
          <li>Расширенные возможности анализа: новые алгоритмы обработки данных обеспечивают более точные прогнозы
            урожайности и состояния почвы</li>
          <li>Улучшенная защита от неблагоприятных погодных условий: дрон теперь устойчив к дождю и сильному ветру,
            что позволяет проводить мониторинг в любых условиях</li>
          <li>Интуитивно понятный интерфейс: обновленное приложение для управления дроном стало еще более удобным и
            простым в использовании, что позволяет фермерам сосредоточиться на своих задачах, а не на
            технологиях</li>
          <li>Поддержка новых датчиков: дрон теперь совместим с различными типами сенсоров, включая тепловизоры и
            мультиспектральные камеры, что позволяет проводить более глубокий анализ состояния полей</li>
        </ul>
        <h4>Новая версия агродрона открывает перед фермерами множество преимуществ:</h4>
        <ul>
          <li>Снижение затрат на обработку полей за счет автоматизации процессов</li>
          <li>Увеличение урожайности благодаря точному мониторингу состояния растений и почвы</li>
          <li>Снижение воздействия на окружающую среду за счет оптимизации использования ресурсов</li>
          <li>Упрощение процессов управления фермой благодаря интеграции с существующими системами</li>
        </ul>
        <h4>Цена и доступность</h4>
        <span>Агродрон  версии 2.0 уже доступен для предзаказа на официальном сайте компании.
          Первые
          поставки
          начнутся с . Стоимость базовой комплектации составляет цена, однако для ранних заказчиков
          предусмотрены
          специальные скидки.
          «Мы стремимся сделать передовые технологии доступными для каждого фермера, — говорит имя представителя
          компании, должность. — Новая версия агродрона — это не просто инструмент, это шаг к устойчивому и
          эффективному
          сельскому хозяйству будущего».
        </span>
      </section>','{https://picsum.photos/200/300?random=1,https://picsum.photos/200/300?random=2,https://picsum.photos/200/300?random=3}');
INSERT INTO public.simulator (id,"label",first_name,second_name,description,feature_number,product_number,icon,main_image,images,is_free,edu_sim) VALUES
	 (2,'AgroTechSIm2','AgroTechSim2','Десктопное ПО','Симулятор для полетов',2,2,'images/logoARA.ico','/static/test.png','{/static/test.png,/static/test1.png,/static/test2.png}',false,false),
	 (4,'AgroTechSIm4','AgroTechSim4','Десктопное ПО','Симулятор для полетов',3,3,'images/logoARA.ico','/static/test.png','{/static/test.png,/static/test1.png,/static/test2.png}',false,false),
	 (3,'AgroTechSIm3','AgroTechSim3','Десктопное ПО','Симулятор для полетов',4,7,'images/logoARA.ico','/static/test.png','{/static/test.png,/static/test1.png,/static/test2.png}',false,false),
	 (1,'AgroTechSim','AgroTechSim','Десктопное ПО','Универсальный симулятор для выполнения задач FPV пилотирования, программирования с помощью API, настройки и автономного выполнения заданий',8,10,'images/logoARA.ico','/static/test.png','{/static/test.png,/static/test1.png,/static/test2.png}',false,false);
INSERT INTO public."version" (id,simulator_id,version_str,ya_disk_path,patch_note,os,at_load,archive_size,sys_req) VALUES
	 (1,1,'0.4.11','AgroTechSimDesktop051.zip','Версия симулятора EduTechSim от компании Прикладная робототехника. Предназначена для получения базовых навыков пилотирования и обслуживания БПЛА различных типов и размеров','WIN',NULL,3,'{"Операционная система: Windows 10 (64-bit)","Процессор: Intel Core i5-4460 или AMD FX-6300","Оперативная память: 8 ГБ RAM","Видеокарта: NVIDIA GeForce GTX 960 или AMD Radeon R7 260X с 2 ГБ видеопамяти","Место на диске: 50 ГБ (зависит от игры)","DirectX: Версия 11"}'),
	 (2,1,'0.4.12','AgroTechSimDesktop051.zip','Версия симулятора EduTechSim от компании Прикладная робототехника. Предназначена для базовых навыков пилотирования и обслуживания БПЛА различных типов и размеров','LIN',NULL,3,'{"Операционная система: Windows 10 (64-bit)","Процессор: Intel Core i5-4460 или AMD FX-6300","Оперативная память: 8 ГБ RAM","Видеокарта: NVIDIA GeForce GTX 960 или AMD Radeon R7 260X с 2 ГБ видеопамяти","Место на диске: 50 ГБ (зависит от игры)","DirectX: Версия 11"}'),
	 (3,2,'0.4.13','AgroTechSimDesktop051.zip','Версия симулятора EduTechSim от компании Прикладная робототехника. Предназначена для получения базовых навыков пилотирования и обслуживания БПЛА различных типов и размеров','WIN',NULL,3,'{"Операционная система: Windows 10 (64-bit)","Процессор: Intel Core i5-4460 или AMD FX-6300","Оперативная память: 8 ГБ RAM","Видеокарта: NVIDIA GeForce GTX 960 или AMD Radeon R7 260X с 2 ГБ видеопамяти","Место на диске: 50 ГБ (зависит от игры)","DirectX: Версия 11"}'),
	 (4,2,'0.4.14','AgroTechSimDesktop051.zip','Версия симулятора EduTechSim от компании Прикладная робототехника. Предназначена для базовых навыков пилотирования и обслуживания БПЛА различных типов и размеров','LIN',NULL,3,'{"Операционная система: Windows 10 (64-bit)","Процессор: Intel Core i5-4460 или AMD FX-6300","Оперативная память: 8 ГБ RAM","Видеокарта: NVIDIA GeForce GTX 960 или AMD Radeon R7 260X с 2 ГБ видеопамяти","Место на диске: 50 ГБ (зависит от игры)","DirectX: Версия 11"}'),
	 (9,2,'0.4.133','AgroTechSimDesktop051.zip','Версия симулятора EduTechSim от компании Прикладная робототехника. Предназначена для базовых навыков пилотирования и обслуживания БПЛА различных типов и размеров','WIN',NULL,3,'{"Операционная система: Windows 10 (64-bit)","Процессор: Intel Core i5-4460 или AMD FX-6300","Оперативная память: 8 ГБ RAM","Видеокарта: NVIDIA GeForce GTX 960 или AMD Radeon R7 260X с 2 ГБ видеопамяти","Место на диске: 50 ГБ (зависит от игры)","DirectX: Версия 11"}'),
	 (5,3,'0.4.15','AgroTechSimDesktop051.zip','Версия симулятора EduTechSim от компании Прикладная робототехника. Предназначена для получения базовых навыков пилотирования и обслуживания БПЛА различных типов и размеров','WIN',NULL,3,'{"Операционная система: Windows 10 (64-bit)","Процессор: Intel Core i5-4460 или AMD FX-6300","Оперативная память: 8 ГБ RAM","Видеокарта: NVIDIA GeForce GTX 960 или AMD Radeon R7 260X с 2 ГБ видеопамяти","Место на диске: 50 ГБ (зависит от игры)","DirectX: Версия 11"}'),
	 (6,3,'0.4.16','AgroTechSimDesktop051.zip','Версия симулятора EduTechSim от компании Прикладная робототехника. Предназначена для базовых навыков пилотирования и обслуживания БПЛА различных типов и размеров','LIN',NULL,3,'{"Операционная система: Windows 10 (64-bit)","Процессор: Intel Core i5-4460 или AMD FX-6300","Оперативная память: 8 ГБ RAM","Видеокарта: NVIDIA GeForce GTX 960 или AMD Radeon R7 260X с 2 ГБ видеопамяти","Место на диске: 50 ГБ (зависит от игры)","DirectX: Версия 11"}'),
	 (7,4,'0.4.17','AgroTechSimDesktop051.zip','Версия симулятора EduTechSim от компании Прикладная робототехника. Предназначена для получения базовых навыков пилотирования и обслуживания БПЛА различных типов и размеров','WIN',NULL,3,'{"Операционная система: Windows 10 (64-bit)","Процессор: Intel Core i5-4460 или AMD FX-6300","Оперативная память: 8 ГБ RAM","Видеокарта: NVIDIA GeForce GTX 960 или AMD Radeon R7 260X с 2 ГБ видеопамяти","Место на диске: 50 ГБ (зависит от игры)","DirectX: Версия 11"}'),
	 (10,1,'0.5.2','AgroTechSimDesktop052.zip','Новая версия симулятора 0.5.2
Включает много обновлений
очень удобно','WIN',NULL,3,'{"Операционная система: Windows 10 (64-bit)","Процессор: Intel Core i5-4460 или AMD FX-6300","Оперативная память: 8 ГБ RAM","Видеокарта: NVIDIA GeForce GTX 960 или AMD Radeon R7 260X с 2 ГБ видеопамяти","Место на диске: 50 ГБ (зависит от игры)","DirectX: Версия 11"}'),
	 (8,4,'0.4.18','AgroTechSimDesktop051.zip','Версия симулятора EduTechSim от компании Прикладная робототехника. Предназначена для базовых навыков пилотирования и обслуживания БПЛА различных типов и размеров','LIN',NULL,3,'{"Операционная система: Windows 10 (64-bit)","Процессор: Intel Core i5-4460 или AMD FX-6300","Оперативная память: 8 ГБ RAM","Видеокарта: NVIDIA GeForce GTX 960 или AMD Radeon R7 260X с 2 ГБ видеопамяти","Место на диске: 50 ГБ (зависит от игры)","DirectX: Версия 11"}');
INSERT INTO public.manual_simulators (manual_id,simulator_id) VALUES
	 (1,1),
	 (2,1),
	 (3,1),
	 (4,1),
	 (5,1),
	 (6,1),
   (1,2),
	 (2,3),
	 (3,4);