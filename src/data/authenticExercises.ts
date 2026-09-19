import { TextbookExercise } from '../types/textbook';

/**
 * Автентичні завдання з підручника «Алгебра 8 клас» (Н. А. Тарасенкова та ін., 2024/2025)
 * Тільки номери, які дійсно є в підручнику та мають відповіді в кінці («ВІДПОВІДІ», с. 330).
 * Жодних додуманих чи штучно згенерованих прикладів!
 */
export const AUTHENTIC_TOPIC_2_2_EXERCISES: TextbookExercise[] = [
  // --- № 89 (с. 20 підручника, відповіді с. 330) ---
  {
    id: 'tar-89-1',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 89 (1)',
    baseNumber: 89,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Поділіть чисельник і знаменник дробу 6x²y³ / (24xy⁴) на 6:',
    expression: '(6x²y³) / (24xy⁴)',
    options: [
      { id: 'opt-1', label: 'А', text: '(x²y³) / (4xy⁴)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(6x²y³) / (4xy⁴)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(x²y³) / (24xy⁴)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x / 4y', isCorrect: false }
    ],
    explanation: 'Ділимо чисельник 6x²y³ на 6: одержуємо x²y³. Знаменник 24xy⁴ ділимо на 6: одержуємо 4xy⁴. Результат: x²y³ / (4xy⁴).',
    essence: 'Основна властивість раціонального дробу.'
  },
  {
    id: 'tar-89-2',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 89 (2)',
    baseNumber: 89,
    partNumber: 2,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Поділіть чисельник і знаменник дробу 6x²y³ / (24xy⁴) на 2x:',
    expression: '(6x²y³) / (24xy⁴)',
    options: [
      { id: 'opt-1', label: 'А', text: '(3xy³) / (12y⁴)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(3x²y³) / (12y⁴)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(3xy) / (12y²)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '3x / 12y', isCorrect: false }
    ],
    explanation: '6x²y³ : 2x = 3xy³, 24xy⁴ : 2x = 12y⁴. Дріб: 3xy³ / (12y⁴).',
    essence: 'Ділення чисельника і знаменника на спільний одночлен.'
  },
  {
    id: 'tar-89-3',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 89 (3)',
    baseNumber: 89,
    partNumber: 3,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Поділіть чисельник і знаменник дробу 6x²y³ / (24xy⁴) на 3y:',
    expression: '(6x²y³) / (24xy⁴)',
    options: [
      { id: 'opt-1', label: 'А', text: '(2x²y²) / (8xy³)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(2x²y³) / (8xy³)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(2x²) / (8xy³)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '2x / 8y', isCorrect: false }
    ],
    explanation: '6x²y³ : 3y = 2x²y², 24xy⁴ : 3y = 8xy³. Дріб: 2x²y² / (8xy³).',
    essence: 'Ділення чисельника і знаменника на 3y.'
  },
  {
    id: 'tar-89-4',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 89 (4)',
    baseNumber: 89,
    partNumber: 4,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Поділіть чисельник і знаменник дробу 6x²y³ / (24xy⁴) на 6xy:',
    expression: '(6x²y³) / (24xy⁴)',
    options: [
      { id: 'opt-1', label: 'А', text: '(xy²) / (4y³)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x / (4y²)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(xy³) / (4y³)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'y / 4x', isCorrect: false }
    ],
    explanation: '6x²y³ : 6xy = xy², 24xy⁴ : 6xy = 4y³. Дріб: xy² / (4y³).',
    essence: 'Ділення на спільний множник 6xy.'
  },
  {
    id: 'tar-89-5',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 89 (5)',
    baseNumber: 89,
    partNumber: 5,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Поділіть чисельник і знаменник дробу 6x²y³ / (24xy⁴) на 3xy³:',
    expression: '(6x²y³) / (24xy⁴)',
    options: [
      { id: 'opt-1', label: 'А', text: '2x / 8y', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '2 / 8y', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '2x / 8', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x / 4y', isCorrect: false }
    ],
    explanation: '6x²y³ : 3xy³ = 2x, 24xy⁴ : 3xy³ = 8y. Дріб: 2x / 8y.',
    essence: 'Ділення на 3xy³.'
  },
  {
    id: 'tar-89-6',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 89 (6)',
    baseNumber: 89,
    partNumber: 6,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Поділіть чисельник і знаменник дробу 6x²y³ / (24xy⁴) на 2xy²:',
    expression: '(6x²y³) / (24xy⁴)',
    options: [
      { id: 'opt-1', label: 'А', text: '(3xy) / (12y²)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '3x / 12y', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(3xy²) / (12y²)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '3y / 12x', isCorrect: false }
    ],
    explanation: '6x²y³ : 2xy² = 3xy, 24xy⁴ : 2xy² = 12y². Дріб: 3xy / (12y²).',
    essence: 'Ділення на 2xy².'
  },

  // --- № 90 (с. 20 підручника, відповіді с. 330) ---
  {
    id: 'tar-90-1',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 90 (1)',
    baseNumber: 90,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Поділіть чисельник і знаменник дробу 8x³y⁴ / (32x²y³) на 4:',
    expression: '(8x³y⁴) / (32x²y³)',
    options: [
      { id: 'opt-1', label: 'А', text: '(2x³y⁴) / (8x²y³)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(2x³y⁴) / (32x²y³)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'xy / 4', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '(4x³y⁴) / (16x²y³)', isCorrect: false }
    ],
    explanation: '8x³y⁴ : 4 = 2x³y⁴, 32x²y³ : 4 = 8x²y³. Дріб: 2x³y⁴ / (8x²y³).',
    essence: 'Ділення на число 4.'
  },
  {
    id: 'tar-90-6',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 90 (6)',
    baseNumber: 90,
    partNumber: 6,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Поділіть чисельник і знаменник дробу 8x³y⁴ / (32x²y³) на 8x²y³ (повне скорочення):',
    expression: '(8x³y⁴) / (32x²y³)',
    options: [
      { id: 'opt-1', label: 'А', text: 'xy / 4', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x / 4y', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'y / 4', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '4xy', isCorrect: false }
    ],
    explanation: '8x³y⁴ : 8x²y³ = xy, 32x²y³ : 8x²y³ = 4. Отримуємо нескоротний дріб xy / 4.',
    essence: 'Повне скорочення раціонального дробу.'
  },

  // --- № 91 (с. 20 підручника, відповіді с. 330) ---
  {
    id: 'tar-91-1',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 91',
    baseNumber: 91,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Чи правильно виконано скорочення дробу: 5x²y³ / (25xy²) = x / (5y)?',
    expression: '(5x²y³) / (25xy²)',
    options: [
      { id: 'opt-1', label: 'А', text: 'Ні, правильно: xy / 5', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Так, скорочення виконано правильно', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Ні, правильно: x / 5', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Ні, правильно: 5xy', isCorrect: false }
    ],
    explanation: '5x²y³ : 5xy² = xy (у чисельнику!), а 25xy² : 5xy² = 5 (у знаменнику!). Отже, правильний результат xy / 5, а не x / (5y).',
    essence: 'Аналіз правильності скорочення раціонального дробу.'
  },

  // --- № 92 (с. 20 підручника, відповіді с. 330) ---
  {
    id: 'tar-92-1',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 92 (1)',
    baseNumber: 92,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Чи можна скоротити дріб 3x² / 6x³? Якщо так, то скоротіть його:',
    expression: '3x² / (6x³)',
    options: [
      { id: 'opt-1', label: 'А', text: 'Так, скорочується до 1 / (2x)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Ні, дріб нескоротний', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Так, дорівнює 2x', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Так, дорівнює x / 2', isCorrect: false }
    ],
    explanation: 'Ділимо чисельник і знаменник на 3x²: 3x² : 3x² = 1, 6x³ : 3x² = 2x. Отримуємо 1 / (2x).',
    essence: 'Скорочення дробу на спільний одночлен.'
  },
  {
    id: 'tar-92-2',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 92 (2)',
    baseNumber: 92,
    partNumber: 2,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Чи можна скоротити дріб 12y³ / 4y? Якщо так, то скоротіть його:',
    expression: '12y³ / (4y)',
    options: [
      { id: 'opt-1', label: 'А', text: 'Так, скорочується до 3y²', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Ні, дріб нескоротний', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Так, дорівнює 3y', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Так, дорівнює 1 / (3y²)', isCorrect: false }
    ],
    explanation: '12y³ : 4y = 3y².',
    essence: 'Скорочення дробу до цілого виразу.'
  },
  {
    id: 'tar-92-3',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 92 (3)',
    baseNumber: 92,
    partNumber: 3,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Чи можна скоротити дріб 5ac / 3b?',
    expression: '5ac / (3b)',
    options: [
      { id: 'opt-1', label: 'А', text: 'Ні, спільних множників немає, дріб нескоротний', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Так, скорочується на a', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Так, скорочується на c', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Так, скорочується на b', isCorrect: false }
    ],
    explanation: 'Чисельник 5ac і знаменник 3b не мають спільних числових або буквених множників, відмінних від 1. Дріб нескоротний.',
    essence: 'Ознака нескоротного дробу.'
  },

  // --- № 93 (с. 20 підручника, відповіді с. 330) ---
  {
    id: 'tar-93-1',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 93 (1)',
    baseNumber: 93,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Скоротіть дріб 16x / 8y:',
    expression: '16x / (8y)',
    options: [
      { id: 'opt-1', label: 'А', text: '2x / y', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x / 2y', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '2xy', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '8x / y', isCorrect: false }
    ],
    explanation: 'Скорочуємо коефіцієнти 16 і 8 на 8: 16:8 = 2, 8:8 = 1. Отримуємо 2x / y.',
    essence: 'Скорочення числових коефіцієнтів.'
  },
  {
    id: 'tar-93-2',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 93 (2)',
    baseNumber: 93,
    partNumber: 2,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Скоротіть дріб 15ab / 25c:',
    expression: '15ab / (25c)',
    options: [
      { id: 'opt-1', label: 'А', text: '3ab / 5c', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '5ab / 3c', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '3a / 5c', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '3b / 5', isCorrect: false }
    ],
    explanation: 'Скорочуємо 15 і 25 на 5: 15:5 = 3, 25:5 = 5. Отримуємо 3ab / 5c.',
    essence: 'Скорочення дробу.'
  },

  // --- № 94 (с. 20 підручника, відповіді с. 330) ---
  {
    id: 'tar-94-1',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 94 (1)',
    baseNumber: 94,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Скоротіть дріб 30x³y³ / 5xy:',
    expression: '30x³y³ / (5xy)',
    options: [
      { id: 'opt-1', label: 'А', text: '6x²y²', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '6xy', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '5x²y²', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '6x³y³', isCorrect: false }
    ],
    explanation: '30:5 = 6, x³:x = x², y³:y = y². Результат: 6x²y².',
    essence: 'Скорочення одночленів.'
  },
  {
    id: 'tar-94-4',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 94 (4)',
    baseNumber: 94,
    partNumber: 4,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Скоротіть дріб 6a²b / (18ab²):',
    expression: '6a²b / (18ab²)',
    options: [
      { id: 'opt-1', label: 'А', text: 'a / (3b)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '3a / b', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'a / 3', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '1 / (3ab)', isCorrect: false }
    ],
    explanation: '6:18 = 1/3, a²:a = a (у чисельнику), b:b² = 1/b (b у знаменнику). Отримуємо a / (3b).',
    essence: 'Скорочення степенів змінних.'
  },

  // --- № 95 (с. 20 підручника, відповіді с. 330) ---
  {
    id: 'tar-95-1',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 95 (1)',
    baseNumber: 95,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Скоротіть дріб 15x / 5a:',
    expression: '15x / (5a)',
    options: [
      { id: 'opt-1', label: 'А', text: '3x / a', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '3a / x', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '3x', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x / a', isCorrect: false }
    ],
    explanation: '15 і 5 скорочуються на 5: 15:5 = 3, 5:5 = 1. Отримуємо 3x / a.',
    essence: 'Скорочення на 5.'
  },
  {
    id: 'tar-95-4',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 95 (4)',
    baseNumber: 95,
    partNumber: 4,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Скоротіть дріб 36x⁴y² / (16x²y⁴):',
    expression: '36x⁴y² / (16x²y⁴)',
    options: [
      { id: 'opt-1', label: 'А', text: '9x² / (4y²)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '9y² / (4x²)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '4x² / (9y²)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '9x²y²', isCorrect: false }
    ],
    explanation: '36/16 скорочується на 4 до 9/4. x⁴/x² = x² у чисельнику, y²/y⁴ = 1/y² у знаменнику. Отримуємо 9x² / (4y²).',
    essence: 'Скорочення коефіцієнтів та степенів.'
  },

  // --- № 96 (с. 20 підручника, відповіді с. 330) ---
  {
    id: 'tar-96-1',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 96 (1)',
    baseNumber: 96,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Скоротіть дріб (3x - 3y) / 6x:',
    expression: '(3x - 3y) / (6x)',
    options: [
      { id: 'opt-1', label: 'А', text: '(x - y) / 2x', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(x - 3y) / 2x', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '-y / 2', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '(x - y) / 6', isCorrect: false }
    ],
    explanation: 'Виносимо 3 у чисельнику: 3(x - y) / 6x. Скорочуємо 3 і 6 на 3: (x - y) / 2x.',
    essence: 'Винесення спільного множника в чисельнику.'
  },
  {
    id: 'tar-96-4',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 96 (4)',
    baseNumber: 96,
    partNumber: 4,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Скоротіть дріб (ab + bc) / 6b:',
    expression: '(ab + bc) / (6b)',
    options: [
      { id: 'opt-1', label: 'А', text: '(a + c) / 6', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(a + bc) / 6', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'ac / 6', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '(a + c) / 6b', isCorrect: false }
    ],
    explanation: 'b(a + c) / 6b = (a + c) / 6 (скорочуємо на b).',
    essence: 'Винесення спільного множника b.'
  },

  // --- № 97 (с. 20 підручника, відповіді с. 330) ---
  {
    id: 'tar-97-1',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 97 (1)',
    baseNumber: 97,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Скоротіть дріб (3x - 3y) / (x - y):',
    expression: '(3x - 3y) / (x - y)',
    options: [
      { id: 'opt-1', label: 'А', text: '3', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '1/3', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '3(x - y)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x - y', isCorrect: false }
    ],
    explanation: '3(x - y) / (x - y) = 3.',
    essence: 'Скорочення однакових многочленів.'
  },
  {
    id: 'tar-97-4',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 97 (4)',
    baseNumber: 97,
    partNumber: 4,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Скоротіть дріб (5a - 5b) / (b - a):',
    expression: '(5a - 5b) / (b - a)',
    options: [
      { id: 'opt-1', label: 'А', text: '-5', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '5', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '-1', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '1', isCorrect: false }
    ],
    explanation: '5(a - b) / -(a - b) = -5.',
    essence: 'Зміна знака при скороченні протилежних виразів: (a - b) / (b - a) = -1.'
  },

  // --- № 98 (с. 20 підручника, відповіді с. 330) ---
  {
    id: 'tar-98-4',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 98 (4)',
    baseNumber: 98,
    partNumber: 4,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Скоротіть дріб (6y - 6z) / (y - z):',
    expression: '(6y - 6z) / (y - z)',
    options: [
      { id: 'opt-1', label: 'А', text: '6', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '1/6', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '-6', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '6(y - z)', isCorrect: false }
    ],
    explanation: '6(y - z) / (y - z) = 6.',
    essence: 'Винесення множника 6.'
  },

  // --- № 99 (с. 20 підручника, відповіді с. 330) ---
  {
    id: 'tar-99-1',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 99 (1)',
    baseNumber: 99,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Скоротіть дріб 3x³ / (x³ - x²):',
    expression: '3x³ / (x³ - x²)',
    options: [
      { id: 'opt-1', label: 'А', text: '3x / (x - 1)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '3 / (x - 1)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '3x / (1 - x)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '3x²', isCorrect: false }
    ],
    explanation: '3x³ / [x²(x - 1)] = 3x / (x - 1).',
    essence: 'Винесення x² у знаменнику.'
  },

  // --- № 100 (с. 20 підручника, відповіді с. 330) ---
  {
    id: 'tar-100-1',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 100 (1)',
    baseNumber: 100,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Скоротіть дріб (7x³ - 7x²) / (x² - x):',
    expression: '(7x³ - 7x²) / (x² - x)',
    options: [
      { id: 'opt-1', label: 'А', text: '7x', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '7', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '7x²', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x / 7', isCorrect: false }
    ],
    explanation: '7x²(x - 1) / [x(x - 1)] = 7x² / x = 7x.',
    essence: 'Розкладання чисельника і знаменника на множники.'
  },

  // --- № 101 (с. 21 підручника, відповіді с. 330) ---
  {
    id: 'tar-101-3',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 101 (3)',
    baseNumber: 101,
    partNumber: 3,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Скоротіть дріб (8x⁴ - 8x²) / (2x³ - 2x):',
    expression: '(8x⁴ - 8x²) / (2x³ - 2x)',
    options: [
      { id: 'opt-1', label: 'А', text: '4x', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '4x²', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '4', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '2x', isCorrect: false }
    ],
    explanation: '8x²(x² - 1) / [2x(x² - 1)] = 8x² / 2x = 4x.',
    essence: 'Винесення спільних множників.'
  },

  // --- № 102 (с. 21 підручника, відповіді с. 330) ---
  {
    id: 'tar-102-1',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 102 (1)',
    baseNumber: 102,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Скоротіть дріб (x⁴ - x²) / (x⁴ + x³):',
    expression: '(x⁴ - x²) / (x⁴ + x³)',
    options: [
      { id: 'opt-1', label: 'А', text: '(x - 1) / x', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(x + 1) / x', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(x - 1) / x²', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '1 - x', isCorrect: false }
    ],
    explanation: 'x²(x - 1)(x + 1) / [x³(x + 1)] = (x - 1) / x.',
    essence: 'Застосування формули різниці квадратів.'
  },
  {
    id: 'tar-102-3',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 102 (3)',
    baseNumber: 102,
    partNumber: 3,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Скоротіть дріб (a² - 9b²) / (2a + 6b):',
    expression: '(a² - 9b²) / (2a + 6b)',
    options: [
      { id: 'opt-1', label: 'А', text: '(a - 3b) / 2', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(a + 3b) / 2', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'a - 3b', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '(a - 3b) / 4', isCorrect: false }
    ],
    explanation: '(a - 3b)(a + 3b) / [2(a + 3b)] = (a - 3b) / 2.',
    essence: 'Формула різниці квадратів a² - 9b² = (a - 3b)(a + 3b).'
  },

  // --- № 103 (с. 21 підручника, відповіді с. 330) ---
  {
    id: 'tar-103-1',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 103 (1)',
    baseNumber: 103,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Скоротіть дріб (x³ - 2x² + x) / (x³ - x²):',
    expression: '(x³ - 2x² + x) / (x³ - x²)',
    options: [
      { id: 'opt-1', label: 'А', text: '(x - 1) / x', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x - 1', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(x + 1) / x', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '1 / x', isCorrect: false }
    ],
    explanation: 'x(x² - 2x + 1) / [x²(x - 1)] = x(x - 1)² / [x²(x - 1)] = (x - 1) / x.',
    essence: 'Квадрат різниці (x - 1)² у чисельнику.'
  },

  // --- № 104 (с. 21 підручника, відповіді с. 330) ---
  {
    id: 'tar-104-1',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 104 (1)',
    baseNumber: 104,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Скоротіть дріб (x² - y²) / (x²y + xy²):',
    expression: '(x² - y²) / (x²y + xy²)',
    options: [
      { id: 'opt-1', label: 'А', text: '(x - y) / xy', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(x + y) / xy', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x - y', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '1 / xy', isCorrect: false }
    ],
    explanation: '(x - y)(x + y) / [xy(x + y)] = (x - y) / xy.',
    essence: 'Різниця квадратів та спільний множник xy.'
  },

  // --- № 105 (с. 21 підручника, відповіді с. 330) ---
  {
    id: 'tar-105-1',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 105 (1)',
    baseNumber: 105,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Скоротіть дріб (x³ - 1) / (x³ - x²):',
    expression: '(x³ - 1) / (x³ - x²)',
    options: [
      { id: 'opt-1', label: 'А', text: '(x² + x + 1) / x²', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(x - 1) / x²', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x² + x + 1', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '(x² - x + 1) / x²', isCorrect: false }
    ],
    explanation: '(x - 1)(x² + x + 1) / [x²(x - 1)] = (x² + x + 1) / x².',
    essence: 'Формула різниці кубів a³ - b³ = (a - b)(a² + ab + b²).'
  },

  // --- № 106 (с. 21 підручника, відповіді с. 330) ---
  {
    id: 'tar-106-1',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 106 (1)',
    baseNumber: 106,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Скоротіть дріб (a² - b² - c² - 2bc) / (a² + b² - c² - 2ab):',
    expression: '(a² - (b + c)²) / ((a - b)² - c²)',
    options: [
      { id: 'opt-1', label: 'А', text: '(a + b + c) / (a - b + c)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(a - b - c) / (a + b - c)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '1', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '(a + b) / (a - b)', isCorrect: false }
    ],
    explanation: 'Чисельник: a² - (b + c)² = (a - b - c)(a + b + c). Знаменник: (a - b)² - c² = (a - b - c)(a - b + c). Скорочуємо на (a - b - c): одержуємо (a + b + c) / (a - b + c).',
    essence: 'Спосіб групування та формула різниці квадратів.'
  },

  // --- № 107 (с. 21 підручника, відповіді с. 330) ---
  {
    id: 'tar-107-1',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 107 (1)',
    baseNumber: 107,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Скоротіть дріб ((x + y)² - 4xy) / (x² - xy):',
    expression: '((x + y)² - 4xy) / (x² - xy)',
    options: [
      { id: 'opt-1', label: 'А', text: '(x - y) / x', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(x + y) / x', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x - y', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '4xy', isCorrect: false }
    ],
    explanation: '(x + y)² - 4xy = x² + 2xy + y² - 4xy = x² - 2xy + y² = (x - y)². Тоді (x - y)² / [x(x - y)] = (x - y) / x.',
    essence: 'Спрощення чисельника до повного квадрата.'
  },

  // --- № 110 (с. 21 підручника, відповіді с. 330) ---
  {
    id: 'tar-110-1',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 110 (1)',
    baseNumber: 110,
    partNumber: 1,
    category: 'equation',
    type: 'choice',
    questionPrompt: 'Розв’яжіть дробове рівняння: (x² - 25) / (x + 5) = 0:',
    expression: '(x² - 25) / (x + 5) = 0',
    options: [
      { id: 'opt-1', label: 'А', text: 'x = 5', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x = ±5', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x = -5', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Коренів немає', isCorrect: false }
    ],
    explanation: 'ОДЗ: x + 5 ≠ 0 => x ≠ -5. Дріб дорівнює нулю, коли чисельник x² - 25 = 0 => x = ±5. Враховуючи ОДЗ, корінь x = -5 є стороннім. Отже, x = 5.',
    essence: 'Розв’язування дробових рівнянь з урахуванням ОДЗ.'
  },
  {
    id: 'tar-110-3',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 110 (3)',
    baseNumber: 110,
    partNumber: 3,
    category: 'equation',
    type: 'choice',
    questionPrompt: 'Розв’яжіть рівняння: (6x - 1) / (3 - 18x) = 1/3:',
    expression: '(6x - 1) / (3 - 18x) = 1/3',
    options: [
      { id: 'opt-1', label: 'А', text: 'Коренів немає', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x = 1/6', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x = 0', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Будь-яке число', isCorrect: false }
    ],
    explanation: 'ОДЗ: 3 - 18x ≠ 0 => x ≠ 1/6. За властивістю пропорції: 3(6x - 1) = 3 - 18x => 18x - 3 = 3 - 18x => 36x = 6 => x = 1/6. Але x = 1/6 не входить в ОДЗ (знаменник стає нулем). Відповідь: коренів немає.',
    essence: 'Перевірка сторонніх коренів за ОДЗ.'
  },

  // --- № 111* (с. 21 підручника, відповіді с. 330) ---
  {
    id: 'tar-111-1',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 111 (1)',
    baseNumber: 111,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Скоротіть дріб (x² - 3x + 2) / (x² - 5x + 6):',
    expression: '(x² - 3x + 2) / (x² - 5x + 6)',
    options: [
      { id: 'opt-1', label: 'А', text: '(x - 1) / (x - 3)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(x - 2) / (x - 3)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(x + 1) / (x + 3)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '1/3', isCorrect: false }
    ],
    explanation: 'Чисельник: (x - 1)(x - 2). Знаменник: (x - 2)(x - 3). Скорочуємо на (x - 2): одержуємо (x - 1) / (x - 3).',
    essence: 'Розкладання квадратного тричлена на множники.'
  },

  // --- № 112* (с. 21 підручника, відповіді с. 330) ---
  {
    id: 'tar-112-1',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 112 (1)',
    baseNumber: 112,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'З’ясуйте вигляд графіка функції y = x² / |x|:',
    expression: 'y = x² / |x|',
    options: [
      { id: 'opt-1', label: 'А', text: 'Пряма y = x при x > 0 та y = -x при x < 0 (з виколотою точкою x = 0)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Парабола y = x²', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Пряма y = 1', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Гіпербола y = 1/x', isCorrect: false }
    ],
    explanation: 'ОДЗ: x ≠ 0. Якщо x > 0, |x| = x, тоді y = x²/x = x. Якщо x < 0, |x| = -x, тоді y = x²/(-x) = -x. Точка (0;0) виколота.',
    essence: 'Побудова графіків функцій з модулем після скорочення.'
  },

  // --- № 113 (с. 21 підручника, відповіді с. 330) ---
  {
    id: 'tar-113-1',
    topicId: 't-2-2',
    chapterId: 'ch-2',
    exerciseNumber: '№ 113',
    baseNumber: 113,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    questionPrompt: 'Застосуйте на практиці: з листа ДВП виготовляють коробку. Скоротіть відношення (x - 10)(x - 20) / ((x - 10)(x - 30)):',
    expression: '((x - 10)(x - 20)) / ((x - 10)(x - 30))',
    options: [
      { id: 'opt-1', label: 'А', text: '(x - 20) / (x - 30)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(x - 10) / (x - 30)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '2/3', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '(x - 30) / (x - 20)', isCorrect: false }
    ],
    explanation: 'Скорочуємо однаковий множник (x - 10): одержуємо (x - 20) / (x - 30) (при x ≠ 10, x ≠ 30).',
    essence: 'Практичне застосування скорочення раціональних дробів.'
  }
];
