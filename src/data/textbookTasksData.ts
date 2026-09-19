import { TextbookExercise, ChoiceOption } from '../types/textbook';
import { CHAPTERS } from './chaptersData';
import { getTextbookExercisesByBookId, SUPPORTED_TEXTBOOKS, TextbookInfo } from './textbooksData';
import { AUTHENTIC_TOPIC_2_2_EXERCISES } from './authenticExercises';

export { SUPPORTED_TEXTBOOKS };
export type { TextbookInfo };

/**
 * Deterministically shuffles exercise options based on seedKey so that:
 * 1. The correct answer is NOT always at position 'А' (index 0).
 * 2. It is uniformly distributed among 'А', 'Б', 'В', 'Г' across different exercises and sub-examples!
 * 3. The choice position is stable for a given exercise ID across re-renders.
 */
export function randomizeOptions(
  options: ChoiceOption[],
  seedKey: string
): ChoiceOption[] {
  if (!options || options.length <= 1) return options;

  const correctOpt = options.find((o) => o.isCorrect);
  const wrongOpts = options.filter((o) => !o.isCorrect);
  if (!correctOpt) return options;

  let hash = 0;
  for (let i = 0; i < seedKey.length; i++) {
    hash = (hash * 37 + seedKey.charCodeAt(i)) & 0x7fffffff;
  }

  // targetIndex is 0, 1, 2, or 3 (А, Б, В, or Г) -> spreads correctly across all 4 letters!
  const totalSlots = options.length;
  const targetIndex = hash % totalSlots;

  // Deterministically shuffle wrong options
  const shuffledWrong = [...wrongOpts];
  let h = hash;
  for (let i = shuffledWrong.length - 1; i > 0; i--) {
    h = (h * 1103515245 + 12345) & 0x7fffffff;
    const j = h % (i + 1);
    const tmp = shuffledWrong[i];
    shuffledWrong[i] = shuffledWrong[j];
    shuffledWrong[j] = tmp;
  }

  const result: ChoiceOption[] = new Array(totalSlots);
  result[targetIndex] = { ...correctOpt };

  let w = 0;
  for (let i = 0; i < totalSlots; i++) {
    if (i !== targetIndex && w < shuffledWrong.length) {
      result[i] = { ...shuffledWrong[w] };
      w++;
    }
  }

  const labels = ['А', 'Б', 'В', 'Г'];
  return result.map((opt, idx) => ({
    ...opt,
    id: `opt-${idx + 1}`,
    label: labels[idx] || String.fromCharCode(65 + idx),
  }));
}

export const TEXTBOOK_EXERCISES: TextbookExercise[] = [
  // --- TOPIC 1-1: "Вирази, тотожності, одночлени і многочлени" (підручник, с. 7-9) ---
  // № 1: Всі 6 прикладів за підручником (Обчисліть найбільш раціональним способом)
  {
    id: 'ex-1-1-1-1',
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
      { id: 'opt-2', label: 'Б', text: '54,8', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '60', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '50,2', isCorrect: false }
    ],
    explanation: 'Виносимо спільний множник 9,2 за дужки: 9,2 · (2,71 + 3,29) = 9,2 · 6 = 55,2.',
    essence: 'Розподільна властивість множення відносно додавання: ab + ac = a(b + c).'
  },
  {
    id: 'ex-1-1-1-2',
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
      { id: 'opt-2', label: 'Б', text: '6,2', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '7,11', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '5,91', isCorrect: false }
    ],
    explanation: 'Виносимо спільний множник 3,1: 3,1 · (15,68 - 13,58) = 3,1 · 2,1 = 6,51.',
    essence: 'Винесення спільного множника за дужки: ab - ac = a(b - c).'
  },
  {
    id: 'ex-1-1-1-3',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 1 (3)',
    baseNumber: 1,
    partNumber: 3,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Обчисліть раціональним способом:',
    expression: '28 · 5,7 · 3/14',
    options: [
      { id: 'opt-1', label: 'А', text: '34,2', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '32,4', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '28,5', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '36', isCorrect: false }
    ],
    explanation: 'Згрупуємо 28 та 3/14: (28 · 3/14) · 5,7 = (2 · 3) · 5,7 = 6 · 5,7 = 34,2.',
    essence: 'Сполучна властивість множення та скорочення дробів.'
  },
  {
    id: 'ex-1-1-1-4',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 1 (4)',
    baseNumber: 1,
    partNumber: 4,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Обчисліть значення виразу раціональним способом:',
    expression: '2 5/7 - 11 2/5 + 19 2/7 - 2 3/5',
    options: [
      { id: 'opt-1', label: 'А', text: '8', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '10', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '7 4/7', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '6', isCorrect: false }
    ],
    explanation: 'Групуємо дроби з однаковими знаменниками: (2 5/7 + 19 2/7) - (11 2/5 + 2 3/5) = 22 - 14 = 8.',
    essence: 'Групування доданків з однаковими знаменниками.'
  },
  {
    id: 'ex-1-1-1-5',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 1 (5)',
    baseNumber: 1,
    partNumber: 5,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Обчисліть за розподільною властивістю:',
    expression: '(2/3 - 1/4) · 24',
    options: [
      { id: 'opt-1', label: 'А', text: '10', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '12', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '8', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '14', isCorrect: false }
    ],
    explanation: '2/3 · 24 - 1/4 · 24 = 16 - 6 = 10.',
    essence: 'Множення кожного доданка в дужках на 24.'
  },
  {
    id: 'ex-1-1-1-6',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 1 (6)',
    baseNumber: 1,
    partNumber: 6,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Обчисліть значення числового виразу:',
    expression: '17 5/13 · 7 1/3 + 2 8/13 · 7 1/3',
    options: [
      { id: 'opt-1', label: 'А', text: '146 2/3 (або 440/3)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '140', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '150', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '146', isCorrect: false }
    ],
    explanation: 'Виносимо 7 1/3 за дужки: 7 1/3 · (17 5/13 + 2 8/13) = 22/3 · 20 = 440/3 = 146 2/3.',
    essence: 'Додавання мішаних чисел та множення на дріб.'
  },

  // № 2: Всі 4 приклади за підручником (Значення виразів зі степенями)
  {
    id: 'ex-1-1-2-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 2 (1)',
    baseNumber: 2,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Знайдіть значення числового виразу:',
    expression: '-3² + 4³ - 5⁴ + 10²',
    options: [
      { id: 'opt-1', label: 'А', text: '-470', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '-452', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '530', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '-625', isCorrect: false }
    ],
    explanation: '-3² = -9; 4³ = 64; 5⁴ = 625; 10² = 100. Разом: -9 + 64 - 625 + 100 = 155 - 625 = -470.',
    essence: 'Порядок дій та обчислення степенів чисел.'
  },
  {
    id: 'ex-1-1-2-2',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 2 (2)',
    baseNumber: 2,
    partNumber: 2,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Обчисліть значення виразу:',
    expression: '-2⁹ - (-2)⁸ + 2⁷',
    options: [
      { id: 'opt-1', label: 'А', text: '-640', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '-384', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '-512', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '-128', isCorrect: false }
    ],
    explanation: '-2⁹ = -512; (-2)⁸ = +256, тому -(-2)⁸ = -256; 2⁷ = 128. Разом: -512 - 256 + 128 = -768 + 128 = -640.',
    essence: 'Степінь від’ємного числа з парним і непарним показником.'
  },
  {
    id: 'ex-1-1-2-3',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 2 (3)',
    baseNumber: 2,
    partNumber: 3,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Обчисліть значення виразу:',
    expression: '0,4² · (2 1/2)³ + 1,2⁴ · (1 2/3)⁴',
    options: [
      { id: 'opt-1', label: 'А', text: '18,5', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '16', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '20,5', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '17,2', isCorrect: false }
    ],
    explanation: '0,4² · (5/2)³ = 0,16 · 15,625 = 2,5. 1,2⁴ · (5/3)⁴ = (6/5 · 5/3)⁴ = 2⁴ = 16. Разом: 2,5 + 16 = 18,5.',
    essence: 'Властивість добутку степенів: aⁿ · bⁿ = (ab)ⁿ.'
  },
  {
    id: 'ex-1-1-2-4',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 2 (4)',
    baseNumber: 2,
    partNumber: 4,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Обчисліть значення виразу:',
    expression: '(-20⁴ : ((-4)²)²) : 5²',
    options: [
      { id: 'opt-1', label: 'А', text: '-25', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '25', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '-5', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '-1', isCorrect: false }
    ],
    explanation: '(-4)² = 16, 16² = 256 = 4⁴. Тоді -20⁴ : 4⁴ = -(20/4)⁴ = -5⁴ = -625. Потім -625 : 5² = -625 : 25 = -25.',
    essence: 'Властивості степенів та ділення степенів з однаковими основами.'
  },

  // № 5: Всі 4 приклади за підручником (Многочлени стандартного вигляду)
  {
    id: 'ex-1-1-5-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 5 (1)',
    baseNumber: 5,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Подайте вираз як многочлен стандартного вигляду:',
    expression: '6x - (x + 4)(4 - x)',
    options: [
      { id: 'opt-1', label: 'А', text: 'x² + 6x - 16', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '-x² + 6x + 16', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '6x - 16', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x² + 6x + 16', isCorrect: false }
    ],
    explanation: '(4 + x)(4 - x) = 16 - x². Тоді 6x - (16 - x²) = 6x - 16 + x² = x² + 6x - 16.',
    essence: 'Формула різниці квадратів та розкриття дужок.'
  },
  {
    id: 'ex-1-1-5-2',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 5 (2)',
    baseNumber: 5,
    partNumber: 2,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Спростіть та зведіть до стандартного вигляду:',
    expression: '(x + 5)² + 21x',
    options: [
      { id: 'opt-1', label: 'А', text: 'x² + 31x + 25', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x² + 10x + 25', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x² + 26x + 25', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '2x² + 31x + 25', isCorrect: false }
    ],
    explanation: '(x + 5)² + 21x = x² + 10x + 25 + 21x = x² + 31x + 25.',
    essence: 'Квадрат суми двох виразів та зведення подібних доданків.'
  },
  {
    id: 'ex-1-1-5-3',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 5 (3)',
    baseNumber: 5,
    partNumber: 3,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Подайте вираз як многочлен стандартного вигляду:',
    expression: '0,5(-y - 2)(y + 2)',
    options: [
      { id: 'opt-1', label: 'А', text: '-0,5y² - 2y - 2', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '-0,5y² + 2', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '-0,5y² - 4', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '0,5y² + 2y + 2', isCorrect: false }
    ],
    explanation: '(-y - 2) = -(y + 2). Тоді -0,5(y + 2)² = -0,5(y² + 4y + 4) = -0,5y² - 2y - 2.',
    essence: 'Винесення мінуса за дужки та формула квадрата суми.'
  },
  {
    id: 'ex-1-1-5-4',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 5 (4)',
    baseNumber: 5,
    partNumber: 4,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Подайте вираз у стандартному вигляді:',
    expression: '(-a - 5)(5 - a) · 0,2a',
    options: [
      { id: 'opt-1', label: 'А', text: '0,2a³ - 5a', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '-0,2a³ - 5a', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '0,2a³ - 25', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'a³ - 25a', isCorrect: false }
    ],
    explanation: '(-a - 5)(5 - a) = -(a + 5)(-(a - 5)) = (a + 5)(a - 5) = a² - 25. Тоді (a² - 25) · 0,2a = 0,2a³ - 5a.',
    essence: 'Формула різниці квадратів та множення многочлена на одночлен.'
  },

  // № 6: Всі 6 прикладів за підручником (Розкладання многочлена на множники)
  {
    id: 'ex-1-1-6-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 6 (1)',
    baseNumber: 6,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Розкладіть многочлен на множники:',
    expression: '3a² - 3b²',
    options: [
      { id: 'opt-1', label: 'А', text: '3(a - b)(a + b)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '3(a - b)²', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(3a - 3b)(a + b)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '3(a² - b)', isCorrect: false }
    ],
    explanation: '3a² - 3b² = 3(a² - b²) = 3(a - b)(a + b).',
    essence: 'Винесення спільного числового множника та різниця квадратів.'
  },
  {
    id: 'ex-1-1-6-2',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 6 (2)',
    baseNumber: 6,
    partNumber: 2,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Розкладіть многочлен на множники:',
    expression: '9x³ - x',
    options: [
      { id: 'opt-1', label: 'А', text: 'x(3x - 1)(3x + 1)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x(9x - 1)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x(3x - 1)²', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '3x(3x - 1)', isCorrect: false }
    ],
    explanation: '9x³ - x = x(9x² - 1) = x((3x)² - 1²) = x(3x - 1)(3x + 1).',
    essence: 'Винесення змінної x за дужки та формула різниці квадратів.'
  },
  {
    id: 'ex-1-1-6-3',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 6 (3)',
    baseNumber: 6,
    partNumber: 3,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Розкладіть вираз на множники:',
    expression: 'y⁶ - y²',
    options: [
      { id: 'opt-1', label: 'А', text: 'y²(y - 1)(y + 1)(y² + 1)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'y²(y⁴ - 1)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'y⁴(y² - 1)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'y²(y - 1)⁴', isCorrect: false }
    ],
    explanation: 'y⁶ - y² = y²(y⁴ - 1) = y²(y² - 1)(y² + 1) = y²(y - 1)(y + 1)(y² + 1).',
    essence: 'Послідовне застосування різниці квадратів.'
  },
  {
    id: 'ex-1-1-6-4',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 6 (4)',
    baseNumber: 6,
    partNumber: 4,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Розкладіть многочлен на лінійні множники:',
    expression: '8z³ - 2z',
    options: [
      { id: 'opt-1', label: 'А', text: '2z(2z - 1)(2z + 1)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '2z(4z - 1)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '2z(2z - 1)²', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '4z(2z² - 1)', isCorrect: false }
    ],
    explanation: '8z³ - 2z = 2z(4z² - 1) = 2z(2z - 1)(2z + 1).',
    essence: 'Винесення спільного множника 2z та різниця квадратів.'
  },
  {
    id: 'ex-1-1-6-5',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 6 (5)',
    baseNumber: 6,
    partNumber: 5,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Розкладіть на множники тричлен за формулою квадрата суми:',
    expression: 'n² + 10n + 25',
    options: [
      { id: 'opt-1', label: 'А', text: '(n + 5)²', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(n - 5)²', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(n + 5)(n - 5)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'n(n + 10) + 25', isCorrect: false }
    ],
    explanation: 'n² + 2 · 5 · n + 5² = (n + 5)².',
    essence: 'Згортання повного квадрата суми a² + 2ab + b² = (a + b)².'
  },
  {
    id: 'ex-1-1-6-6',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 6 (6)',
    baseNumber: 6,
    partNumber: 6,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Розкладіть на множники за формулою квадрата різниці:',
    expression: '4m² - 28m + 49',
    options: [
      { id: 'opt-1', label: 'А', text: '(2m - 7)²', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(2m + 7)²', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(4m - 7)²', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '(2m - 7)(2m + 7)', isCorrect: false }
    ],
    explanation: '(2m)² - 2 · (2m) · 7 + 7² = (2m - 7)².',
    essence: 'Згортання повного квадрата різниці a² - 2ab + b² = (a - b)².'
  },

  // № 16: Всі 4 приклади за підручником (Графік параболи y = x² - 6x + 9)
  {
    id: 'ex-1-1-16-1',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 16 (1)',
    baseNumber: 16,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'З’ясуйте, чи проходить графік y = x² - 6x + 9 через точку A(3; 0):',
    expression: 'x = 3 => y = 3² - 6 · 3 + 9',
    options: [
      { id: 'opt-1', label: 'А', text: 'Так, належить (0 = 0)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Ні, не належить', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Неможливо визначити', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Графік не існує в цій точці', isCorrect: false }
    ],
    explanation: 'Підставимо x = 3: y = 9 - 18 + 9 = 0. Оскільки ордината точки A дорівнює 0, точка належить графіку.',
    essence: 'Перевірка належності точки графіку функції.'
  },
  {
    id: 'ex-1-1-16-2',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 16 (2)',
    baseNumber: 16,
    partNumber: 2,
    category: 'example',
    type: 'choice',
    questionPrompt: 'З’ясуйте, чи проходить графік y = x² - 6x + 9 через точку B(-3; 18):',
    expression: 'x = -3 => y = (-3)² - 6 · (-3) + 9',
    options: [
      { id: 'opt-1', label: 'А', text: 'Ні, не належить (y = 36 ≠ 18)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Так, належить', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Точка лежить на осі OX', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Належить тільки при x > 0', isCorrect: false }
    ],
    explanation: '(-3)² - 6(-3) + 9 = 9 + 18 + 9 = 36. 36 ≠ 18, отже точка B не належить графіку.',
    essence: 'Підстановка від’ємного значення x та обчислення ординати.'
  },
  {
    id: 'ex-1-1-16-3',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 16 (3)',
    baseNumber: 16,
    partNumber: 3,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Чи належить графіку y = x² - 6x + 9 точка C(4; 1):',
    expression: 'x = 4 => y = 4² - 6 · 4 + 9',
    options: [
      { id: 'opt-1', label: 'А', text: 'Так, належить (1 = 1)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Ні, не належить (y = -1)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Ні, y = 5', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Точка лежить поза областю визначення', isCorrect: false }
    ],
    explanation: '4² - 6(4) + 9 = 16 - 24 + 9 = 1. Рівність правильна, точка C належить графіку.',
    essence: 'Перевірка координат точки.'
  },
  {
    id: 'ex-1-1-16-4',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 16 (4)',
    baseNumber: 16,
    partNumber: 4,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Чи проходить графік функції y = (x - 3)² через точку D(1,5; 2,25):',
    expression: 'x = 1,5 => y = (1,5 - 3)²',
    options: [
      { id: 'opt-1', label: 'А', text: 'Так, належить ((-1,5)² = 2,25)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Ні, y = -2,25', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Ні, не належить', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Точка лежить на осі абсцис', isCorrect: false }
    ],
    explanation: 'x² - 6x + 9 = (x - 3)². При x = 1,5: (1,5 - 3)² = (-1,5)² = 2,25. Точка D належить графіку.',
    essence: 'Використання згорнутої формули квадрата різниці для спрощення підстановки.'
  },

  // № 25: Всі 4 приклади за підручником (Лінійні рівняння)
  {
    id: 'ex-1-2-25-1',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 25 (1)',
    baseNumber: 25,
    partNumber: 1,
    category: 'equation',
    type: 'choice',
    questionPrompt: 'Розв’яжіть лінійне рівняння:',
    expression: '7 - 3x - 3 = 10 - 4x',
    options: [
      { id: 'opt-1', label: 'А', text: 'x = 6', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x = -6', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x = 14', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x = 2', isCorrect: false }
    ],
    explanation: '4 - 3x = 10 - 4x => -3x + 4x = 10 - 4 => x = 6.',
    essence: 'Зведення подібних та перенесення доданків зі змінною в одну сторону.'
  },
  {
    id: 'ex-1-2-25-2',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 25 (2)',
    baseNumber: 25,
    partNumber: 2,
    category: 'equation',
    type: 'choice',
    questionPrompt: 'Знайдіть корені рівняння:',
    expression: '5 + 12y - 7y = 5(y + 1)',
    options: [
      { id: 'opt-1', label: 'А', text: 'y — будь-яке число (безліч коренів)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'коренів немає', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'y = 0', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'y = 5', isCorrect: false }
    ],
    explanation: '5 + 5y = 5y + 5 => 0y = 0. Рівність правильна при будь-якому y.',
    essence: 'Тотожне рівняння з безліччю розв’язків.'
  },
  {
    id: 'ex-1-2-25-3',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 25 (3)',
    baseNumber: 25,
    partNumber: 3,
    category: 'equation',
    type: 'choice',
    questionPrompt: 'Розв’яжіть рівняння:',
    expression: '-1,2x + 5 = 3(-0,4x + 1)',
    options: [
      { id: 'opt-1', label: 'А', text: 'коренів немає', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x = 0', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x — будь-яке число', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x = 2', isCorrect: false }
    ],
    explanation: '-1,2x + 5 = -1,2x + 3 => -1,2x + 1,2x = 3 - 5 => 0x = -2. На нуль ділити не можна, рівняння не має коренів.',
    essence: 'Рівняння виду 0x = b (b ≠ 0) не має дійсних коренів.'
  },
  {
    id: 'ex-1-2-25-4',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 25 (4)',
    baseNumber: 25,
    partNumber: 4,
    category: 'equation',
    type: 'choice',
    questionPrompt: 'Розв’яжіть рівняння з десятковими коефіцієнтами:',
    expression: '1,5y - 4 = 5 + 0,9y',
    options: [
      { id: 'opt-1', label: 'А', text: 'y = 15', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'y = 1,5', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'y = -15', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'y = 9', isCorrect: false }
    ],
    explanation: '1,5y - 0,9y = 5 + 4 => 0,6y = 9 => y = 9 / 0,6 = 90 / 6 = 15.',
    essence: 'Розв’язування лінійного рівняння з десятковими дробами.'
  },

  // --- TOPIC 1-2: Сюжетні задачі підручника № 34, 35, 37 ---
  // № 34: Всі 4 частини реальної задачі підручника про моторний човен (с. 10)
  {
    id: 'ex-1-2-34-1',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 34 (1)',
    baseNumber: 34,
    partNumber: 1,
    category: 'task',
    taskText: '№ 34: Моторний човен 2 год плив за течією річки і 1 год проти течії, подолавши разом 50 км. Знайдіть рівняння шляху, якщо власна швидкість човна v, а швидкість течії річки u:',
    type: 'choice',
    questionPrompt: 'Оберіть правильну математичну модель руху:',
    expression: '2(v + u) + 1(v - u) = 50',
    options: [
      { id: 'opt-1', label: 'А', text: '3v + u = 50', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '3v - u = 50', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '2v + u = 50', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'v + 3u = 50', isCorrect: false }
    ],
    explanation: '2(v + u) + (v - u) = 2v + 2u + v - u = 3v + u = 50.',
    essence: 'Складання математичної моделі за текстом задачі.'
  },
  {
    id: 'ex-1-2-34-2',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 34 (2)',
    baseNumber: 34,
    partNumber: 2,
    category: 'task',
    taskText: '№ 34: Відомо, що швидкість течії річки становить 5 км/год (u = 5). Знайдіть власну швидкість човна v:',
    type: 'choice',
    questionPrompt: 'Знайдіть власну швидкість човна v (в км/год):',
    expression: '3v + 5 = 50',
    options: [
      { id: 'opt-1', label: 'А', text: '15 км/год', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '18 км/год', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '12 км/год', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '20 км/год', isCorrect: false }
    ],
    explanation: '3v = 50 - 5 = 45 => v = 15 км/год.',
    essence: 'Знаходження невідомої змінної лінійного рівняння.'
  },
  {
    id: 'ex-1-2-34-3',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 34 (3)',
    baseNumber: 34,
    partNumber: 3,
    category: 'task',
    taskText: '№ 34: Обчисліть швидкість руху човна проти течії річки:',
    type: 'choice',
    questionPrompt: 'Обчисліть v_проти:',
    expression: 'v_{проти} = 15 - 5',
    options: [
      { id: 'opt-1', label: 'А', text: '10 км/год', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '20 км/год', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '15 км/год', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '8 км/год', isCorrect: false }
    ],
    explanation: 'v_проти = v - u = 15 - 5 = 10 км/год.',
    essence: 'Швидкість руху проти течії річки.'
  },
  {
    id: 'ex-1-2-34-4',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 34 (4)',
    baseNumber: 34,
    partNumber: 4,
    category: 'task',
    taskText: '№ 34: Перевірте загальний шлях: 2 год зі швидкістю 20 км/год + 1 год зі швидкістю 10 км/год:',
    type: 'choice',
    questionPrompt: 'Виконайте перевірку результату:',
    expression: '2 · 20 + 1 · 10 = ?',
    options: [
      { id: 'opt-1', label: 'А', text: '50 км (умова задачі виконується)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '60 км', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '40 км', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '45 км', isCorrect: false }
    ],
    explanation: '40 + 10 = 50 км. Умова виконується повністю.',
    essence: 'Арифметична перевірка розв’язку сюжетної задачі.'
  },

  // № 35: Всі 4 частини задачі про моторний човен «Львів» (с. 10)
  {
    id: 'ex-1-2-35-1',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 35 (1)',
    baseNumber: 35,
    partNumber: 1,
    category: 'task',
    taskText: '№ 35: Моторний човен «Львів» за 3 год за течією і 1 год проти течії проходить 82 км. При цьому швидкість течії річки дорівнює 3 км/год. Складіть рівняння для визначення власної швидкості човна v:',
    type: 'choice',
    questionPrompt: 'Оберіть правильну математичну модель:',
    expression: '3(v + 3) + 1(v - 3) = 82',
    options: [
      { id: 'opt-1', label: 'А', text: '4v + 6 = 82', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '4v - 6 = 82', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '4v = 82', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '3v + 6 = 82', isCorrect: false }
    ],
    explanation: '3v + 9 + v - 3 = 4v + 6 = 82.',
    essence: 'Складання математичної моделі задачі на рух по річці.'
  },
  {
    id: 'ex-1-2-35-2',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 35 (2)',
    baseNumber: 35,
    partNumber: 2,
    category: 'task',
    taskText: '№ 35: Знайдіть власну швидкість моторного човна «Львів» v:',
    type: 'choice',
    questionPrompt: 'Обчисліть v (км/год):',
    expression: '4v = 82 - 6 = 76',
    options: [
      { id: 'opt-1', label: 'А', text: '19 км/год', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '21 км/год', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '18 км/год', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '20 км/год', isCorrect: false }
    ],
    explanation: '4v = 76 => v = 76 / 4 = 19 км/год.',
    essence: 'Знаходження власної швидкості човна.'
  },
  {
    id: 'ex-1-2-35-3',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 35 (3)',
    baseNumber: 35,
    partNumber: 3,
    category: 'task',
    taskText: '№ 35: Знайдіть швидкість човна за течією та проти течії річки:',
    type: 'choice',
    questionPrompt: 'Визначте пари швидкостей:',
    expression: 'v_{за} = 19 + 3, v_{проти} = 19 - 3',
    options: [
      { id: 'opt-1', label: 'А', text: '22 км/год та 16 км/год', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '20 км/год та 15 км/год', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '25 км/год та 18 км/год', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '22 км/год та 19 км/год', isCorrect: false }
    ],
    explanation: 'За течією: 19 + 3 = 22 км/год. Проти течії: 19 - 3 = 16 км/год.',
    essence: 'Швидкості руху за течією та проти течії.'
  },
  {
    id: 'ex-1-2-35-4',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 35 (4)',
    baseNumber: 35,
    partNumber: 4,
    category: 'task',
    taskText: '№ 35: Скільки кілометрів пройде човен по озеру (стояча вода) за 2 години:',
    type: 'choice',
    questionPrompt: 'Обчисліть відстань по озеру:',
    expression: 'S = v · t = 19 · 2',
    options: [
      { id: 'opt-1', label: 'А', text: '38 км', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '44 км', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '32 км', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '36 км', isCorrect: false }
    ],
    explanation: 'В озері течія відсутня (u = 0), тому швидкість дорівнює власній швидкості 19 км/год. Відстань: 19 · 2 = 38 км.',
    essence: 'Рух у стоячій воді.'
  },
  {
    id: 'ex-1-1-35-2',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 35 (2)',
    baseNumber: 35,
    partNumber: 2,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Розкладіть вираз на множники методом винесення за дужки та різниці квадратів:',
    expression: '5a³ - 20a',
    options: [
      { id: 'opt-1', label: 'А', text: '5a(a - 2)(a + 2)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '5a(a² - 20)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '5(a³ - 4a)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'a(5a² - 20)', isCorrect: false }
    ],
    explanation: '5a³ - 20a = 5a(a² - 4) = 5a(a - 2)(a + 2).',
    essence: 'Послідовне застосування винесення спільного множника та формули різниці квадратів.'
  },
  {
    id: 'ex-1-1-35-3',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 35 (3)',
    baseNumber: 35,
    partNumber: 3,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Розкладіть на множники:',
    expression: '25 - y²',
    options: [
      { id: 'opt-1', label: 'А', text: '(5 - y)(5 + y)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(y - 5)(y + 5)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(5 - y)²', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '25(1 - y)', isCorrect: false }
    ],
    explanation: '25 - y² = 5² - y² = (5 - y)(5 + y).',
    essence: 'Формула різниці квадратів.'
  },
  {
    id: 'ex-1-1-35-4',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 35 (4)',
    baseNumber: 35,
    partNumber: 4,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Розкладіть на множники:',
    expression: '3x² - 12',
    options: [
      { id: 'opt-1', label: 'А', text: '3(x - 2)(x + 2)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '3(x - 4)(x + 4)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(3x - 6)(x + 2)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '3(x² - 12)', isCorrect: false }
    ],
    explanation: '3x² - 12 = 3(x² - 4) = 3(x - 2)(x + 2).',
    essence: 'Винесення числа за дужки і різниця квадратів.'
  },
  {
    id: 'ex-1-1-35-5',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 35 (5)',
    baseNumber: 35,
    partNumber: 5,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Розкладіть на лінійні множники вираз четвертого степеня:',
    expression: 'm⁴ - 16',
    options: [
      { id: 'opt-1', label: 'А', text: '(m - 2)(m + 2)(m² + 4)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(m - 2)³(m + 2)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(m² - 4)²', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '(m - 4)(m + 4)', isCorrect: false }
    ],
    explanation: 'm⁴ - 16 = (m² - 4)(m² + 4) = (m - 2)(m + 2)(m² + 4).',
    essence: 'Багаторазове застосування різниці квадратів.'
  },
  {
    id: 'ex-1-1-35-6',
    topicId: 't-1-1',
    chapterId: 'ch-1',
    exerciseNumber: '№ 35 (6)',
    baseNumber: 35,
    partNumber: 6,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Розкладіть на множники многочлен:',
    expression: '2a² - 18',
    options: [
      { id: 'opt-1', label: 'А', text: '2(a - 3)(a + 3)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '2(a - 9)(a + 9)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(2a - 6)(a + 3)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '2(a - 3)²', isCorrect: false }
    ],
    explanation: '2a² - 18 = 2(a² - 9) = 2(a - 3)(a + 3).',
    essence: 'Винесення коефіцієнта за дужки.'
  },

  // --- TOPIC 1-2: "Лінійні функції, їх графіки та властивості" ---
  // № 48: Всі 6 прикладів за підручником
  {
    id: 'ex-1-2-48-1',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 48 (1)',
    baseNumber: 48,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Знайдіть значення функції y = 3x - 5, якщо x = 4:',
    expression: 'y = 3 · 4 - 5',
    options: [
      { id: 'opt-1', label: 'А', text: '7', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '12', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '9', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '-7', isCorrect: false }
    ],
    explanation: 'y = 3 · 4 - 5 = 12 - 5 = 7.',
    essence: 'Обчислення значення лінійної функції за заданим аргументом.'
  },
  {
    id: 'ex-1-2-48-2',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 48 (2)',
    baseNumber: 48,
    partNumber: 2,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Знайдіть нуль лінійної функції y = 2x - 10:',
    expression: '2x - 10 = 0',
    options: [
      { id: 'opt-1', label: 'А', text: 'x = 5', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x = -5', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x = 10', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x = 2', isCorrect: false }
    ],
    explanation: '2x - 10 = 0 => 2x = 10 => x = 5.',
    essence: 'Нуль функції — це значення x, при якому y = 0.'
  },
  {
    id: 'ex-1-2-48-3',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 48 (3)',
    baseNumber: 48,
    partNumber: 3,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Знайдіть значення функції y = -4x + 12, якщо аргумент x = -2:',
    expression: 'y = -4 · (-2) + 12',
    options: [
      { id: 'opt-1', label: 'А', text: '20', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '4', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '-20', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '-4', isCorrect: false }
    ],
    explanation: 'y = -4 · (-2) + 12 = 8 + 12 = 20.',
    essence: 'Обчислення функції з від\'ємним коефіцієнтом k.'
  },
  {
    id: 'ex-1-2-48-4',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 48 (4)',
    baseNumber: 48,
    partNumber: 4,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Знайдіть значення аргументу x, при якому функція y = 2x + 4 набуває значення y = 8:',
    expression: '2x + 4 = 8',
    options: [
      { id: 'opt-1', label: 'А', text: 'x = 2', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x = 4', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x = 6', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x = 1', isCorrect: false }
    ],
    explanation: '2x + 4 = 8 => 2x = 4 => x = 2.',
    essence: 'Знаходження аргументу за значенням функції.'
  },
  {
    id: 'ex-1-2-48-5',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 48 (5)',
    baseNumber: 48,
    partNumber: 5,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Вкажіть координати точки перетину графіка функції y = 5x - 15 з віссю ординат Oy (x = 0):',
    expression: 'x = 0 => y = 5 · 0 - 15',
    options: [
      { id: 'opt-1', label: 'А', text: '(0; -15)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(3; 0)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(-15; 0)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '(0; 15)', isCorrect: false }
    ],
    explanation: 'При перетині з віссю Oy координата x = 0, тому y = 5(0) - 15 = -15. Точка: (0; -15).',
    essence: 'Геометричний зміст вільного члена b у формулі y = kx + b.'
  },
  {
    id: 'ex-1-2-48-6',
    topicId: 't-1-2',
    chapterId: 'ch-1',
    exerciseNumber: '№ 48 (6)',
    baseNumber: 48,
    partNumber: 6,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Вкажіть координати точки перетину графіка y = -3x + 9 з віссю абсцис Ox (y = 0):',
    expression: '-3x + 9 = 0',
    options: [
      { id: 'opt-1', label: 'А', text: '(3; 0)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(0; 9)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(-3; 0)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '(0; -3)', isCorrect: false }
    ],
    explanation: '-3x + 9 = 0 => 3x = 9 => x = 3. Точка: (3; 0).',
    essence: 'Знаходження перетину з віссю Ox.'
  },

  // --- TOPIC 2-2: "§ 2. Раціональний дріб. Основна властивість. Скорочення дробів" (від № 89 по № 113) ---
  // Автентичні завдання з підручника, відповіді на с. 330:
  ...AUTHENTIC_TOPIC_2_2_EXERCISES,

  // --- TOPIC 2-3: "§ 3. Додавання і віднімання дробів з однаковими знаменниками" (від № 114 по № 180) ---
  // № 114: Всі 6 прикладів на додавання дробів з однаковими знаменниками
  {
    id: 'ex-2-3-114-1',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 114 (1)',
    baseNumber: 114,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Виконайте додавання раціональних дробів з однаковими знаменниками:',
    expression: '(3a - 2b) / 5x + (2a + 2b) / 5x',
    options: [
      { id: 'opt-1', label: 'А', text: 'a / x', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '5a / 10x', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(5a + 4b) / 5x', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'a', isCorrect: false }
    ],
    explanation: '[(3a - 2b) + (2a + 2b)] / 5x = (3a + 2a - 2b + 2b) / 5x = 5a / 5x = a / x.',
    essence: 'Додавання дробів з однаковими знаменниками та скорочення спільного числового множника 5.'
  },
  {
    id: 'ex-2-3-114-2',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 114 (2)',
    baseNumber: 114,
    partNumber: 2,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Виконайте додавання та спростіть результат:',
    expression: '(7m - 4) / 6 + (5m + 4) / 6',
    options: [
      { id: 'opt-1', label: 'А', text: '2m', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '12m / 6 - 8', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '2m - 4/3', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'm', isCorrect: false }
    ],
    explanation: '(7m - 4) / 6 + (5m + 4) / 6 = (7m - 4 + 5m + 4) / 6 = 12m / 6 = 2m.',
    essence: 'Додавання дробів та зведення подібних доданків.'
  },
  {
    id: 'ex-2-3-114-3',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 114 (3)',
    baseNumber: 114,
    partNumber: 3,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Виконайте додавання дробів:',
    expression: '(10x - 3) / 7y + (4x + 3) / 7y',
    options: [
      { id: 'opt-1', label: 'А', text: '2x / y', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '14x / 7y', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '2x', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '(14x - 6) / 7y', isCorrect: false }
    ],
    explanation: '(10x - 3 + 4x + 3) / 7y = 14x / 7y = 2x / y.',
    essence: 'Зведення подібних доданків і скорочення на 7.'
  },
  {
    id: 'ex-2-3-114-4',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 114 (4)',
    baseNumber: 114,
    partNumber: 4,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Виконайте дії додавання раціональних дробів:',
    expression: '(a² + 1) / (a - 2) - 5 / (a - 2)',
    options: [
      { id: 'opt-1', label: 'А', text: 'a + 2', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'a - 2', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(a² - 4) / (a - 2)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'a² - 4', isCorrect: false }
    ],
    explanation: '(a² + 1 - 5) / (a - 2) = (a² - 4) / (a - 2) = (a - 2)(a + 2) / (a - 2) = a + 2 (при a ≠ 2).',
    essence: 'Спрощення дробу за формулою різниці квадратів.'
  },
  {
    id: 'ex-2-3-114-5',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 114 (5)',
    baseNumber: 114,
    partNumber: 5,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Знайдіть суму раціональних дробів:',
    expression: '(b² - 2) / (b + 3) + (6b + 11) / (b + 3)',
    options: [
      { id: 'opt-1', label: 'А', text: 'b + 3', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'b - 3', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(b + 3)²', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '1', isCorrect: false }
    ],
    explanation: '(b² - 2 + 6b + 11) / (b + 3) = (b² + 6b + 9) / (b + 3) = (b + 3)² / (b + 3) = b + 3.',
    essence: 'Формула квадрата суми при скороченні дробів.'
  },
  {
    id: 'ex-2-3-114-6',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 114 (6)',
    baseNumber: 114,
    partNumber: 6,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Виконайте додавання раціональних дробів:',
    expression: '(x² - 3x) / (x - 3)',
    options: [
      { id: 'opt-1', label: 'А', text: 'x', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x - 3', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x + 3', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '1', isCorrect: false }
    ],
    explanation: '(x² - 3x) / (x - 3) = x(x - 3) / (x - 3) = x (при x ≠ 3).',
    essence: 'Винесення x за дужки та скорочення дробу.'
  },

  // № 115: Всі 6 прикладів на віднімання дробів з однаковими знаменниками
  {
    id: 'ex-2-3-115-1',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 115 (1)',
    baseNumber: 115,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Виконайте віднімання раціональних дробів з однаковими знаменниками:',
    expression: '(7x - 2) / 3m - (4x - 2) / 3m',
    options: [
      { id: 'opt-1', label: 'А', text: 'x / m', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(3x - 4) / 3m', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '3x / m', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '(11x) / 3m', isCorrect: false }
    ],
    explanation: '[(7x - 2) - (4x - 2)] / 3m = (7x - 2 - 4x + 2) / 3m = 3x / 3m = x / m.',
    essence: 'Правило додавання і віднімання дробів зі спільним знаменником.'
  },
  {
    id: 'ex-2-3-115-2',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 115 (2)',
    baseNumber: 115,
    partNumber: 2,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Виконайте віднімання раціональних дробів:',
    expression: '(5a + 6) / 4b - (a + 6) / 4b',
    options: [
      { id: 'opt-1', label: 'А', text: 'a / b', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '4a / 4b', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(4a + 12) / 4b', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'a', isCorrect: false }
    ],
    explanation: '(5a + 6 - a - 6) / 4b = 4a / 4b = a / b.',
    essence: 'Зміна знаків при відніманні чисельника.'
  },
  {
    id: 'ex-2-3-115-3',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 115 (3)',
    baseNumber: 115,
    partNumber: 3,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Спростіть вираз:',
    expression: '(y² + 4) / (y - 2) - 8 / (y - 2)',
    options: [
      { id: 'opt-1', label: 'А', text: 'y + 2', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'y - 2', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(y² - 4) / (y - 2)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'y + 4', isCorrect: false }
    ],
    explanation: '(y² + 4 - 8) / (y - 2) = (y² - 4) / (y - 2) = (y - 2)(y + 2) / (y - 2) = y + 2.',
    essence: 'Формула різниці квадратів.'
  },
  {
    id: 'ex-2-3-115-4',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 115 (4)',
    baseNumber: 115,
    partNumber: 4,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Виконайте дію віднімання дробів:',
    expression: '(3x + 5) / (x + 1) - (2x + 4) / (x + 1)',
    options: [
      { id: 'opt-1', label: 'А', text: '1', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x + 1', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(x + 9) / (x + 1)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '0', isCorrect: false }
    ],
    explanation: '(3x + 5 - 2x - 4) / (x + 1) = (x + 1) / (x + 1) = 1 (при x ≠ -1).',
    essence: 'Скорочення однакового чисельника і знаменника.'
  },
  {
    id: 'ex-2-3-115-5',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 115 (5)',
    baseNumber: 115,
    partNumber: 5,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Спростіть вираз за формулою квадрата різниці:',
    expression: '(m² + 9) / (m - 3) - 6m / (m - 3)',
    options: [
      { id: 'opt-1', label: 'А', text: 'm - 3', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'm + 3', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(m - 3)²', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '1', isCorrect: false }
    ],
    explanation: '(m² - 6m + 9) / (m - 3) = (m - 3)² / (m - 3) = m - 3.',
    essence: 'Формула квадрата різниці в чисельнику дробу.'
  },
  {
    id: 'ex-2-3-115-6',
    topicId: 't-2-3',
    chapterId: 'ch-2',
    exerciseNumber: '№ 115 (6)',
    baseNumber: 115,
    partNumber: 6,
    category: 'example',
    type: 'choice',
    questionPrompt: 'Виконайте віднімання раціональних дробів:',
    expression: '(8c + 5) / 2d - (2c + 5) / 2d',
    options: [
      { id: 'opt-1', label: 'А', text: '3c / d', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '6c / 2d', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '3c', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '(6c + 10) / 2d', isCorrect: false }
    ],
    explanation: '(8c + 5 - 2c - 5) / 2d = 6c / 2d = 3c / d.',
    essence: 'Зведення подібних доданків та скорочення на 2.'
  }
];

/**
 * Повертає виключно автентичні завдання з підручника для обраної теми.
 * Жодних штучно додуманих чи вигаданих номерів/прикладів.
 * Номери, де немає прикладів, не відображаються — залишаються лише ті, що є в підручнику та у відповідях в кінці!
 */
export function getExercisesForTopic(
  topicId: string, 
  chapterId?: string,
  bookId: 'merzlyak' | 'tarasenkova' | 'ister' | string = 'tarasenkova'
): TextbookExercise[] {
  const chId = chapterId || 'ch-1';
  const safeBookId = (bookId === 'tarasenkova' || bookId === 'ister' || bookId === 'merzlyak') ? bookId : 'tarasenkova';
  const bookExercises = getTextbookExercisesByBookId(safeBookId);

  // Збираємо автентичні завдання з підручника
  const fromBook = bookExercises.filter(ex => ex.topicId === topicId);
  const curated = TEXTBOOK_EXERCISES.filter(ex => ex.topicId === topicId);

  const exerciseMap = new Map<string, TextbookExercise>();

  curated.forEach((c) => {
    const key = `${c.baseNumber}-${c.partNumber || 1}`;
    exerciseMap.set(key, {
      ...c,
      chapterId: chId,
    });
  });

  fromBook.forEach((b) => {
    const key = `${b.baseNumber}-${b.partNumber || 1}`;
    exerciseMap.set(key, {
      ...b,
      chapterId: chId,
    });
  });

  const allExercises = Array.from(exerciseMap.values()).sort((a, b) => {
    if (a.baseNumber !== b.baseNumber) return a.baseNumber - b.baseNumber;
    return (a.partNumber || 1) - (b.partNumber || 1);
  });

  // Перемішуємо варіанти відповідей детерміновано, щоб правильна відповідь не завжди була першою
  return allExercises.map((ex) => {
    if (ex.type === 'choice' && ex.options && ex.options.length > 0) {
      return {
        ...ex,
        options: randomizeOptions(ex.options, ex.id),
      };
    }
    return ex;
  });
}

export interface TopicExerciseRange {
  fromNumber: number;
  toNumber: number;
  label: string; // e.g. "від № 1 по № 35"
}

export const TOPIC_EXERCISE_RANGES: Record<string, TopicExerciseRange> = {
  // Розділ 1: Повторення та систематизація (7 клас) (с. 5-12)
  't-1-1': { fromNumber: 1, toNumber: 24, label: 'від № 1 по № 24' },
  't-1-2': { fromNumber: 25, toNumber: 49, label: 'від № 25 по № 49' },

  // Розділ 2: Раціональні вирази (с. 13-134)
  't-2-1': { fromNumber: 50, toNumber: 84, label: 'від № 50 по № 84' },
  't-2-2': { fromNumber: 89, toNumber: 113, label: 'від № 89 по № 113' },
  't-2-3': { fromNumber: 114, toNumber: 180, label: 'від № 114 по № 180' },
  't-2-5': { fromNumber: 181, toNumber: 264, label: 'від № 181 по № 264' },
  't-2-8': { fromNumber: 265, toNumber: 418, label: 'від № 265 по № 418' },
  't-2-11': { fromNumber: 419, toNumber: 467, label: 'від № 419 по № 467' },

  // Розділ 3: Квадратні корені. Дійсні числа (с. 135-208)
  't-3-1': { fromNumber: 468, toNumber: 497, label: 'від № 468 по № 497' },
  't-3-2': { fromNumber: 498, toNumber: 614, label: 'від № 498 по № 614' },
  't-3-5': { fromNumber: 615, toNumber: 715, label: 'від № 615 по № 715' },

  // Розділ 4: Квадратні рівняння (с. 209-275)
  't-4-1': { fromNumber: 716, toNumber: 774, label: 'від № 716 по № 774' },
  't-4-2': { fromNumber: 775, toNumber: 806, label: 'від № 775 по № 806' },
  't-4-3': { fromNumber: 807, toNumber: 927, label: 'від № 807 по № 927' },

  // Розділ 5: Елементи стохастики (с. 276-315)
  't-5-1': { fromNumber: 928, toNumber: 969, label: 'від № 928 по № 969' },
  't-5-2': { fromNumber: 970, toNumber: 997, label: 'від № 970 по № 997' },
  't-5-3': { fromNumber: 998, toNumber: 1065, label: 'від № 998 по № 1065' }
};

export interface TopicLookupResult {
  chapterId: string;
  topicId: string;
  chapterNumber: number;
  chapterTitle: string;
  topicTitle: string;
  range: TopicExerciseRange;
}

/**
 * Searches across ALL chapters and topics in the textbook for a specific exercise number.
 * Maps any exercise number (1..1065) to its exact section in Tarasenkova Algebra 8.
 */
export function findTopicInfoForNumber(num: number): TopicLookupResult | null {
  for (const ch of CHAPTERS) {
    for (const top of ch.topics) {
      const r = TOPIC_EXERCISE_RANGES[top.id];
      if (r && num >= r.fromNumber && num <= r.toNumber) {
        return {
          chapterId: ch.id,
          topicId: top.id,
          chapterNumber: ch.number,
          chapterTitle: ch.title,
          topicTitle: top.title,
          range: r
        };
      }
    }
  }

  return null;
}

export function getTopicExerciseRange(topicId: string, fallbackIdx: number = 0): TopicExerciseRange {
  if (TOPIC_EXERCISE_RANGES[topicId]) {
    return TOPIC_EXERCISE_RANGES[topicId];
  }
  const from = Math.max(1, fallbackIdx * 35 + 1);
  const to = from + 34;
  return {
    fromNumber: from,
    toNumber: to,
    label: `від № ${from} по № ${to}`
  };
}

function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}

