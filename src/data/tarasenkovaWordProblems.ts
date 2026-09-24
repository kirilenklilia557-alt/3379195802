import { TextbookExercise } from '../types/textbook';

/**
 * Автентичні сюжетні та практичні задачі підручника «Алгебра 8 клас» (Н. А. Тарасенкова та ін., 2025)
 * Сюжетні задачі: на рух, спільну роботу, площі, прямокутні трикутники, розрахунки, туризм.
 * Повні точні тексти задач з підручника.
 */
export const TARASENKOVA_WORD_PROBLEMS: TextbookExercise[] = [
  // ==========================================
  // РОЗДІЛ 2 (§ 1 - 11)
  // ==========================================
  {
    id: 'tar-prob-75',
    topicId: 't-2-1',
    chapterId: 'ch-2',
    exerciseNumber: '№ 75',
    baseNumber: 75,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '75. Автомобіль рухається зі швидкістю x км/год і проїжджає відстань (2x + 40) км. Складіть вираз для знаходження часу руху автомобіля (у годинах). Знайдіть його значення, якщо: 1) x = 50 км/год; 2) x = 60 км/год; 3) x = 80 км/год; 4) x = 100 км/год.',
    questionPrompt: 'Складіть вираз для часу руху автомобіля та обчисліть його при x = 50 км/год:',
    expression: 't = (2x + 40) / x = 2 + 40/x',
    options: [
      { id: 'opt-1', label: 'А', text: 't = (2x + 40)/x; при x = 50: 2,8 год (2 год 48 хв)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 't = (2x + 40) · x; при x = 50: 2,5 год', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 't = x / (2x + 40); при x = 50: 3,2 год', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 't = (2x + 40)/x; при x = 50: 3 год', isCorrect: false }
    ],
    explanation: 'Час руху: t = s / v = (2x + 40) / x = 2 + 40/x. Якщо x = 50 км/год, то t = (100 + 40)/50 = 140/50 = 2,8 год = 2 год 48 хв.',
    essence: 'Формула зв\'язку відстані, швидкості та часу в русі.'
  },
  {
    id: 'tar-prob-76',
    topicId: 't-2-1',
    chapterId: 'ch-2',
    exerciseNumber: '№ 76',
    baseNumber: 76,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '76. Одна сторона прямокутника дорівнює 4b см, а число, що виражає його площу, на 1 більше за число, яке виражає довжину подвоєної цієї сторони. Складіть вираз для знаходження іншої сторони прямокутника (у сантиметрах). Знайдіть його значення, якщо: 1) b = 1 см; 2) b = 3 см; 3) b = 2 дм; 4) b = 5 см 5 мм.',
    questionPrompt: 'Складіть вираз для другої сторони прямокутника та знайдіть її при b = 1 см:',
    expression: 'a = (8b + 1) / (4b) = 2 + 1/(4b)',
    options: [
      { id: 'opt-1', label: 'А', text: '2 + 1/(4b); при b = 1: 2,25 см', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(4b + 1)/(4b); при b = 1: 1,25 см', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '8b + 1; при b = 1: 9 см', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '2b + 1; при b = 1: 3 см', isCorrect: false }
    ],
    explanation: 'Подвоєна сторона дорівнює 2 · 4b = 8b. Площа S = 8b + 1. Інша сторона: a = S / (4b) = (8b + 1) / (4b) = 2 + 1/(4b). При b = 1 см: a = 2 + 0,25 = 2,25 см.',
    essence: 'Формула знаходження сторони прямокутника за площею.'
  },
  {
    id: 'tar-prob-77',
    topicId: 't-2-1',
    chapterId: 'ch-2',
    exerciseNumber: '№ 77',
    baseNumber: 77,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '77. Експрес-контроль на уроці зайняв 5 хв, а самоперевірка — на х хв більше. Яку частину уроку тривалістю y хв зайняли експрес-контроль та самоперевірка? Складіть вираз і знайдіть його значення, якщо: 1) х = 3 хв, y = 35 хв; 2) х = 7 хв, y = 40 хв.',
    questionPrompt: 'Складіть вираз та обчисліть частину уроку при x = 3 хв, y = 35 хв:',
    expression: '(10 + x) / y',
    options: [
      { id: 'opt-1', label: 'А', text: '(10 + x)/y; значення: 13/35', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(5 + x)/y; значення: 8/35', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(10 + x)/y; значення: 17/40', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'y / (10 + x); значення: 35/13', isCorrect: false }
    ],
    explanation: 'Контроль: 5 хв. Самоперевірка: 5 + x хв. Разом: 5 + 5 + x = 10 + x хв. Частина уроку: (10 + x)/y. При x = 3, y = 35: 13/35.',
    essence: 'Складання дробового виразу за текстовою умовою задачі.'
  },
  {
    id: 'tar-prob-84',
    topicId: 't-2-1',
    chapterId: 'ch-2',
    exerciseNumber: '№ 84',
    baseNumber: 84,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '84. Дід Андрій хоче зробити два однакові вулики, що мають форму прямокутного паралелепіпеда. Загалом у діда Андрія є S м² дощок. 1. Якою має бути висота вулика, якщо ширина та довжина його основи дорівнюють a см і b см відповідно? 2. Знайдіть висоту вулика, якщо відомо, що a = 50 см, b = 90 см, S = 6 м². Відповідь запишіть у сантиметрах.',
    questionPrompt: 'Знайдіть висоту вулика діда Андрія у сантиметрах (пункт 2):',
    expression: 'h = (30 000 – 2ab) / (2(a + b))',
    options: [
      { id: 'opt-1', label: 'А', text: '75 см', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '80 см', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '70 см', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '65 см', isCorrect: false }
    ],
    explanation: 'На один вулик припадає 6 м² / 2 = 3 м² = 30 000 см². Площа основи двох кришок: 2 · 50 · 90 = 9000 см². Бічні грані: 30000 – 9000 = 21000 см². Периметр основи: 2(50 + 90) = 280 см. h = 21000 / 280 = 75 см.',
    essence: 'Практична задача на площу поверхні прямокутного паралелепіпеда.'
  },
  {
    id: 'tar-prob-113',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 113',
    baseNumber: 113,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '113. Тато Сашка має два квадратні листи ДВП зі стороною x см. Для обшивки двох стінок скрині татові потрібно вирізати з них два прямокутники: перший — розмірами (x – 10) × (x – 20) см; другий — розмірами (x – 10) × (x – 30) см. У скільки разів площа першого прямокутника більша за площу другого? Складіть вираз і знайдіть його значення, якщо: 1) x = 100 см; 2) x = 150 см; 3) x = 200 см.',
    questionPrompt: 'Складіть вираз та обчисліть відношення площ при x = 100 см:',
    expression: '(x – 20) / (x – 30)',
    options: [
      { id: 'opt-1', label: 'А', text: '(x – 20)/(x – 30); при x = 100 см: в 1 1/7 раза (8/7)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(x – 10)/(x – 30); при x = 100 см: в 1,5 раза', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(x – 20)/(x – 10); при x = 100 см: в 1,2 раза', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'в 2 рази', isCorrect: false }
    ],
    explanation: 'S1 / S2 = (x – 10)(x – 20) / ((x – 10)(x – 30)) = (x – 20) / (x – 30). При x = 100: (100 – 20)/(100 – 30) = 80/70 = 8/7 = 1 1/7 раза.',
    essence: 'Скорочення дробів у геометричній задачі.'
  },
  {
    id: 'tar-prob-133',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 133',
    baseNumber: 133,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '133. Мотоцикліст, рухаючись по краю циркової арени діаметром d м, робить 10 кіл за t с. Яка середня швидкість його руху? Знайдіть середню швидкість його руху, якщо час руху виражений числом, уп’ятеро більшим, ніж діаметр арени. Складіть вираз і спростіть його.',
    questionPrompt: 'Знайдіть середню швидкість мотоцикліста, якщо t = 5d:',
    expression: 'v = (10 · πd) / t; при t = 5d: v = 2π м/с',
    options: [
      { id: 'opt-1', label: 'А', text: 'v = 2π м/с (≈ 6,28 м/с)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'v = 5π м/с', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'v = π м/с', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'v = 10π м/с', isCorrect: false }
    ],
    explanation: 'Довжина кола C = πd. За 10 кіл шлях S = 10πd. v = 10πd / t. Якщо t = 5d, то v = 10πd / (5d) = 2π м/с.',
    essence: 'Формула руху по колу та скорочення буквених виразів.'
  },
  {
    id: 'tar-prob-134',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 134',
    baseNumber: 134,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '134. Під час баскетбольного матчу спортсмен кинув м’яч у кільце. Якою була маса м’яча, якщо на висоті H м м’яч мав швидкість v м/с і його повна енергія складала Епов. Дж. Складіть вираз та знайдіть його значення, якщо H = 3; v = 2; Епов. = 15,7 (g ≈ 9,8 м/с²).',
    questionPrompt: 'Знайдіть масу м\'яча в кілограмах:',
    expression: 'm = E / (gH + 0,5v²)',
    options: [
      { id: 'opt-1', label: 'А', text: '0,5 кг (500 г)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '0,6 кг', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '0,45 кг', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '0,55 кг', isCorrect: false }
    ],
    explanation: 'm = E / (gH + 0,5v²). gH = 9,8 · 3 = 29,4; 0,5v² = 0,5 · 4 = 2. Знаменник = 31,4. m = 15,7 / 31,4 = 0,5 кг.',
    essence: 'Вираження фізичної величини через раціональний дріб.'
  },
  {
    id: 'tar-prob-223',
    topicId: 't-2-5',
    chapterId: 'ch-2',
    exerciseNumber: '№ 223',
    baseNumber: 223,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '223. Одна група, рухаючись із середньою швидкістю v км/год, подолала 18 км, а інша — проходила за 1 год на 0,5 км більше і пройшла 21 км. У скільки разів час руху першої групи туристів більший, ніж час руху другої групи? Складіть вираз для розв’язування задачі та спростіть його.',
    questionPrompt: 'Складіть спрощений вираз для відношення часу руху t1 / t2:',
    expression: '(6v + 3) / (7v)',
    options: [
      { id: 'opt-1', label: 'А', text: '(6v + 3) / (7v)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(18v + 9) / (21v)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '6/7', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '(7v) / (6v + 3)', isCorrect: false }
    ],
    explanation: 't1 = 18/v, t2 = 21/(v + 0,5). t1/t2 = (18/v) · ((v + 0,5)/21) = 6(v + 0,5) / (7v) = (6v + 3) / (7v).',
    essence: 'Ділення раціональних дробів у задачі на рух.'
  },
  {
    id: 'tar-prob-224',
    topicId: 't-2-5',
    chapterId: 'ch-2',
    exerciseNumber: '№ 224',
    baseNumber: 224,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '224. Ірина купила х пачок морозива, а Микола — на 2 пачки більше, заплативши втричі більше, аніж Ірина. У скільки разів ціна морозива, що купив Микола, більша за ціну морозива, купленого Іриною? Складіть вираз для розв’язування задачі та спростіть його.',
    questionPrompt: 'У скільки разів ціна морозива Миколи більша за ціну морозива Ірини:',
    expression: '3x / (x + 2)',
    options: [
      { id: 'opt-1', label: 'А', text: '3x / (x + 2)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(x + 2) / (3x)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '3 / (x + 2)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '3x / 2', isCorrect: false }
    ],
    explanation: 'Ціна морозива Ірини: S/x. Ціна Миколи: 3S/(x + 2). Відношення: (3S/(x + 2)) / (S/x) = 3x / (x + 2).',
    essence: 'Складання співвідношень величин.'
  },
  {
    id: 'tar-prob-256',
    topicId: 't-2-5',
    chapterId: 'ch-2',
    exerciseNumber: '№ 256',
    baseNumber: 256,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '256. Відстань між двома містами дорівнює 50 км. Із цих міст одночасно назустріч один одному виїхали велосипедист і мотоцикліст. Вони зустрілися на відстані 10 км від одного з міст. Знайдіть швидкості велосипедиста та мотоцикліста, якщо відомо, що швидкість мотоцикліста на 30 км/год більша за швидкість велосипедиста.',
    questionPrompt: 'Знайдіть швидкість велосипедиста та мотоцикліста:',
    expression: '10/v = 40/(v + 30)',
    options: [
      { id: 'opt-1', label: 'А', text: 'Велосипедист: 10 км/год; мотоцикліст: 40 км/год', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Велосипедист: 12 км/год; мотоцикліст: 42 км/год', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Велосипедист: 15 км/год; мотоцикліст: 45 км/год', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Велосипедист: 8 км/год; мотоцикліст: 38 км/год', isCorrect: false }
    ],
    explanation: 'Велосипедист проїхав 10 км, мотоцикліст 40 км. Час однаковий: 10/v = 40/(v + 30) => 4v = v + 30 => 3v = 30 => v = 10 км/год. Мотоцикліст: 10 + 30 = 40 км/год.',
    essence: 'Дробове рівняння на зустрічний рух.'
  },
  {
    id: 'tar-prob-263',
    topicId: 't-2-5',
    chapterId: 'ch-2',
    exerciseNumber: '№ 263*',
    baseNumber: 263,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '263*. Задача Безу. Одного разу чоловік купив коня, а через деякий час продав його за 24 пістолі. Під час продажу він втратив таке саме число відсотків, яке дорівнює початковій ціні коня. Скільки пістолів коштував кінь?',
    questionPrompt: 'Скільки пістолів коштував кінь:',
    expression: 'x – x · (x/100) = 24 => x² – 100x + 2400 = 0',
    options: [
      { id: 'opt-1', label: 'А', text: '40 пістолів або 60 пістолів', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '50 пістолів', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '30 пістолів або 70 пістолів', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '48 пістолів', isCorrect: false }
    ],
    explanation: 'x – x²/100 = 24 => x² – 100x + 2400 = 0. За теоремою Вієта: (x – 40)(x – 60) = 0. Відповідь: 40 пістолів або 60 пістолів.',
    essence: 'Історична задача Безу на відсотки та квадратне рівняння.'
  },
  {
    id: 'tar-prob-264',
    topicId: 't-2-5',
    chapterId: 'ch-2',
    exerciseNumber: '№ 264',
    baseNumber: 264,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '264. На кондитерській фабриці за зміну випікають 180 тортів. Перша бригада випікає за зміну 100 тортів, а друга — 80 тортів. Скільки тортів у середньому за 1 год випікає кожна бригада, якщо відомо, що перша бригада за 1 год випікає на 2 торти більше, ніж друга? Скільки годин триває зміна?',
    questionPrompt: 'Скільки тортів за 1 год випікає кожна бригада і яка тривалість зміни:',
    expression: '100/t – 80/t = 2 => 20/t = 2 => t = 10 год',
    options: [
      { id: 'opt-1', label: 'А', text: 'Перша: 10 тортів/год, друга: 8 тортів/год; зміна 10 год', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Перша: 12 тортів/год, друга: 10 тортів/год; зміна 8 год', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Перша: 14 тортів/год, друга: 12 тортів/год; зміна 7 год', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Перша: 15 тортів/год, друга: 13 тортів/год; зміна 6 год', isCorrect: false }
    ],
    explanation: '100/t – 80/t = 2 => 20/t = 2 => t = 10 годин. Перша: 100/10 = 10 тортів/год, друга: 80/10 = 8 тортів/год.',
    essence: 'Задача на продуктивність праці.'
  },
  {
    id: 'tar-prob-466',
    topicId: 't-2-11',
    chapterId: 'ch-2',
    exerciseNumber: '№ 466',
    baseNumber: 466,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '466. Відстань між Миколаєвом і Полтавою становить 400 км. 1. Запишіть функцію, що описує залежність часу, за який автомобіль має подолати відстань між цими містами, від швидкості автомобіля. 2. Визначте час, якщо швидкість автомобіля дорівнює 80 км/год; 100 км/год.',
    questionPrompt: 'Який час руху при швидкості 80 км/год та 100 км/год:',
    expression: 't(v) = 400 / v',
    options: [
      { id: 'opt-1', label: 'А', text: 'При 80 км/год: 5 год; при 100 км/год: 4 год', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'При 80 км/год: 4,5 год; при 100 км/год: 3,5 год', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'При 80 км/год: 6 год; при 100 км/год: 5 год', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'При 80 км/год: 5 год; при 100 км/год: 4,5 год', isCorrect: false }
    ],
    explanation: 't = 400 / v. При v = 80: t = 400 / 80 = 5 год. При v = 100: t = 400 / 100 = 4 год.',
    essence: 'Обернена пропорційність y = k/x у фізичному контексті.'
  },

  // ==========================================
  // РОЗДІЛ 4 (§ 17 - 22)
  // ==========================================
  {
    id: 'tar-prob-742',
    topicId: 't-4-1',
    chapterId: 'ch-4',
    exerciseNumber: '№ 742',
    baseNumber: 742,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '742. Поряд з будинком, де мешкає Тетянка, установили спортивний майданчик прямокутної форми, площа якого 112 м². 1. Обчисліть розміри майданчика, якщо його довжина на 6 м більша за ширину. 2. Навколо майданчика облаштовано доріжку завширшки 0,5 м, яку закладено плиткою розмірами 0,5 × 0,5 м. Скільки плиток потрібно придбати для облаштування цієї доріжки? 3. Спортивний майданчик разом із доріжкою обнесли секційним парканом. Висота секції паркану дорівнює 2,5 м, а ширина — 2 м. Обчисліть вартість матеріалу для паркану, якщо одна секція коштує 250 грн.',
    questionPrompt: 'Знайдіть ширину та довжину спортивного майданчика:',
    expression: 'x(x + 6) = 112 => x² + 6x – 112 = 0',
    options: [
      { id: 'opt-1', label: 'А', text: 'Ширина 8 м, довжина 14 м', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Ширина 7 м, довжина 16 м', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Ширина 6 м, довжина 18 м', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Ширина 9 м, довжина 15 м', isCorrect: false }
    ],
    explanation: 'x² + 6x – 112 = 0 => (x – 8)(x + 14) = 0 => x = 8 м (ширина), довжина 8 + 6 = 14 м.',
    essence: 'Складання квадратного рівняння за геометричною умовою.'
  },
  {
    id: 'tar-prob-765',
    topicId: 't-4-1',
    chapterId: 'ch-4',
    exerciseNumber: '№ 765',
    baseNumber: 765,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '765. В одноколовому шаховому турнірі було зіграно загалом 105 партій. Скільки було учасників турніру?',
    questionPrompt: 'Скільки учасників брало участь у турнірі:',
    expression: 'n(n – 1)/2 = 105 => n² – n – 210 = 0',
    options: [
      { id: 'opt-1', label: 'А', text: '15 учасників', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '14 учасників', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '16 учасників', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '21 учасник', isCorrect: false }
    ],
    explanation: 'n(n – 1)/2 = 105 => n² – n – 210 = 0 => (n – 15)(n + 14) = 0 => n = 15 учасників.',
    essence: 'Комбінаторна модель кругового турніру.'
  },
  {
    id: 'tar-prob-767',
    topicId: 't-4-1',
    chapterId: 'ch-4',
    exerciseNumber: '№ 767',
    baseNumber: 767,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '767. Населення міста за 2 роки збільшилося із 40 000 до 41 616 осіб. Який щорічний середній відсоток приросту населення цього міста?',
    questionPrompt: 'Який щорічний середній відсоток приросту населення:',
    expression: '40 000 · (1 + p/100)² = 41 616',
    options: [
      { id: 'opt-1', label: 'А', text: '2 %', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '3 %', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '4 %', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '1,5 %', isCorrect: false }
    ],
    explanation: '(1 + p/100)² = 41616 / 40000 = 1,0404 => 1 + p/100 = 1,02 => p = 2 %.',
    essence: 'Формула складних відсотків.'
  },
  {
    id: 'tar-prob-774',
    topicId: 't-4-1',
    chapterId: 'ch-4',
    exerciseNumber: '№ 774',
    baseNumber: 774,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '774. Іван Петрович розпочав будівництво будинку на ділянці землі, що має форму прямокутника. Одна сторона ділянки на 16 м менша від іншої, а її площа дорівнює 720 м². Допоможіть Івану Петровичу здійснити необхідні розрахунки: 1. Знайдіть сторони і периметр ділянки. 2. Для початку будівництва ділянка була огороджена металевими секціями з розмірами 2 × 2 м. Скільки таких секцій придбав Іван Петрович?',
    questionPrompt: 'Знайдіть сторони ділянки, периметр та кількість секцій паркану:',
    expression: 'x(x – 16) = 720 => x² – 16x – 720 = 0',
    options: [
      { id: 'opt-1', label: 'А', text: 'Сторони 36 м і 20 м; периметр 112 м; 56 секцій', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Сторони 40 м і 18 м; периметр 116 м; 58 секцій', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Сторони 30 м і 24 м; периметр 108 м; 54 секції', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Сторони 35 м і 20 м; периметр 110 м; 55 секцій', isCorrect: false }
    ],
    explanation: 'x² – 16x – 720 = 0 => (x – 36)(x + 20) = 0 => довжина 36 м, ширина 20 м. P = 2(36 + 20) = 112 м. Секцій: 112 / 2 = 56 секцій.',
    essence: 'Комплексний геометрично-будівельний розрахунок.'
  },
  {
    id: 'tar-prob-806',
    topicId: 't-4-2',
    chapterId: 'ch-4',
    exerciseNumber: '№ 806',
    baseNumber: 806,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '806. На дитячому майданчику установили нову дитячу гірку — споруду з гладким похилим спуском і драбинкою. Площадка для спуску розташована на висоті 1,5 м. 1. Розрахуйте довжину похилого спуску, якщо він на пів метра довший за його проєкцію. 2. Скільки метрів проїхав за день Василько, якщо він спустився 18 разів?',
    questionPrompt: 'Знайдіть довжину спуску та скільки метрів проїхав Василько за 18 спусків:',
    expression: '(d + 0,5)² – d² = 1,5² = 2,25',
    options: [
      { id: 'opt-1', label: 'А', text: 'Довжина спуску 2,5 м; Василько проїхав 45 м', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Довжина спуску 2 м; Василько проїхав 36 м', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Довжина спуску 3 м; Василько проїхав 54 м', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Довжина спуску 2,2 м; Василько проїхав 39,6 м', isCorrect: false }
    ],
    explanation: 'd² + d + 0,25 – d² = 2,25 => d = 2 м. Спуск = 2 + 0,5 = 2,5 м. Василько проїхав: 18 · 2,5 = 45 м.',
    essence: 'Теорема Піфагора у практичній задачі.'
  },
  {
    id: 'tar-prob-830',
    topicId: 't-4-3',
    chapterId: 'ch-4',
    exerciseNumber: '№ 830',
    baseNumber: 830,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '830. У збірнику «Юний шашкіст» надрукували 190 партій кругового турніру із шашок «Золота шашка», який проводився серед учнів міста. У турнірі кожний учасник зустрічався з кожним по одному разу. 1. Скільки було учасників турніру? 2. Скільки команд брало участь у турнірі, якщо до складу команди входили три хлопці й одна дівчина? 3. Турнір проходив 5 днів. Скільки партій було зіграно кожного дня?',
    questionPrompt: 'Скільки було учасників, скільки команд і скільки партій на день:',
    expression: 'n(n – 1)/2 = 190 => n² – n – 380 = 0',
    options: [
      { id: 'opt-1', label: 'А', text: '20 учасників; 5 команд; 38 партій на день', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '19 учасників; 4 команди; 35 партій на день', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '22 учасники; 6 команд; 40 партій на день', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '25 учасників; 5 команд; 38 партій на день', isCorrect: false }
    ],
    explanation: 'n(n – 1)/2 = 190 => n = 20 учасників. Команд: 20 / 4 = 5. Партій щодня: 190 / 5 = 38 партій.',
    essence: 'Математичне моделювання кругового турніру.'
  },
  {
    id: 'tar-prob-882',
    topicId: 't-4-3',
    chapterId: 'ch-4',
    exerciseNumber: '№ 882',
    baseNumber: 882,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '882. Із Києва до Харкова одночасно виїхали автобус й автомобіль. Швидкість автомобіля на 20 км/год більша за швидкість автобуса, тому він прибув до Харкова на 2 год раніше. Знайдіть швидкість автобуса й автомобіля, якщо відстань між містами дорівнює 480 км.',
    questionPrompt: 'Знайдіть швидкість автобуса та автомобіля:',
    expression: '480/v – 480/(v + 20) = 2',
    options: [
      { id: 'opt-1', label: 'А', text: 'Автобус: 60 км/год; автомобіль: 80 км/год', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Автобус: 50 км/год; автомобіль: 70 км/год', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Автобус: 70 км/год; автомобіль: 90 км/год', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Автобус: 65 км/год; автомобіль: 85 км/год', isCorrect: false }
    ],
    explanation: '480/v – 480/(v + 20) = 2 => v² + 20v – 4800 = 0 => v = 60 км/год (автобус), 60 + 20 = 80 км/год (автомобіль).',
    essence: 'Дробове раціональне рівняння на рух між містами.'
  },
  {
    id: 'tar-prob-883',
    topicId: 't-4-3',
    chapterId: 'ch-4',
    exerciseNumber: '№ 883',
    baseNumber: 883,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '883. Із Львова до Києва одночасно виїхали автобус й автомобіль. Швидкість автомобіля на 30 км/год більша за швидкість автобуса, тому він прибув до Києва на 3 год раніше. Знайдіть швидкість автобуса й автомобіля, якщо відстань між містами дорівнює 540 км.',
    questionPrompt: 'Знайдіть швидкість автобуса та автомобіля:',
    expression: '540/v – 540/(v + 30) = 3',
    options: [
      { id: 'opt-1', label: 'А', text: 'Автобус: 60 км/год; автомобіль: 90 км/год', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Автобус: 50 км/год; автомобіль: 80 км/год', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Автобус: 70 км/год; автомобіль: 100 км/год', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Автобус: 55 км/год; автомобіль: 85 км/год', isCorrect: false }
    ],
    explanation: '540/v – 540/(v + 30) = 3 => v² + 30v – 5400 = 0 => v = 60 км/год (автобус), 90 км/год (автомобіль).',
    essence: 'Задача на рух Львів - Київ.'
  },
  {
    id: 'tar-prob-884',
    topicId: 't-4-3',
    chapterId: 'ch-4',
    exerciseNumber: '№ 884',
    baseNumber: 884,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '884. Моторний човен проплив проти течії річки 24 км і повернувся до пункту відправлення, витративши на зворотний шлях на 2 год менше. Знайдіть швидкість човна, якщо швидкість течії дорівнює 1 км/год.',
    questionPrompt: 'Знайдіть власну швидкість човна:',
    expression: '24/(v – 1) – 24/(v + 1) = 2',
    options: [
      { id: 'opt-1', label: 'А', text: '5 км/год', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '6 км/год', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '4 км/год', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '7 км/год', isCorrect: false }
    ],
    explanation: '24/(v – 1) – 24/(v + 1) = 2 => v² – 1 = 24 => v² = 25 => v = 5 км/год.',
    essence: 'Рух за течією і проти течії річки.'
  },
  {
    id: 'tar-prob-885',
    topicId: 't-4-3',
    chapterId: 'ch-4',
    exerciseNumber: '№ 885',
    baseNumber: 885,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '885. Катер проплив 18 км за течією річки та 20 км проти течії, витративши на весь шлях 2 год. Знайдіть швидкість течії, якщо швидкість катера дорівнює 20 км/год.',
    questionPrompt: 'Знайдіть швидкість течії річки:',
    expression: '18 / (20 + u) + 20 / (20 – u) = 2',
    options: [
      { id: 'opt-1', label: 'А', text: '4 км/год', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '3 км/год', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '2 км/год', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '5 км/год', isCorrect: false }
    ],
    explanation: '18(20 – u) + 20(20 + u) = 2(400 – u²) => u² + u – 20 = 0 => u = 4 км/год.',
    essence: 'Знаходження швидкості річки.'
  },
  {
    id: 'tar-prob-886',
    topicId: 't-4-3',
    chapterId: 'ch-4',
    exerciseNumber: '№ 886',
    baseNumber: 886,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '886. Замовлення на 110 деталей перший робітник виконує на 1 год швидше, ніж другий. Скільки деталей за 1 год виготовляє другий робітник, якщо перший робітник за 1 год виготовляє на 1 деталь більше?',
    questionPrompt: 'Скільки деталей за годину виготовляє другий робітник:',
    expression: '110/p – 110/(p + 1) = 1',
    options: [
      { id: 'opt-1', label: 'А', text: '10 деталей/год', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '11 деталей/год', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '9 деталей/год', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '8 деталей/год', isCorrect: false }
    ],
    explanation: '110/p – 110/(p + 1) = 1 => p(p + 1) = 110 => p = 10 деталей/год.',
    essence: 'Продуктивність праці робітників.'
  },
  {
    id: 'tar-prob-888',
    topicId: 't-4-3',
    chapterId: 'ch-4',
    exerciseNumber: '№ 888',
    baseNumber: 888,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '888. Петрик та Миколка майструють із паперу кораблики. За 1 год Петрик може виготовити 8 корабликів, а Миколка — 12. Скільки годин знадобиться хлопцям, щоб разом виготовити 100 корабликів?',
    questionPrompt: 'Скільки годин знадобиться хлопцям для 100 корабликів:',
    expression: 't = 100 / (8 + 12) = 5 год',
    options: [
      { id: 'opt-1', label: 'А', text: '5 годин', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '4 години', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '6 годин', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '4,5 години', isCorrect: false }
    ],
    explanation: 'Спільна швидкість виготовлення: 8 + 12 = 20 корабликів на годину. Час: 100 / 20 = 5 годин.',
    essence: 'Спільна продуктивність праці.'
  },
  {
    id: 'tar-prob-890',
    topicId: 't-4-3',
    chapterId: 'ch-4',
    exerciseNumber: '№ 890',
    baseNumber: 890,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '890. Діагональ прямокутника дорівнює 13 см, а одна зі сторін на 7 см більша за іншу. Яке з рівнянь відповідає умові задачі, якщо меншу сторону позначити через х? Знайдіть сторони прямокутника, його площу і периметр.',
    questionPrompt: 'Знайдіть сторони прямокутника, площу та периметр:',
    expression: 'x² + (x + 7)² = 13² = 169',
    options: [
      { id: 'opt-1', label: 'А', text: 'Сторони 5 см і 12 см; площа 60 см²; периметр 34 см', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Сторони 6 см і 13 см; площа 78 см²; периметр 38 см', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Сторони 4 см і 11 см; площа 44 см²; периметр 30 см', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Сторони 5 см і 10 см; площа 50 см²; периметр 30 см', isCorrect: false }
    ],
    explanation: 'x² + (x + 7)² = 169 => x² + 7x – 60 = 0 => (x – 5)(x + 12) = 0 => x = 5 см, інша 12 см. Площа S = 60 см², периметр P = 34 см.',
    essence: 'Теорема Піфагора та властивості прямокутника.'
  },
  {
    id: 'tar-prob-906',
    topicId: 't-4-3',
    chapterId: 'ch-4',
    exerciseNumber: '№ 906',
    baseNumber: 906,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '906. Під час відпочинку родина Сергійка пропливла на моторному човні 10 км озером і 4 км проти течії річки, витративши на весь шлях 1 год. Знайдіть швидкість човна, якщо швидкість течії річки дорівнює 3 км/год.',
    questionPrompt: 'Знайдіть власну швидкість моторного човна:',
    expression: '10/v + 4/(v – 3) = 1',
    options: [
      { id: 'opt-1', label: 'А', text: '15 км/год', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '14 км/год', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '12 км/год', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '16 км/год', isCorrect: false }
    ],
    explanation: '10(v – 3) + 4v = v(v – 3) => v² – 17v + 30 = 0 => (v – 15)(v – 2) = 0. Оскільки v > 3, v = 15 км/год.',
    essence: 'Рух по озеру та проти течії річки.'
  },
  {
    id: 'tar-prob-912',
    topicId: 't-4-3',
    chapterId: 'ch-4',
    exerciseNumber: '№ 912',
    baseNumber: 912,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '912. Перша труба за 1 хв пропускає на 1 л води менше, ніж друга. Скільки літрів води за 1 хв пропускає перша труба, якщо резервуар об’ємом 110 л вона заповнює на 2 хв довше, ніж друга труба заповнює резервуар об’ємом 99 л?',
    questionPrompt: 'Скільки літрів води за 1 хв пропускає перша труба:',
    expression: '110/x – 99/(x + 1) = 2',
    options: [
      { id: 'opt-1', label: 'А', text: '10 л/хв', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '11 л/хв', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '9 л/хв', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '8 л/хв', isCorrect: false }
    ],
    explanation: '110(x + 1) – 99x = 2x(x + 1) => 2x² – 9x – 110 = 0 => x = 10 л/хв.',
    essence: 'Задача на швидкість наповнення резервуара.'
  },
  {
    id: 'tar-prob-924',
    topicId: 't-4-3',
    chapterId: 'ch-4',
    exerciseNumber: '№ 924*',
    baseNumber: 924,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '924*. Ігор і Богдан зможуть пофарбувати паркан у бабусі в селі за 9 год, Богдан і Василь — за 12 год, а Василь та Ігор — за 18 год. За скільки годин хлопці пофарбують паркан, якщо будуть працювати втрьох?',
    questionPrompt: 'За скільки годин хлопці пофарбують паркан утрирьох:',
    expression: '2(p1 + p2 + p3) = 1/9 + 1/12 + 1/18 = 1/4 => p = 1/8',
    options: [
      { id: 'opt-1', label: 'А', text: '8 годин', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '6 годин', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '7,5 години', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '9 годин', isCorrect: false }
    ],
    explanation: '1/9 + 1/12 + 1/18 = 4/36 + 3/36 + 2/36 = 9/36 = 1/4. Кожен хлопець врахований двічі, тому спільна продуктивність трьох: (1/4)/2 = 1/8. Разом пофарбують за 1 : (1/8) = 8 годин.',
    essence: 'Олімпіадна задача на спільну роботу.'
  },
  {
    id: 'tar-prob-927',
    topicId: 't-4-3',
    chapterId: 'ch-4',
    exerciseNumber: '№ 927',
    baseNumber: 927,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '927. Тетянка й Наталка полюбляють спілкуватися за допомогою смс-повідомлень. Повідомлення із 24 слів Тетянка набирає на 2 хв швидше, ніж Наталка. 1. Скільки слів набирає за 1 хв Наталка, якщо Тетянка за 1 хв набирає на 2 слова більше, ніж Наталка? 2. Скільки слів набирає за 1 хв Тетянка? 3. Дівчатка дізналися, що в Сергійка сьогодні день народження, і відразу одночасно почали набирати вітальні смс-повідомлення. Тетянка набрала привітання із 36 слів, а Наталка — із 24. Чиє привітання Сергійко одержить першим?',
    questionPrompt: 'Скільки слів за хвилину набирають дівчатка і чиє привітання надійде першим:',
    expression: '24/n – 24/(n + 2) = 2',
    options: [
      { id: 'opt-1', label: 'А', text: 'Наталка: 4 сл/хв, Тетянка: 6 сл/хв; одержать одночасно за 6 хв', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Наталка: 5 сл/хв, Тетянка: 7 сл/хв; першою Тетянка', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Наталка: 6 сл/хв, Тетянка: 8 сл/хв; першою Наталка', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Наталка: 4 сл/хв, Тетянка: 6 сл/хв; першою Тетянка', isCorrect: false }
    ],
    explanation: '24/n – 24/(n + 2) = 2 => n² + 2n – 24 = 0 => n = 4 сл/хв (Наталка), 6 сл/хв (Тетянка). Час привітання: 36/6 = 6 хв, 24/4 = 6 хв. Надійдуть одночасно!',
    essence: 'Комплексна сюжетна задача на швидкість набору тексту.'
  }
];
