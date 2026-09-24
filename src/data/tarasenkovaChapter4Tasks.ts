import { TextbookExercise } from '../types/textbook';

/**
 * Автентичні завдання з підручника «Алгебра 8 клас» (Н. А. Тарасенкова та ін., 2025)
 * РОЗДІЛ 4. КВАДРАТНІ РІВНЯННЯ (§ 17 – § 21: № 716 – № 865)
 * Квадратні рівняння, спосіб виділення квадрата двочлена, дискримінант, теорема Вієта,
 * розкладання квадратного тричлена на лінійні множники та рівняння, які зводяться до квадратних.
 */
export const TARASENKOVA_CHAPTER_4_TASKS: TextbookExercise[] = [
  // ========================================================
  // § 17. КВАДРАТНІ РІВНЯННЯ (§ 17: № 716 - № 742)
  // ========================================================

  // --- № 719. Яке з рівнянь є квадратним ---
  {
    id: 'tar-719',
    topicId: 't-4-1',
    chapterId: 'ch-4',
    exerciseNumber: '№ 719',
    baseNumber: 719,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '719. Яке з даних рівнянь є квадратним: 1) 4х² + 7х – 3 = 0; 2) х² – 5х + 3 = 0; 3) 2х³ + х + 4 = 0; 4) 4х² – 16 = 0; 5) х² + 5х = 0; 6) 8х + 16 = 0?',
    questionPrompt: 'Які з наведених рівнянь є квадратними (ступінь 2, a ≠ 0):',
    expression: 'ax² + bx + c = 0, a ≠ 0',
    options: [
      { id: 'opt-1', label: 'А', text: '1), 2), 4), 5)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Усі 6 рівнянь', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Тільки 1) і 2)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '1), 2), 3), 4)', isCorrect: false }
    ],
    explanation: 'Квадратним називається рівняння вигляду ax² + bx + c = 0, де a ≠ 0. 3) має степінь 3 (кубічне), 6) має степінь 1 (лінійне). Рівняння 1, 2, 4, 5 є квадратними (4 і 5 — неповні).',
    essence: 'Означення квадратного рівняння та його види.'
  },

  // --- № 720. Коефіцієнти квадратного рівняння ---
  {
    id: 'tar-720',
    topicId: 't-4-1',
    chapterId: 'ch-4',
    exerciseNumber: '№ 720',
    baseNumber: 720,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    questionPrompt: 'Назвіть коефіцієнти квадратного рівняння 6х² + 5х – 1 = 0:',
    expression: '6х² + 5х – 1 = 0',
    options: [
      { id: 'opt-1', label: 'А', text: 'a = 6, b = 5, c = –1', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'a = 6, b = 5, c = 1', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'a = 6, b = –5, c = –1', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'a = 5, b = 6, c = –1', isCorrect: false }
    ],
    explanation: 'Перший коефіцієнт (біля x²) a = 6, другий коефіцієнт (біля x) b = 5, вільний член c = –1.',
    essence: 'Коефіцієнти квадратного рівняння ax² + bx + c = 0.'
  },

  // --- № 721. Запис квадратного рівняння за коефіцієнтами ---
  {
    id: 'tar-721',
    topicId: 't-4-1',
    chapterId: 'ch-4',
    exerciseNumber: '№ 721',
    baseNumber: 721,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    questionPrompt: 'Запишіть квадратне рівняння, у якого a = 3, b = 2, c = 4:',
    expression: 'a = 3, b = 2, c = 4',
    options: [
      { id: 'opt-1', label: 'А', text: '3x² + 2x + 4 = 0', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '3x² – 2x + 4 = 0', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '2x² + 3x + 4 = 0', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '4x² + 2x + 3 = 0', isCorrect: false }
    ],
    explanation: 'Підставляємо у загальну форму ax² + bx + c = 0: 3x² + 2x + 4 = 0.',
    essence: 'Складання квадратного рівняння за його коефіцієнтами.'
  },

  // --- № 724. Перетворення на зведене квадратне рівняння ---
  {
    id: 'tar-724',
    topicId: 't-4-1',
    chapterId: 'ch-4',
    exerciseNumber: '№ 724',
    baseNumber: 724,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    questionPrompt: 'Перетворіть квадратне рівняння 2х² + 17х – 9 = 0 на зведене:',
    expression: '2х² + 17х – 9 = 0',
    options: [
      { id: 'opt-1', label: 'А', text: 'x² + 8,5x – 4,5 = 0 (або x² + 17/2 x – 9/2 = 0)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x² + 17x – 9 = 0', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x² + 8,5x + 4,5 = 0', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '2x² + 8,5x – 4,5 = 0', isCorrect: false }
    ],
    explanation: 'Ділимо обидві частини рівняння на перший коефіцієнт a = 2: x² + 17/2 x – 9/2 = 0 => x² + 8,5x – 4,5 = 0.',
    essence: 'Зведене квадратне рівняння x² + px + q = 0.'
  },

  // --- № 726. Зведення рівняння до стандартного вигляду ---
  {
    id: 'tar-726',
    topicId: 't-4-1',
    chapterId: 'ch-4',
    exerciseNumber: '№ 726',
    baseNumber: 726,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    questionPrompt: 'Зведіть до вигляду ax² + bx + c = 0 рівняння (х + 1)(х – 2) = 4:',
    expression: '(x + 1)(x – 2) = 4',
    options: [
      { id: 'opt-1', label: 'А', text: 'x² – x – 6 = 0', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x² – x – 2 = 0', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x² + x – 6 = 0', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x² – 2x – 4 = 0', isCorrect: false }
    ],
    explanation: 'Розкриваємо дужки: x² – 2x + x – 2 = 4 => x² – x – 2 – 4 = 0 => x² – x – 6 = 0 (відповідь с. 341).',
    essence: 'Тотожні перетворення рівняння до стандартного вигляду ax² + bx + c = 0.'
  },

  // --- № 730. Розв\'язування рівняння виду (x + m)² = n ---
  {
    id: 'tar-730',
    topicId: 't-4-1',
    chapterId: 'ch-4',
    exerciseNumber: '№ 730',
    baseNumber: 730,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    questionPrompt: 'Розв’яжіть рівняння (х + 7)² = 49:',
    expression: '(x + 7)² = 49',
    options: [
      { id: 'opt-1', label: 'А', text: '0 і –14', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '0 і 14', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '7 і –7', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'тільки 0', isCorrect: false }
    ],
    explanation: 'x + 7 = 7 або x + 7 = –7 => x1 = 0, x2 = –14 (відповідь с. 341).',
    essence: 'Добування квадратного кореня з обох частин рівняння.'
  },

  // --- № 732. Спосіб виділення квадрата двочлена ---
  {
    id: 'tar-732',
    topicId: 't-4-1',
    chapterId: 'ch-4',
    exerciseNumber: '№ 732',
    baseNumber: 732,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    questionPrompt: 'Розв’яжіть способом виділення квадрата двочлена: х² + 2х – 8 = 0:',
    expression: 'x² + 2x – 8 = 0',
    options: [
      { id: 'opt-1', label: 'А', text: '2 і –4', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '1 і –8', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '–2 і 4', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '2 і 4', isCorrect: false }
    ],
    explanation: 'x² + 2x + 1 – 1 – 8 = 0 => (x + 1)² = 9 => x + 1 = 3 або x + 1 = –3 => x1 = 2, x2 = –4 (відповідь с. 341).',
    essence: 'Спосіб виділення квадрата двочлена (x ± m)² = n.'
  },

  // ========================================================
  // § 18. ФОРМУЛА КОРЕНІВ КВАДРАТНОГО РІВНЯННЯ (№ 743 - № 774)
  // ========================================================

  // --- № 743. Формула дискримінанта ---
  {
    id: 'tar-743',
    topicId: 't-4-1',
    chapterId: 'ch-4',
    exerciseNumber: '№ 743',
    baseNumber: 743,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    questionPrompt: 'За якою формулою визначають дискримінант рівняння ax² + bx + c = 0:',
    expression: 'D = ?',
    options: [
      { id: 'opt-1', label: 'А', text: 'D = b² – 4ac', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'D = b² + 4ac', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'D = b² – ac', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'D = –b² – 4ac', isCorrect: false }
    ],
    explanation: 'Дискримінант квадратного рівняння ax² + bx + c = 0 обчислюється за формулою D = b² – 4ac.',
    essence: 'Формула дискримінанта квадратного рівняння.'
  },

  // --- № 744. Формула коренів квадратного рівняння ---
  {
    id: 'tar-744',
    topicId: 't-4-1',
    chapterId: 'ch-4',
    exerciseNumber: '№ 744',
    baseNumber: 744,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    questionPrompt: 'За якою формулою визначають корені рівняння ax² + bx + c = 0 (при D ≥ 0):',
    expression: 'x1,2 = ?',
    options: [
      { id: 'opt-1', label: 'А', text: 'x1,2 = (–b ± √D) / (2a)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x1,2 = (b ± √D) / (2a)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x1,2 = (–b ± √D) / a', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x1,2 = (b² ± √D) / (2a)', isCorrect: false }
    ],
    explanation: 'Формула коренів квадратного рівняння: x1,2 = (–b ± √D) / (2a).',
    essence: 'Формула коренів квадратного рівняння.'
  },

  // --- № 749. Обчислення дискримінанта ---
  {
    id: 'tar-749',
    topicId: 't-4-1',
    chapterId: 'ch-4',
    exerciseNumber: '№ 749',
    baseNumber: 749,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    questionPrompt: 'Як обчислюють дискримінант рівняння х² – 10х + 16 = 0 та скільки коренів воно має:',
    expression: 'x² – 10x + 16 = 0',
    options: [
      { id: 'opt-1', label: 'А', text: 'D = (–10)² – 4 · 1 · 16 = 36 (два корені)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'D = 10² – 4 · 1 · 16 = –36 (коренів немає)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'D = (–10)² + 4 · 1 · 16 = 164 (два корені)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'D = 0 (один корінь)', isCorrect: false }
    ],
    explanation: 'a = 1, b = –10, c = 16. D = (–10)² – 4·1·16 = 100 – 64 = 36. Оскільки D > 0, рівняння має два різні корені (x1 = 8, x2 = 2).',
    essence: 'Обчислення дискримінанта та визначення кількості коренів.'
  },

  // --- № 755. Розв\'язання квадратного рівняння ---
  {
    id: 'tar-755',
    topicId: 't-4-1',
    chapterId: 'ch-4',
    exerciseNumber: '№ 755',
    baseNumber: 755,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    questionPrompt: 'Розв’яжіть квадратне рівняння х² + 4х – 5 = 0:',
    expression: 'x² + 4x – 5 = 0',
    options: [
      { id: 'opt-1', label: 'А', text: '1 і –5', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '–1 і 5', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '2 і –3', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '1 і 5', isCorrect: false }
    ],
    explanation: 'D = 4² – 4 · 1 · (–5) = 16 + 20 = 36 = 6². x1 = (–4 + 6)/2 = 1; x2 = (–4 – 6)/2 = –5 (відповідь с. 341).',
    essence: 'Розв\'язання повного зведеного квадратного рівняння за формулою коренів.'
  },

  // --- № 757. Незведене квадратне рівняння ---
  {
    id: 'tar-757',
    topicId: 't-4-1',
    chapterId: 'ch-4',
    exerciseNumber: '№ 757',
    baseNumber: 757,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    questionPrompt: 'Розв’яжіть квадратне рівняння 2х² – х – 6 = 0:',
    expression: '2х² – х – 6 = 0',
    options: [
      { id: 'opt-1', label: 'А', text: '2 і –1,5', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '–2 і 1,5', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '3 і –1', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '2 і 1,5', isCorrect: false }
    ],
    explanation: 'D = (–1)² – 4 · 2 · (–6) = 1 + 48 = 49 = 7². x1 = (1 + 7) / 4 = 2; x2 = (1 – 7) / 4 = –6/4 = –1,5 (відповідь с. 341).',
    essence: 'Розв\'язання незведеного квадратного рівняння ax² + bx + c = 0.'
  },

  // ========================================================
  // § 19. ТЕОРЕМА ВІЄТА (№ 775 - № 806)
  // ========================================================

  // --- № 775. Формулювання теореми Вієта для x² + px + q = 0 ---
  {
    id: 'tar-775',
    topicId: 't-4-2',
    chapterId: 'ch-4',
    exerciseNumber: '№ 775',
    baseNumber: 775,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    questionPrompt: 'Яке співвідношення для суми коренів є правильним для рівняння x² + px + q = 0:',
    expression: 'x1 + x2 = ?',
    options: [
      { id: 'opt-1', label: 'А', text: 'x1 + x2 = –p', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x1 + x2 = p', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x1 + x2 = –q', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x1 + x2 = q', isCorrect: false }
    ],
    explanation: 'За теоремою Вієта для зведеного квадратного рівняння: сума коренів x1 + x2 = –p, а добуток x1 · x2 = q.',
    essence: 'Теорема Вієта для зведеного квадратного рівняння.'
  },

  // --- № 778. Дослідження коренів за теоремою Вієта ---
  {
    id: 'tar-778',
    topicId: 't-4-2',
    chapterId: 'ch-4',
    exerciseNumber: '№ 778',
    baseNumber: 778,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    questionPrompt: 'Не розв’язуючи рівняння х² – 6х + 8 = 0, назвіть суму, добуток та знаки його коренів:',
    expression: 'x² – 6x + 8 = 0',
    options: [
      { id: 'opt-1', label: 'А', text: 'Сума: 6; добуток: 8; обидва корені додатні (+, +)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Сума: –6; добуток: 8; обидва корені від\'ємні (–, –)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Сума: 6; добуток: –8; різні знаки (+, –)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Сума: 8; добуток: 6; додатні', isCorrect: false }
    ],
    explanation: 'x1 + x2 = –(–6) = 6. x1 · x2 = 8. Оскільки добуток > 0 і сума > 0, обидва корені є додатними числами (це 2 і 4).',
    essence: 'Властивості знаків коренів за теоремою Вієта.'
  },

  // --- № 787. Розв\'язання за теоремою Вієта ---
  {
    id: 'tar-787',
    topicId: 't-4-2',
    chapterId: 'ch-4',
    exerciseNumber: '№ 787',
    baseNumber: 787,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    questionPrompt: 'Скориставшись теоремою Вієта, розв’яжіть рівняння х² + 3х – 4 = 0:',
    expression: 'x² + 3x – 4 = 0',
    options: [
      { id: 'opt-1', label: 'А', text: '1 і –4', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '–1 і 4', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '2 і –2', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '3 і –4', isCorrect: false }
    ],
    explanation: 'x1 + x2 = –3, x1 · x2 = –4. Дільники числа –4 із сумою –3: це 1 і –4 (відповідь с. 342).',
    essence: 'Усний підбір коренів квадратного рівняння за теоремою Вієта.'
  },

  // --- № 792. Складання рівняння за коренями ---
  {
    id: 'tar-792',
    topicId: 't-4-2',
    chapterId: 'ch-4',
    exerciseNumber: '№ 792',
    baseNumber: 792,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    questionPrompt: 'Складіть зведене квадратне рівняння, коренями якого є числа 2 і 5:',
    expression: 'x1 = 2, x2 = 5',
    options: [
      { id: 'opt-1', label: 'А', text: 'x² – 7x + 10 = 0', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'x² + 7x + 10 = 0', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'x² – 7x – 10 = 0', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'x² + 10x + 7 = 0', isCorrect: false }
    ],
    explanation: 'p = –(x1 + x2) = –(2 + 5) = –7; q = x1 · x2 = 2 · 5 = 10. Рівняння: x² – 7x + 10 = 0.',
    essence: 'Обернена теорема Вієта для побудови квадратного рівняння.'
  },

  // ========================================================
  // § 20. КВАДРАТНИЙ ТРИЧЛЕН (№ 807 - № 830)
  // ========================================================

  // --- № 808. Формула розкладання на лінійні множники ---
  {
    id: 'tar-808',
    topicId: 't-4-3',
    chapterId: 'ch-4',
    exerciseNumber: '№ 808',
    baseNumber: 808,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    questionPrompt: 'Чи правильно записано формулу розкладання квадратного тричлена на лінійні множники:',
    expression: 'ax² + bx + c = a(x – x1)(x – x2)',
    options: [
      { id: 'opt-1', label: 'А', text: 'Так, ax² + bx + c = a(x – x1)(x – x2)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Ні, має бути (x – x1)(x – x2) без коефіцієнта a', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Ні, має бути a(x + x1)(x + x2)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: 'Ні, це формула різниці квадратів', isCorrect: false }
    ],
    explanation: 'Теорема: якщо x1 і x2 — корені квадратного тричлена ax² + bx + c, то ax² + bx + c = a(x – x1)(x – x2).',
    essence: 'Теорема про розкладання квадратного тричлена на множники.'
  },

  // --- № 812. Розкладання тричлена на множники ---
  {
    id: 'tar-812',
    topicId: 't-4-3',
    chapterId: 'ch-4',
    exerciseNumber: '№ 812',
    baseNumber: 812,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    questionPrompt: 'Розкладіть на лінійні множники квадратний тричлен х² – 3х – 10:',
    expression: 'x² – 3x – 10',
    options: [
      { id: 'opt-1', label: 'А', text: '(x – 5)(x + 2)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '(x + 5)(x – 2)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(x – 10)(x + 1)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '(x – 5)(x – 2)', isCorrect: false }
    ],
    explanation: 'Корені рівняння x² – 3x – 10 = 0: x1 = 5, x2 = –2. Розклад: (x – 5)(x – (–2)) = (x – 5)(x + 2) (відповідь с. 342).',
    essence: 'Розкладання зведеного квадратного тричлена на множники.'
  },

  // --- № 818. Скорочення дробу за допомогою тричлена ---
  {
    id: 'tar-818',
    topicId: 't-4-3',
    chapterId: 'ch-4',
    exerciseNumber: '№ 818',
    baseNumber: 818,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    questionPrompt: 'Скоротіть дріб (3x – 1) / (3x² + 2x – 1):',
    expression: '(3x – 1) / (3x² + 2x – 1)',
    options: [
      { id: 'opt-1', label: 'А', text: '1 / (x + 1)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '1 / (x – 1)', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '(3x – 1) / (x + 1)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '3 / (x + 1)', isCorrect: false }
    ],
    explanation: 'Корені 3x² + 2x – 1 = 0: x1 = 1/3, x2 = –1. Тоді 3x² + 2x – 1 = 3(x – 1/3)(x + 1) = (3x – 1)(x + 1). Скорочуємо (3x – 1): одержуємо 1/(x + 1) (відповідь с. 342).',
    essence: 'Застосування розкладання тричлена для скорочення раціональних дробів.'
  },

  // ========================================================
  // § 21. РІВНЯННЯ, ЩО ЗВОДЯТЬСЯ ДО КВАДРАТНИХ (№ 831 - № 865)
  // ========================================================

  // --- № 834. Біквадратні рівняння ---
  {
    id: 'tar-834',
    topicId: 't-4-3',
    chapterId: 'ch-4',
    exerciseNumber: '№ 834',
    baseNumber: 834,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    taskText: '834. Які з рівнянь є біквадратними: 1) х⁴ – 3х² – 4 = 0; 2) х⁴ – 2х³ + 2 = 0; 3) х⁴ + 2х² – 8 = 0; 4) 2х⁴ – 2х + 2 = 0?',
    questionPrompt: 'Які з наведених рівнянь є біквадратними (виду ax⁴ + bx² + c = 0, a ≠ 0):',
    expression: 'ax⁴ + bx² + c = 0',
    options: [
      { id: 'opt-1', label: 'А', text: '1) та 3)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: 'Усі чотири', isCorrect: false },
      { id: 'opt-3', label: 'В', text: 'Тільки 1)', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '1), 2), 3)', isCorrect: false }
    ],
    explanation: 'Біквадратним називають рівняння ax⁴ + bx² + c = 0. Рівняння 2 містить x³, а 4 містить x, тому вони не є біквадратними. Біквадратними є 1) та 3).',
    essence: 'Означення біквадратного рівняння.'
  },

  // --- № 848. Розв\'язання біквадратного рівняння ---
  {
    id: 'tar-848',
    topicId: 't-4-3',
    chapterId: 'ch-4',
    exerciseNumber: '№ 848',
    baseNumber: 848,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    questionPrompt: 'Розв’яжіть біквадратне рівняння х⁴ – 10х² + 9 = 0:',
    expression: 'x⁴ – 10x² + 9 = 0',
    options: [
      { id: 'opt-1', label: 'А', text: '±1 і ±3 (чотири корені: –3, –1, 1, 3)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '1 і 9', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '±9 і ±1', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '±2 і ±3', isCorrect: false }
    ],
    explanation: 'Заміна t = x² ≥ 0: t² – 10t + 9 = 0 => (t – 1)(t – 9) = 0 => t1 = 1, t2 = 9. Повертаємося до x: x² = 1 => x = ±1; x² = 9 => x = ±3 (відповідь с. 344).',
    essence: 'Метод заміни змінної для біквадратних рівнянь.'
  },

  // --- № 850. Біквадратне рівняння з дробовими коренями ---
  {
    id: 'tar-850',
    topicId: 't-4-3',
    chapterId: 'ch-4',
    exerciseNumber: '№ 850',
    baseNumber: 850,
    partNumber: 1,
    category: 'example',
    type: 'choice',
    isAuthenticBook: true,
    questionPrompt: 'Розв’яжіть біквадратне рівняння 4х⁴ – 37х² + 9 = 0:',
    expression: '4x⁴ – 37x² + 9 = 0',
    options: [
      { id: 'opt-1', label: 'А', text: '±3 і ±0,5 (±1/2)', isCorrect: true },
      { id: 'opt-2', label: 'Б', text: '±9 і ±1/4', isCorrect: false },
      { id: 'opt-3', label: 'В', text: '3 і 0,5', isCorrect: false },
      { id: 'opt-4', label: 'Г', text: '±2 і ±3', isCorrect: false }
    ],
    explanation: 'Заміна t = x² ≥ 0: 4t² – 37t + 9 = 0. D = 37² – 4·4·9 = 1369 – 144 = 1225 = 35². t1 = (37 + 35)/8 = 9 => x = ±3; t2 = (37 – 35)/8 = 2/8 = 1/4 => x = ±1/2 = ±0,5 (відповідь с. 344).',
    essence: 'Розв\'язання біквадратного рівняння.'
  }
];
