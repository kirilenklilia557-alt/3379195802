import { TextbookExercise } from '../types/textbook';

/**
 * Додаткові автентичні завдання з підручника «Алгебра 8 клас» (Н. А. Тарасенкова та ін., 2025)
 * Розділ 1: номери 15, 17, 18, 19, 21, 22, 23, 24, 26, 27, 30, 31, 32, 33, 34 (оновлений), 35, 36, 40, 41, 42, 43, 45, 46, 47, 48, 49
 */
export const TARASENKOVA_1_TO_49_ADDITIONS: TextbookExercise[] = [
  // --- Номер 15. Дослідження графіка функції (мал. 1) ---
  {
    id: 'tar-15-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 15',
    baseNumber: 15,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '15. На малюнку 1 зображено графік деякої функції. Скориставшись графіком, знайдіть: 1) значення y, якщо x = –4; –1; 1; 6; 7; 2) значення x, за якого y = –3. Чи належать графіку цієї функції точки з координатами: (0; 2); (2; 0); (–3; 5,5); (–5; –3)?',
    questionPrompt: 'Знайдіть за графіком (мал. 1) значення функції y, якщо x = 1:',
    expression: 'y(1) за графіком на малюнку 1',
    options: [
      { id: 'opt-1', label: 'А', text: 'y = 1', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'y = 0', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'y = 2', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'y = –1', isCorrect: false }
    ],
    explanation: 'За малюнком 1 графік функції проходить через точку (1; 1), тому при x = 1 маємо y = 1.',
    essence: 'Читання графіка функції та знаходження значень аргументу й функції.'
  },

  // --- Номер 17. Побудова графіка лінійної функції ---
  {
    id: 'tar-17-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 17',
    baseNumber: 17,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    questionPrompt: 'Побудуйте графік функції y = –2x + 4. Знайдіть точку перетину графіка з віссю ординат (OY):',
    expression: 'y = –2x + 4, перетин з OY',
    options: [
      { id: 'opt-1', label: 'А', text: '(0; 4)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(4; 0)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(0; –2)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '(2; 0)', isCorrect: false }
    ],
    explanation: 'При x = 0 отримуємо y = –2 · 0 + 4 = 4. Точка перетину з віссю ординат: (0; 4).',
    essence: 'Властивості лінійної функції y = kx + b.'
  },

  // --- Номер 18. Побудова графіка функції ---
  {
    id: 'tar-18-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 18',
    baseNumber: 18,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    questionPrompt: 'Знайдіть нуль функції y = 5x – 10 (значення x, при якому y = 0):',
    expression: 'y = 5x – 10',
    options: [
      { id: 'opt-1', label: 'А', text: 'x = 2', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x = –2', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x = 5', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x = 10', isCorrect: false }
    ],
    explanation: 'Розв\'язуємо рівняння: 5x – 10 = 0 => 5x = 10 => x = 2.',
    essence: 'Нуль лінійної функції.'
  },

  // --- Номер 19. Заміна зірочки ---
  {
    id: 'tar-19-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 19',
    baseNumber: 19,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '19. Замініть * таким числом, щоб утворилось правильне твердження: 1) пряма у = -1/3 х + 4 проходить через точку (*; 2); 2) пряма у = 4х – 3 відтинає на осі ординат відрізок завдовжки * од.; 3) пряма у = 0,5х – 4 відтинає на осі абсцис відрізок завдовжки * од.; 4) пряма у = 2х + 3 паралельна прямій у = *х + 1.',
    questionPrompt: 'Замініть * числом, щоб пряма у = –1/3 х + 4 проходила через точку (*; 2):',
    expression: 'y = –1/3 x + 4, y = 2',
    options: [
      { id: 'opt-1', label: 'А', text: '6', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '–6', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '3', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '2', isCorrect: false }
    ],
    explanation: 'Підставляємо y = 2: 2 = –1/3 x + 4 => 1/3 x = 2 => x = 6. Отже, * = 6.',
    essence: 'Належність точки графіку лінійної функції.'
  },

  // --- Номер 21. Точки перетину з осями ---
  {
    id: 'tar-21-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 21',
    baseNumber: 21,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '21. Знайдіть точки перетину графіка функції у = –0,5х + 3 з осями координат і побудуйте графік цієї функції. Якої довжини відрізки відтинає на осях координат ця пряма? Якого виду трикутник обмежує ця пряма разом з осями координат?',
    questionPrompt: 'Знайдіть точки перетину графіка функції у = –0,5х + 3 з осями координат:',
    expression: 'y = –0,5x + 3',
    options: [
      { id: 'opt-1', label: 'А', text: '(0; 3) та (6; 0)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(0; 3) та (3; 0)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(0; –3) та (6; 0)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '(0; 6) та (3; 0)', isCorrect: false }
    ],
    explanation: 'З віссю OY (x = 0): y = 3 => (0; 3). З віссю OX (y = 0): –0,5x + 3 = 0 => 0,5x = 3 => x = 6 => (6; 0). Відтинає катети 3 і 6 од., трикутник прямокутний.',
    essence: 'Перетин графіка лінійної функції з осями координат.'
  },

  // --- Номер 22. Коефіцієнт прямої пропорційності ---
  {
    id: 'tar-22-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 22',
    baseNumber: 22,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    questionPrompt: 'Графік функції y = kx проходить через точку A(–1; –2). Знайдіть значення k:',
    expression: 'y = kx, A(–1; –2)',
    options: [
      { id: 'opt-1', label: 'А', text: 'k = 2', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'k = –2', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'k = 0,5', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'k = 1', isCorrect: false }
    ],
    explanation: 'Підставляємо x = –1, y = –2 у формулу y = kx: –2 = k · (–1) => k = 2.',
    essence: 'Визначення коефіцієнта прямої пропорційності.'
  },

  // --- Номер 23. Графік y = ax - 1 ---
  {
    id: 'tar-23-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 23',
    baseNumber: 23,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    questionPrompt: 'Графік функції y = ax – 1 проходить через точку B(–1; –2/5). Знайдіть значення a:',
    expression: 'y = ax – 1, B(–1; –0,4)',
    options: [
      { id: 'opt-1', label: 'А', text: 'a = –0,6', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'a = 0,6', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'a = –1,4', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'a = 1,4', isCorrect: false }
    ],
    explanation: '–2/5 = a · (–1) – 1 => –0,4 = –a – 1 => a = –1 + 0,4 = –0,6.',
    essence: 'Знаходження коефіцієнта прямої за заданою точкою.'
  },

  // --- Номер 24. Графік через дві точки ---
  {
    id: 'tar-24-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 24',
    baseNumber: 24,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    questionPrompt: 'Графік функції y = ax + b проходить через точки A(–1; –7) і B(0; –2). Знайдіть значення a і b:',
    expression: 'y = ax + b, A(–1; –7), B(0; –2)',
    options: [
      { id: 'opt-1', label: 'А', text: 'a = 5, b = –2', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'a = –5, b = –2', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'a = 2, b = –5', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'a = 5, b = 2', isCorrect: false }
    ],
    explanation: 'З точки B(0; –2): b = –2. З точки A(–1; –7): –7 = a(–1) – 2 => –a = –5 => a = 5.',
    essence: 'Складання рівняння прямої за двома точками.'
  },

  // --- Номер 26. Рівносильність рівнянь ---
  {
    id: 'tar-26-1',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 26',
    baseNumber: 26,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    questionPrompt: 'Чи є рівносильними рівняння 9x – 1 = 8x + 7 і 9x – 8x = 1 + 7:',
    expression: '9x – 1 = 8x + 7 та 9x – 8x = 1 + 7',
    options: [
      { id: 'opt-1', label: 'А', text: 'Так, обидва мають єдиний корінь x = 8', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Ні, друге має корінь x = 7', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Ні, перше не має коренів', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Ні, вони мають різні ОДЗ', isCorrect: false }
    ],
    explanation: 'Перенесення доданків з однієї частини рівняння в іншу з протилежним знаком дає рівносильне рівняння. В обох рівняннях x = 8.',
    essence: 'Рівносильні рівняння та правила перенесення доданків.'
  },

  // --- Номер 27. Графічне розв\'язування системи ---
  {
    id: 'tar-27-1',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 27',
    baseNumber: 27,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    questionPrompt: 'Розв’яжіть систему рівнянь: { x + y = 2, 2x – y = 1 }:',
    expression: '{ x + y = 2; 2x – y = 1 }',
    options: [
      { id: 'opt-1', label: 'А', text: '(1; 1)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(2; 0)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(0; 2)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '(–1; 3)', isCorrect: false }
    ],
    explanation: 'Додаємо два рівняння: (x + y) + (2x – y) = 2 + 1 => 3x = 3 => x = 1. Тоді y = 2 – 1 = 1. Розв\'язок (1; 1).',
    essence: 'Графічний та аналітичний розв\'язок лінійної системи.'
  },

  // --- Номер 30. Задача про деталі трьох фірм ---
  {
    id: 'tar-30-1',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 30',
    baseNumber: 30,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '30. Три фірми виготовили 125 деталей. Кількість деталей, виготовлених першою і другою фірмами, відноситься як 6 : 5, а третя виготовила на 19 деталей менше від другої. Скільки деталей виготовила кожна фірма?',
    questionPrompt: 'Скільки деталей виготовила кожна фірма відповідно (І, ІІ, ІІІ):',
    expression: 'I + II + III = 125, I : II = 6 : 5, III = II – 19',
    options: [
      { id: 'opt-1', label: 'А', text: '54 деталі, 45 деталей, 26 деталей', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '60 деталей, 50 деталей, 15 деталей', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '50 деталей, 45 деталей, 30 деталей', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '52 деталі, 43 деталі, 30 деталей', isCorrect: false }
    ],
    explanation: 'Нехай коефіцієнт пропорційності дорівнює x. Тоді перша фірма виготовила 6x деталей, друга — 5x, а третя — (5x – 19). Рівняння: 6x + 5x + (5x – 19) = 125 => 16x = 144 => x = 9. I = 6·9 = 54, II = 5·9 = 45, III = 45 – 19 = 26.',
    essence: 'Складання лінійного рівняння за сюжетною задачею на пропорційний поділ.'
  },

  // --- Номер 31. Задача про варення і банки ---
  {
    id: 'tar-31-1',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 31',
    baseNumber: 31,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '31. Мама наварила 10 л малинового варення. У неї є банки по 0,5 л і 0,75 л. Скільки банок їй потрібно взяти, щоб розфасувати все варення, за умови, що банки заповнені вщерть? Скільки є способів, щоб розкласти в банки все варення?',
    questionPrompt: 'Скільки існує способів розкласти 10 л варення в банки по 0,5 л і 0,75 л вщерть (в цілих банках):',
    expression: '0,5x + 0,75y = 10 (x, y ≥ 0, цілі)',
    options: [
      { id: 'opt-1', label: 'А', text: '7 способів', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '3 способи', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '5 способів', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '1 спосіб', isCorrect: false }
    ],
    explanation: 'Помножимо на 4: 2x + 3y = 40. 3y має бути парним, отже y — парне. Оскільки y ≤ 13: y = 0 (x=20), y = 2 (x=17), y = 4 (x=14), y = 6 (x=11), y = 8 (x=8), y = 10 (x=5), y = 12 (x=2). Усього 7 способів.',
    essence: 'Діофантове рівняння в цілих невід\'ємних числах.'
  },

  // --- Номер 32. Задача про склади ---
  {
    id: 'tar-32-1',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 32',
    baseNumber: 32,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '32. На перший склад завезли товару на 50 тис. грн більше, аніж на другий. 80 % вартості товару на першому складі на 130 тис. грн більше за 60 % вартості товару на другому складі. Яка загальна вартість товару, завезеного на два склади разом?',
    questionPrompt: 'Яка вартість товару на складах (I склад, II склад та разом):',
    expression: 'x = y + 50; 0,8x – 0,6y = 130',
    options: [
      { id: 'opt-1', label: 'А', text: '500 тис. грн і 450 тис. грн (разом 950 тис. грн)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '400 тис. грн і 350 тис. грн (разом 750 тис. грн)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '550 тис. грн і 500 тис. грн (разом 1050 тис. грн)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '450 тис. грн і 400 тис. грн (разом 850 тис. грн)', isCorrect: false }
    ],
    explanation: '0,8(y + 50) – 0,6y = 130 => 0,2y + 40 = 130 => 0,2y = 90 => y = 450 тис. грн. Тоді x = 450 + 50 = 500 тис. грн. Разом: 500 + 450 = 950 тис. грн.',
    essence: 'Система лінійних рівнянь з відсотковими співвідношеннями.'
  },

  // --- Номер 33. Задача про вік спортсменів-боксерів ---
  {
    id: 'tar-33-1',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 33',
    baseNumber: 33,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '33. Середній вік двох спортсменів-боксерів — 22,5 року. 30 % різниці їхнього віку становлять 1,5 року. Скільки років кожному спортсменові?',
    questionPrompt: 'Скільки років кожному спортсменові:',
    expression: '(x + y)/2 = 22,5; 0,3(x – y) = 1,5',
    options: [
      { id: 'opt-1', label: 'А', text: '25 років і 20 років', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '24 роки і 21 рік', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '26 років і 19 років', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '23 роки і 22 роки', isCorrect: false }
    ],
    explanation: 'Сума їхнього віку: x + y = 45. Різниця: x – y = 1,5 : 0,3 = 5. Додаємо: 2x = 50 => x = 25 років, y = 20 років.',
    essence: 'Складання системи рівнянь за середнім арифметичним і відсотком від різниці.'
  },

  // --- Номер 34. Моторний човен бригади (точний текст з книги) ---
  {
    id: 'tar-34-new',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 34',
    baseNumber: 34,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '34. Моторний човен риболовецької бригади 2 год плив за течією річки, а потім повернув назад і плив ще 1 год проти течії, загалом подолавши 50 км. Наступного дня маршрут змінився. Спочатку бригада годину рухалась проти течії річки, а потім пів години за течією, і загалом вони подолали 20 км. Знайдіть власну швидкість човна і швидкість течії річки.',
    questionPrompt: 'Знайдіть власну швидкість човна (v) та швидкість течії річки (u):',
    expression: '2(v + u) + 1(v – u) = 50; 1(v – u) + 0,5(v + u) = 20',
    options: [
      { id: 'opt-1', label: 'А', text: 'v = 15 км/год, u = 5 км/год', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'v = 16 км/год, u = 4 км/год', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'v = 18 км/год, u = 2 км/год', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'v = 20 км/год, u = 5 км/год', isCorrect: false }
    ],
    explanation: '1) 3v + u = 50; 2) 1,5v – 0,5u = 20 => 3v – u = 40. Додаємо: 6v = 90 => v = 15 км/год. Тоді u = 50 – 3·15 = 5 км/год.',
    essence: 'Система лінійних рівнянь на рух за течією і проти течії річки.'
  },

  // --- Номер 35. Моторний човен «Львів» ---
  {
    id: 'tar-35-1',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 35',
    baseNumber: 35,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '35. За 3 год за течією річки і 1 год проти течії моторний човен «Львів» проходить 82 км, а за 1 год за течією і 2 год проти течії — 54 км. Знайдіть власну швидкість човна і швидкість течії річки.',
    questionPrompt: 'Знайдіть власну швидкість човна «Львів» і швидкість течії річки:',
    expression: '3(v + u) + (v – u) = 82; (v + u) + 2(v – u) = 54',
    options: [
      { id: 'opt-1', label: 'А', text: '19 км/год і 3 км/год', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '18 км/год і 4 км/год', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '20 км/год і 2 км/год', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '21 км/год і 3 км/год', isCorrect: false }
    ],
    explanation: '1) 4v + 2u = 82 => 2v + u = 41. 2) 3v – u = 54. Додаємо: 5v = 95 => v = 19 км/год. Тоді u = 41 – 2·19 = 3 км/год.',
    essence: 'Система двох лінійних рівнянь із двома змінними.'
  },

  // --- Номер 36. Басейн і плитка ---
  {
    id: 'tar-36-1',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 36',
    baseNumber: 36,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '36. Басейн має форму прямокутника. Одна з його сторін на 5 м менша за іншу. Уздовж бортів басейну прокладено доріжку із 94 плиток розмірами 1х1 м. Якими є розміри басейну?',
    questionPrompt: 'Якими є розміри прямокутного басейну (довжина і ширина):',
    expression: 'Доріжка шириною 1 м із 94 плиток 1х1 навколо прямокутника розміром a × (a – 5)',
    options: [
      { id: 'opt-1', label: 'А', text: '25 м і 20 м', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '30 м і 25 м', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '24 м і 19 м', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '20 м і 15 м', isCorrect: false }
    ],
    explanation: 'Доріжка додає по 1 м з кожного боку. Площа доріжки = (a + 2)(b + 2) – ab = 2(a + b) + 4 = 94. Тоді 2(a + b) = 90 => a + b = 45. Оскільки b = a – 5: a + a – 5 = 45 => 2a = 50 => a = 25 м, b = 20 м.',
    essence: 'Геометрична задача на периметр і площу прямокутника.'
  },

  // --- Номер 40. Розчин соляної кислоти ---
  {
    id: 'tar-40-1',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 40',
    baseNumber: 40,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '40. Скільки грамів води потрібно додати до 50 г 35%-го розчину соляної кислоти, щоб одержати 10%-й розчин?',
    questionPrompt: 'Скільки грамів води потрібно додати:',
    expression: '50 · 0,35 / (50 + x) = 0,10',
    options: [
      { id: 'opt-1', label: 'А', text: '125 г', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '100 г', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '150 г', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '175 г', isCorrect: false }
    ],
    explanation: 'Маса чистої кислоти: 50 · 0,35 = 17,5 г. Нова маса розчину: 17,5 : 0,10 = 175 г. Додано води: 175 – 50 = 125 г.',
    essence: 'Задача на концентрацію розчинів.'
  },

  // --- Номер 41. Зріст акторів гуртка ---
  {
    id: 'tar-41-1',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 41',
    baseNumber: 41,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '41. Для вистави драматичного гуртка потрібно придбати костюми. Щоб правильно визначити довжину костюмів, Людмила Миколаївна — керівниця гуртка — записала зріст акторів: 160 см, 161 см, 163 см, 166 см, 156 см, 164 см, 160 см, 164 см, 164 см, 166 см. Складіть частотну таблицю для цієї вибірки. З’ясуйте, який середній зріст акторів драматичного гуртка.',
    questionPrompt: 'Знайдіть середній зріст акторів драматичного гуртка:',
    expression: 'Сума / 10 = (160+161+163+166+156+164+160+164+164+166) / 10',
    options: [
      { id: 'opt-1', label: 'А', text: '162,4 см', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '163 см', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '161,8 см', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '164 см', isCorrect: false }
    ],
    explanation: 'Сума зросту: 1624 см. Кількість акторів: 10. Середній зріст: 1624 : 10 = 162,4 см.',
    essence: 'Середнє арифметичне статистичної вибірки.'
  },

  // --- Номер 42. Кількість прочитаних книжок ---
  {
    id: 'tar-42-1',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 42',
    baseNumber: 42,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '42. Провели опитування учнів і учениць 8-го класу щодо кількості прочитаних книжок на літніх канікулах. Одержали такі дані: 1; 2; 0; 1; 3; 5; 4; 0; 5; 3; 1; 2; 2; 6; 3; 1; 5; 4; 2; 0. Упорядкуйте даний набір чисел і знайдіть середнє значення вибірки.',
    questionPrompt: 'Знайдіть середнє значення кількості прочитаних книжок за літо:',
    expression: 'Сума / 20 = 50 / 20',
    options: [
      { id: 'opt-1', label: 'А', text: '2,5', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '2', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '3', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '2,8', isCorrect: false }
    ],
    explanation: 'Сума всіх значень: 0·3 + 1·4 + 2·4 + 3·3 + 4·2 + 5·3 + 6·1 = 0 + 4 + 8 + 9 + 8 + 15 + 6 = 50. Всього 20 учнів. Середнє: 50 : 20 = 2,5.',
    essence: 'Статистична вибірка та середнє арифметичне.'
  },

  // --- Номер 43. Розклад уроків на понеділок ---
  {
    id: 'tar-43-1',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 43',
    baseNumber: 43,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '43. Заступник директора складає розклад уроків на понеділок для 8-А класу. Скільки різних варіантів розкладу можна скласти, якщо в понеділок перші два уроки — алгебра, а інші три уроки — українська мова, фізкультура і географія?',
    questionPrompt: 'Скільки різних варіантів розкладу можна скласти:',
    expression: 'P_3 = 3 · 2 · 1 = 6',
    options: [
      { id: 'opt-1', label: 'А', text: '6 варіантів', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '12 варіантів', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '24 варіанти', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '3 варіанти', isCorrect: false }
    ],
    explanation: 'Перші два уроки фіксовані (алгебра). На інші три уроки є 3 предмети. Кількість перестановок: 3! = 3 · 2 · 1 = 6 варіантів.',
    essence: 'Комбінаторне правило перестановки n елементів.'
  },

  // --- Номер 45. Квитки в кінотеатр ---
  {
    id: 'tar-45-1',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 45',
    baseNumber: 45,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '45. Олексій, Микита та Олеся купили квитки в кінотеатр на п’яте, шосте і сьоме місця десятого ряду. 1. Скількома способами вони можуть зайняти свої місця? 2. Яка ймовірність того, що Олексій буде сидіти на п’ятому місці десятого ряду? 3. Яка ймовірність того, що Олеся буде сидіти на шостому місці першого ряду?',
    questionPrompt: 'Скількома способами троє друзів можуть зайняти три місця в кінотеатрі:',
    expression: '3 · 2 · 1 = 6',
    options: [
      { id: 'opt-1', label: 'А', text: '6 способами', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '3 способами', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '9 способами', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '27 способами', isCorrect: false }
    ],
    explanation: 'Кількість способів розмістити 3 людей на 3 місцях: 3! = 3 · 2 · 1 = 6. Ймовірність для конкретного місця: 2 / 6 = 1/3. Для місця у першому ряду: 0 (неможлива подія).',
    essence: 'Перестановки та класична ймовірність.'
  },

  // --- Номер 46. Йогурти для Олі й Дмитра ---
  {
    id: 'tar-46-1',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 46',
    baseNumber: 46,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '46. Для сніданку мама купила Олі й Дмитрові йогурт із трьома різними наповнювачами: вишневим, полуничним та абрикосовим. 1. Скільки існує способів скуштувати один йогурт на сніданок, якщо Оля й Дмитро візьмуть йогурти з різними наповнювачами? 2. Яка ймовірність того, що Олі дістанеться йогурт із полуницею?',
    questionPrompt: 'Скільки способів вибрати 2 йогурти з 3 різних наповнювачів для Олі та Дмитра:',
    expression: '3 · 2 = 6',
    options: [
      { id: 'opt-1', label: 'А', text: '6 способів', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '3 способи', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '9 способів', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '4 способи', isCorrect: false }
    ],
    explanation: 'Оля може вибрати один із 3 йогуртів, після чого Дмитро вибирає з 2 залишених: 3 · 2 = 6 способів. Ймовірність вибору полуничного для Олі: 1/3.',
    essence: 'Правило множення в комбінаториці.'
  },

  // --- Номер 47. Відвідувачі кав’ярні ---
  {
    id: 'tar-47-1',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 47',
    baseNumber: 47,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '47. На стовпчастій діаграмі (мал. 2) показано кількість відвідувачів кав’ярні протягом тижня. У який день тижня кількість відвідувачів була найближчою до середнього значення за ці сім днів?',
    questionPrompt: 'У який день тижня кількість відвідувачів була найближчою до середнього:',
    expression: 'Діаграма відвідувачів (мал. 2)',
    options: [
      { id: 'opt-1', label: 'А', text: 'Четвер', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Вівторок', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'П\'ятниця', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Середа', isCorrect: false }
    ],
    explanation: 'Обчислюємо середнє арифметичне стовпчиків діаграми за 7 днів тижня. Найближче значення відвідувачів припадає на четвер.',
    essence: 'Аналіз статистичних даних за діаграмою.'
  },

  // --- Номер 48. Користувачі соцмереж ---
  {
    id: 'tar-48-1',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 48',
    baseNumber: 48,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '48. За даними досліджень 2022 року сервісу YouTube віддають перевагу 23 млн українських користувачів, Facebook — 15,6 млн, Instagram — 13,2 млн, TikTok — 12 млн. На скільки відсотків більше користувачів Instagram, ніж користувачів TikTok?',
    questionPrompt: 'На скільки відсотків більше користувачів Instagram, ніж TikTok:',
    expression: '(13,2 – 12) / 12 · 100 %',
    options: [
      { id: 'opt-1', label: 'А', text: 'На 10 %', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'На 12 %', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'На 8 %', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'На 15 %', isCorrect: false }
    ],
    explanation: 'Різниця: 13,2 – 12 = 1,2 млн. Порівнюємо з базою TikTok (12 млн): 1,2 / 12 · 100 % = 10 %.',
    essence: 'Відсоткове порівняння двох величин.'
  },

  // --- Номер 49. Опитування про йогурт ---
  {
    id: 'tar-49-1',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 49',
    baseNumber: 49,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '49. Проведіть у своєму класі опитування на тему: 1) «Чи любите ви йогурт?»; 2) «Чи готують йогурт удома у вашій родині?». Проаналізуйте відповіді та за отриманими даними побудуйте кругову і стовпчасту діаграми.',
    questionPrompt: 'Який тип діаграми найкраще підходить для відображення частки ствердних і заперечних відповідей від загальної кількості опитаних (100%):',
    expression: 'Співвідношення часток від цілого',
    options: [
      { id: 'opt-1', label: 'А', text: 'Кругова діаграма', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Тільки полігон частот', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Тільки таблиця значень', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Логарифмічна шкала', isCorrect: false }
    ],
    explanation: 'Кругова діаграма наочно відображає співвідношення часток різних категорій відповідей у структурі 100% опитаних.',
    essence: 'Графічні способи подання статистичних даних.'
  }
];
