import { TextbookExercise } from '../types/textbook';

/**
 * Автентичні завдання з підручника «Алгебра 8 клас» (Н. А. Тарасенкова та ін., 2025)
 * § 3. Зведення раціональних дробів до спільного знаменника (№ 114 – № 134)
 * § 4. Додавання і віднімання раціональних дробів (№ 135 – № 180)
 */
export const TARASENKOVA_114_TO_180: TextbookExercise[] = [
  // --- Номер 114. Спільний знаменник ---
  {
    id: 'tar-114-1',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 114',
    baseNumber: 114,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Чи правильно, що спільним знаменником дробів 1/(5x²) і 1/(5x) є вираз:',
    expression: '1 / (5x²) і 1 / (5x)',
    options: [
      { id: 'opt-1', label: 'А', text: '5x² (найменший спільний знаменник)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '5x', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '25x', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '25x³', isCorrect: false }
    ],
    explanation: 'Коефіцієнт 5 є спільним, змінна x береться у найвищому степені: x². Отже, спільний знаменник: 5x².',
    essence: 'Знаходження найменшого спільного знаменника одночленів.'
  },

  // --- Номер 115. Зведення дробу 1/x ---
  {
    id: 'tar-115-1',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 115 (1)',
    baseNumber: 115,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Зведіть дріб 1/x до знаменника 3x:',
    expression: '1 / x',
    options: [
      { id: 'opt-1', label: 'А', text: '3 / (3x)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '1 / (3x)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '3x / (3x)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '3 / x', isCorrect: false }
    ],
    explanation: 'Додатковий множник: 3x : x = 3. Домножуємо чисельник і знаменник на 3: 3 / (3x).',
    essence: 'Зведення дробу до нового знаменника.'
  },
  {
    id: 'tar-115-3',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 115 (3)',
    baseNumber: 115,
    partNumber: 3,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Зведіть дріб 1/x до знаменника x²:',
    expression: '1 / x',
    options: [
      { id: 'opt-1', label: 'А', text: 'x / x²', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '1 / x²', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x² / x²', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '2x / x²', isCorrect: false }
    ],
    explanation: 'Додатковий множник: x² : x = x. Одержуємо x / x².',
    essence: 'Домноження на змінну.'
  },

  // --- Номер 116. Зведення 1/(2a) ---
  {
    id: 'tar-116-1',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 116 (1)',
    baseNumber: 116,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Зведіть дріб 1/(2a) до знаменника 4a:',
    expression: '1 / (2a)',
    options: [
      { id: 'opt-1', label: 'А', text: '2 / (4a)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '1 / (4a)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '4 / (4a)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '2a / (4a)', isCorrect: false }
    ],
    explanation: '4a : 2a = 2. Множимо чисельник і знаменник на 2: 2 / (4a).',
    essence: 'Додатковий числовий множник.'
  },

  // --- Номер 121. Зведення двох дробів до спільного знаменника ---
  {
    id: 'tar-121-1',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 121 (1)',
    baseNumber: 121,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Зведіть до спільного знаменника дроби 1/8 і 1/7:',
    expression: '1/8 і 1/7',
    options: [
      { id: 'opt-1', label: 'А', text: '7/56 і 8/56', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '1/56 і 1/56', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '8/56 і 7/56', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '7/15 і 8/15', isCorrect: false }
    ],
    explanation: 'Спільний знаменник: 8 · 7 = 56. Перший дріб: (1·7)/56 = 7/56; другий: (1·8)/56 = 8/56.',
    essence: 'Спільний числовий знаменник.'
  },
  {
    id: 'tar-121-2',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 121 (2)',
    baseNumber: 121,
    partNumber: 2,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Зведіть до спільного знаменника дроби 1/a і 1/(4a):',
    expression: '1 / a і 1 / (4a)',
    options: [
      { id: 'opt-1', label: 'А', text: '4 / (4a) і 1 / (4a)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '1 / (4a) і 1 / (4a)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '4a / (4a) і 1 / (4a)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '4 / a і 1 / (4a)', isCorrect: false }
    ],
    explanation: 'Спільний знаменник 4a. Додатковий множник до першого дробу: 4. Дроби: 4/(4a) і 1/(4a).',
    essence: 'Зведення раціональних дробів з буквеним знаменником.'
  },
  {
    id: 'tar-121-3',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 121 (3)',
    baseNumber: 121,
    partNumber: 3,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Зведіть до спільного знаменника дроби 1/(2x) і 1/(6x):',
    expression: '1 / (2x) і 1 / (6x)',
    options: [
      { id: 'opt-1', label: 'А', text: '3 / (6x) і 1 / (6x)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '6 / (6x) і 1 / (6x)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '3 / (12x) і 1 / (12x)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '1 / (6x) і 3 / (6x)', isCorrect: false }
    ],
    explanation: 'Спільний знаменник 6x. Додатковий множник до 1/(2x) дорівнює 3. Результат: 3/(6x) і 1/(6x).',
    essence: 'НСК числових коефіцієнтів знаменника.'
  },

  // --- Номер 124. Спільний знаменник многочленів ---
  {
    id: 'tar-124-1',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 124 (1)',
    baseNumber: 124,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Зведіть до спільного знаменника 1/(a + 1) і 1/(2a + 2):',
    expression: '1 / (a + 1) і 1 / (2a + 2)',
    options: [
      { id: 'opt-1', label: 'А', text: '2 / [2(a + 1)] і 1 / [2(a + 1)]', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '1 / [2(a + 1)] і 1 / [2(a + 1)]', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '2 / (a + 1) і 1 / (2a + 2)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '2a / [2(a + 1)] і 1 / [2(a + 1)]', isCorrect: false }
    ],
    explanation: '2a + 2 = 2(a + 1). Спільний знаменник 2(a + 1). Додатковий множник до 1-го: 2. Дроби: 2/[2(a + 1)] і 1/[2(a + 1)].',
    essence: 'Винесення множника за дужки для знаходження СЗ.'
  },

  // --- Номер 135. Додавання 3y/(2x) + 1/(6x) ---
  {
    id: 'tar-135-1',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 135',
    baseNumber: 135,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Виконайте додавання дробів: 3y / (2x) + 1 / (6x)',
    expression: '3y / (2x) + 1 / (6x)',
    options: [
      { id: 'opt-1', label: 'А', text: '(9y + 1) / (6x)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(3y + 1) / (6x)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(3y + 1) / (8x)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '9y / (6x)', isCorrect: false }
    ],
    explanation: 'Спільний знаменник 6x. Додатковий множник до першого дробу 3: 3 · (3y) = 9y. Сума: (9y + 1) / (6x).',
    essence: 'Додавання дробів з різними знаменниками.'
  },

  // --- Номер 137. Віднімання 5/(3y) - 1/(9y) ---
  {
    id: 'tar-137-1',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 137',
    baseNumber: 137,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Виконайте віднімання дробів: 5 / (3y) - 1 / (9y)',
    expression: '5 / (3y) - 1 / (9y)',
    options: [
      { id: 'opt-1', label: 'А', text: '14 / (9y)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '4 / (9y)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '14 / (6y)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '4 / (6y)', isCorrect: false }
    ],
    explanation: 'Спільний знаменник 9y. Додатковий множник до першого дробу 3: 5 · 3 - 1 = 15 - 1 = 14. Результат: 14 / (9y).',
    essence: 'Віднімання дробів з різними знаменниками.'
  },

  // --- Номер 139. Додавання дробів з однаковими знаменниками ---
  {
    id: 'tar-139-1',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 139 (1)',
    baseNumber: 139,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Виконайте додавання дробів з однаковими знаменниками: 2/(7ab) + 3/(7ab)',
    expression: '2 / (7ab) + 3 / (7ab)',
    options: [
      { id: 'opt-1', label: 'А', text: '5 / (7ab)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '5 / (14ab)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '6 / (7ab)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '5 / (49a²b²)', isCorrect: false }
    ],
    explanation: 'Знаменник спільний 7ab. Додаємо чисельники: 2 + 3 = 5. Одержуємо 5 / (7ab).',
    essence: 'Правило додавання дробів з однаковими знаменниками.'
  },
  {
    id: 'tar-139-4',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 139 (4)',
    baseNumber: 139,
    partNumber: 4,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Виконайте додавання: 2x / (x - 2) + 3x / (x - 2)',
    expression: '2x / (x - 2) + 3x / (x - 2)',
    options: [
      { id: 'opt-1', label: 'А', text: '5x / (x - 2)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '5x / (2x - 4)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '6x² / (x - 2)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '5 / (x - 2)', isCorrect: false }
    ],
    explanation: 'Знаменник x - 2. Додаємо 2x + 3x = 5x. Одержуємо 5x / (x - 2).',
    essence: 'Додавання алгебраїчних дробів.'
  },

  // --- Номер 142. Віднімання дробів з однаковими знаменниками ---
  {
    id: 'tar-142-1',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 142 (1)',
    baseNumber: 142,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Виконайте віднімання дробів: 12 / (7x) - 3 / (7x)',
    expression: '12 / (7x) - 3 / (7x)',
    options: [
      { id: 'opt-1', label: 'А', text: '9 / (7x)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '9 / x', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '15 / (7x)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '9 / (14x)', isCorrect: false }
    ],
    explanation: 'Знаменник 7x однаковий. Віднімаємо чисельники: 12 - 3 = 9. Результат: 9 / (7x).',
    essence: 'Віднімання дробів з однаковими знаменниками.'
  },

  // --- Номер 146. Спростіть вираз ---
  {
    id: 'tar-146-1',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 146 (1)',
    baseNumber: 146,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Спростіть вираз: 5 / (5 + x) + x / (5 + x)',
    expression: '5 / (5 + x) + x / (5 + x)',
    options: [
      { id: 'opt-1', label: 'А', text: '1', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(5 + x) / 5', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '5x / (5 + x)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '0', isCorrect: false }
    ],
    explanation: '(5 + x) / (5 + x) = 1 (при x ≠ -5).',
    essence: 'Скорочення суми до одиниці.'
  },

  // --- Номер 147. Спростіть вираз з скороченням ---
  {
    id: 'tar-147-1',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 147 (1)',
    baseNumber: 147,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Спростіть вираз: 9 / (3 + x) - x² / (3 + x)',
    expression: '9 / (3 + x) - x² / (3 + x)',
    options: [
      { id: 'opt-1', label: 'А', text: '3 - x', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x - 3', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '3 + x', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '9 - x²', isCorrect: false }
    ],
    explanation: '(9 - x²) / (3 + x) = [(3 - x)(3 + x)] / (3 + x) = 3 - x (на ОДЗ: x ≠ -3).',
    essence: 'Застосування різниці квадратів після віднімання дробів.'
  },

  // --- Номер 150. Спростіть вираз з різними знаменниками ---
  {
    id: 'tar-150-1',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 150 (1)',
    baseNumber: 150,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Спростіть вираз: 2 / (5x) + 3 / (10x)',
    expression: '2 / (5x) + 3 / (10x)',
    options: [
      { id: 'opt-1', label: 'А', text: '7 / (10x)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '5 / (15x)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '1 / (2x)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '7 / (15x)', isCorrect: false }
    ],
    explanation: 'Спільний знаменник 10x. Додатковий множник до першого дробу 2: 2·2 + 3 = 4 + 3 = 7. Результат: 7 / (10x).',
    essence: 'Додавання дробів з коефіцієнтами 5 і 10.'
  },

  // --- Номер 166. Подайте у вигляді раціонального дробу ---
  {
    id: 'tar-166-1',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 166 (1)',
    baseNumber: 166,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Подайте вираз у вигляді раціонального дробу: x + 1/x',
    expression: 'x + 1 / x',
    options: [
      { id: 'opt-1', label: 'А', text: '(x² + 1) / x', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(x + 1) / x', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x² + 1', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '2x / x', isCorrect: false }
    ],
    explanation: 'x = x/1. Спільний знаменник x: (x · x + 1) / x = (x² + 1) / x.',
    essence: 'Додавання цілого виразу і дробу.'
  },
  {
    id: 'tar-166-2',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 166 (2)',
    baseNumber: 166,
    partNumber: 2,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Подайте вираз у вигляді раціонального дробу: 3x + 3/x',
    expression: '3x + 3 / x',
    options: [
      { id: 'opt-1', label: 'А', text: '(3x² + 3) / x', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '6x / x', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(3x + 3) / x', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '3(x² + 1)', isCorrect: false }
    ],
    explanation: '3x = 3x/1. Спільний знаменник x: (3x · x + 3) / x = (3x² + 3) / x.',
    essence: 'Зведення виразу до спільного знаменника x.'
  },

  // --- Номер 118. Додавання дробів з однаковими знаменниками ---
  {
    id: 'tar-118-1',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 118',
    baseNumber: 118,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Спростіть вираз: (5a - 3) / 7 + (2a + 3) / 7',
    expression: '(5a - 3) / 7 + (2a + 3) / 7',
    options: [
      { id: 'opt-1', label: 'А', text: 'a', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '7a / 14', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(7a + 6) / 7', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'a / 7', isCorrect: false }
    ],
    explanation: '(5a - 3 + 2a + 3) / 7 = 7a / 7 = a.',
    essence: 'Додавання дробів з однаковими числовими знаменниками.'
  },

  // --- Номер 122. Віднімання зі скороченням ---
  {
    id: 'tar-122-1',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 122',
    baseNumber: 122,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Виконайте віднімання: 4a / (a - 2) - 8 / (a - 2)',
    expression: '4a / (a - 2) - 8 / (a - 2)',
    options: [
      { id: 'opt-1', label: 'А', text: '4', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '4a - 8', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '4 / (a - 2)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '2', isCorrect: false }
    ],
    explanation: '(4a - 8) / (a - 2) = 4(a - 2) / (a - 2) = 4 (при a ≠ 2).',
    essence: 'Скорочення після віднімання дробів.'
  },

  // --- Номер 125. Спрощення виразу ---
  {
    id: 'tar-125-1',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 125',
    baseNumber: 125,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Спростіть дріб: (x² - 2x) / (x - 2)',
    expression: '(x² - 2x) / (x - 2)',
    options: [
      { id: 'opt-1', label: 'А', text: 'x', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x - 2', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x²', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '1', isCorrect: false }
    ],
    explanation: 'Виносимо x за дужки в чисельнику: x(x - 2) / (x - 2) = x (при x ≠ 2).',
    essence: 'Скорочення раціонального дробу.'
  },

  // --- Номер 136. Віднімання многочленів у чисельнику ---
  {
    id: 'tar-136-1',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 136',
    baseNumber: 136,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Спростіть вираз: (m - 3n) / (m + 3n) - (m - 9n) / (m + 3n)',
    expression: '(m - 3n) / (m + 3n) - (m - 9n) / (m + 3n)',
    options: [
      { id: 'opt-1', label: 'А', text: '6n / (m + 3n)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '-12n / (m + 3n)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '6n', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '0', isCorrect: false }
    ],
    explanation: '[(m - 3n) - (m - 9n)] / (m + 3n) = (m - 3n - m + 9n) / (m + 3n) = 6n / (m + 3n).',
    essence: 'Віднімання виразів у дужках у чисельнику.'
  },

  // --- Номер 138. Протилежні знаменники ---
  {
    id: 'tar-138-1',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 138',
    baseNumber: 138,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Спростіть вираз з протилежними знаменниками: a / (a - b) + b / (b - a)',
    expression: 'a / (a - b) + b / (b - a)',
    options: [
      { id: 'opt-1', label: 'А', text: '1', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '-1', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(a + b) / (a - b)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '0', isCorrect: false }
    ],
    explanation: 'Оскільки b - a = -(a - b), маємо: a / (a - b) - b / (a - b) = (a - b) / (a - b) = 1 (при a ≠ b).',
    essence: 'Зміна знака знаменника при додаванні дробів.'
  },

  // --- Номер 140. Протилежні знаменники з одиницею ---
  {
    id: 'tar-140-1',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 140',
    baseNumber: 140,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Виконайте дії: x / (x - 1) + 1 / (1 - x)',
    expression: 'x / (x - 1) + 1 / (1 - x)',
    options: [
      { id: 'opt-1', label: 'А', text: '1', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '-1', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(x + 1) / (x - 1)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x', isCorrect: false }
    ],
    explanation: 'x / (x - 1) - 1 / (x - 1) = (x - 1) / (x - 1) = 1 (при x ≠ 1).',
    essence: 'Винесення мінуса з знаменника.'
  },

  // --- Номер 155. Додавання буквених дробів ---
  {
    id: 'tar-155-1',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 155',
    baseNumber: 155,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Знайдіть суму дробів з різними знаменниками: 1/a + 1/b',
    expression: '1 / a + 1 / b',
    options: [
      { id: 'opt-1', label: 'А', text: '(a + b) / (ab)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '2 / (a + b)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '1 / (ab)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '(ab) / (a + b)', isCorrect: false }
    ],
    explanation: 'Спільний знаменник ab: додатковий множник до першого дробу b, до другого a. Сума: (b + a) / (ab).',
    essence: 'Зведення дробів до найпростішого буквеного спільного знаменника.'
  },

  // --- Номер 158. Додавання часток з числовими знаменниками ---
  {
    id: 'tar-158-1',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 158',
    baseNumber: 158,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Обчисліть: a/2 + a/3',
    expression: 'a / 2 + a / 3',
    options: [
      { id: 'opt-1', label: 'А', text: '5a / 6', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '2a / 5', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'a / 5', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '6a', isCorrect: false }
    ],
    explanation: 'Спільний знаменник 6: (3a + 2a) / 6 = 5a / 6.',
    essence: 'Додавання дробів з різними числовими знаменниками.'
  },

  // --- Номер 175. Спрощення різниці квадратів дробів ---
  {
    id: 'tar-175-1',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 175',
    baseNumber: 175,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Спростіть вираз: (x + 1)/(x - 1) - (x - 1)/(x + 1)',
    expression: '(x + 1) / (x - 1) - (x - 1) / (x + 1)',
    options: [
      { id: 'opt-1', label: 'А', text: '4x / (x² - 1)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '2 / (x² - 1)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '4 / (x² - 1)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '0', isCorrect: false }
    ],
    explanation: 'Спільний знаменник (x - 1)(x + 1) = x² - 1. Чисельник: (x + 1)² - (x - 1)² = (x² + 2x + 1) - (x² - 2x + 1) = 4x. Результат: 4x / (x² - 1).',
    essence: 'Зведення дробів до спільного знаменника за допомогою різниці квадратів.'
  }
];
