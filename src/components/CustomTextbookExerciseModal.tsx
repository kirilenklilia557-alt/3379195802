import React, { useState } from 'react';
import { X, BookOpen, Plus, Sparkles, Check, ArrowRight, BookMarked, HelpCircle } from 'lucide-react';
import { TextbookExercise } from '../types/textbook';
import { SUPPORTED_TEXTBOOKS, TextbookInfo } from '../data/textbooksData';
import { sounds } from '../utils/soundEffects';

interface CustomTextbookExerciseModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBookId: 'merzlyak' | 'tarasenkova' | 'ister';
  onSelectBookId: (bookId: 'merzlyak' | 'tarasenkova' | 'ister') => void;
  onAddCustomExercise: (exercise: TextbookExercise) => void;
  activeTopicId: string;
  activeChapterId: string;
}

export const CustomTextbookExerciseModal: React.FC<CustomTextbookExerciseModalProps> = ({
  isOpen,
  onClose,
  selectedBookId,
  onSelectBookId,
  onAddCustomExercise,
  activeTopicId,
  activeChapterId
}) => {
  const [activeTab, setActiveTab] = useState<'switch_book' | 'quick_pick' | 'custom_input'>('switch_book');
  
  // Custom manual input state
  const [exerciseNumberInput, setExerciseNumberInput] = useState<string>('№ 1 (1)');
  const [expressionInput, setExpressionInput] = useState<string>('(x² - 9) / (x + 3)');
  const [promptInput, setPromptInput] = useState<string>('Спростіть або скоротіть вираз:');
  const [correctAnswerInput, setCorrectAnswerInput] = useState<string>('x - 3');
  const [wrongAnswersInput, setWrongAnswersInput] = useState<string>('x + 3, (x - 3) / 2, x² - 3');
  const [explanationInput, setExplanationInput] = useState<string>('Розкладаємо чисельник як різницю квадратів: x² - 9 = (x - 3)(x + 3) і скорочуємо на (x + 3).');

  if (!isOpen) return null;

  const currentBook = SUPPORTED_TEXTBOOKS.find(b => b.id === selectedBookId) || SUPPORTED_TEXTBOOKS[0];

  const handleCreateCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!expressionInput.trim() || !correctAnswerInput.trim()) return;

    const wrongs = wrongAnswersInput
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);

    while (wrongs.length < 3) {
      wrongs.push(`інша відповідь ${wrongs.length + 1}`);
    }

    const customId = `custom-book-${Date.now()}`;
    const baseMatch = exerciseNumberInput.match(/\d+/);
    const baseNum = baseMatch ? parseInt(baseMatch[0], 10) : 1;

    const newEx: TextbookExercise = {
      id: customId,
      topicId: activeTopicId,
      chapterId: activeChapterId,
      exerciseNumber: exerciseNumberInput.trim() || '№ 1 (1)',
      baseNumber: baseNum,
      category: 'example',
      type: 'choice',
      questionPrompt: promptInput.trim() || 'Виконайте завдання з підручника:',
      expression: expressionInput.trim(),
      options: [
        { id: `${customId}-opt-1`, label: 'А', text: correctAnswerInput.trim(), isCorrect: true },
        { id: `${customId}-opt-2`, label: 'Б', text: wrongs[0] || '0', isCorrect: false },
        { id: `${customId}-opt-3`, label: 'В', text: wrongs[1] || '1', isCorrect: false },
        { id: `${customId}-opt-4`, label: 'Г', text: wrongs[2] || 'не існує', isCorrect: false }
      ],
      explanation: explanationInput.trim() || 'Покрокове розв\'язання за правилами підручника.',
      essence: 'Приклад з підручника учня.'
    };

    sounds.playLevelUp();
    onAddCustomExercise(newEx);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-blue-500/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-xl">
              📖
            </div>
            <div>
              <h2 className="text-lg font-black text-white flex items-center gap-2">
                Приклади з підручника
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-bold border border-blue-500/30">
                  8 клас
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Оберіть свій шкільний підручник або введіть номер і приклад зі своєї книжки
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex p-2 gap-1.5 bg-slate-950 border-b border-slate-800 text-xs font-bold">
          <button
            onClick={() => setActiveTab('switch_book')}
            className={`flex-1 py-2.5 px-3 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
              activeTab === 'switch_book'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <BookMarked className="w-4 h-4" />
            <span>1. Оберіть свій підручник</span>
          </button>

          <button
            onClick={() => setActiveTab('custom_input')}
            className={`flex-1 py-2.5 px-3 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
              activeTab === 'custom_input'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Plus className="w-4 h-4" />
            <span>2. Ввести приклад з моєї книжки</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* TAB 1: SWITCH TEXTBOOK */}
          {activeTab === 'switch_book' && (
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Оберіть підручник, за яким ви навчаєтеся у школі:
              </div>

              <div className="grid grid-cols-1 gap-3">
                {SUPPORTED_TEXTBOOKS.map((book) => {
                  const isSelected = selectedBookId === book.id;
                  return (
                    <div
                      key={book.id}
                      onClick={() => {
                        sounds.playClick();
                        onSelectBookId(book.id);
                      }}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-4 ${
                        isSelected
                          ? 'bg-blue-950/40 border-blue-500 shadow-lg shadow-blue-950/30'
                          : 'bg-slate-800/60 border-slate-700 hover:bg-slate-800 hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-start gap-3.5">
                        <div className="text-3xl shrink-0 mt-0.5">{book.icon}</div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-base font-black text-white">{book.authors}</span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-700 text-slate-300 border border-slate-600">
                              {book.grade}
                            </span>
                            {isSelected && (
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
                                <Check className="w-3 h-3" /> Активний підручник
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-blue-300 font-semibold mt-0.5">{book.name}</div>
                          <p className="text-xs text-slate-400 mt-1.5">{book.description}</p>
                          <div className="mt-2 text-[11px] text-amber-300/90 font-medium">
                            ⭐️ {book.badge}
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all ${
                          isSelected
                            ? 'bg-blue-500 border-blue-400 text-white'
                            : 'border-slate-600 text-transparent hover:border-slate-400'
                        }`}
                      >
                        <Check className="w-4 h-4" />
                      </button>
                    </div>
                  );
                })}
              </div>

              <div className="p-4 rounded-2xl bg-blue-950/30 border border-blue-500/30 flex items-center justify-between gap-4">
                <div className="text-xs text-slate-300">
                  <span className="font-bold text-white">Всі завдання</span> у додатку тепер будуть братися точно з обраного підручника!
                </div>
                <button
                  onClick={() => {
                    sounds.playStart();
                    onClose();
                  }}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-1.5 shrink-0 cursor-pointer shadow-md"
                >
                  <span>Застосувати</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: CUSTOM EXERCISE INPUT */}
          {activeTab === 'custom_input' && (
            <form onSubmit={handleCreateCustom} className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 flex items-start gap-2.5">
                <HelpCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  Відкрийте вашу книгу на потрібній сторінці, введіть номер і приклад. Додаток автоматично створить завдання з 4 варіантами (А, Б, В, Г), щоб викликаний до дошки учень міг його розв'язати й отримати оцінку!
                </div>
              </div>

              {/* Quick Template Chips */}
              <div>
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Швидкий приклад з книги:
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setExerciseNumberInput('№ 2 (1)');
                      setPromptInput('Обчисліть значення виразу зручним способом:');
                      setExpressionInput('2,71 · 9,2 + 9,2 · 3,29');
                      setCorrectAnswerInput('55,2');
                      setWrongAnswersInput('552, 5,52, 56');
                      setExplanationInput('Виносимо 9,2 за дужки: 9,2 · (2,71 + 3,29) = 9,2 · 6,00 = 55,2.');
                    }}
                    className="px-2.5 py-1.5 rounded-xl bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/40 text-blue-200 text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span>⚡ № 2 (1): 2,71 · 9,2 + 9,2 · 3,29</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setExerciseNumberInput('№ 2 (2)');
                      setPromptInput('Обчисліть значення виразу зручним способом:');
                      setExpressionInput('71 · 9,2 + 9,2 · 29');
                      setCorrectAnswerInput('920');
                      setWrongAnswersInput('92, 9200, 100');
                      setExplanationInput('Виносимо 9,2 за дужки: 9,2 · (71 + 29) = 9,2 · 100 = 920.');
                    }}
                    className="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span>⚡ № 2 (2): 71 · 9,2 + 9,2 · 29</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setExerciseNumberInput('№ 2 (3)');
                      setPromptInput('Обчисліть значення виразу зручним способом:');
                      setExpressionInput('14,7 · 3,8 - 3,8 · 4,7');
                      setCorrectAnswerInput('38');
                      setWrongAnswersInput('3,8, 380, 35,9');
                      setExplanationInput('Виносимо 3,8 за дужки: 3,8 · (14,7 - 4,7) = 3,8 · 10 = 38.');
                    }}
                    className="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span>⚡ № 2 (3): 14,7 · 3,8 - 3,8 · 4,7</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Номер у книжці
                  </label>
                  <input
                    type="text"
                    value={exerciseNumberInput}
                    onChange={(e) => setExerciseNumberInput(e.target.value)}
                    placeholder="№ 1 (1) або № 14 (3)"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm font-semibold focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Запитання / Команда
                  </label>
                  <input
                    type="text"
                    value={promptInput}
                    onChange={(e) => setPromptInput(e.target.value)}
                    placeholder="Спростіть вираз: або Обчисліть:"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm font-semibold focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Умова / Формула з підручника
                </label>
                <input
                  type="text"
                  value={expressionInput}
                  onChange={(e) => setExpressionInput(e.target.value)}
                  placeholder="наприклад: (x² - 9) / (x + 3) або 2a²b : (4ab)"
                  className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white text-base font-mono focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-emerald-400 mb-1">
                    Правильна відповідь (Буде випадково серед А, Б, В, Г)
                  </label>
                  <input
                    type="text"
                    value={correctAnswerInput}
                    onChange={(e) => setCorrectAnswerInput(e.target.value)}
                    placeholder="x - 3"
                    className="w-full px-3 py-2 bg-slate-950 border border-emerald-500/50 rounded-xl text-emerald-300 text-sm font-bold focus:outline-none focus:border-emerald-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Неправильні варіанти (через кому)
                  </label>
                  <input
                    type="text"
                    value={wrongAnswersInput}
                    onChange={(e) => setWrongAnswersInput(e.target.value)}
                    placeholder="x + 3, x - 9, (x - 3)/2"
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-slate-200 text-sm focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Пояснення розв'язання (для учня біля дошки)
                </label>
                <textarea
                  value={explanationInput}
                  onChange={(e) => setExplanationInput(e.target.value)}
                  rows={2}
                  placeholder="Поясніть крок за кроком..."
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-xl text-white text-xs focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-all cursor-pointer"
                >
                  Скасувати
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-emerald-950/40 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Розв'язати цей приклад з книги</span>
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};
