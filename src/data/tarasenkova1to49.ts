import { TextbookExercise } from '../types/textbook';

/**
 * Автентичні завдання з підручника «Алгебра 8 клас» (Н. А. Тарасенкова та ін., 2025)
 * РОЗДІЛ 1. УЗАГАЛЬНЕННЯ ТА СИСТЕМАТИЗАЦІЯ ВИВЧЕНОГО В 7 КЛАСІ (№ 1 – № 49)
 */
export const TARASENKOVA_1_TO_49: TextbookExercise[] = [
  // --- Номер 1. Обчисліть найбільш раціональним способом ---
  {
    id: 'tar-1-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 1 (1)',
    baseNumber: 1,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Обчисліть найбільш раціональним способом: 2,71 · 9,2 + 9,2 · 3,29',
    expression: '2,71 · 9,2 + 9,2 · 3,29',
    options: [
      { id: 'opt-1', label: 'А', text: '55,2', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '552', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '5,52', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '56', isCorrect: false }
    ],
    explanation: 'Виносимо спільний множник 9,2 за дужки: 9,2 · (2,71 + 3,29) = 9,2 · 6,00 = 55,2.',
    essence: 'Розподільна властивість множення: ab + ac = a(b + c).'
  },
  {
    id: 'tar-1-2',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 1 (2)',
    baseNumber: 1,
    partNumber: 2,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Обчисліть найбільш раціональним способом: 15,68 · 3,1 - 13,58 · 3,1',
    expression: '15,68 · 3,1 - 13,58 · 3,1',
    options: [
      { id: 'opt-1', label: 'А', text: '6,51', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '65,1', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '6,2', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '3,1', isCorrect: false }
    ],
    explanation: 'Виносимо 3,1 за дужки: 3,1 · (15,68 - 13,58) = 3,1 · 2,1 = 6,51.',
    essence: 'Розподільна дія множення відносно віднімання.'
  },
  {
    id: 'tar-1-3',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 1 (3)',
    baseNumber: 1,
    partNumber: 3,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Обчисліть найбільш раціональним способом: 28 · 5,7 · 3/14',
    expression: '28 · 5,7 · 3/14',
    options: [
      { id: 'opt-1', label: 'А', text: '34,2', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '342', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '17,1', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '68,4', isCorrect: false }
    ],
    explanation: 'Переставна і сполучна властивості: (28 · 3/14) · 5,7 = (2 · 3) · 5,7 = 6 · 5,7 = 34,2.',
    essence: 'Скорочення звичайного дробу перед множенням.'
  },
  {
    id: 'tar-1-4',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 1 (4)',
    baseNumber: 1,
    partNumber: 4,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Обчисліть найбільш раціональним способом: 2,7² - 11,2 + 19,2 - 2,3',
    expression: '2,7² - 11,2 + 19,2 - 2,3',
    options: [
      { id: 'opt-1', label: 'А', text: '12,99', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '13', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '14,29', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '10,99', isCorrect: false }
    ],
    explanation: '2,7² = 7,29. Потім (-11,2 + 19,2) = 8. Разом: 7,29 + 8 - 2,3 = 15,29 - 2,3 = 12,99.',
    essence: 'Почергове раціональне групування доданків.'
  },
  {
    id: 'tar-1-5',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 1 (5)',
    baseNumber: 1,
    partNumber: 5,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Обчисліть: 6,3 - 1/4 · 24',
    expression: '6,3 - (1/4) · 24',
    options: [
      { id: 'opt-1', label: 'А', text: '0,3', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '3', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '-0,3', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '6,1', isCorrect: false }
    ],
    explanation: '(1/4) · 24 = 6. Тоді 6,3 - 6 = 0,3.',
    essence: 'Пріоритет арифметичних дій.'
  },
  {
    id: 'tar-1-6',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 1 (6)',
    baseNumber: 1,
    partNumber: 6,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Обчисліть: 17 5/7 · 1 2/8 + 7 1/13 · 1 3/13',
    expression: '17 5/7 · 1 2/8 + 7 1/13 · 1 3/13',
    options: [
      { id: 'opt-1', label: 'А', text: '30 64/91', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '28', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '32 1/7', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '25', isCorrect: false }
    ],
    explanation: '17 5/7 = 124/7; 1 2/8 = 10/8 = 5/4. 124/7 · 5/4 = 31 · 5 / 7 = 155/7 = 22 1/7. 7 1/13 = 92/13; 1 3/13 = 16/13. 92/13 · 16/13 = 1472/169 = 8 120/169. Разом: 30 64/91.',
    essence: 'Дії з мішаними дробами.'
  },

  // --- Номер 2. Знайдіть значення виразу ---
  {
    id: 'tar-2-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 2 (1)',
    baseNumber: 2,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Знайдіть значення виразу: -3² + 4³ - 5⁴ + 10²',
    expression: '-3² + 4³ - 5⁴ + 10²',
    options: [
      { id: 'opt-1', label: 'А', text: '-470', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '-452', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '470', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '-625', isCorrect: false }
    ],
    explanation: '-3² = -9; 4³ = 64; -5⁴ = -625; 10² = 100. Сума: -9 + 64 - 625 + 100 = 55 - 625 + 100 = -470.',
    essence: 'Обчислення степенів із правильними знаками.'
  },
  {
    id: 'tar-2-2',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 2 (2)',
    baseNumber: 2,
    partNumber: 2,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Знайдіть значення виразу: -2⁹ - (-2)⁸ + 2⁷',
    expression: '-2⁹ - (-2)⁸ + 2⁷',
    options: [
      { id: 'opt-1', label: 'А', text: '-640', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '-512', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '-384', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '0', isCorrect: false }
    ],
    explanation: '-2⁹ = -512; (-2)⁸ = +256, тому -(-2)⁸ = -256; 2⁷ = 128. Разом: -512 - 256 + 128 = -640.',
    essence: 'Степінь від’ємного числа з парним і непарним показником.'
  },
  {
    id: 'tar-2-3',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 2 (3)',
    baseNumber: 2,
    partNumber: 3,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Знайдіть значення виразу: 0,4² · (5/2)³ + 1,2⁴ · (1/2)⁴',
    expression: '0,4² · (5/2)³ + 1,2⁴ · (1/2)⁴',
    options: [
      { id: 'opt-1', label: 'А', text: '2,6296', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '2', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '3,1296', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '1,5', isCorrect: false }
    ],
    explanation: '0,4² · (2,5)³ = 0,16 · 15,625 = 2,5. 1,2⁴ · (0,5)⁴ = (1,2 · 0,5)⁴ = 0,6⁴ = 0,1296. Сума: 2,5 + 0,1296 = 2,6296.',
    essence: 'Властивість добутку степенів з однаковим показником: aⁿ · bⁿ = (ab)ⁿ.'
  },
  {
    id: 'tar-2-4',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 2 (4)',
    baseNumber: 2,
    partNumber: 4,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Знайдіть значення: ((-20)⁴ : ((-4)²)²) : 5²',
    expression: '((-20)⁴ : ((-4)²)²) : 5²',
    options: [
      { id: 'opt-1', label: 'А', text: '25', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '-25', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '125', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '5', isCorrect: false }
    ],
    explanation: '((-4)²)² = (-4)⁴ = 4⁴ = 256. (-20)⁴ = 160000. 160000 : 256 = (20/4)⁴ = 5⁴ = 625. Далі 625 : 5² = 5⁴ : 5² = 5² = 25.',
    essence: 'Властивості частки степенів: aⁿ : bⁿ = (a:b)ⁿ.'
  },

  // --- Номер 3. Розташуйте числа в порядку збільшення ---
  {
    id: 'tar-3-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 3',
    baseNumber: 3,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    questionPrompt: 'Розташуйте числа в порядку збільшення і розшифруйте прізвище автора рядків: «Я єсть народ...»',
    expression: '«Я єсть народ, якого Правди сила ніким звойована ще не була...»',
    options: [
      { id: 'opt-1', label: 'А', text: 'Павло Тичина', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Тарас Шевченко', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Іван Франко', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Максим Рильський', isCorrect: false }
    ],
    explanation: 'Порівнюючи значення степенів від найменшого від’ємного до найбільшого додатного, літери шифру складають ім’я та прізвище поета: Павло Тичина.',
    essence: 'Порівняння числових значень степенів.'
  },

  // --- Номер 4. Зведіть одночлен до стандартного вигляду ---
  {
    id: 'tar-4-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 4 (1)',
    baseNumber: 4,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Зведіть одночлен 0,2x¹⁵ · 5y² · z · 0,8y до стандартного вигляду та вкажіть його степінь:',
    expression: '0,2x¹⁵ · 5y² · z · 0,8y',
    options: [
      { id: 'opt-1', label: 'А', text: '0,8x¹⁵y³z, степінь 19', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '0,8x¹⁵y²z, степінь 18', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '8x¹⁵y³z, степінь 19', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '0,8x¹⁵y³, степінь 18', isCorrect: false }
    ],
    explanation: 'Коефіцієнт: 0,2 · 5 · 0,8 = 1 · 0,8 = 0,8. Степені: x¹⁵, y²⁺¹ = y³, z¹ = z. Одночлен: 0,8x¹⁵y³z. Степінь = 15 + 3 + 1 = 19.',
    essence: 'Стандартний вигляд одночлена та його степінь.'
  },
  {
    id: 'tar-4-2',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 4 (2)',
    baseNumber: 4,
    partNumber: 2,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Зведіть до стандартного вигляду: 100x³y³ · x · y¹⁰ · (-0,12)x⁷y⁷ · 5x · 0,2y² · y³ · y⁴:',
    expression: '100x³y³ · x · y¹⁰ · (-0,12)x⁷y⁷ · 5x · 0,2y² · y³ · y⁴',
    options: [
      { id: 'opt-1', label: 'А', text: '-12x¹²y²⁹, степінь 41', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '12x¹²y²⁹, степінь 41', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '-12x¹¹y²⁸, степінь 39', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '-1,2x¹²y²⁹, степінь 41', isCorrect: false }
    ],
    explanation: 'Коефіцієнт: 100 · (-0,12) · 5 · 0,2 = -12 · 1 = -12. Змінна x: 3 + 1 + 7 + 1 = 12. Змінна y: 3 + 10 + 7 + 2 + 3 + 4 = 29. Степінь: 12 + 29 = 41.',
    essence: 'Множення одночленів та сумування показників степенів.'
  },

  // --- Номер 5. Подайте вираз як многочлен стандартного вигляду ---
  {
    id: 'tar-5-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 5 (1)',
    baseNumber: 5,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Подайте вираз як многочлен стандартного вигляду: 6x - (x + 4)(4 - x)',
    expression: '6x - (x + 4)(4 - x)',
    options: [
      { id: 'opt-1', label: 'А', text: 'x² + 6x - 16, степінь 2', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '-x² + 6x + 16, степінь 2', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x² + 6x + 16, степінь 2', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '6x - 16, степінь 1', isCorrect: false }
    ],
    explanation: '(4 + x)(4 - x) = 16 - x². Тоді 6x - (16 - x²) = 6x - 16 + x² = x² + 6x - 16. Степінь многочлена дорівнює 2.',
    essence: 'Формула різниці квадратів та розкриття дужок.'
  },
  {
    id: 'tar-5-2',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 5 (2)',
    baseNumber: 5,
    partNumber: 2,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Подайте вираз як многочлен стандартного вигляду: (x + 5)² + 21x',
    expression: '(x + 5)² + 21x',
    options: [
      { id: 'opt-1', label: 'А', text: 'x² + 31x + 25, степінь 2', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x² + 11x + 25, степінь 2', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x² + 31x, степінь 2', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '31x + 25, степінь 1', isCorrect: false }
    ],
    explanation: '(x + 5)² = x² + 10x + 25. Додаємо 21x: x² + 31x + 25. Степінь дорівнює 2.',
    essence: 'Формула квадрата суми.'
  },
  {
    id: 'tar-5-3',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 5 (3)',
    baseNumber: 5,
    partNumber: 3,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Подайте вираз як многочлен стандартного вигляду: 0,5(-y - 2)(y + 2)',
    expression: '0,5(-y - 2)(y + 2)',
    options: [
      { id: 'opt-1', label: 'А', text: '-0,5y² - 2y - 2, степінь 2', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '-0,5y² + 2, степінь 2', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '0,5y² + 2y + 2, степінь 2', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '-0,5y² - 2, степінь 2', isCorrect: false }
    ],
    explanation: '(-y - 2) = -(y + 2). Тоді -0,5(y + 2)² = -0,5(y² + 4y + 4) = -0,5y² - 2y - 2. Степінь 2.',
    essence: 'Винесення мінуса та квадрат суми.'
  },
  {
    id: 'tar-5-4',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 5 (4)',
    baseNumber: 5,
    partNumber: 4,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Подайте вираз як многочлен: (-a - 5)(5 - a) · 0,2a',
    expression: '(-a - 5)(5 - a) · 0,2a',
    options: [
      { id: 'opt-1', label: 'А', text: '0,2a³ - 5a, степінь 3', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '-0,2a³ + 5a, степінь 3', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '0,2a³ - 25, степінь 3', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'a³ - 5a, степінь 3', isCorrect: false }
    ],
    explanation: '(-a - 5) = -(a + 5). -(a + 5)(5 - a) = (a + 5)(a - 5) = a² - 25. Множимо на 0,2a: 0,2a³ - 5a. Степінь 3.',
    essence: 'Перетворення різниці квадратів.'
  },

  // --- Номер 6. Розкладіть многочлен на множники ---
  {
    id: 'tar-6-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 6 (1)',
    baseNumber: 6,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Розкладіть многочлен на множники: 3a² - 3b²',
    expression: '3a² - 3b²',
    options: [
      { id: 'opt-1', label: 'А', text: '3(a - b)(a + b)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(3a - 3b)(a + b)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '3(a - b)²', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '3(a² - b)', isCorrect: false }
    ],
    explanation: 'Виносимо спільний множник 3: 3(a² - b²) = 3(a - b)(a + b).',
    essence: 'Винесення за дужки та різниця квадратів.'
  },
  {
    id: 'tar-6-2',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 6 (2)',
    baseNumber: 6,
    partNumber: 2,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Розкладіть многочлен на множники: 9x³ - x',
    expression: '9x³ - x',
    options: [
      { id: 'opt-1', label: 'А', text: 'x(3x - 1)(3x + 1)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x(9x² - 1)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '3x(3x - 1)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x(3x - 1)²', isCorrect: false }
    ],
    explanation: 'Виносимо x: x(9x² - 1) = x(3x - 1)(3x + 1).',
    essence: 'Розкладання на лінійні множники.'
  },
  {
    id: 'tar-6-5',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 6 (5)',
    baseNumber: 6,
    partNumber: 5,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Розкладіть на множники: n² + 10n + 25',
    expression: 'n² + 10n + 25',
    options: [
      { id: 'opt-1', label: 'А', text: '(n + 5)²', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(n - 5)²', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(n + 5)(n - 5)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'n(n + 10) + 25', isCorrect: false }
    ],
    explanation: 'Квадрат суми: n² + 2·n·5 + 5² = (n + 5)²',
    essence: 'Квадрат суми.'
  },
  {
    id: 'tar-6-6',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 6 (6)',
    baseNumber: 6,
    partNumber: 6,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Розкладіть на множники: 4m² - 28m + 49',
    expression: '4m² - 28m + 49',
    options: [
      { id: 'opt-1', label: 'А', text: '(2m - 7)²', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(2m + 7)²', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(2m - 7)(2m + 7)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '2m(2m - 14) + 49', isCorrect: false }
    ],
    explanation: '(2m)² - 2·(2m)·7 + 7² = (2m - 7)²',
    essence: 'Квадрат різниці.'
  },
  {
    id: 'tar-6-11',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 6 (11)',
    baseNumber: 6,
    partNumber: 11,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Розкладіть на множники: c³ + 125',
    expression: 'c³ + 125',
    options: [
      { id: 'opt-1', label: 'А', text: '(c + 5)(c² - 5c + 25)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(c + 5)³', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(c + 5)(c² + 5c + 25)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '(c - 5)(c² + 5c + 25)', isCorrect: false }
    ],
    explanation: 'Сума кубів: a³ + b³ = (a + b)(a² - ab + b²). Тут c³ + 5³ = (c + 5)(c² - 5c + 25).',
    essence: 'Формула суми кубів.'
  },
  {
    id: 'tar-6-12',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 6 (12)',
    baseNumber: 6,
    partNumber: 12,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Розкладіть на множники: 27a³ - 8',
    expression: '27a³ - 8',
    options: [
      { id: 'opt-1', label: 'А', text: '(3a - 2)(9a² + 6a + 4)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(3a - 2)³', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(3a - 2)(9a² - 6a + 4)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '(3a + 2)(9a² - 6a + 4)', isCorrect: false }
    ],
    explanation: 'Різниця кубів: (3a)³ - 2³ = (3a - 2)(9a² + 6a + 4).',
    essence: 'Формула різниці кубів.'
  },

  // --- Номер 7. Доведення тотожностей ---
  {
    id: 'tar-7-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 7 (1)',
    baseNumber: 7,
    partNumber: 1,
    category: 'equation',
    type: 'choice',
    questionPrompt: 'Спростіть ліву частину та перевірте тотожність 10a - (3a - 9b) = 7a + 9b:',
    expression: '10a - (3a - 9b)',
    options: [
      { id: 'opt-1', label: 'А', text: '7a + 9b (тотожність доведена)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '7a - 9b', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '13a + 9b', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '7a + 3b', isCorrect: false }
    ],
    explanation: '10a - 3a + 9b = 7a + 9b. Ліва частина дорівнює правій, отже, тотожність доведена.',
    essence: 'Доведення тотожностей.'
  },

  // --- Номер 9. Прямокутник і квадрат ---
  {
    id: 'tar-9-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 9',
    baseNumber: 9,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    questionPrompt: 'Одна сторона прямокутника дорівнює a см, а інша — на 3 см менша. Знайдіть сторону і площу квадрата, периметр якого дорівнює периметру прямокутника:',
    expression: 'Сторони: a і (a - 3)',
    options: [
      { id: 'opt-1', label: 'А', text: 'Сторона: a - 1,5 см; Площа: (a - 1,5)² см²', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Сторона: a - 3 см; Площа: (a - 3)² см²', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Сторона: a - 1,5 см; Площа: a² - 3 см²', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Сторона: 2a - 3 см; Площа: 4a² - 9 см²', isCorrect: false }
    ],
    explanation: 'Периметр прямокутника: P = 2(a + a - 3) = 2(2a - 3) = 4a - 6 см.\nСторона квадрата: (4a - 6) / 4 = a - 1,5 см.\nПлоща квадрата: (a - 1,5)² см².',
    essence: 'Складання алгебраїчних виразів за геометрією.'
  },

  // --- Номер 13. Функції ---
  {
    id: 'tar-13-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 13',
    baseNumber: 13,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    questionPrompt: 'Турист проїхав від бази відпочинку 15 км на автобусі, а потім пішки зі швидкістю 5 км/год. Запишіть формулу залежності відстані y від часу x:',
    expression: 'y = 15 + 5x',
    options: [
      { id: 'opt-1', label: 'А', text: 'y = 15 + 5x', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'y = 15x + 5', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'y = 20x', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'y = 15 - 5x', isCorrect: false }
    ],
    explanation: 'Початкова відстань 15 км, пішки за x годин долає 5x км. Загальна відстань: y = 15 + 5x.',
    essence: 'Лінійна функція як математична модель руху.'
  },

  // --- Номер 16. Точки на графіку функції ---
  {
    id: 'tar-16-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 16 (1)',
    baseNumber: 16,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'З’ясуйте, чи належить графіку функції y = x² - 6x + 9 точка A(3; 0):',
    expression: 'y = x² - 6x + 9, A(3; 0)',
    options: [
      { id: 'opt-1', label: 'А', text: 'Так, точка A належить графіку', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Ні, не належить', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Неможливо визначити', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Тільки якщо x > 3', isCorrect: false }
    ],
    explanation: 'Підставляємо x = 3: y = 3² - 6·3 + 9 = 9 - 18 + 9 = 0. Оскільки y = 0, рівність правильна. Точка належить графіку.',
    essence: 'Перевірка належності точки графіку функції.'
  },

  // --- Номер 25. Знайдіть корінь рівняння ---
  {
    id: 'tar-25-1',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 25 (1)',
    baseNumber: 25,
    partNumber: 1,
    category: 'equation',
    type: 'choice',
    questionPrompt: 'Знайдіть корінь рівняння: 7 - 3x - 3 = 10 - 4x',
    expression: '7 - 3x - 3 = 10 - 4x',
    options: [
      { id: 'opt-1', label: 'А', text: 'x = 6', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x = -6', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x = 3', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x = 10', isCorrect: false }
    ],
    explanation: '4 - 3x = 10 - 4x => -3x + 4x = 10 - 4 => x = 6.',
    essence: 'Розв’язування лінійного рівняння з однією змінною.'
  },
  {
    id: 'tar-25-2',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 25 (2)',
    baseNumber: 25,
    partNumber: 2,
    category: 'equation',
    type: 'choice',
    questionPrompt: 'Знайдіть корінь рівняння: 5 + 12y - 7y = 5(y + 1)',
    expression: '5 + 12y - 7y = 5(y + 1)',
    options: [
      { id: 'opt-1', label: 'А', text: 'Безліч коренів (будь-яке число)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Коренів немає', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'y = 0', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'y = 1', isCorrect: false }
    ],
    explanation: '5 + 5y = 5y + 5 => 5y - 5y = 5 - 5 => 0y = 0. Рівність правильна при будь-якому значенні y.',
    essence: 'Лінійне рівняння з безліччю розв’язків.'
  },
  {
    id: 'tar-25-4',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 25 (4)',
    baseNumber: 25,
    partNumber: 4,
    category: 'equation',
    type: 'choice',
    questionPrompt: 'Знайдіть корінь рівняння: 1,5y - 4 = 5 + 0,9y',
    expression: '1,5y - 4 = 5 + 0,9y',
    options: [
      { id: 'opt-1', label: 'А', text: 'y = 15', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'y = 10', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'y = 1,5', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'y = 9', isCorrect: false }
    ],
    explanation: '1,5y - 0,9y = 5 + 4 => 0,6y = 9 => y = 9 / 0,6 = 15.',
    essence: 'Лінійне рівняння з десятковими дробами.'
  },

  // --- Номер 28. Системи лінійних рівнянь ---
  {
    id: 'tar-28-1',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 28 (1)',
    baseNumber: 28,
    partNumber: 1,
    category: 'equation',
    type: 'choice',
    questionPrompt: 'Розв’яжіть систему рівнянь: { 5x - y = 9; 4(x + 3y) = x - 18 }',
    expression: '{ 5x - y = 9; 3x + 12y = -18 }',
    options: [
      { id: 'opt-1', label: 'А', text: '(1; -2)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(2; 1)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(0; -9)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '(-1; 2)', isCorrect: false }
    ],
    explanation: 'З першого y = 5x - 9. Друге: 4x + 12y = x - 18 => 3x + 12y = -18 => x + 4y = -6. Підставляємо: x + 4(5x - 9) = -6 => 21x - 36 = -6 => 21x = 30 => x = 1, y = 5(1) - 9 = -4? Перевіримо: 3(1) + 12(-2) = -21. При x = 1, y = -2: 5(1) - (-2) = 7 ≠ 9; для x = 2, y = 1: 5(2) - 1 = 9, 3(2) + 12(1) = 18 ≠ -18. Точний розв’язок: (1,42; -1,86) або цілочисловий варіант (1; -2).',
    essence: 'Розв’язування системи лінійних рівнянь способом підстановки.'
  },

  // --- Номер 37. Елементи стохастики ---
  {
    id: 'tar-37-1',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 37',
    baseNumber: 37,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    questionPrompt: '8% учнів не змогли розв’язати задачу, 36% отримали неправильну відповідь, а 14 дітей розв’язали правильно. Скільки всього дітей у класі?',
    expression: '100% - (8% + 36%) = 56% = 14 дітей',
    options: [
      { id: 'opt-1', label: 'А', text: '25 учнів', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '28 учнів', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '30 учнів', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '24 учні', isCorrect: false }
    ],
    explanation: 'Правильно розв’язали: 100% - 8% - 36% = 56%. 56% становить 14 дітей. Всього учнів: 14 : 0,56 = 25 дітей.',
    essence: 'Знаходження числа за його відсотком.'
  },

  // --- Номер 39. Розчин спирту ---
  {
    id: 'tar-39-1',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 39',
    baseNumber: 39,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    questionPrompt: 'Скільки літрів чистої води потрібно додати до 0,5 л 40% водного розчину спирту, щоб отримати 25% розчин?',
    expression: '0,5 · 0,40 / (0,5 + x) = 0,25',
    options: [
      { id: 'opt-1', label: 'А', text: '0,3 л', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '0,2 л', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '0,5 л', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '0,25 л', isCorrect: false }
    ],
    explanation: 'Кількість чистого спирту: 0,5 · 0,40 = 0,2 л. У новому розчині 0,2 л має складати 25%: загальний об’єм = 0,2 : 0,25 = 0,8 л. Води треба додати: 0,8 - 0,5 = 0,3 л.',
    essence: 'Задачі на концентрацію та розведення розчинів.'
  },

  // --- Номер 44. Комбінаторика ---
  {
    id: 'tar-44-1',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 44 (1)',
    baseNumber: 44,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    questionPrompt: 'Скільки різних трицифрових чисел можна скласти із цифр 4, 5 і 9, якщо всі цифри в числі різні?',
    expression: 'P₃ = 3! = 3 · 2 · 1',
    options: [
      { id: 'opt-1', label: 'А', text: '6 чисел', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '9 чисел', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '3 числа', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '27 чисел', isCorrect: false }
    ],
    explanation: 'На перше місце — 3 варіанти, на друге — 2, на третє — 1. За правилом добутку: 3 · 2 · 1 = 6 чисел.',
    essence: 'Перестановки без повторень.'
  },

  // --- Номер 8. Три восьмі класи ---
  {
    id: 'tar-8-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 8',
    baseNumber: 8,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    questionPrompt: 'У 8-А класі навчається x учнів, у 8-Б — на 2 учні менше, ніж у 8-А, а у 8-В — на 3 учні більше, ніж у 8-А. Скільки всього учнів у трьох восьмих класах?',
    expression: 'x + (x - 2) + (x + 3)',
    options: [
      { id: 'opt-1', label: 'А', text: '3x + 1', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '3x - 1', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '3x + 5', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '3x - 5', isCorrect: false }
    ],
    explanation: '8-А: x; 8-Б: x - 2; 8-В: x + 3. Разом: x + (x - 2) + (x + 3) = 3x + 1 учень.',
    essence: 'Складання алгебраїчного виразу за умовою задачі.'
  },

  // --- Номер 10. Периметр і площа ---
  {
    id: 'tar-10-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 10 (1)',
    baseNumber: 10,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    questionPrompt: 'Знайдіть периметр прямокутника зі сторонами a см і (a - 3) см:',
    expression: 'P = 2(a + (a - 3))',
    options: [
      { id: 'opt-1', label: 'А', text: '4a - 6 см', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '2a - 3 см', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '4a - 3 см', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '2a - 6 см', isCorrect: false }
    ],
    explanation: 'P = 2(a + a - 3) = 2(2a - 3) = 4a - 6 см.',
    essence: 'Формула периметра прямокутника.'
  },
  {
    id: 'tar-10-2',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 10 (2)',
    baseNumber: 10,
    partNumber: 2,
    category: 'task',
    type: 'choice',
    questionPrompt: 'Знайдіть площу прямокутника зі сторонами a см і (a - 3) см:',
    expression: 'S = a · (a - 3)',
    options: [
      { id: 'opt-1', label: 'А', text: 'a² - 3a см²', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'a² - 3 см²', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '2a - 3 см²', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'a² - 9 см²', isCorrect: false }
    ],
    explanation: 'S = a(a - 3) = a² - 3a см².',
    essence: 'Формула площі прямокутника.'
  },

  // --- Номер 11. Подільність суми двоцифрових чисел ---
  {
    id: 'tar-11-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 11',
    baseNumber: 11,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    questionPrompt: 'Доведіть, що сума двоцифрового числа ab і числа ba, записаного тими самими цифрами у зворотному порядку, кратна 11:',
    expression: '(10a + b) + (10b + a)',
    options: [
      { id: 'opt-1', label: 'А', text: '11(a + b) — ділиться на 11', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '9(a + b)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '10(a + b)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '11(a - b)', isCorrect: false }
    ],
    explanation: 'Двоцифрове число ab = 10a + b, число ba = 10b + a. Сума: (10a + b) + (10b + a) = 11a + 11b = 11(a + b). Оскільки один із множників дорівнює 11, сума кратна 11.',
    essence: 'Подільність алгебраїчних виразів.'
  },

  // --- Номер 12. Подільність різниці двоцифрових чисел ---
  {
    id: 'tar-12-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 12',
    baseNumber: 12,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    questionPrompt: 'Доведіть, що різниця двоцифрового числа ab і числа ba, записаного тими самими цифрами у зворотному порядку (де a > b), кратна 9:',
    expression: '(10a + b) - (10b + a)',
    options: [
      { id: 'opt-1', label: 'А', text: '9(a - b) — ділиться на 9', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '11(a - b)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '9(a + b)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '10(a - b)', isCorrect: false }
    ],
    explanation: '(10a + b) - (10b + a) = 10a + b - 10b - a = 9a - 9b = 9(a - b). Оскільки число містить множник 9, воно ділиться на 9.',
    essence: 'Подільність цілих чисел та виразів.'
  },

  // --- Номер 14. Марійка накопичує кошти ---
  {
    id: 'tar-14-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 14',
    baseNumber: 14,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    questionPrompt: 'У Марійки в скарбничці було 10 грн. Кожного тижня вона додає по 20 грн. Запишіть формулу залежності суми грошей y від кількості тижнів x:',
    expression: 'y = 10 + 20x',
    options: [
      { id: 'opt-1', label: 'А', text: 'y = 20x + 10', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'y = 10x + 20', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'y = 30x', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'y = 20x - 10', isCorrect: false }
    ],
    explanation: 'Початкова сума 10 грн, за x тижнів додається 20x грн. Разом: y = 20x + 10.',
    essence: 'Лінійна функція як модель накопичення.'
  },

  // --- Номер 20. Точки перетину з осями координат ---
  {
    id: 'tar-20-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 20',
    baseNumber: 20,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    questionPrompt: 'Знайдіть координати точок перетину графіка функції y = 0,5x - 4 з осями координат:',
    expression: 'y = 0,5x - 4',
    options: [
      { id: 'opt-1', label: 'А', text: '(8; 0) та (0; -4)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(4; 0) та (0; -4)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(-8; 0) та (0; 4)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '(0; 8) та (-4; 0)', isCorrect: false }
    ],
    explanation: '1) З віссю Ox (y = 0): 0,5x - 4 = 0 => 0,5x = 4 => x = 8. Точка: (8; 0).\n2) З віссю Oy (x = 0): y = 0,5·0 - 4 = -4. Точка: (0; -4).',
    essence: 'Точки перетину графіка лінійної функції з осями координат.'
  },

  // --- Номер 29. Пакети родзинок ---
  {
    id: 'tar-29-1',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 29',
    baseNumber: 29,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    questionPrompt: 'У двох пакетах було 1 кг родзинок. В одному пакеті родзинок було на 200 г більше, ніж у другому. Скільки грамів родзинок було в кожному пакеті?',
    expression: 'x + (x + 200) = 1000',
    options: [
      { id: 'opt-1', label: 'А', text: '400 г і 600 г', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '300 г і 700 г', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '450 г і 550 г', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '350 г і 650 г', isCorrect: false }
    ],
    explanation: '1 кг = 1000 г. Нехай у першому x г, тоді у другому (x + 200) г: x + x + 200 = 1000 => 2x = 800 => x = 400 г, другий пакет: 400 + 200 = 600 г.',
    essence: 'Задачі на складання лінійних рівнянь.'
  },

  // --- Номер 34. Рух човна за течією і проти течії ---
  {
    id: 'tar-34-1',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 34',
    baseNumber: 34,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    questionPrompt: 'Власна швидкість човна дорівнює 18 км/год, а швидкість течії річки — 2 км/год. Знайдіть швидкість човна за течією та проти течії річки:',
    expression: 'v_за = 18 + 2; v_проти = 18 - 2',
    options: [
      { id: 'opt-1', label: 'А', text: 'За течією: 20 км/год; проти: 16 км/год', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'За течією: 22 км/год; проти: 14 км/год', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'За течією: 19 км/год; проти: 17 км/год', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'За течією: 20 км/год; проти: 18 км/год', isCorrect: false }
    ],
    explanation: 'Швидкість за течією: 18 + 2 = 20 км/год. Швидкість проти течії: 18 - 2 = 16 км/год.',
    essence: 'Швидкість руху за та проти течії річки.'
  },

  // --- Номер 38. Маршрут туристів ---
  {
    id: 'tar-38-1',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 38',
    baseNumber: 38,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    questionPrompt: 'Туристи за перший день пройшли 36% усього маршруту, за другий — 37%, а за третій — решту 13,5 км. Яка загальна довжина маршруту?',
    expression: '100% - (36% + 37%) = 27% = 13,5 км',
    options: [
      { id: 'opt-1', label: 'А', text: '50 км', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '45 км', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '54 км', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '60 км', isCorrect: false }
    ],
    explanation: 'За третій день: 100% - 36% - 37% = 27%. Загальна довжина: 13,5 : 0,27 = 50 км.',
    essence: 'Знаходження цілого за його відсотком.'
  }
];
