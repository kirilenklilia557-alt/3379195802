import { TextbookExercise } from '../types/textbook';
import { TARASENKOVA_1_TO_49 } from './tarasenkova1to49';
import { TARASENKOVA_1_TO_49_ADDITIONS } from './tarasenkova1to49Additions';
import { TARASENKOVA_50_TO_88 } from './tarasenkova50to88';
import { AUTHENTIC_TOPIC_2_2_EXERCISES } from './authenticExercises';
import { TARASENKOVA_114_TO_180 } from './tarasenkova114to180';
import { TARASENKOVA_181_TO_250 } from './tarasenkova181to250';
import { TARASENKOVA_CHAPTER_3_TASKS } from './tarasenkovaChapter3Tasks';
import { TARASENKOVA_CHAPTER_4_TASKS } from './tarasenkovaChapter4Tasks';
import { TARASENKOVA_CHAPTER_5_TASKS } from './tarasenkovaChapter5Tasks';
import { TARASENKOVA_WORD_PROBLEMS } from './tarasenkovaWordProblems';

export interface TextbookInfo {
  id: 'merzlyak' | 'tarasenkova' | 'ister';
  name: string;
  authors: string;
  grade: string;
  badge: string;
  icon: string;
  accentColor: string;
  description: string;
}

export const SUPPORTED_TEXTBOOKS: TextbookInfo[] = [
  {
    id: 'tarasenkova',
    name: 'Алгебра 8 клас (НУШ)',
    authors: 'Н. А. Тарасенкова, І. М. Богатирьова, О. М. Коломієць, З. О. Сердюк',
    grade: '8 клас',
    badge: 'Офіційний підручник НУШ (Оріон)',
    icon: '📙',
    accentColor: 'emerald',
    description: 'Підручник за програмою НУШ. Автентичні завдання: № 1 (2,71·9,2+9,2·3,29), № 2–49, Розділ 2 (№ 50–113).'
  },
  {
    id: 'merzlyak',
    name: 'Алгебра 8 клас',
    authors: 'А. Г. Мерзляк, В. Б. Полонський, М. С. Якір',
    grade: '8 клас',
    badge: 'Найпопулярніший у школах України',
    icon: '📘',
    accentColor: 'blue',
    description: 'Офіційний підручник за програмою МОН України. Розділ 1: Раціональні вирази, дроби, ОДЗ.'
  },
  {
    id: 'ister',
    name: 'Алгебра 8 клас',
    authors: 'О. С. Істер',
    grade: '8 клас',
    badge: 'Затверджено МОН України',
    icon: '📗',
    accentColor: 'purple',
    description: 'Підручник О. С. Істера: раціональні дроби, арифметичний корінь, квадратні рівняння.'
  }
];

/**
 * Точні автентичні приклади з підручника Мерзляка А.Г., Полонського В.Б., Якіра М.С. (Алгебра 8 клас)
 * Параграф 1: Раціональні вирази (№ 1 - № 40)
 */
export const MERZLYAK_EXERCISES: TextbookExercise[] = [
  // --- № 1 (1): Обчисліть найбільш раціональним способом ---
  {
    id: 'merzlyak-1-0',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 1 (1)',
    baseNumber: 1,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Обчисліть найбільш раціональним способом:',
    expression: '2,71 · 9,2 + 9,2 · 3,29',
    options: [
      { id: 'opt-1', label: 'А', text: '55,2', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '552', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '5,52', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '56', isCorrect: false }
    ],
    explanation: 'Виносимо спільний множник 9,2 за дужки:\n9,2 · (2,71 + 3,29) = 9,2 · 6,00 = 55,2.',
    essence: 'Розподільна властивість множення: ab + ac = a(b + c).'
  },
  {
    id: 'merzlyak-1-0b',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 1 (2)',
    baseNumber: 1,
    partNumber: 2,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Обчисліть найбільш раціональним способом:',
    expression: '15,68 · 3,1 - 13,58 · 3,1',
    options: [
      { id: 'opt-1', label: 'А', text: '6,51', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '65,1', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '6,2', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '3,1', isCorrect: false }
    ],
    explanation: 'Виносимо спільний множник 3,1 за дужки:\n3,1 · (15,68 - 13,58) = 3,1 · 2,1 = 6,51.',
    essence: 'Розподільна властивість віднімання: ab - ac = a(b - c).'
  },
  {
    id: 'merzlyak-1-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 1 (3)',
    baseNumber: 1,
    partNumber: 3,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Яким є вираз (цілим чи дробовим):',
    expression: '1/2 a²b',
    options: [
      { id: 'opt-1', label: 'А', text: 'Цілий вираз', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Дробовий вираз', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Ірраціональний вираз', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Вираз не має змісту', isCorrect: false }
    ],
    explanation: 'Вираз 1/2 a²b є цілим, оскільки ділення здійснюється на число 2, а не на змінну.',
    essence: 'Цілий вираз — вираз, що не містить ділення на змінну.'
  },
  {
    id: 'merzlyak-1-2',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 1 (2)',
    baseNumber: 1,
    partNumber: 2,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Яким є вираз (цілим чи дробовим):',
    expression: '(x - y) / (x + y)',
    options: [
      { id: 'opt-1', label: 'А', text: 'Дробовий вираз', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Цілий вираз', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Числовий вираз', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Одночлен', isCorrect: false }
    ],
    explanation: 'Вираз (x - y) / (x + y) є дробовим, оскільки знаменник містить змінну (x + y).',
    essence: 'Дробовий вираз містить ділення на вираз зі змінною.'
  },
  {
    id: 'merzlyak-1-3',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 1 (3)',
    baseNumber: 1,
    partNumber: 3,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Яким є вираз (цілим чи дробовим):',
    expression: '(c + 2) / 9',
    options: [
      { id: 'opt-1', label: 'А', text: 'Цілий вираз', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Дробовий вираз', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Раціональне рівняння', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Вираз не визначений', isCorrect: false }
    ],
    explanation: 'У знаменнику стоїть число 9 (не змінна), отже, вираз (c + 2)/9 є цілим.',
    essence: 'Ділення на число не робить вираз дробовим.'
  },
  {
    id: 'merzlyak-1-4',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 1 (4)',
    baseNumber: 1,
    partNumber: 4,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Яким є вираз (цілим чи дробовим):',
    expression: 'a / b',
    options: [
      { id: 'opt-1', label: 'А', text: 'Дробовий вираз', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Цілий вираз', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Числовий дріб', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Многочлен', isCorrect: false }
    ],
    explanation: 'У виразі a / b знаменник є змінною b, отже, це дробовий вираз.',
    essence: 'a/b — найпростіший приклад раціонального дробу.'
  },
  {
    id: 'merzlyak-1-5',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 1 (5)',
    baseNumber: 1,
    partNumber: 5,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Яким є вираз (цілим чи дробовим):',
    expression: '(a - b)² / 4',
    options: [
      { id: 'opt-1', label: 'А', text: 'Цілий вираз', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Дробовий вираз', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Невизначений дріб', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Ірраціональний вираз', isCorrect: false }
    ],
    explanation: 'Ділення відбувається на число 4, тому (a - b)² / 4 є цілим раціональним виразом.',
    essence: 'Цілий вираз.'
  },
  {
    id: 'merzlyak-1-6',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 1 (6)',
    baseNumber: 1,
    partNumber: 6,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Яким є вираз (цілим чи дробовим):',
    expression: '(m + 1/n) : (m - 1/n)',
    options: [
      { id: 'opt-1', label: 'А', text: 'Дробовий вираз', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Цілий вираз', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Одночлен', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Числовий вираз', isCorrect: false }
    ],
    explanation: 'Вираз містить ділення на змінну n та ділення на вираз (m - 1/n), отже це дробовий вираз.',
    essence: 'Дробовий вираз.'
  },
  {
    id: 'merzlyak-1-7',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 1 (7)',
    baseNumber: 1,
    partNumber: 7,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Яким є вираз (цілим чи дробовим):',
    expression: '(x + y) / (x - y)',
    options: [
      { id: 'opt-1', label: 'А', text: 'Дробовий вираз', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Цілий вираз', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Числовий вираз', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Не має змісту при будь-яких x, y', isCorrect: false }
    ],
    explanation: 'Знаменник x - y містить змінні x і y, тому це дробовий вираз.',
    essence: 'Дробовий вираз.'
  },
  {
    id: 'merzlyak-1-8',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 1 (8)',
    baseNumber: 1,
    partNumber: 8,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Яким є вираз (цілим чи дробовим):',
    expression: '(5x - 3) / 7',
    options: [
      { id: 'opt-1', label: 'А', text: 'Цілий вираз', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Дробовий вираз', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Не є раціональним виразом', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Рівняння', isCorrect: false }
    ],
    explanation: 'Знаменник є константою 7, ділення на змінну відсутнє. Вираз (5x - 3)/7 є цілим.',
    essence: 'Цілий вираз.'
  },

  // --- № 2: Обчисліть значення виразу зручним способом (2,71 · 9,2 + 9,2 · 3,29) та значення дробів ---
  {
    id: 'merzlyak-2-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 2 (1)',
    baseNumber: 2,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Обчисліть значення виразу зручним способом:',
    expression: '2,71 · 9,2 + 9,2 · 3,29',
    options: [
      { id: 'opt-1', label: 'А', text: '55,2', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '552', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '5,52', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '56', isCorrect: false }
    ],
    explanation: 'Виносимо спільний множник 9,2 за дужки:\n9,2 · (2,71 + 3,29) = 9,2 · 6,00 = 55,2.',
    essence: 'Розподільна властивість множення: ab + ac = a(b + c).'
  },
  {
    id: 'merzlyak-2-2',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 2 (2)',
    baseNumber: 2,
    partNumber: 2,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Обчисліть значення виразу зручним способом:',
    expression: '71 · 9,2 + 9,2 · 29',
    options: [
      { id: 'opt-1', label: 'А', text: '920', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '92', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '9200', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '100', isCorrect: false }
    ],
    explanation: 'Виносимо спільний множник 9,2 за дужки:\n9,2 · (71 + 29) = 9,2 · 100 = 920.',
    essence: 'Винесення спільного множника: ab + ac = a(b + c).'
  },
  {
    id: 'merzlyak-2-3',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 2 (3)',
    baseNumber: 2,
    partNumber: 3,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Обчисліть значення виразу зручним способом:',
    expression: '14,7 · 3,8 - 3,8 · 4,7',
    options: [
      { id: 'opt-1', label: 'А', text: '38', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '3,8', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '380', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '35,9', isCorrect: false }
    ],
    explanation: 'Виносимо 3,8 за дужки:\n3,8 · (14,7 - 4,7) = 3,8 · 10 = 38.',
    essence: 'Розподільна властивість: ab - ac = a(b - c).'
  },
  {
    id: 'merzlyak-2-4',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 2 (4)',
    baseNumber: 2,
    partNumber: 4,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Чому дорівнює значення виразу 12 / a, якщо:',
    expression: 'a = -3',
    options: [
      { id: 'opt-1', label: 'А', text: '-4', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '4', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '-36', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '-0,25', isCorrect: false }
    ],
    explanation: 'Підставляємо a = -3: 12 / (-3) = -4.',
    essence: 'Обчислення значення дробу.'
  },
  {
    id: 'merzlyak-2-2',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 2 (2)',
    baseNumber: 2,
    partNumber: 2,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Чому дорівнює значення виразу 12 / a, якщо:',
    expression: 'a = 0,6',
    options: [
      { id: 'opt-1', label: 'А', text: '20', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '7,2', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '2', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '0,05', isCorrect: false }
    ],
    explanation: 'Підставляємо a = 0,6: 12 / 0,6 = 120 / 6 = 20.',
    essence: 'Ділення на десятковий дріб.'
  },
  {
    id: 'merzlyak-2-3',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 2 (3)',
    baseNumber: 2,
    partNumber: 3,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Чому дорівнює значення виразу 12 / a, якщо:',
    expression: 'a = 5/12',
    options: [
      { id: 'opt-1', label: 'А', text: '28,8', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '5', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '1', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '144', isCorrect: false }
    ],
    explanation: 'Підставляємо a = 5/12: 12 : (5/12) = 12 · (12/5) = 144 / 5 = 28,8 (або 28 4/5).',
    essence: 'Ділення на звичайний дріб.'
  },
  {
    id: 'merzlyak-2-4',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 2 (4)',
    baseNumber: 2,
    partNumber: 4,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Чому дорівнює значення виразу 12 / a, якщо:',
    expression: 'a = 24',
    options: [
      { id: 'opt-1', label: 'А', text: '0,5', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '2', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '-2', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '288', isCorrect: false }
    ],
    explanation: 'Підставляємо a = 24: 12 / 24 = 1/2 = 0,5.',
    essence: 'Скорочення дробу.'
  },

  // --- № 3: Знайдіть значення виразу (x - 2)/(2x + 1) ---
  {
    id: 'merzlyak-3-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 3 (1)',
    baseNumber: 3,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Знайдіть значення виразу (x - 2) / (2x + 1), якщо:',
    expression: 'x = 3',
    options: [
      { id: 'opt-1', label: 'А', text: '1/7', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '1/5', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '5/7', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '7', isCorrect: false }
    ],
    explanation: 'Чисельник: 3 - 2 = 1. Знаменник: 2 · 3 + 1 = 7. Значення: 1/7.',
    essence: 'Підстановка значення змінної у раціональний дріб.'
  },
  {
    id: 'merzlyak-3-2',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 3 (2)',
    baseNumber: 3,
    partNumber: 2,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Знайдіть значення виразу (x - 2) / (2x + 1), якщо:',
    expression: 'x = -1',
    options: [
      { id: 'opt-1', label: 'А', text: '3', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '-3', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '1', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '-1', isCorrect: false }
    ],
    explanation: 'Чисельник: -1 - 2 = -3. Знаменник: 2 · (-1) + 1 = -2 + 1 = -1. Дріб: -3 / (-1) = 3.',
    essence: 'Ділення двох від\'ємних чисел дає додатне число.'
  },
  {
    id: 'merzlyak-3-3',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 3 (3)',
    baseNumber: 3,
    partNumber: 3,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Знайдіть значення виразу (x - 2) / (2x + 1), якщо:',
    expression: 'x = 0',
    options: [
      { id: 'opt-1', label: 'А', text: '-2', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '2', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '0', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'не існує', isCorrect: false }
    ],
    explanation: 'Чисельник: 0 - 2 = -2. Знаменник: 2 · 0 + 1 = 1. Дріб: -2 / 1 = -2.',
    essence: 'Значення при x = 0.'
  },
  {
    id: 'merzlyak-3-4',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 3 (4)',
    baseNumber: 3,
    partNumber: 4,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Знайдіть значення виразу (x - 2) / (2x + 1), якщо:',
    expression: 'x = -1/2',
    options: [
      { id: 'opt-1', label: 'А', text: 'Вираз не має змісту', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '0', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '-2,5', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '2,5', isCorrect: false }
    ],
    explanation: 'При x = -1/2 знаменник дорівнює: 2 · (-1/2) + 1 = -1 + 1 = 0. На нуль ділити не можна, тому вираз не має змісту.',
    essence: 'ОДЗ: знаменник не може дорівнювати нулю.'
  },

  // --- № 4: Знайдіть допустимі значення змінної (ОДЗ) ---
  {
    id: 'merzlyak-4-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 4 (1)',
    baseNumber: 4,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Знайдіть допустимі значення змінної (ОДЗ) для виразу:',
    expression: '2x - 5',
    options: [
      { id: 'opt-1', label: 'А', text: 'x — будь-яке число', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x ≠ 2,5', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x > 0', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x ≠ 0', isCorrect: false }
    ],
    explanation: '2x - 5 — цілий вираз, ділення на змінну немає, отже x може бути будь-яким дійсним числом.',
    essence: 'ОДЗ цілого виразу — вся числова пряма (-∞; +∞).'
  },
  {
    id: 'merzlyak-4-2',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 4 (2)',
    baseNumber: 4,
    partNumber: 2,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Знайдіть допустимі значення змінної (ОДЗ) для виразу:',
    expression: '18 / m',
    options: [
      { id: 'opt-1', label: 'А', text: 'm ≠ 0', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'm ≠ 18', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'm — будь-яке число', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'm > 0', isCorrect: false }
    ],
    explanation: 'Знаменник m не повинен дорівнювати нулю, тому m ≠ 0.',
    essence: 'Знаменник дробу m ≠ 0.'
  },
  {
    id: 'merzlyak-4-3',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 4 (3)',
    baseNumber: 4,
    partNumber: 3,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Знайдіть допустимі значення змінної (ОДЗ) для виразу:',
    expression: '9 / (x - 5)',
    options: [
      { id: 'opt-1', label: 'А', text: 'x ≠ 5', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x ≠ -5', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x ≠ 9', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x — будь-яке число', isCorrect: false }
    ],
    explanation: 'Знаменник x - 5 ≠ 0 => x ≠ 5.',
    essence: 'ОДЗ дробу: знаменник x - 5 ≠ 0.'
  },
  {
    id: 'merzlyak-4-4',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 4 (4)',
    baseNumber: 4,
    partNumber: 4,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Знайдіть допустимі значення змінної (ОДЗ) для виразу:',
    expression: '(x - 5) / 9',
    options: [
      { id: 'opt-1', label: 'А', text: 'x — будь-яке число', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x ≠ 5', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x ≠ 9', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x ≠ 0', isCorrect: false }
    ],
    explanation: 'У знаменнику 9 (число не дорівнює нулю), тому вираз визначений при будь-якому значенні x.',
    essence: 'Цілий вираз має ОДЗ: всі дійсні числа.'
  },
  {
    id: 'merzlyak-4-5',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 4 (5)',
    baseNumber: 4,
    partNumber: 5,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Знайдіть допустимі значення змінної (ОДЗ) для виразу:',
    expression: '(2 + y) / (1 + y)',
    options: [
      { id: 'opt-1', label: 'А', text: 'y ≠ -1', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'y ≠ -2', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'y ≠ 1', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'y ≠ 0', isCorrect: false }
    ],
    explanation: 'Знаменник 1 + y ≠ 0 => y ≠ -1.',
    essence: 'ОДЗ знаменника: y ≠ -1.'
  },
  {
    id: 'merzlyak-4-6',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 4 (6)',
    baseNumber: 4,
    partNumber: 6,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Знайдіть допустимі значення змінної (ОДЗ) для виразу:',
    expression: '1 / (x² + 4)',
    options: [
      { id: 'opt-1', label: 'А', text: 'x — будь-яке число', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x ≠ ±2', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x ≠ -4', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x ≠ 0', isCorrect: false }
    ],
    explanation: 'Оскільки x² ≥ 0 для будь-якого x, то x² + 4 ≥ 4 > 0 (знаменник ніколи не перетворюється на 0). Отже, x — будь-яке число.',
    essence: 'x² + a² > 0 при a ≠ 0, корінь знаменника відсутній.'
  },
  {
    id: 'merzlyak-4-7',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 4 (7)',
    baseNumber: 4,
    partNumber: 7,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Знайдіть допустимі значення змінної (ОДЗ) для виразу:',
    expression: '5 / (x(x - 1))',
    options: [
      { id: 'opt-1', label: 'А', text: 'x ≠ 0  і  x ≠ 1', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x ≠ 1', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x ≠ 0', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x ≠ -1', isCorrect: false }
    ],
    explanation: 'Знаменник дорівнює нулю, якщо x = 0 або x - 1 = 0 (x = 1). Отже, ОДЗ: x ≠ 0 та x ≠ 1.',
    essence: 'Добуток у знаменнику: кожен множник не повинен дорівнювати 0.'
  },
  {
    id: 'merzlyak-4-8',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 4 (8)',
    baseNumber: 4,
    partNumber: 8,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Знайдіть допустимі значення змінної (ОДЗ) для виразу:',
    expression: '(x + 1) / (|x| - 2)',
    options: [
      { id: 'opt-1', label: 'А', text: 'x ≠ 2  і  x ≠ -2', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x ≠ 2', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x ≠ -1', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x — будь-яке число', isCorrect: false }
    ],
    explanation: 'Знаменник |x| - 2 = 0 при |x| = 2, тобто x = 2 або x = -2. Отже, x ≠ ±2.',
    essence: 'Модуль у знаменнику: |x| ≠ 2 => x ≠ 2 та x ≠ -2.'
  },

  // --- № 5: При яких значеннях змінної має зміст вираз ---
  {
    id: 'merzlyak-5-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 5 (1)',
    baseNumber: 5,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'При яких значеннях змінної має зміст вираз:',
    expression: '1 / (x - 3)',
    options: [
      { id: 'opt-1', label: 'А', text: 'x ≠ 3', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x = 3', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x ≠ -3', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x > 3', isCorrect: false }
    ],
    explanation: 'Вираз має зміст при всіх x, для яких знаменник не дорівнює нулю: x - 3 ≠ 0 => x ≠ 3.',
    essence: 'Умова існування дробу: знаменник ≠ 0.'
  },
  {
    id: 'merzlyak-5-2',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 5 (2)',
    baseNumber: 5,
    partNumber: 2,
    category: 'example',
    type: 'choice',
    questionPrompt: 'При яких значеннях змінної має зміст вираз:',
    expression: '(a + 2) / (a² - 1)',
    options: [
      { id: 'opt-1', label: 'А', text: 'a ≠ 1  і  a ≠ -1', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'a ≠ -2', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'a ≠ 1', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'a — будь-яке число', isCorrect: false }
    ],
    explanation: 'Знаменник a² - 1 = (a - 1)(a + 1) ≠ 0, звідси a ≠ 1 і a ≠ -1.',
    essence: 'Різниця квадратів у знаменнику.'
  },
  {
    id: 'merzlyak-5-3',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 5 (3)',
    baseNumber: 5,
    partNumber: 3,
    category: 'example',
    type: 'choice',
    questionPrompt: 'При яких значеннях змінної має зміст вираз:',
    expression: 'x / (x² + 1)',
    options: [
      { id: 'opt-1', label: 'А', text: 'При будь-яких дійсних значеннях x', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x ≠ -1', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x ≠ 0', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x ≠ ±1', isCorrect: false }
    ],
    explanation: 'Оскільки x² + 1 ≥ 1 для всіх дійсних x, знаменник ніколи не дорівнює нулю. Вираз має зміст при будь-якому x.',
    essence: 'Знаменник завжди додатний.'
  },
  {
    id: 'merzlyak-5-4',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 5 (4)',
    baseNumber: 5,
    partNumber: 4,
    category: 'example',
    type: 'choice',
    questionPrompt: 'При яких значеннях змінної має зміст вираз:',
    expression: '(b - 4) / (b(b + 3))',
    options: [
      { id: 'opt-1', label: 'А', text: 'b ≠ 0  і  b ≠ -3', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'b ≠ 4', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'b ≠ 3', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'b ≠ 0  і  b ≠ 3', isCorrect: false }
    ],
    explanation: 'Знаменник перетворюється на 0 при b = 0 або b = -3. Тому вираз має зміст при b ≠ 0 і b ≠ -3.',
    essence: 'ОДЗ добутку у знаменнику.'
  },

  // --- № 6: Запишіть частку у вигляді раціонального дробу ---
  {
    id: 'merzlyak-6-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 6 (1)',
    baseNumber: 6,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Запишіть у вигляді раціонального дробу частку від ділення:',
    expression: '(x + y) : 5',
    options: [
      { id: 'opt-1', label: 'А', text: '(x + y) / 5', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '5 / (x + y)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '5x + 5y', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x/5 + y', isCorrect: false }
    ],
    explanation: 'Ділення замінюється рискою дробу: ділене (x + y) стає чисельником, а дільник 5 — знаменником: (x + y)/5.',
    essence: 'Запис частки у вигляді дробу.'
  },
  {
    id: 'merzlyak-6-2',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 6 (2)',
    baseNumber: 6,
    partNumber: 2,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Запишіть у вигляді раціонального дробу частку від ділення:',
    expression: '7 : (a - b)',
    options: [
      { id: 'opt-1', label: 'А', text: '7 / (a - b)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(a - b) / 7', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '7a - 7b', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '7 / (b - a)', isCorrect: false }
    ],
    explanation: 'Ділене 7 записуємо в чисельник, дільник (a - b) — у знаменник: 7 / (a - b).',
    essence: 'Чисельник і знаменник.'
  },

  // --- № 7: Складання та обчислення значень дробів ---
  {
    id: 'merzlyak-7-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 7 (1)',
    baseNumber: 7,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Складіть дріб, чисельником якого є сума чисел a і b, а знаменником — їх різниця. Знайдіть значення при:',
    expression: 'a = 7,  b = 3',
    options: [
      { id: 'opt-1', label: 'А', text: '2,5', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '4', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '10', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '0,4', isCorrect: false }
    ],
    explanation: 'Дріб має вигляд (a + b) / (a - b). При a = 7, b = 3: (7 + 3) / (7 - 3) = 10 / 4 = 2,5.',
    essence: 'Складання дробу за описом та обчислення.'
  },

  // --- № 8: Знаходження значення виразу ---
  {
    id: 'merzlyak-8-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 8 (1)',
    baseNumber: 8,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Знайдіть значення виразу (a² - 2ab + b²) / (a + b), якщо:',
    expression: 'a = 5,  b = 3',
    options: [
      { id: 'opt-1', label: 'А', text: '0,5', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '2', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '4', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '1', isCorrect: false }
    ],
    explanation: 'Чисельник є повним квадратом: (a - b)². При a = 5, b = 3 маємо: (5 - 3)² / (5 + 3) = 2² / 8 = 4 / 8 = 0,5.',
    essence: 'Формула квадрата різниці та обчислення дробу.'
  },

  // --- № 9: Скоротіть дріб ---
  {
    id: 'merzlyak-9-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 9 (1)',
    baseNumber: 9,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Скоротіть дріб:',
    expression: '14a / (21b)',
    options: [
      { id: 'opt-1', label: 'А', text: '2a / (3b)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '7a / (7b)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '2 / 3', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '14 / 21', isCorrect: false }
    ],
    explanation: 'Чисельник і знаменник діляться на НСД(14, 21) = 7: 14a/7 = 2a, 21b/7 = 3b. Відповідь: 2a / (3b).',
    essence: 'Основна властивість раціонального дробу: ділення чисельника і знаменника на їхній спільний множник.'
  },
  {
    id: 'merzlyak-9-2',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 9 (2)',
    baseNumber: 9,
    partNumber: 2,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Скоротіть дріб:',
    expression: '12x² / (18x)',
    options: [
      { id: 'opt-1', label: 'А', text: '2x / 3', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '2 / (3x)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '6x / 9', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '2x²', isCorrect: false }
    ],
    explanation: 'Скорочуємо на 6x: 12x² : 6x = 2x; 18x : 6x = 3. Отримуємо 2x / 3.',
    essence: 'Скорочення на одночлен.'
  },
  {
    id: 'merzlyak-9-3',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 9 (3)',
    baseNumber: 9,
    partNumber: 3,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Скоротіть дріб:',
    expression: '(x² - 9) / (2x + 6)',
    options: [
      { id: 'opt-1', label: 'А', text: '(x - 3) / 2', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(x + 3) / 2', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x - 3', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '(x - 9) / 2', isCorrect: false }
    ],
    explanation: 'Розкладаємо на множники: чисельник x² - 9 = (x - 3)(x + 3); знаменник 2x + 6 = 2(x + 3). Скорочуємо на (x + 3) і маємо (x - 3)/2.',
    essence: 'Розкладання на множники для скорочення дробу.'
  },
  {
    id: 'merzlyak-10-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 10 (1)',
    baseNumber: 10,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Скоротіть раціональний дріб:',
    expression: '(3a + 3b) / (7a + 7b)',
    options: [
      { id: 'opt-1', label: 'А', text: '3 / 7', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(a + b) / 7', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '3(a + b)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '3a / (7b)', isCorrect: false }
    ],
    explanation: 'Виносимо 3 у чисельнику: 3(a + b). Виносимо 7 у знаменнику: 7(a + b). Скорочуємо спільний множник (a + b): залишається 3/7.',
    essence: 'Винесення спільного множника за дужки.'
  }
];

/**
 * Автентичні завдання з підручника Н. А. Тарасенкової (Алгебра 8 клас, НУШ)
 * Точна відповідність тексту підручника (Видавничий дім «Оріон»)
 */
export const TARASENKOVA_EXERCISES: TextbookExercise[] = [
  ...TARASENKOVA_1_TO_49,
  ...TARASENKOVA_1_TO_49_ADDITIONS,
  ...TARASENKOVA_50_TO_88,
  ...AUTHENTIC_TOPIC_2_2_EXERCISES,
  ...TARASENKOVA_114_TO_180,
  ...TARASENKOVA_181_TO_250,
  ...TARASENKOVA_CHAPTER_3_TASKS,
  ...TARASENKOVA_CHAPTER_4_TASKS,
  ...TARASENKOVA_CHAPTER_5_TASKS,
  ...TARASENKOVA_WORD_PROBLEMS,

  // =========================================================================
  // РОЗДІЛ 5. Елементи стохастики. Класична ймовірність (§ 26: № 1036 - № 1065)
  // =========================================================================
  {
    id: 'tarasenkova-1065-1',
    topicId: 't-5-3',
    chapterId: 'ch-5',
    exerciseNumber: '№ 1065 (НМТ – 2024)',
    baseNumber: 1065,
    partNumber: 1,
    category: 'task',
    type: 'choice',
    questionPrompt: 'Визначте ймовірність того, що пасажирові дістанеться місце в першому або останньому ряду літака:',
    expression: '20 рядів, по 3 місця ліворуч і праворуч від проходу (мал. 62)',
    taskText: '1065. (НМТ – 2024). Місця в літаку розташовані у 20 рядів, у кожному ряду є по 3 місця, розділені проходом, ліворуч і праворуч від проходу (мал. 62). Комп’ютерна програма випадковим чином обирає місце для пасажира. Визначте ймовірність того, що пасажирові дістанеться місце в першому або останньому ряду.',
    options: [
      { id: 'opt-1', label: 'А', text: '1/10 (або 0,1)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '1/20 (або 0,05)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '1/5 (або 0,2)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '3/20 (або 0,15)', isCorrect: false }
    ],
    explanation: `1) У кожному ряду є по 3 місця ліворуч і по 3 праворуч від проходу, тобто в одному ряду: 3 + 3 = 6 місць.
2) Усього в літаку 20 рядів, отже, загальна кількість місць: n = 20 · 6 = 120 місць.
3) Пасажирові підходить місце в першому або останньому ряду (разом 2 ряди). Кількість таких місць: m = 2 · 6 = 12 місць.
4) За класичним означенням ймовірності: P(A) = m / n = 12 / 120 = 1 / 10 = 0,1 (або оскільки в кожному ряду однакова кількість місць: 2 / 20 = 1 / 10 = 0,1).`,
    essence: 'Класичне означення ймовірності випадкової події: P(A) = m / n.'
  }
];

/**
 * Автентичні завдання з підручника О. С. Істера (Алгебра 8 клас)
 */
export const ISTER_EXERCISES: TextbookExercise[] = [
  {
    id: 'ister-1-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 1 (1)',
    baseNumber: 1,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Яким є вираз (цілим чи дробовим):',
    expression: '5a²b',
    options: [
      { id: 'opt-1', label: 'А', text: 'Цілий вираз', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Дробовий вираз', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Числовий дріб', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Невизначений вираз', isCorrect: false }
    ],
    explanation: 'Одночлен 5a²b є цілим раціональним виразом.',
    essence: 'Цілий вираз.'
  },
  {
    id: 'ister-1-2',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 1 (2)',
    baseNumber: 1,
    partNumber: 2,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Яким є вираз (цілим чи дробовим):',
    expression: '(x + 3) / 7',
    options: [
      { id: 'opt-1', label: 'А', text: 'Цілий вираз', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Дробовий вираз', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Рівняння', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Не має розв\'язків', isCorrect: false }
    ],
    explanation: 'У знаменнику число 7, тому вираз (x + 3)/7 є цілим.',
    essence: 'Цілий вираз.'
  },
  {
    id: 'ister-1-3',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 1 (3)',
    baseNumber: 1,
    partNumber: 3,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Яким є вираз (цілим чи дробовим):',
    expression: '7 / (x + 3)',
    options: [
      { id: 'opt-1', label: 'А', text: 'Дробовий вираз', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Цілий вираз', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Ціле число', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Одночлен', isCorrect: false }
    ],
    explanation: 'Знаменник x + 3 містить змінну, тому вираз є дробовим.',
    essence: 'Дробовий вираз.'
  },
  {
    id: 'ister-1-4',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 1 (4)',
    baseNumber: 1,
    partNumber: 4,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Яким є вираз (цілим чи дробовим):',
    expression: '(a - b) / (a + b)',
    options: [
      { id: 'opt-1', label: 'А', text: 'Дробовий вираз', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Цілий вираз', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Числовий вираз', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Рівність', isCorrect: false }
    ],
    explanation: 'Знаменник a + b містить змінні, тому (a - b)/(a + b) є дробовим виразом.',
    essence: 'Дробовий вираз.'
  },
  {
    id: 'ister-2-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 2 (1)',
    baseNumber: 2,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Обчисліть значення виразу зручним способом:',
    expression: '2,71 · 9,2 + 9,2 · 3,29',
    options: [
      { id: 'opt-1', label: 'А', text: '55,2', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '552', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '5,52', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '56', isCorrect: false }
    ],
    explanation: 'Виносимо спільний множник 9,2 за дужки:\n9,2 · (2,71 + 3,29) = 9,2 · 6,00 = 55,2.',
    essence: 'Розподільна властивість множення: ab + ac = a(b + c).'
  },
  {
    id: 'ister-2-2',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 2 (2)',
    baseNumber: 2,
    partNumber: 2,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Обчисліть значення виразу зручним способом:',
    expression: '71 · 9,2 + 9,2 · 29',
    options: [
      { id: 'opt-1', label: 'А', text: '920', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '92', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '9200', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '100', isCorrect: false }
    ],
    explanation: 'Виносимо спільний множник 9,2 за дужки:\n9,2 · (71 + 29) = 9,2 · 100 = 920.',
    essence: 'Винесення спільного множника: ab + ac = a(b + c).'
  },
  {
    id: 'ister-2-3',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 2 (3)',
    baseNumber: 2,
    partNumber: 3,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Знайдіть значення дробу (x - 3) / (x + 2), якщо:',
    expression: 'x = 4',
    options: [
      { id: 'opt-1', label: 'А', text: '1/6', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '1/2', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '7/6', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '1', isCorrect: false }
    ],
    explanation: 'Чисельник: 4 - 3 = 1. Знаменник: 4 + 2 = 6. Дріб: 1/6.',
    essence: 'Значення дробу.'
  }
];

export function getTextbookExercisesByBookId(
  bookId: 'merzlyak' | 'tarasenkova' | 'ister'
): TextbookExercise[] {
  switch (bookId) {
    case 'tarasenkova':
      return TARASENKOVA_EXERCISES;
    case 'merzlyak':
      return MERZLYAK_EXERCISES;
    case 'ister':
      return ISTER_EXERCISES;
    default:
      return TARASENKOVA_EXERCISES;
  }
}
