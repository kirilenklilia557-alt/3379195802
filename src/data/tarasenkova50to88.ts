import { TextbookExercise } from '../types/textbook';

/**
 * Автентичні завдання з підручника «Алгебра 8 клас» (Н. А. Тарасенкова та ін., 2025)
 * РОЗДІЛ 2. РАЦІОНАЛЬНІ ВИРАЗИ
 * § 1. Раціональні вирази. Види раціональних виразів (№ 50 – № 84)
 * § 2. Вступні завдання та означення (№ 85 – № 88)
 */
export const TARASENKOVA_50_TO_88: TextbookExercise[] = [
  // --- Номер 50. Чи правильно, що цілим є вираз ---
  {
    id: 'tar-50-1',
    topicId: 't-2-1',
    chapterId: 'ch-2',
    exerciseNumber: '№ 50 (1)',
    baseNumber: 50,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Чи правильно, що вираз 2ab / c² є цілим виразом:',
    expression: '2ab / c²',
    options: [
      { id: 'opt-1', label: 'А', text: 'Ні, це дробовий вираз (знаменник містить змінну c)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Так, це цілий вираз', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Так, бо чисельник одночлен', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Вираз не має змісту', isCorrect: false }
    ],
    explanation: 'Вираз містить ділення на змінну c (у знаменнику c²), тому він є дробовим, а не цілим.',
    essence: 'Означення цілих і дробових виразів.'
  },
  {
    id: 'tar-50-2',
    topicId: 't-2-1',
    chapterId: 'ch-2',
    exerciseNumber: '№ 50 (2)',
    baseNumber: 50,
    partNumber: 2,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Чи правильно, що вираз 1/5 a + 3b є цілим виразом:',
    expression: '1/5 a + 3b',
    options: [
      { id: 'opt-1', label: 'А', text: 'Так, це цілий вираз (ділення лише на число 5, не на змінну)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Ні, це дробовий вираз', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Ні, це ірраціональний вираз', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Вираз не має змісту', isCorrect: false }
    ],
    explanation: 'Вираз не містить ділення на змінну (число 5 є числовим знаменником), тому він є цілим.',
    essence: 'Цілий вираз.'
  },
  {
    id: 'tar-50-3',
    topicId: 't-2-1',
    chapterId: 'ch-2',
    exerciseNumber: '№ 50 (3)',
    baseNumber: 50,
    partNumber: 3,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Чи правильно, що вираз 2a / (5 - c) є цілим виразом:',
    expression: '2a / (5 - c)',
    options: [
      { id: 'opt-1', label: 'А', text: 'Ні, це дробовий вираз (містить ділення на 5 - c)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Так, це цілий вираз', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Так, за умови c = 0', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Це числове значення', isCorrect: false }
    ],
    explanation: 'Ділення на вираз зі змінною c робить вираз дробовим.',
    essence: 'Класифікація виразів.'
  },
  {
    id: 'tar-50-4',
    topicId: 't-2-1',
    chapterId: 'ch-2',
    exerciseNumber: '№ 50 (4)',
    baseNumber: 50,
    partNumber: 4,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Чи правильно, що вираз 1/3 (a² + b²) є цілим виразом:',
    expression: '1/3 (a² + b²)',
    options: [
      { id: 'opt-1', label: 'А', text: 'Так, це цілий вираз (ділення на число 3)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Ні, це дробовий вираз', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Ні, це не раціональний вираз', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Вираз не має змісту', isCorrect: false }
    ],
    explanation: 'У знаменнику стоїть лише число 3, змінних немає, тому вираз є цілим.',
    essence: 'Цілий раціональний вираз.'
  },

  // --- Номер 51. Чи правильно, що дробовим є вираз ---
  {
    id: 'tar-51-1',
    topicId: 't-2-1',
    chapterId: 'ch-2',
    exerciseNumber: '№ 51 (1)',
    baseNumber: 51,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Чи правильно, що вираз 1 / (a + b³c²) є дробовим виразом:',
    expression: '1 / (a + b³c²)',
    options: [
      { id: 'opt-1', label: 'А', text: 'Так, це дробовий раціональний вираз', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Ні, це цілий вираз', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Ні, це звичайне число', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Вираз не раціональний', isCorrect: false }
    ],
    explanation: 'У знаменнику міститься вираз зі змінними a, b, c. Отже, вираз є дробовим.',
    essence: 'Дробовий вираз.'
  },
  {
    id: 'tar-51-2',
    topicId: 't-2-1',
    chapterId: 'ch-2',
    exerciseNumber: '№ 51 (2)',
    baseNumber: 51,
    partNumber: 2,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Чи правильно, що вираз 1/4 a³b² є дробовим виразом:',
    expression: '1/4 a³b²',
    options: [
      { id: 'opt-1', label: 'А', text: 'Ні, це цілий вираз (ділення на число 4)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Так, це дробовий вираз', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Так, бо є дробовий коефіцієнт 1/4', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Вираз не має змісту', isCorrect: false }
    ],
    explanation: 'Хоча коефіцієнт 1/4 є дробовим числом, ділення на змінну немає, тому це цілий одночлен.',
    essence: 'Цілий одночлен.'
  },
  {
    id: 'tar-51-3',
    topicId: 't-2-1',
    chapterId: 'ch-2',
    exerciseNumber: '№ 51 (3)',
    baseNumber: 51,
    partNumber: 3,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Чи правильно, що вираз 2 + a² є дробовим виразом:',
    expression: '2 + a²',
    options: [
      { id: 'opt-1', label: 'А', text: 'Ні, це цілий вираз (не містить ділення на змінну)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Так, це дробовий вираз', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Так, зі знаменником a', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Вираз невизначений', isCorrect: false }
    ],
    explanation: 'Многочлен 2 + a² не містить знаменника зі змінною, тому є цілим виразом.',
    essence: 'Цілий раціональний вираз.'
  },
  {
    id: 'tar-51-4',
    topicId: 't-2-1',
    chapterId: 'ch-2',
    exerciseNumber: '№ 51 (4)',
    baseNumber: 51,
    partNumber: 4,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Чи правильно, що вираз (a² - 1) / (a + 1) є дробовим виразом:',
    expression: '(a² - 1) / (a + 1)',
    options: [
      { id: 'opt-1', label: 'А', text: 'Так, це дробовий вираз (знаменник містить змінну a + 1)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Ні, це цілий вираз, бо скорочується до a - 1', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Ні, це одночлен', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Вираз не має змісту', isCorrect: false }
    ],
    explanation: 'Форма запису містить змінну в знаменнику (a + 1), тому за означенням вираз є дробовим.',
    essence: 'Означення дробового виразу.'
  },

  // --- Номер 52. Обчисліть значення виразу при x = 7 ---
  {
    id: 'tar-52-1',
    topicId: 't-2-1',
    chapterId: 'ch-2',
    exerciseNumber: '№ 52 (1)',
    baseNumber: 52,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Знайдіть значення виразу при x = 7:',
    expression: '(x + 3) / 5',
    options: [
      { id: 'opt-1', label: 'А', text: '2', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '10', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '2,5', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '1', isCorrect: false }
    ],
    explanation: '(7 + 3) / 5 = 10 / 5 = 2.',
    essence: 'Обчислення значення раціонального виразу.'
  },
  {
    id: 'tar-52-2',
    topicId: 't-2-1',
    chapterId: 'ch-2',
    exerciseNumber: '№ 52 (2)',
    baseNumber: 52,
    partNumber: 2,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Знайдіть значення виразу при x = 7:',
    expression: '5 / (x - 2)',
    options: [
      { id: 'opt-1', label: 'А', text: '1', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '5', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '0', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '-1', isCorrect: false }
    ],
    explanation: '5 / (7 - 2) = 5 / 5 = 1.',
    essence: 'Обчислення значення дробу.'
  },
  {
    id: 'tar-52-3',
    topicId: 't-2-1',
    chapterId: 'ch-2',
    exerciseNumber: '№ 52 (3)',
    baseNumber: 52,
    partNumber: 3,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Знайдіть значення виразу при x = 7:',
    expression: '(2x - 4) / 5',
    options: [
      { id: 'opt-1', label: 'А', text: '2', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '2,5', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '3', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '1,5', isCorrect: false }
    ],
    explanation: '(2 · 7 - 4) / 5 = (14 - 4) / 5 = 10 / 5 = 2.',
    essence: 'Обчислення значення дробу.'
  },
  {
    id: 'tar-52-4',
    topicId: 't-2-1',
    chapterId: 'ch-2',
    exerciseNumber: '№ 52 (4)',
    baseNumber: 52,
    partNumber: 4,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Знайдіть значення виразу при x = 7:',
    expression: '(x + 1) / (x - 6)',
    options: [
      { id: 'opt-1', label: 'А', text: '8', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '7', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '4', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '1', isCorrect: false }
    ],
    explanation: '(7 + 1) / (7 - 6) = 8 / 1 = 8.',
    essence: 'Обчислення значення дробу.'
  },

  // --- Номер 53. Втрата змісту дробу ---
  {
    id: 'tar-53-1',
    topicId: 't-2-1',
    chapterId: 'ch-2',
    exerciseNumber: '№ 53',
    baseNumber: 53,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'За якого значення змінної вираз 4 / (x - 6) втрачає зміст:',
    expression: '4 / (x - 6)',
    options: [
      { id: 'opt-1', label: 'А', text: 'x = 6', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x = 4', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x = 0', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x = -6', isCorrect: false }
    ],
    explanation: 'Знаменник x - 6 перетворюється на 0 при x = 6. На нуль ділити не можна, отже при x = 6 вираз втрачає зміст.',
    essence: 'Умова рівності знаменника нулю.'
  },

  // --- Номер 54. 3 / (5 + y) ---
  {
    id: 'tar-54-1',
    topicId: 't-2-1',
    chapterId: 'ch-2',
    exerciseNumber: '№ 54',
    baseNumber: 54,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'За якого значення змінної вираз 3 / (5 + y) втрачає зміст:',
    expression: '3 / (5 + y)',
    options: [
      { id: 'opt-1', label: 'А', text: 'y = -5', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'y = 5', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'y = 3', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'y = 0', isCorrect: false }
    ],
    explanation: '5 + y = 0 при y = -5. Ділення на 0 неможливе, тому при y = -5 вираз втрачає зміст.',
    essence: 'Нуль знаменника дробу.'
  },

  // --- Номер 55. ОДЗ для (4 + x) / (4 - x²) ---
  {
    id: 'tar-55-1',
    topicId: 't-2-1',
    chapterId: 'ch-2',
    exerciseNumber: '№ 55',
    baseNumber: 55,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Назвіть ОДЗ змінної x для виразу (4 + x) / (4 - x²):',
    expression: '(4 + x) / (4 - x²)',
    options: [
      { id: 'opt-1', label: 'А', text: 'x ≠ 2 і x ≠ -2', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x ≠ 4', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x ≠ -4', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Усі дійсні числа', isCorrect: false }
    ],
    explanation: 'Знаменник 4 - x² ≠ 0 => (2 - x)(2 + x) ≠ 0 => x ≠ 2 і x ≠ -2.',
    essence: 'Знаходження ОДЗ через розкладання знаменника на множники.'
  },

  // --- Номер 56. ОДЗ для (4 + b) / ((1 - b)(2 + b)) ---
  {
    id: 'tar-56-1',
    topicId: 't-2-1',
    chapterId: 'ch-2',
    exerciseNumber: '№ 56',
    baseNumber: 56,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Чи правильно вказано ОДЗ змінної b для (4 + b) / ((1 - b)(2 + b)):',
    expression: '(4 + b) / ((1 - b)(2 + b))',
    options: [
      { id: 'opt-1', label: 'А', text: 'b ≠ 1 і b ≠ -2', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'b ≠ 1', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'b ≠ 2 і b ≠ 1', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'b ≠ -4', isCorrect: false }
    ],
    explanation: '1 - b = 0 при b = 1; 2 + b = 0 при b = -2. ОДЗ: b ≠ 1 і b ≠ -2.',
    essence: 'ОДЗ добутку множників у знаменнику.'
  },

  // --- Номер 58. ОДЗ виразів ---
  {
    id: 'tar-58-1',
    topicId: 't-2-1',
    chapterId: 'ch-2',
    exerciseNumber: '№ 58 (1)',
    baseNumber: 58,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Визначте ОДЗ змінної c для виразу (2x + 1) / (3c - 1):',
    expression: '(2x + 1) / (3c - 1)',
    options: [
      { id: 'opt-1', label: 'А', text: 'c ≠ 1/3', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'c ≠ 3', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'c ≠ -1/3', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x ≠ -1/2', isCorrect: false }
    ],
    explanation: '3c - 1 ≠ 0 => 3c ≠ 1 => c ≠ 1/3.',
    essence: 'ОДЗ знаменника першого степеня.'
  },
  {
    id: 'tar-58-2',
    topicId: 't-2-1',
    chapterId: 'ch-2',
    exerciseNumber: '№ 58 (2)',
    baseNumber: 58,
    partNumber: 2,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Визначте ОДЗ змінної c для виразу (3c - 1) / (3 - c):',
    expression: '(3c - 1) / (3 - c)',
    options: [
      { id: 'opt-1', label: 'А', text: 'c ≠ 3', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'c ≠ -3', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'c ≠ 1/3', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'c будь-яке', isCorrect: false }
    ],
    explanation: '3 - c ≠ 0 => c ≠ 3.',
    essence: 'ОДЗ змінної.'
  },
  {
    id: 'tar-58-5',
    topicId: 't-2-1',
    chapterId: 'ch-2',
    exerciseNumber: '№ 58 (5)',
    baseNumber: 58,
    partNumber: 5,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Визначте ОДЗ змінної b для виразу (b² - 1) / (b² + 1):',
    expression: '(b² - 1) / (b² + 1)',
    options: [
      { id: 'opt-1', label: 'А', text: 'b — будь-яке дійсне число (b ∈ ℝ)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'b ≠ 1', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'b ≠ -1 і b ≠ 1', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'b > 0', isCorrect: false }
    ],
    explanation: 'b² ≥ 0 для будь-якого b, отже b² + 1 ≥ 1 > 0 завжди. Знаменник ніколи не дорівнює нулю. ОДЗ: будь-яке число.',
    essence: 'Знаменник, що не дорівнює нулю при жодному дійсному значенні.'
  },

  // --- Номер 62. Дріб дорівнює нулю ---
  {
    id: 'tar-62-1',
    topicId: 't-2-1',
    chapterId: 'ch-2',
    exerciseNumber: '№ 62',
    baseNumber: 62,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Чи правильно, що значення виразу (c - 1) / (3c) дорівнює 0, якщо:',
    expression: '(c - 1) / (3c) = 0',
    options: [
      { id: 'opt-1', label: 'А', text: 'c = 1', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'c = 0', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'c = 2', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'c = 0,5', isCorrect: false }
    ],
    explanation: 'Дріб дорівнює нулю, коли чисельник дорівнює нулю, а знаменник не дорівнює нулю: c - 1 = 0 => c = 1 (при цьому 3·1 ≠ 0).',
    essence: 'Умова рівності дробу нулю.'
  },

  // --- Номер 75. Задача про автомобіль ---
  {
    id: 'tar-75-1',
    topicId: 't-2-1',
    chapterId: 'ch-2',
    exerciseNumber: '№ 75',
    baseNumber: 75,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    questionPrompt: 'Автомобіль рухається зі швидкістю x км/год і проїжджає відстань (2x + 40) км. Знайдіть час руху, якщо x = 50 км/год:',
    expression: 't = (2x + 40) / x, x = 50',
    options: [
      { id: 'opt-1', label: 'А', text: '2,8 год (2 год 48 хв)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '2,5 год', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '3 год', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '2 год 40 хв', isCorrect: false }
    ],
    explanation: 'Вираз для часу: t = (2x + 40) / x. При x = 50: t = (2·50 + 40) / 50 = 140 / 50 = 2,8 год.',
    essence: 'Дробовий вираз як формула часу руху.'
  },

  // --- Номер 57. Обчислення значення дробу ---
  {
    id: 'tar-57-1',
    topicId: 't-2-1',
    chapterId: 'ch-2',
    exerciseNumber: '№ 57 (1)',
    baseNumber: 57,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Знайдіть значення дробу (1 + 2x) / 3 при x = 1:',
    expression: '(1 + 2 · 1) / 3',
    options: [
      { id: 'opt-1', label: 'А', text: '1', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '1/3', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '3', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '-1', isCorrect: false }
    ],
    explanation: '(1 + 2·1) / 3 = (1 + 2) / 3 = 3 / 3 = 1.',
    essence: 'Знаходження значення дробу при заданому значенні змінної.'
  },
  {
    id: 'tar-57-4',
    topicId: 't-2-1',
    chapterId: 'ch-2',
    exerciseNumber: '№ 57 (4)',
    baseNumber: 57,
    partNumber: 4,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Знайдіть значення дробу (1 + 2x) / 3 при x = 2,5:',
    expression: '(1 + 2 · 2,5) / 3',
    options: [
      { id: 'opt-1', label: 'А', text: '2', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '1,5', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '2,5', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '6', isCorrect: false }
    ],
    explanation: '(1 + 2·2,5) / 3 = (1 + 5) / 3 = 6 / 3 = 2.',
    essence: 'Обчислення дробового виразу.'
  },

  // --- Номер 60. Вираз із двома змінними ---
  {
    id: 'tar-60-1',
    topicId: 't-2-1',
    chapterId: 'ch-2',
    exerciseNumber: '№ 60',
    baseNumber: 60,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Знайдіть значення виразу (a + 2b) / (a - 2b) при a = 4, b = 1:',
    expression: '(4 + 2 · 1) / (4 - 2 · 1)',
    options: [
      { id: 'opt-1', label: 'А', text: '3', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '2', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '6', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '1', isCorrect: false }
    ],
    explanation: 'Чисельник: 4 + 2·1 = 6. Знаменник: 4 - 2·1 = 2. Дріб: 6 / 2 = 3.',
    essence: 'Обчислення значення виразу з двома змінними.'
  },

  // --- Номер 63. Область допустимих значень (ОДЗ) ---
  {
    id: 'tar-63-1',
    topicId: 't-2-1',
    chapterId: 'ch-2',
    exerciseNumber: '№ 63 (1)',
    baseNumber: 63,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Знайдіть область допустимих значень (ОДЗ) змінної у виразі 5 / x:',
    expression: '5 / x',
    options: [
      { id: 'opt-1', label: 'А', text: 'x ≠ 0', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x ≠ 5', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x > 0', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Будь-яке число', isCorrect: false }
    ],
    explanation: 'Знаменник дробу не може дорівнювати нулю, тому x ≠ 0.',
    essence: 'Визначення ОДЗ найпростішого дробу.'
  },
  {
    id: 'tar-63-4',
    topicId: 't-2-1',
    chapterId: 'ch-2',
    exerciseNumber: '№ 63 (4)',
    baseNumber: 63,
    partNumber: 4,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Знайдіть область допустимих значень виразу x / (x² + 1):',
    expression: 'x / (x² + 1)',
    options: [
      { id: 'opt-1', label: 'А', text: 'x — будь-яке дійсне число', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x ≠ -1', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x ≠ 1 та x ≠ -1', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x ≠ 0', isCorrect: false }
    ],
    explanation: 'Оскільки для будь-якого дійсного x маємо x² ≥ 0, то x² + 1 ≥ 1 > 0. Знаменник ніколи не дорівнює нулю, отже, x — будь-яке число.',
    essence: 'ОДЗ, де знаменник завжди строго додатний.'
  },

  // --- Номер 66. Коли дріб дорівнює нулю ---
  {
    id: 'tar-66-1',
    topicId: 't-2-1',
    chapterId: 'ch-2',
    exerciseNumber: '№ 66 (1)',
    baseNumber: 66,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'При якому значенні змінної дріб x / (x + 2) дорівнює нулю:',
    expression: 'x / (x + 2) = 0',
    options: [
      { id: 'opt-1', label: 'А', text: 'x = 0', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x = -2', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x = 2', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Таких значень немає', isCorrect: false }
    ],
    explanation: 'Дріб дорівнює 0, коли чисельник дорівнює 0, а знаменник не дорівнює 0: x = 0 (при цьому знаменник 0 + 2 = 2 ≠ 0).',
    essence: 'Умова рівності раціонального дробу нулю.'
  },
  {
    id: 'tar-66-3',
    topicId: 't-2-1',
    chapterId: 'ch-2',
    exerciseNumber: '№ 66 (3)',
    baseNumber: 66,
    partNumber: 3,
    category: 'example',
    type: 'choice',
    questionPrompt: 'При якому значенні змінної дріб (x² - 9) / (x - 3) дорівнює нулю:',
    expression: '(x² - 9) / (x - 3) = 0',
    options: [
      { id: 'opt-1', label: 'А', text: 'x = -3', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x = 3 та x = -3', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x = 3', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x = 9', isCorrect: false }
    ],
    explanation: 'Чисельник x² - 9 = 0 при x = 3 або x = -3. Але знаменник x - 3 ≠ 0, тобто x ≠ 3. Отже, єдине допустиме значення: x = -3.',
    essence: 'Урахування ОДЗ при знаходженні нулів дробу.'
  },

  // --- Номер 70. Обернена пропорційність y = 12 / x ---
  {
    id: 'tar-70-1',
    topicId: 't-2-1',
    chapterId: 'ch-2',
    exerciseNumber: '№ 70',
    baseNumber: 70,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    questionPrompt: 'Для функції y = 12 / x знайдіть значення y при x = -3 та при x = 4:',
    expression: 'y(-3) та y(4)',
    options: [
      { id: 'opt-1', label: 'А', text: 'y(-3) = -4; y(4) = 3', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'y(-3) = 4; y(4) = -3', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'y(-3) = -3; y(4) = 4', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'y(-3) = -12; y(4) = 12', isCorrect: false }
    ],
    explanation: '1) y(-3) = 12 / (-3) = -4.\n2) y(4) = 12 / 4 = 3.',
    essence: 'Таблиця значень оберненої пропорційності.'
  },

  // --- Номер 76. Складання дробу без змісту ---
  {
    id: 'tar-76-1',
    topicId: 't-2-1',
    chapterId: 'ch-2',
    exerciseNumber: '№ 76',
    baseNumber: 76,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    questionPrompt: 'Складіть раціональний дріб, який не має змісту при x = -4:',
    expression: 'Знаменник перетворюється на 0 при x = -4',
    options: [
      { id: 'opt-1', label: 'А', text: '1 / (x + 4)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '1 / (x - 4)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(x + 4) / 1', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x / (4 - x)', isCorrect: false }
    ],
    explanation: 'Дріб не має змісту, коли його знаменник дорівнює нулю. При x = -4 знаменник x + 4 = -4 + 4 = 0, тому дріб 1/(x + 4) не має змісту.',
    essence: 'Складання виразів із заданою областю допустимих значень.'
  },

  // --- Номер 80. ОДЗ модуля ---
  {
    id: 'tar-80-1',
    topicId: 't-2-1',
    chapterId: 'ch-2',
    exerciseNumber: '№ 80',
    baseNumber: 80,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Знайдіть ОДЗ виразу 1 / (|x| - 5):',
    expression: '|x| - 5 ≠ 0',
    options: [
      { id: 'opt-1', label: 'А', text: 'x ≠ 5 і x ≠ -5', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x ≠ 5', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x ≠ -5', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x > 5', isCorrect: false }
    ],
    explanation: '|x| - 5 ≠ 0 => |x| ≠ 5 => x ≠ 5 та x ≠ -5.',
    essence: 'Знаходження ОДЗ виразів з модулем.'
  },

  // --- Номер 84. Доведення завжди визначеного дробу ---
  {
    id: 'tar-84-1',
    topicId: 't-2-1',
    chapterId: 'ch-2',
    exerciseNumber: '№ 84',
    baseNumber: 84,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    questionPrompt: 'Доведіть, що дріб (n² + 1) / (n² + 2) має зміст при будь-якому значенні n:',
    expression: 'n² + 2 > 0 для всіх n',
    options: [
      { id: 'opt-1', label: 'А', text: 'Оскільки n² ≥ 0, то n² + 2 ≥ 2 > 0, отже, знаменник ніколи не дорівнює 0', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Бо чисельник і знаменник додатні тільки при n > 0', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Бо дріб можна скоротити на n²', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Тільки якщо n — натуральне число', isCorrect: false }
    ],
    explanation: 'Квадрат будь-якого дійсного числа n невід’ємний (n² ≥ 0). Додаючи 2, отримуємо n² + 2 ≥ 2 > 0. Оскільки знаменник ніколи не дорівнює нулю, дріб має зміст при будь-якому n.',
    essence: 'Доведення неперервності області допустимих значень.'
  },

  // --- Номер 85. Наведіть приклад раціонального дробу ---
  {
    id: 'tar-85-1',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 85',
    baseNumber: 85,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    questionPrompt: 'Наведіть приклад раціонального дробу:',
    expression: '16x² / (x + 3)',
    options: [
      { id: 'opt-1', label: 'А', text: '16x² / (x + 3)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '√x / 2', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '3x² + 5y', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '(x + 1) / 0', isCorrect: false }
    ],
    explanation: 'Раціональним дробом називають дріб, чисельник і знаменник якого є многочленами (де знаменник не є тотожним нулем). Приклади: (x - 1)/5, 16x²/(x + 3).',
    essence: 'Означення раціонального дробу.'
  },

  // --- Номер 86. Чи правильно, що раціональним дробом є вираз ---
  {
    id: 'tar-86-1',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 86',
    baseNumber: 86,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Чи є вираз (a - 4) / a раціональним дробом:',
    expression: '(a - 4) / a',
    options: [
      { id: 'opt-1', label: 'А', text: 'Так, це раціональний дріб (частка многочленів зі змінною в знаменнику)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Ні, це цілий вираз', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Ні, бо чисельник містить мінус', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Вираз невизначений', isCorrect: false }
    ],
    explanation: 'Чисельник a - 4 і знаменник a — многочлени. Отже, вираз є раціональним дробом.',
    essence: 'Ідентифікація раціональних дробів.'
  },

  // --- Номер 87. Домножте чисельник і знаменник (x - 1)/5 ---
  {
    id: 'tar-87-1',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 87 (1)',
    baseNumber: 87,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Домножте чисельник і знаменник дробу (x - 1)/5 на x:',
    expression: '(x - 1) / 5 · (x / x)',
    options: [
      { id: 'opt-1', label: 'А', text: '(x² - x) / (5x)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(x - 1) / (5x)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x² - 1 / 5x', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x(x - 1) / 5', isCorrect: false }
    ],
    explanation: 'Множимо чисельник: (x - 1)·x = x² - x. Множимо знаменник: 5·x = 5x. Одержуємо: (x² - x) / (5x).',
    essence: 'Основна властивість дробу: множення на спільний множник.'
  },
  {
    id: 'tar-87-6',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 87 (6)',
    baseNumber: 87,
    partNumber: 6,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Домножте чисельник і знаменник дробу (x - 1)/5 на (x + 1):',
    expression: '(x - 1) / 5 · ((x + 1) / (x + 1))',
    options: [
      { id: 'opt-1', label: 'А', text: '(x² - 1) / (5x + 5)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(x² + 1) / (5x + 5)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(x² - 1) / 5', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '(x - 1) / (5x + 5)', isCorrect: false }
    ],
    explanation: 'Чисельник: (x - 1)(x + 1) = x² - 1. Знаменник: 5(x + 1) = 5x + 5. Дріб: (x² - 1) / (5x + 5).',
    essence: 'Застосування формули різниці квадратів при домноженні дробу.'
  },

  // --- Номер 88. Домножте чисельник і знаменник (x + 1)/6 ---
  {
    id: 'tar-88-1',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 88 (1)',
    baseNumber: 88,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Домножте чисельник і знаменник дробу (x + 1)/6 на 6:',
    expression: '(x + 1) / 6 · (6 / 6)',
    options: [
      { id: 'opt-1', label: 'А', text: '(6x + 6) / 36', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(x + 1) / 36', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(6x + 1) / 36', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x + 1', isCorrect: false }
    ],
    explanation: 'Чисельник: 6·(x + 1) = 6x + 6. Знаменник: 6·6 = 36. Дріб: (6x + 6) / 36.',
    essence: 'Домноження дробу на число.'
  },
  {
    id: 'tar-88-6',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 88 (6)',
    baseNumber: 88,
    partNumber: 6,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Домножте чисельник і знаменник дробу (x + 1)/6 на (x - 1):',
    expression: '(x + 1) / 6 · ((x - 1) / (x - 1))',
    options: [
      { id: 'opt-1', label: 'А', text: '(x² - 1) / (6x - 6)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(x² + 1) / (6x - 6)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(x² - 1) / 6', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '(x + 1) / (6x - 6)', isCorrect: false }
    ],
    explanation: 'Чисельник: (x + 1)(x - 1) = x² - 1. Знаменник: 6(x - 1) = 6x - 6. Дріб: (x² - 1) / (6x - 6).',
    essence: 'Домноження дробу на многочлен.'
  }
];
