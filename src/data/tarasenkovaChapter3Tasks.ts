import { TextbookExercise } from '../types/textbook';

/**
 * Автентичні завдання з підручника «Алгебра 8 клас» (Н. А. Тарасенкова та ін., 2025)
 * РОЗДІЛ 3. КВАДРАТНІ КОРЕНІ. ДІЙСНІ ЧИСЛА (§ 12 – § 16: № 468 – № 715)
 * Арифметичний квадратний корінь, властивості, винесення/внесення множника,
 * спрощення ірраціональних виразів та функція y = √x.
 */
export const TARASENKOVA_CHAPTER_3_TASKS: TextbookExercise[] = [
  // ========================================================
  // § 12. АРИФМЕТИЧНИЙ КВАДРАТНИЙ КОРІНЬ (№ 468 - № 497)
  // ========================================================

  // --- № 470. Значення кореня ---
  {
    id: 'tar-470',
    topicId: 't-3-1',
    chapterId: 'ch-3',
    exerciseNumber: '№ 470',
    baseNumber: 470,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '470. Знайдіть значення арифметичного квадратного кореня: 1) √0; 2) √1; 3) √4; 4) √9; 5) √16; 6) √25; 7) √36; 8) √49; 9) √64; 10) √81; 11) √100; 12) √121; 13) √144.',
    questionPrompt: 'Знайдіть значення арифметичного квадратного кореня √144:',
    expression: '√144',
    options: [
      { id: 'opt-1', label: 'А', text: '12', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '±12', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '14', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '72', isCorrect: false }
    ],
    explanation: 'Арифметичним квадратним коренем з числа a є невід\'ємне число, квадрат якого дорівнює a. 12² = 144 і 12 ≥ 0, тому √144 = 12.',
    essence: 'Означення арифметичного квадратного кореня.'
  },

  // --- № 471. Чи має зміст вираз ---
  {
    id: 'tar-471',
    topicId: 't-3-1',
    chapterId: 'ch-3',
    exerciseNumber: '№ 471',
    baseNumber: 471,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '471. Чи має зміст вираз: 1) √16; 2) √(–16); 3) –√16; 4) √(–4)²; 5) –√(–4)²; 6) √(–4)³?',
    questionPrompt: 'Чи мають зміст вирази 1) √16 та 2) √(–16):',
    expression: '1) √16; 2) √(–16)',
    options: [
      { id: 'opt-1', label: 'А', text: '1) має зміст (дорівнює 4); 2) не має змісту (під коренем від\'ємне число)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Обидва мають зміст', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Обидва не мають змісту', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '1) не має; 2) дорівнює –4', isCorrect: false }
    ],
    explanation: 'Квадратний корінь визначено лише для невід\'ємних чисел (a ≥ 0). Тому √16 = 4 існує, а √(–16) у множині дійсних чисел не має змісту.',
    essence: 'Область допустимих значень для арифметичного кореня: a ≥ 0.'
  },

  // --- № 473. Корінь із десяткових дробів ---
  {
    id: 'tar-473',
    topicId: 't-3-1',
    chapterId: 'ch-3',
    exerciseNumber: '№ 473',
    baseNumber: 473,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '473. Обчисліть: 1) √0,04; 2) √0,25; 3) √0,81; 4) √1,44; 5) √2,25; 6) √0,0001.',
    questionPrompt: 'Обчисліть значення виразу √0,25 та √1,44:',
    expression: '1) √0,25; 2) √1,44',
    options: [
      { id: 'opt-1', label: 'А', text: '0,5 та 1,2', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '0,05 та 1,2', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '0,5 та 0,12', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '2,5 та 12', isCorrect: false }
    ],
    explanation: '0,5² = 0,25 => √0,25 = 0,5. 1,2² = 1,44 => √1,44 = 1,2.',
    essence: 'Добування кореня з десяткових дробів.'
  },

  // --- № 477. Рівняння √x = a ---
  {
    id: 'tar-477',
    topicId: 't-3-1',
    chapterId: 'ch-3',
    exerciseNumber: '№ 477',
    baseNumber: 477,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '477. Розв’яжіть рівняння: 1) √х = 5; 2) √х = 0; 3) √х = –2; 4) √х – 3 = 0; 5) 2√х = 6; 6) √х + 4 = 1.',
    questionPrompt: 'Розв’яжіть рівняння 1) √х = 5 та 3) √х = –2:',
    expression: '1) √x = 5; 2) √x = –2',
    options: [
      { id: 'opt-1', label: 'А', text: '1) x = 25; 2) розв’язків немає', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '1) x = 10; 2) x = 4', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '1) x = 25; 2) x = 4', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '1) x = ±25; 2) x = –4', isCorrect: false }
    ],
    explanation: '1) Обидві частини підносимо до квадрата: (√x)² = 5² => x = 25. 2) За означенням арифметичний квадратний корінь √x ≥ 0, тому він не може дорівнювати від\'ємному числу –2. Рівняння не має коренів.',
    essence: 'Найпростіші ірраціональні рівняння.'
  },

  // --- № 479. Рівняння x² = a ---
  {
    id: 'tar-479',
    topicId: 't-3-1',
    chapterId: 'ch-3',
    exerciseNumber: '№ 479',
    baseNumber: 479,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '479. Розв’яжіть рівняння: 1) х² = 25; 2) х² = 0,49; 3) х² = 0; 4) х² = –4; 5) х² = 7; 6) 3х² = 12.',
    questionPrompt: 'Розв’яжіть рівняння 1) х² = 25 та 4) х² = –4:',
    expression: '1) x² = 25; 2) x² = –4',
    options: [
      { id: 'opt-1', label: 'А', text: '1) x = ±5; 2) розв’язків немає', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '1) x = 5; 2) x = ±2', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '1) x = 25; 2) x = –2', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '1) x = ±5; 2) x = 2', isCorrect: false }
    ],
    explanation: '1) x² = 25 => x = ±√25 => x = 5 або x = –5. 2) Квадрат дійсного числа x² ≥ 0, тому x² = –4 не має дійсних коренів.',
    essence: 'Розв\'язування рівняння вигляду x² = a.'
  },

  // --- № 485. Сторона квадрата за площею ---
  {
    id: 'tar-485',
    topicId: 't-3-1',
    chapterId: 'ch-3',
    exerciseNumber: '№ 485',
    baseNumber: 485,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '485. Знайдіть сторону квадрата, площа якого дорівнює: 1) 64 см²; 2) 0,81 дм²; 3) 144 м²; 4) 2,25 см².',
    questionPrompt: 'Знайдіть сторону квадрата, площа якого дорівнює 64 см²:',
    expression: 'S = a² = 64 см² => a = √64',
    options: [
      { id: 'opt-1', label: 'А', text: '8 см', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '16 см', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '32 см', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '4 см', isCorrect: false }
    ],
    explanation: 'Площа квадрата S = a², звідки сторона a = √S = √64 = 8 см.',
    essence: 'Геометричний зміст квадратного кореня.'
  },

  // ========================================================
  // § 13. ВЛАСТИВОСТІ АРИФМЕТИЧНОГО КОРЕНЯ (№ 498 - № 539)
  // ========================================================

  // --- № 510. Корінь із добутку ---
  {
    id: 'tar-510',
    topicId: 't-3-2',
    chapterId: 'ch-3',
    exerciseNumber: '№ 510',
    baseNumber: 510,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '510. Обчисліть значення виразу: 1) √(25 · 64); 2) √(0,09 · 100); 3) √(4 · 121); 4) √(49 · 0,16).',
    questionPrompt: 'Обчисліть значення виразу √(25 · 64):',
    expression: '√(25 · 64)',
    options: [
      { id: 'opt-1', label: 'А', text: '40', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '80', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '20', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '1600', isCorrect: false }
    ],
    explanation: 'За теоремою про корінь з добутку: √(ab) = √a · √b = √25 · √64 = 5 · 8 = 40 (відповідь с. 339).',
    essence: 'Властивість кореня з добутку невід\'ємних множників.'
  },

  // --- № 512. Корінь із дробу ---
  {
    id: 'tar-512',
    topicId: 't-3-2',
    chapterId: 'ch-3',
    exerciseNumber: '№ 512',
    baseNumber: 512,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '512. Обчисліть значення виразу: 1) √(49 / 81); 2) √(16 / 25); 3) √(1 9/16); 4) √(2 7/9).',
    questionPrompt: 'Обчисліть значення виразу √(1 9/16):',
    expression: '√(1 9/16) = √(25 / 16)',
    options: [
      { id: 'opt-1', label: 'А', text: '5/4 = 1,25 (1 1/4)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '1 3/4', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '3/4', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '5/16', isCorrect: false }
    ],
    explanation: 'Перетворюємо мішане число в неправильний дріб: 1 9/16 = 25/16. √(25/16) = √25 / √16 = 5/4 = 1,25 (відповідь с. 339).',
    essence: 'Властивість кореня з частки.'
  },

  // --- № 516. Добуток коренів ---
  {
    id: 'tar-516',
    topicId: 't-3-2',
    chapterId: 'ch-3',
    exerciseNumber: '№ 516',
    baseNumber: 516,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '516. Обчисліть значення виразу: 1) √2 · √8; 2) √3 · √12; 3) √5 · √20; 4) √50 · √2.',
    questionPrompt: 'Обчисліть значення виразу √2 · √8:',
    expression: '√2 · √8',
    options: [
      { id: 'opt-1', label: 'А', text: '4', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '16', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '2√2', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '8', isCorrect: false }
    ],
    explanation: '√2 · √8 = √(2 · 8) = √16 = 4.',
    essence: 'Множення квадратних коренів.'
  },

  // --- № 524. Тотожність √(a²) = |a| ---
  {
    id: 'tar-524',
    topicId: 't-3-2',
    chapterId: 'ch-3',
    exerciseNumber: '№ 524',
    baseNumber: 524,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '524. Знайдіть значення виразу: 1) √(7²); 2) √((–5)²); 3) √((–13)²); 4) 2 · √((–4)²).',
    questionPrompt: 'Знайдіть значення виразу √((–5)²):',
    expression: '√((–5)²)',
    options: [
      { id: 'opt-1', label: 'А', text: '5', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '–5', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '25', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '±5', isCorrect: false }
    ],
    explanation: 'За основною тотожністю: √(a²) = |a|. Тому √((–5)²) = |–5| = 5.',
    essence: 'Тотожність корінь з квадрата дорівнює модулю числа.'
  },

  // ========================================================
  // § 14. ВИНЕСЕННЯ ТА ВНЕСЕННЯ МНОЖНИКА (№ 540 - № 577)
  // ========================================================

  // --- № 542. Винесення множника ---
  {
    id: 'tar-542',
    topicId: 't-3-5',
    chapterId: 'ch-3',
    exerciseNumber: '№ 542',
    baseNumber: 542,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '542. Винесіть множник з-під знака кореня: 1) √12; 2) √18; 3) √20; 4) √27; 5) √32; 6) √50; 7) √75; 8) √98.',
    questionPrompt: 'Винесіть множник з-під знака кореня у виразі √12 та √50:',
    expression: '1) √12; 2) √50',
    options: [
      { id: 'opt-1', label: 'А', text: '2√3 та 5√2', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '3√2 та 2√5', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '4√3 та 25√2', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '2√6 та 5√10', isCorrect: false }
    ],
    explanation: '√12 = √(4 · 3) = √4 · √3 = 2√3. √50 = √(25 · 2) = √25 · √2 = 5√2 (відповідь с. 340).',
    essence: 'Винесення множника з-під знака квадратного кореня.'
  },

  // --- № 548. Внесення множника ---
  {
    id: 'tar-548',
    topicId: 't-3-5',
    chapterId: 'ch-3',
    exerciseNumber: '№ 548',
    baseNumber: 548,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '548. Внесіть множник під знак кореня: 1) 2√3; 2) 3√2; 3) 5√2; 4) 4√5; 5) 6√2; 6) 0,5√12.',
    questionPrompt: 'Внесіть множник під знак кореня у виразі 3√2:',
    expression: '3√2',
    options: [
      { id: 'opt-1', label: 'А', text: '√18', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '√12', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '√6', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '√36', isCorrect: false }
    ],
    explanation: '3√2 = √(3² · 2) = √(9 · 2) = √18 (відповідь с. 340).',
    essence: 'Внесення додатного множника під знак кореня.'
  },

  // ========================================================
  // § 15. ТОТОЖНІ ПЕРЕТВОРЕННЯ З КОРЕНЯМИ (№ 578 - № 614)
  // ========================================================

  // --- № 580. Зведення подібних доданків з коренями ---
  {
    id: 'tar-580',
    topicId: 't-3-5',
    chapterId: 'ch-3',
    exerciseNumber: '№ 580',
    baseNumber: 580,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '580. Спростіть вираз: 1) 3√2 + 5√2; 2) 7√3 – 4√3; 3) 2√5 + √5 – 4√5; 4) √18 + √8.',
    questionPrompt: 'Спростіть вираз √18 + √8:',
    expression: '√18 + √8',
    options: [
      { id: 'opt-1', label: 'А', text: '5√2', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '√26', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '6√2', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '4√2', isCorrect: false }
    ],
    explanation: '√18 = 3√2, √8 = 2√2. Отримуємо: 3√2 + 2√2 = (3 + 2)√2 = 5√2.',
    essence: 'Зведення подібних доданків після винесення множників з-під знака кореня.'
  },

  // --- № 596. Звільнення від ірраціональності в знаменнику ---
  {
    id: 'tar-596',
    topicId: 't-3-5',
    chapterId: 'ch-3',
    exerciseNumber: '№ 596',
    baseNumber: 596,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '596. Звільніться від ірраціональності в знаменнику дробу: 1) 1 / √2; 2) 3 / √3; 3) 6 / √3; 4) 10 / √5.',
    questionPrompt: 'Звільніться від ірраціональності в знаменнику дробу 6 / √3:',
    expression: '6 / √3',
    options: [
      { id: 'opt-1', label: 'А', text: '2√3', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '6√3', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '3√2', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '√3 / 2', isCorrect: false }
    ],
    explanation: 'Множимо чисельник і знаменник на √3: (6 · √3) / (√3 · √3) = 6√3 / 3 = 2√3.',
    essence: 'Звільнення від ірраціональності в знаменнику дробу.'
  }
];
