import { TextbookExercise } from '../types/textbook';

/**
 * Автентичні завдання з підручника «Алгебра 8 клас» (Н. А. Тарасенкова та ін., 2025)
 * § 5. Множення раціональних дробів. Піднесення раціонального дробу до степеня (№ 181 – № 210)
 * § 6. Ділення раціональних дробів (№ 211 – № 234)
 * § 7. Раціональні рівняння (№ 235 – № 250)
 */
export const TARASENKOVA_181_TO_250: TextbookExercise[] = [
  // --- Номер 181. Множення дробів ---
  {
    id: 'tar-181-1',
    topicId: 't-2-5',
    chapterId: 'ch-2',
    exerciseNumber: '№ 181',
    baseNumber: 181,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Чи правильно, що добутком дробів 2x/3 і 5/(3y) є вираз:',
    expression: '(2x / 3) · (5 / (3y))',
    options: [
      { id: 'opt-1', label: 'А', text: '10x / (9y)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '10x / (6y)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '10x / (3y)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '(2x + 5) / (3 + 3y)', isCorrect: false }
    ],
    explanation: 'Множимо чисельники: 2x · 5 = 10x. Множимо знаменники: 3 · 3y = 9y. Отримуємо: 10x / (9y).',
    essence: 'Правило множення звичайних та раціональних дробів.'
  },

  // --- Номер 182. Піднесення дробу до степеня ---
  {
    id: 'tar-182-1',
    topicId: 't-2-5',
    chapterId: 'ch-2',
    exerciseNumber: '№ 182',
    baseNumber: 182,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Чи правильно, що значення виразу (a³/5)³ дорівнює:',
    expression: '(a³ / 5)³',
    options: [
      { id: 'opt-1', label: 'А', text: 'a⁹ / 125', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'a⁶ / 125', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'a⁹ / 15', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'a⁶ / 15', isCorrect: false }
    ],
    explanation: 'Підносимо до 3-го степеня окремо чисельник і знаменник: (a³)³ = a³*³ = a⁹; 5³ = 125. Результат: a⁹ / 125.',
    essence: 'Піднесення раціонального дробу до степеня.'
  },

  // --- Номер 183. Виконайте множення ---
  {
    id: 'tar-183-1',
    topicId: 't-2-5',
    chapterId: 'ch-2',
    exerciseNumber: '№ 183 (1)',
    baseNumber: 183,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Виконайте множення дробів: (x/8) · (a/5)',
    expression: '(x / 8) · (a / 5)',
    options: [
      { id: 'opt-1', label: 'А', text: 'ax / 40', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(a + x) / 40', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'ax / 13', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '5x / (8a)', isCorrect: false }
    ],
    explanation: '(x · a) / (8 · 5) = ax / 40.',
    essence: 'Множення чисельників і знаменників.'
  },
  {
    id: 'tar-183-2',
    topicId: 't-2-5',
    chapterId: 'ch-2',
    exerciseNumber: '№ 183 (2)',
    baseNumber: 183,
    partNumber: 2,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Виконайте множення дробів: (3/y) · (4/c)',
    expression: '(3 / y) · (4 / c)',
    options: [
      { id: 'opt-1', label: 'А', text: '12 / (cy)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '7 / (c + y)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '12 / (c + y)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '3c / (4y)', isCorrect: false }
    ],
    explanation: '(3 · 4) / (y · c) = 12 / (cy).',
    essence: 'Множення чисельників і знаменників.'
  },

  // --- Номер 184. Множення зі скороченням ---
  {
    id: 'tar-184-1',
    topicId: 't-2-5',
    chapterId: 'ch-2',
    exerciseNumber: '№ 184 (1)',
    baseNumber: 184,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Виконайте множення зі скороченням: [15x² / (4y)] · [2y² / (5x)]',
    expression: '(15x² / (4y)) · (2y² / (5x))',
    options: [
      { id: 'opt-1', label: 'А', text: '3xy / 2', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '30x²y² / (20xy)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '3 / (2xy)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '6xy', isCorrect: false }
    ],
    explanation: '15 і 5 скорочуються на 5 (залишається 3 у чисельнику). 2 і 4 скорочуються на 2 (залишається 2 у знаменнику). x²/x = x, y²/y = y. Результат: 3xy / 2.',
    essence: 'Взаємне скорочення при множенні дробів.'
  },

  // --- Номер 192. Множення на многочлен ---
  {
    id: 'tar-192-1',
    topicId: 't-2-5',
    chapterId: 'ch-2',
    exerciseNumber: '№ 192',
    baseNumber: 192,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Спростіть вираз: [(x - y) / 5] · [15 / (x - y)]',
    expression: '((x - y) / 5) · (15 / (x - y))',
    options: [
      { id: 'opt-1', label: 'А', text: '3', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '3(x - y)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '1/3', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '15 / 5', isCorrect: false }
    ],
    explanation: 'Многочлени (x - y) взаємно скорочуються, 15 / 5 = 3.',
    essence: 'Скорочення спільних многочленних множників.'
  },

  // --- Номер 200. Різниця квадратів при множенні ---
  {
    id: 'tar-200-1',
    topicId: 't-2-5',
    chapterId: 'ch-2',
    exerciseNumber: '№ 200',
    baseNumber: 200,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Спростіть вираз: [(x² - 4) / (x + 1)] · [(x + 1) / (x - 2)]',
    expression: '((x² - 4) / (x + 1)) · ((x + 1) / (x - 2))',
    options: [
      { id: 'opt-1', label: 'А', text: 'x + 2', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x - 2', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(x² - 4) / (x - 2)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '1', isCorrect: false }
    ],
    explanation: 'x² - 4 = (x - 2)(x + 2). (x + 1) і (x - 2) скорочуються. Залишається x + 2 (при x ≠ -1, x ≠ 2).',
    essence: 'Розкладання на множники та скорочення.'
  },

  // --- Номер 211. Ділення раціональних дробів ---
  {
    id: 'tar-211-1',
    topicId: 't-2-5',
    chapterId: 'ch-2',
    exerciseNumber: '№ 211',
    baseNumber: 211,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Чи правильно, що часткою від ділення (2x/3) на (3/(2y)) є вираз:',
    expression: '(2x / 3) : (3 / (2y))',
    options: [
      { id: 'opt-1', label: 'А', text: '4xy / 9', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '1', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '9 / (4xy)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x / y', isCorrect: false }
    ],
    explanation: 'Ділення замінюємо множенням на обернений дріб: (2x / 3) · (2y / 3) = (2x · 2y) / (3 · 3) = 4xy / 9.',
    essence: 'Правило ділення раціональних дробів.'
  },

  // --- Номер 212. Найпростіше ділення ---
  {
    id: 'tar-212-1',
    topicId: 't-2-5',
    chapterId: 'ch-2',
    exerciseNumber: '№ 212 (1)',
    baseNumber: 212,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Виконайте ділення дробів: (1/a) : (1/b)',
    expression: '(1 / a) : (1 / b)',
    options: [
      { id: 'opt-1', label: 'А', text: 'b / a', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'a / b', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '1 / (ab)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'ab', isCorrect: false }
    ],
    explanation: '(1 / a) · (b / 1) = b / a.',
    essence: 'Множення на взаємно обернений дріб.'
  },
  {
    id: 'tar-212-2',
    topicId: 't-2-5',
    chapterId: 'ch-2',
    exerciseNumber: '№ 212 (2)',
    baseNumber: 212,
    partNumber: 2,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Виконайте ділення дробів: (2/x) : (2/y)',
    expression: '(2 / x) : (2 / y)',
    options: [
      { id: 'opt-1', label: 'А', text: 'y / x', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x / y', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '4 / (xy)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '1', isCorrect: false }
    ],
    explanation: '(2 / x) · (y / 2) = (2y) / (2x) = y / x.',
    essence: 'Ділення однакових коефіцієнтів.'
  },

  // --- Номер 214. Ділення одночленів ---
  {
    id: 'tar-214-1',
    topicId: 't-2-5',
    chapterId: 'ch-2',
    exerciseNumber: '№ 214',
    baseNumber: 214,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Виконайте ділення: [15a² / (4b)] : [5a / (8b)]',
    expression: '(15a² / (4b)) : (5a / (8b))',
    options: [
      { id: 'opt-1', label: 'А', text: '6a', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '6 / a', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '3a / 2', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '12a²b', isCorrect: false }
    ],
    explanation: '[15a² / (4b)] · [8b / (5a)] = (15 · 8 · a² · b) / (4 · 5 · a · b) = (120a²b) / (20ab) = 6a.',
    essence: 'Ділення раціональних одночленних дробів.'
  },

  // --- Номер 220. Ділення із розкладанням на множники ---
  {
    id: 'tar-220-1',
    topicId: 't-2-5',
    chapterId: 'ch-2',
    exerciseNumber: '№ 220',
    baseNumber: 220,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Виконайте ділення: [(x² - y²) / 10] : [(x - y) / 5]',
    expression: '((x² - y²) / 10) : ((x - y) / 5)',
    options: [
      { id: 'opt-1', label: 'А', text: '(x + y) / 2', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(x - y) / 2', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '2(x + y)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '(x + y) / 5', isCorrect: false }
    ],
    explanation: '[(x - y)(x + y) / 10] · [5 / (x - y)] = 5(x + y) / 10 = (x + y) / 2.',
    essence: 'Ділення на двочлен та скорочення.'
  },

  // --- Номер 235. Означення раціонального рівняння ---
  {
    id: 'tar-235-1',
    topicId: 't-2-5',
    chapterId: 'ch-2',
    exerciseNumber: '№ 235',
    baseNumber: 235,
    partNumber: 1,
    category: 'equation',
    type: 'choice',
    questionPrompt: 'Яке з поданих рівнянь є дробовим раціональним:',
    expression: '3/x + 2 = 0',
    options: [
      { id: 'opt-1', label: 'А', text: '3/x + 2 = 0 (містить змінну x у знаменнику)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x/3 + 2 = 0', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x² + 2x = 0', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '2x - 7 = 3', isCorrect: false }
    ],
    explanation: 'Рівняння, ліва або права частина якого є дробовим раціональним виразом (зі змінною в знаменнику), називається дробовим раціональним.',
    essence: 'Означення дробового раціонального рівняння.'
  },

  // --- Номер 237. Розв’язування рівняння через добуток ---
  {
    id: 'tar-237-1',
    topicId: 't-2-5',
    chapterId: 'ch-2',
    exerciseNumber: '№ 237 (1)',
    baseNumber: 237,
    partNumber: 1,
    category: 'equation',
    type: 'choice',
    questionPrompt: 'Знайдіть корені рівняння: x(x - 4) = 0',
    expression: 'x(x - 4) = 0',
    options: [
      { id: 'opt-1', label: 'А', text: 'x = 0 або x = 4', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x = 4', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x = -4', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x = 0 або x = -4', isCorrect: false }
    ],
    explanation: 'Добуток дорівнює нулю, коли хоча б один із множників дорівнює нулю: x = 0 або x - 4 = 0 => x = 4.',
    essence: 'Умова рівності добутку нулю.'
  },
  {
    id: 'tar-237-7',
    topicId: 't-2-5',
    chapterId: 'ch-2',
    exerciseNumber: '№ 237 (7)',
    baseNumber: 237,
    partNumber: 7,
    category: 'equation',
    type: 'choice',
    questionPrompt: 'Знайдіть корені рівняння: x² - 4 = 0',
    expression: 'x² - 4 = 0',
    options: [
      { id: 'opt-1', label: 'А', text: 'x = 2 і x = -2', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x = 2', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x = 4', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Коренів немає', isCorrect: false }
    ],
    explanation: '(x - 2)(x + 2) = 0 => x = 2 або x = -2.',
    essence: 'Рівняння x² = a (a > 0).'
  },

  // --- Номер 241. Дріб дорівнює нулю ---
  {
    id: 'tar-241-1',
    topicId: 't-2-5',
    chapterId: 'ch-2',
    exerciseNumber: '№ 241 (1)',
    baseNumber: 241,
    partNumber: 1,
    category: 'equation',
    type: 'choice',
    questionPrompt: 'Розв’яжіть дробове рівняння: 2x / (x + 1) = 0',
    expression: '2x / (x + 1) = 0',
    options: [
      { id: 'opt-1', label: 'А', text: 'x = 0', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x = -1', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x = 0 і x = -1', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Коренів немає', isCorrect: false }
    ],
    explanation: 'ОДЗ: x + 1 ≠ 0 => x ≠ -1. Чисельник 2x = 0 => x = 0. Перевірка: x = 0 задовольняє ОДЗ. Корінь: x = 0.',
    essence: 'Розв’язування дробового раціонального рівняння з урахуванням ОДЗ.'
  },
  {
    id: 'tar-241-2',
    topicId: 't-2-5',
    chapterId: 'ch-2',
    exerciseNumber: '№ 241 (2)',
    baseNumber: 241,
    partNumber: 2,
    category: 'equation',
    type: 'choice',
    questionPrompt: 'Розв’яжіть дробове рівняння: (x - 3) / (2x) = 0',
    expression: '(x - 3) / (2x) = 0',
    options: [
      { id: 'opt-1', label: 'А', text: 'x = 3', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x = 0', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x = -3', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x = 1,5', isCorrect: false }
    ],
    explanation: 'ОДЗ: 2x ≠ 0 => x ≠ 0. Чисельник x - 3 = 0 => x = 3. Число 3 задовольняє ОДЗ.',
    essence: 'Перевірка знаменника при розв’язуванні рівняння.'
  },

  // --- Номер 243. Рівняння, що зводяться до лінійних ---
  {
    id: 'tar-243-1',
    topicId: 't-2-5',
    chapterId: 'ch-2',
    exerciseNumber: '№ 243 (1)',
    baseNumber: 243,
    partNumber: 1,
    category: 'equation',
    type: 'choice',
    questionPrompt: 'Розв’яжіть рівняння: (x - 1) / x = 2',
    expression: '(x - 1) / x = 2',
    options: [
      { id: 'opt-1', label: 'А', text: 'x = -1', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x = 1', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x = 2', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x = 0', isCorrect: false }
    ],
    explanation: 'ОДЗ: x ≠ 0. Множимо обидві частини на x: x - 1 = 2x => x - 2x = 1 => -x = 1 => x = -1. Перевірка: (-1 - 1)/(-1) = -2/(-1) = 2.',
    essence: 'Множення на спільний знаменник.'
  },

  // --- Номер 245. Сторонній корінь через ОДЗ ---
  {
    id: 'tar-245-1',
    topicId: 't-2-5',
    chapterId: 'ch-2',
    exerciseNumber: '№ 245',
    baseNumber: 245,
    partNumber: 1,
    category: 'equation',
    type: 'choice',
    questionPrompt: 'Розв’яжіть рівняння: (x² - 4) / (x - 2) = 0',
    expression: '(x² - 4) / (x - 2) = 0',
    options: [
      { id: 'opt-1', label: 'А', text: 'x = -2 (значення x = 2 є стороннім коренем)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x = 2 і x = -2', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x = 2', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Коренів немає', isCorrect: false }
    ],
    explanation: 'ОДЗ: x - 2 ≠ 0 => x ≠ 2. Чисельник: x² - 4 = 0 => x = 2 або x = -2. Але при x = 2 знаменник перетворюється на 0, тому x = 2 — сторонній корінь. Єдиний корінь: x = -2.',
    essence: 'Виявлення сторонніх коренів дробового рівняння.'
  },

  // --- Номер 185. Множення дробів зі скороченням ---
  {
    id: 'tar-185-1',
    topicId: 't-2-5',
    chapterId: 'ch-2',
    exerciseNumber: '№ 185',
    baseNumber: 185,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Виконайте множення дробів: (2x / 3) · (9 / (4x²))',
    expression: '(2x / 3) · (9 / (4x²))',
    options: [
      { id: 'opt-1', label: 'А', text: '3 / (2x)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '18x / (12x)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '3x / 2', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '6 / x', isCorrect: false }
    ],
    explanation: '(2x · 9) / (3 · 4x²) = 18x / (12x²) = 3 / (2x) (на ОДЗ: x ≠ 0).',
    essence: 'Множення одночленних раціональних дробів.'
  },

  // --- Номер 190. Множення з розкладанням на множники ---
  {
    id: 'tar-190-1',
    topicId: 't-2-5',
    chapterId: 'ch-2',
    exerciseNumber: '№ 190',
    baseNumber: 190,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Спростіть добуток: [(a² - b²) / c] · [c² / (a + b)]',
    expression: '((a² - b²) / c) · (c² / (a + b))',
    options: [
      { id: 'opt-1', label: 'А', text: 'c(a - b)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'c(a + b)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'a - b', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'c / (a - b)', isCorrect: false }
    ],
    explanation: 'a² - b² = (a - b)(a + b). Маємо: [(a - b)(a + b) · c²] / [c · (a + b)] = c(a - b).',
    essence: 'Застосування різниці квадратів при множенні дробів.'
  },

  // --- Номер 213. Ділення одночленних дробів ---
  {
    id: 'tar-213-1',
    topicId: 't-2-5',
    chapterId: 'ch-2',
    exerciseNumber: '№ 213',
    baseNumber: 213,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Виконайте ділення дробів: (5x / y) : (10x² / y²)',
    expression: '(5x / y) : (10x² / y²)',
    options: [
      { id: 'opt-1', label: 'А', text: 'y / (2x)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '2x / y', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'y² / (2x)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '50x³ / y³', isCorrect: false }
    ],
    explanation: '(5x / y) · (y² / (10x²)) = (5x · y²) / (y · 10x²) = y / (2x).',
    essence: 'Правило ділення раціональних дробів.'
  },

  // --- Номер 222. Ділення з різницею квадратів ---
  {
    id: 'tar-222-1',
    topicId: 't-2-5',
    chapterId: 'ch-2',
    exerciseNumber: '№ 222',
    baseNumber: 222,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Виконайте ділення: [(m² - n²) / (2m)] : [(m + n) / (4m²)]',
    expression: '((m² - n²) / (2m)) : ((m + n) / (4m²))',
    options: [
      { id: 'opt-1', label: 'А', text: '2m(m - n)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '2m(m + n)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(m - n) / (2m)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '4m(m - n)', isCorrect: false }
    ],
    explanation: '[(m - n)(m + n) / 2m] · [4m² / (m + n)] = (m - n) · (4m² / 2m) = 2m(m - n).',
    essence: 'Ділення раціональних дробів зі скороченням многочленів.'
  },

  // --- Номер 236. Найпростіше дробове рівняння ---
  {
    id: 'tar-236-1',
    topicId: 't-2-5',
    chapterId: 'ch-2',
    exerciseNumber: '№ 236',
    baseNumber: 236,
    partNumber: 1,
    category: 'equation',
    type: 'choice',
    questionPrompt: 'Розв’яжіть рівняння: 6 / x = 2',
    expression: '6 / x = 2',
    options: [
      { id: 'opt-1', label: 'А', text: 'x = 3', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x = 12', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x = 1/3', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x = -3', isCorrect: false }
    ],
    explanation: 'ОДЗ: x ≠ 0. 2x = 6 => x = 3.',
    essence: 'Знаходження невідомого дільника.'
  },

  // --- Номер 238. Дробове рівняння зі змінною в чисельнику і знаменнику ---
  {
    id: 'tar-238-1',
    topicId: 't-2-5',
    chapterId: 'ch-2',
    exerciseNumber: '№ 238',
    baseNumber: 238,
    partNumber: 1,
    category: 'equation',
    type: 'choice',
    questionPrompt: 'Розв’яжіть рівняння: (x + 3) / x = 4',
    expression: '(x + 3) / x = 4',
    options: [
      { id: 'opt-1', label: 'А', text: 'x = 1', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x = 3', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x = -1', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x = 0', isCorrect: false }
    ],
    explanation: 'ОДЗ: x ≠ 0. x + 3 = 4x => 4x - x = 3 => 3x = 3 => x = 1.',
    essence: 'Зведення дробового рівняння до лінійного.'
  },

  // --- Номер 246. Рівність дробу нулю з урахуванням ОДЗ ---
  {
    id: 'tar-246-1',
    topicId: 't-2-5',
    chapterId: 'ch-2',
    exerciseNumber: '№ 246',
    baseNumber: 246,
    partNumber: 1,
    category: 'equation',
    type: 'choice',
    questionPrompt: 'Розв’яжіть рівняння: (x² - 1) / (x + 1) = 0',
    expression: '(x² - 1) / (x + 1) = 0',
    options: [
      { id: 'opt-1', label: 'А', text: 'x = 1 (число -1 є стороннім коренем)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x = 1 та x = -1', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x = -1', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Коренів немає', isCorrect: false }
    ],
    explanation: 'ОДЗ: x + 1 ≠ 0 => x ≠ -1. Чисельник: x² - 1 = 0 => x = 1 або x = -1. Значення x = -1 не входить в ОДЗ. Отже, єдиний корінь: x = 1.',
    essence: 'Перевірка ОДЗ для відкидання стороннього кореня.'
  },

  // --- Номер 248. Дробово-раціональне рівняння ---
  {
    id: 'tar-248-1',
    topicId: 't-2-5',
    chapterId: 'ch-2',
    exerciseNumber: '№ 248',
    baseNumber: 248,
    partNumber: 1,
    category: 'equation',
    type: 'choice',
    questionPrompt: 'Розв’яжіть рівняння: (2x - 5) / (x - 1) = 1',
    expression: '(2x - 5) / (x - 1) = 1',
    options: [
      { id: 'opt-1', label: 'А', text: 'x = 4', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x = 1', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x = 6', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x = 2', isCorrect: false }
    ],
    explanation: 'ОДЗ: x ≠ 1. 2x - 5 = x - 1 => 2x - x = 5 - 1 => x = 4.',
    essence: 'Розв’язування дробово-раціональних рівнянь множенням на знаменник.'
  },

  // --- Номер 250. Задача на рух по річці ---
  {
    id: 'tar-250-1',
    topicId: 't-2-5',
    chapterId: 'ch-2',
    exerciseNumber: '№ 250',
    baseNumber: 250,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    questionPrompt: 'Човен, власна швидкість якого 10 км/год, проплив 12 км проти течії і 12 км за течією, витративши на весь шлях 2,5 години. Знайдіть швидкість течії річки:',
    expression: '12 / (10 - v) + 12 / (10 + v) = 2,5',
    options: [
      { id: 'opt-1', label: 'А', text: '2 км/год', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '3 км/год', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '1,5 км/год', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '4 км/год', isCorrect: false }
    ],
    explanation: 'Нехай швидкість течії v км/год. Час проти течії: 12/(10 - v), час за течією: 12/(10 + v). Рівняння: 12/(10 - v) + 12/(10 + v) = 2,5. При v = 2: 12/8 + 12/12 = 1,5 + 1 = 2,5 год (правильно). Отже, швидкість течії річки дорівнює 2 км/год.',
    essence: 'Текстова задача на складання дробово-раціонального рівняння.'
  }
];
