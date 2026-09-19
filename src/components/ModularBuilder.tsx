import React, { useState } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  RotateCcw, 
  ArrowRight, 
  ArrowUp, 
  ArrowDown, 
  Sparkles, 
  Lightbulb, 
  Layers, 
  Check, 
  Plus, 
  Trash2,
  BookOpen
} from 'lucide-react';
import { ModularExercise, ModularStep } from '../types/algebra';
import { CHAPTERS } from '../data/chaptersData';
import { PenTool } from 'lucide-react';

interface ModularBuilderProps {
  initialExerciseId?: string;
  onSolveSuccess?: (exerciseId: string) => void;
  solvedExercises: Set<string>;
  onOpenHandwriting?: (exercise: ModularExercise) => void;
}

export const ModularBuilder: React.FC<ModularBuilderProps> = ({
  initialExerciseId,
  onSolveSuccess,
  solvedExercises,
  onOpenHandwriting
}) => {
  // Collect all modular exercises across all chapters and topics
  const allExercises: { exercise: ModularExercise; chapterTitle: string; topicTitle: string }[] = [];
  CHAPTERS.forEach(ch => {
    ch.topics.forEach(top => {
      top.modularPractice.forEach(ex => {
        allExercises.push({
          exercise: ex,
          chapterTitle: `Розділ ${ch.number}. ${ch.title}`,
          topicTitle: top.title
        });
      });
    });
  });

  const [selectedExerciseId, setSelectedExerciseId] = useState<string>(
    initialExerciseId || allExercises[0]?.exercise.id || ''
  );

  const currentItem = allExercises.find(item => item.exercise.id === selectedExerciseId) || allExercises[0];
  const currentExercise = currentItem?.exercise;

  // Selected steps by student
  const [pipeline, setPipeline] = useState<string[]>([]);
  const [validationResult, setValidationResult] = useState<{
    status: 'idle' | 'success' | 'error';
    message: string;
    stepFeedback?: { stepId: string; isCorrect: boolean; tip: string }[];
  }>({ status: 'idle', message: '' });

  const [showHint, setShowHint] = useState<boolean>(false);
  const [showEssence, setShowEssence] = useState<boolean>(true);

  // Switch exercise
  const handleSelectExercise = (id: string) => {
    setSelectedExerciseId(id);
    setPipeline([]);
    setValidationResult({ status: 'idle', message: '' });
    setShowHint(false);
  };

  // Add module to pipeline
  const addModuleToPipeline = (moduleId: string) => {
    if (pipeline.includes(moduleId)) return;
    setPipeline(prev => [...prev, moduleId]);
    setValidationResult({ status: 'idle', message: '' });
  };

  // Remove module from pipeline
  const removeModuleFromPipeline = (moduleId: string) => {
    setPipeline(prev => prev.filter(id => id !== moduleId));
    setValidationResult({ status: 'idle', message: '' });
  };

  // Move step up
  const moveStepUp = (index: number) => {
    if (index <= 0) return;
    setPipeline(prev => {
      const next = [...prev];
      const temp = next[index - 1];
      next[index - 1] = next[index];
      next[index] = temp;
      return next;
    });
    setValidationResult({ status: 'idle', message: '' });
  };

  // Move step down
  const moveStepDown = (index: number) => {
    if (index >= pipeline.length - 1) return;
    setPipeline(prev => {
      const next = [...prev];
      const temp = next[index + 1];
      next[index + 1] = next[index];
      next[index] = temp;
      return next;
    });
    setValidationResult({ status: 'idle', message: '' });
  };

  // Reset pipeline
  const resetPipeline = () => {
    setPipeline([]);
    setValidationResult({ status: 'idle', message: '' });
  };

  // Auto-solve for learning demonstration
  const autoFillCorrect = () => {
    setPipeline([...currentExercise.correctSequence]);
    setValidationResult({ status: 'idle', message: '' });
  };

  // Verify pipeline
  const verifyPipeline = () => {
    if (pipeline.length === 0) {
      setValidationResult({
        status: 'error',
        message: 'Будь ласка, оберіть хоча б один модуль дій для формування розв’язку!'
      });
      return;
    }

    const expected = currentExercise.correctSequence;

    // Check if lengths match and elements match in order
    const isCorrect = 
      pipeline.length === expected.length &&
      pipeline.every((id, idx) => id === expected[idx]);

    if (isCorrect) {
      setValidationResult({
        status: 'success',
        message: 'Чудово! Ви правильно зібрали всі математичні модулі в єдиний послідовний алгоритм!'
      });
      if (onSolveSuccess) {
        onSolveSuccess(currentExercise.id);
      }
    } else {
      // Analyze error details
      let errorReason = '';
      if (pipeline.length < expected.length) {
        errorReason = `Ви використали лише ${pipeline.length} з ${expected.length} необхідних кроків. Схоже, деякі важливі перетворення пропущені.`;
      } else if (pipeline.length > expected.length) {
        errorReason = 'У вашому ланцюжку є зайві або помилкові модулі дій.';
      } else {
        // Find first misplaced step
        for (let i = 0; i < pipeline.length; i++) {
          if (pipeline[i] !== expected[i]) {
            errorReason = `Помилка в кроці №${i + 1}: дія виконана передчасно або обрано хибний модуль. Перевірте порядок операцій!`;
            break;
          }
        }
      }

      setValidationResult({
        status: 'error',
        message: errorReason || 'Порядок дій або склад модулів містить помилку. Спробуйте змінити розташування карток.'
      });
    }
  };

  // Map module ID to details
  const getModuleById = (id: string): ModularStep | undefined => {
    return currentExercise.availableModules.find(m => m.id === id);
  };

  const isSolved = solvedExercises.has(currentExercise.id);

  return (
    <div className="space-y-6">
      {/* Exercise Selector bar */}
      <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
              {currentItem.chapterTitle}
            </span>
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-600" />
              Модульний конструктор прикладів
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-500 font-medium">Оберіть завдання:</span>
            <select
              value={selectedExerciseId}
              onChange={(e) => handleSelectExercise(e.target.value)}
              className="text-sm font-medium bg-slate-50 border border-slate-300 rounded-lg px-3 py-1.5 text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
            >
              {allExercises.map(({ exercise, topicTitle }) => (
                <option key={exercise.id} value={exercise.id}>
                  {exercise.category} — {exercise.problem.slice(0, 45)}... {solvedExercises.has(exercise.id) ? '✓' : ''}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Main Task Display & Essence */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="p-6 bg-gradient-to-r from-indigo-50/70 via-blue-50/40 to-white border-b border-slate-200">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                {currentExercise.category}
              </span>
              <span className={`px-2.5 py-1 rounded-md text-xs font-semibold ${
                currentExercise.difficulty === 'Початковий'
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                  : currentExercise.difficulty === 'Середній'
                  ? 'bg-blue-100 text-blue-800 border border-blue-200'
                  : currentExercise.difficulty === 'Достатній'
                  ? 'bg-amber-100 text-amber-800 border border-amber-200'
                  : 'bg-rose-100 text-rose-800 border border-rose-200'
              }`}>
                Рівень: {currentExercise.difficulty}
              </span>
              {isSolved && (
                <span className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-200">
                  <Check className="w-3.5 h-3.5" /> Вирішено
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              {onOpenHandwriting && (
                <button
                  onClick={() => onOpenHandwriting(currentExercise)}
                  className="text-xs flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-black bg-[#58cc02] hover:bg-[#46a302] font-black transition-all border-b-2 border-green-700 cursor-pointer shadow-sm"
                >
                  <PenTool className="w-3.5 h-3.5" />
                  ✍️ Рукописний ввід (ШІ)
                </button>
              )}
              <button
                onClick={() => setShowEssence(!showEssence)}
                className="text-xs flex items-center gap-1 px-2.5 py-1 rounded-lg text-indigo-700 bg-indigo-50 hover:bg-indigo-100 font-medium transition-colors"
              >
                <Lightbulb className="w-3.5 h-3.5" />
                {showEssence ? 'Сховати суть приклада' : 'Суть приклада'}
              </button>
              <button
                onClick={() => setShowHint(!showHint)}
                className="text-xs flex items-center gap-1 px-2.5 py-1 rounded-lg text-slate-600 bg-slate-100 hover:bg-slate-200 font-medium transition-colors"
              >
                <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
                Підказка
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight font-mono bg-white p-3.5 rounded-lg border border-indigo-100 inline-block">
              {currentExercise.problem}
            </h3>
            <p className="text-sm text-slate-600 font-medium">
              {currentExercise.taskPrompt}
            </p>
          </div>

          {/* Essence block (Суть приклада) as explicitly requested */}
          {showEssence && (
            <div className="mt-4 p-3.5 rounded-lg bg-amber-50/90 border border-amber-200 text-amber-950 text-sm flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block text-amber-900">Суть приклада (головне правило теми):</span>
                <p className="mt-0.5 leading-relaxed">{currentExercise.essence}</p>
              </div>
            </div>
          )}

          {/* Hint */}
          {showHint && (
            <div className="mt-3 p-3 rounded-lg bg-blue-50 border border-blue-200 text-blue-900 text-xs flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
              <span>{currentExercise.hint}</span>
            </div>
          )}
        </div>

        {/* Workbench: Two Columns */}
        <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Pool of Available Modules */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-indigo-600" />
                Доступні модулі дій
              </span>
              <span className="text-xs text-slate-500">
                (Натисніть щоб додати)
              </span>
            </div>

            <div className="space-y-2.5">
              {currentExercise.availableModules.map((module) => {
                const isUsed = pipeline.includes(module.id);
                return (
                  <div
                    key={module.id}
                    onClick={() => !isUsed && addModuleToPipeline(module.id)}
                    className={`p-3.5 rounded-xl border transition-all select-none ${
                      isUsed
                        ? 'bg-slate-50 border-slate-200 opacity-40 cursor-not-allowed'
                        : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-xs cursor-pointer active:scale-[0.99]'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-slate-800">
                            {module.title}
                          </span>
                          {module.ruleTag && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded-sm bg-slate-100 text-slate-600 border border-slate-200">
                              {module.ruleTag}
                            </span>
                          )}
                        </div>
                        <div className="text-sm font-bold text-indigo-900 font-mono">
                          {module.math}
                        </div>
                        <p className="text-xs text-slate-500 leading-snug">
                          {module.explanation}
                        </p>
                      </div>

                      <button
                        disabled={isUsed}
                        className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                          isUsed
                            ? 'bg-slate-200 text-slate-400'
                            : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white'
                        }`}
                        title="Додати модуль до алгоритму"
                      >
                        {isUsed ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Assembled Pipeline */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-slate-50 rounded-xl p-5 border border-slate-200 min-h-[380px]">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
                <div>
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Зібраний ланцюжок розв'язку
                  </span>
                  <p className="text-xs text-slate-500">
                    Кроки розв’язування у правильному порядку ({pipeline.length} / {currentExercise.correctSequence.length})
                  </p>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={autoFillCorrect}
                    className="text-xs text-slate-600 hover:text-indigo-600 px-2 py-1 rounded-md hover:bg-white transition-colors"
                    title="Показати зразок"
                  >
                    Показати розв'язок
                  </button>
                  <button
                    onClick={resetPipeline}
                    className="text-xs text-slate-600 hover:text-rose-600 px-2 py-1 rounded-md hover:bg-white flex items-center gap-1 transition-colors"
                  >
                    <RotateCcw className="w-3 h-3" /> Очистити
                  </button>
                </div>
              </div>

              {/* Pipeline Step List */}
              {pipeline.length === 0 ? (
                <div className="h-64 flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-slate-300 rounded-xl bg-white/60">
                  <Layers className="w-10 h-10 text-slate-400 mb-2 stroke-1" />
                  <p className="text-sm font-semibold text-slate-700">Ланцюжок порожній</p>
                  <p className="text-xs text-slate-500 max-w-sm mt-1">
                    Натисніть «+» на картках модулів ліворуч, щоб вибудувати математичний алгоритм розв’язання крок за кроком.
                  </p>
                </div>
              ) : (
                <div className="space-y-2.5">
                  {pipeline.map((stepId, index) => {
                    const step = getModuleById(stepId);
                    if (!step) return null;
                    return (
                      <div
                        key={step.id}
                        className="p-3.5 bg-white rounded-xl border border-slate-200 shadow-2xs flex items-center justify-between gap-3 group transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                            {index + 1}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-semibold text-slate-800">
                                {step.title}
                              </span>
                              {step.ruleTag && (
                                <span className="text-[10px] px-1.5 py-0.2 rounded-sm bg-indigo-50 text-indigo-700 border border-indigo-100">
                                  {step.ruleTag}
                                </span>
                              )}
                            </div>
                            <div className="text-sm font-bold text-slate-900 font-mono mt-0.5">
                              {step.math}
                            </div>
                          </div>
                        </div>

                        {/* Controls to reorder or remove */}
                        <div className="flex items-center gap-1 shrink-0">
                          <button
                            onClick={() => moveStepUp(index)}
                            disabled={index === 0}
                            className="p-1 rounded-md text-slate-400 hover:text-slate-700 disabled:opacity-20 hover:bg-slate-100"
                            title="Перемістити вище"
                          >
                            <ArrowUp className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => moveStepDown(index)}
                            disabled={index === pipeline.length - 1}
                            className="p-1 rounded-md text-slate-400 hover:text-slate-700 disabled:opacity-20 hover:bg-slate-100"
                            title="Перемістити нижче"
                          >
                            <ArrowDown className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => removeModuleFromPipeline(step.id)}
                            className="p-1 rounded-md text-slate-400 hover:text-rose-600 hover:bg-rose-50 ml-1"
                            title="Видалити крок"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Validation & Results Footer */}
            <div className="pt-4 mt-4 border-t border-slate-200">
              {validationResult.status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 mb-3 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-bold text-emerald-900">{validationResult.message}</p>
                    <p className="text-xs text-emerald-800">
                      <span className="font-semibold">Отримана відповідь: </span> 
                      <span className="font-mono bg-white px-2 py-0.5 rounded border border-emerald-300 font-bold">
                        {currentExercise.finalAnswer}
                      </span>
                    </p>
                  </div>
                </div>
              )}

              {validationResult.status === 'error' && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-950 mb-3 flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-rose-900">Помилка у послідовності!</p>
                    <p className="text-xs text-rose-800 mt-0.5">{validationResult.message}</p>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between gap-3">
                <div className="text-xs text-slate-500">
                  {validationResult.status === 'success' ? (
                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      <Check className="w-4 h-4" /> Завдання зараховано!
                    </span>
                  ) : (
                    <span>Зберіть модулі та натисніть «Перевірити розв’язок».</span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={verifyPipeline}
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white text-sm font-semibold shadow-sm transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    Перевірити розв'язок
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
