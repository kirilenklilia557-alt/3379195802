import React, { useState, useMemo, useEffect } from 'react';
import { X, Hash, ChevronRight, Sparkles, BookOpen, Layers, Search } from 'lucide-react';
import { TextbookExercise } from '../types/textbook';
import { TextbookMath } from './TextbookMath';
import { sounds } from '../utils/soundEffects';

interface TopicNumbersTableModalProps {
  isOpen: boolean;
  onClose: () => void;
  topicTitle: string;
  chapterNumber: number;
  topicExercises: TextbookExercise[];
  currentExerciseId: string;
  onSelectExercise: (exerciseId: string) => void;
}

interface GroupedNumber {
  baseNumber: string; // e.g. "№ 85"
  numericVal: number; // 85
  items: TextbookExercise[]; // [№ 85 (1), № 85 (2), ...]
}

export const TopicNumbersTableModal: React.FC<TopicNumbersTableModalProps> = ({
  isOpen,
  onClose,
  topicTitle,
  chapterNumber,
  topicExercises,
  currentExerciseId,
  onSelectExercise,
}) => {
  // Group topic exercises by base number (e.g. "№ 85", "№ 86", etc.)
  const groupedNumbers = useMemo<GroupedNumber[]>(() => {
    const map = new Map<string, { baseNumber: string; numericVal: number; items: TextbookExercise[] }>();

    topicExercises.forEach((ex) => {
      // Parse base number from e.g. "№ 85 (1)" -> "№ 85"
      const match = ex.exerciseNumber.match(/^(№\s*\d+)/i);
      const baseNumber = match ? match[1].replace(/\s+/g, ' ') : ex.exerciseNumber;

      const numMatch = baseNumber.match(/\d+/);
      const numericVal = numMatch ? parseInt(numMatch[0], 10) : 0;

      if (!map.has(baseNumber)) {
        map.set(baseNumber, {
          baseNumber,
          numericVal,
          items: [],
        });
      }
      map.get(baseNumber)!.items.push(ex);
    });

    return Array.from(map.values()).sort((a, b) => a.numericVal - b.numericVal);
  }, [topicExercises]);

  // Determine the base number of the current active exercise
  const currentBaseNumber = useMemo(() => {
    const curr = topicExercises.find((e) => e.id === currentExerciseId);
    if (!curr) return groupedNumbers[0]?.baseNumber || '';
    const match = curr.exerciseNumber.match(/^(№\s*\d+)/i);
    return match ? match[1].replace(/\s+/g, ' ') : curr.exerciseNumber;
  }, [topicExercises, currentExerciseId, groupedNumbers]);

  // Selected base number whose examples pop out
  const [selectedBaseNumber, setSelectedBaseNumber] = useState<string>(currentBaseNumber);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Update selected base number whenever modal opens or current exercise changes
  useEffect(() => {
    if (isOpen) {
      setSelectedBaseNumber(currentBaseNumber);
      setSearchQuery('');
    }
  }, [isOpen, currentBaseNumber]);

  // Filtered base numbers if user searches
  const filteredNumbers = useMemo(() => {
    if (!searchQuery.trim()) return groupedNumbers;
    const qRaw = searchQuery.toLowerCase().trim();
    const qNorm = qRaw.replace(/[,.]/g, '').replace(/[*·×]/g, '').replace(/\s+/g, '');
    const numDigits = qRaw.match(/\d+/)?.[0];

    return groupedNumbers.filter((grp) => {
      const baseLower = grp.baseNumber.toLowerCase();
      const numMatch = baseLower.includes(qRaw) || (numDigits ? grp.numericVal.toString() === numDigits : false);
      const exprMatch = grp.items.some((item) => {
        const expr = (item.expression || '').toLowerCase();
        const exprNorm = expr.replace(/[,.]/g, '').replace(/[*·×]/g, '').replace(/\s+/g, '');
        const taskText = (item.taskText || '').toLowerCase();
        return (
          expr.includes(qRaw) ||
          exprNorm.includes(qNorm) ||
          item.exerciseNumber.toLowerCase().includes(qRaw) ||
          taskText.includes(qRaw)
        );
      });
      return numMatch || exprMatch;
    });
  }, [groupedNumbers, searchQuery]);

  // Examples of the currently selected number
  const activeGroup = useMemo(() => {
    return groupedNumbers.find((g) => g.baseNumber === selectedBaseNumber) || groupedNumbers[0];
  }, [groupedNumbers, selectedBaseNumber]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-in fade-in select-none"
      style={{ perspective: '1200px' }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl max-h-[92vh] bg-[#0f172a] border-4 border-[#3b82f6] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* MODAL HEADER */}
        <div className="p-4 sm:p-5 bg-[#1e3a8a] border-b-2 border-[#3b82f6] flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#dc2626] border-2 border-[#f87171] flex items-center justify-center text-white shadow-md">
              <Hash className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase text-blue-200 tracking-wider">
                  Таблиця номерів теми {chapterNumber}
                </span>
                <span className="px-2 py-0.5 rounded-md bg-[#2563eb] text-white text-[11px] font-mono font-black">
                  {groupedNumbers.length} номерів
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-black font-mono text-white leading-tight">
                {topicTitle}
              </h3>
            </div>
          </div>

          <button
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="w-10 h-10 rounded-xl bg-[#1e293b] hover:bg-[#334155] border border-[#475569] text-white flex items-center justify-center cursor-pointer active:scale-95 transition-all"
            title="Закрити"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* SEARCH BAR */}
        <div className="px-4 sm:px-6 py-3 bg-[#090d16] border-b border-[#1e293b] flex items-center justify-between gap-3 shrink-0">
          <div className="relative flex-1 max-w-sm">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Пошук номера (наприклад, 85)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#1e293b] border-2 border-[#334155] text-xs sm:text-sm font-mono text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#3b82f6]"
            />
          </div>
          <span className="text-xs font-mono text-zinc-300 hidden sm:inline">
            Натисніть на номер, щоб відкрити його приклади
          </span>
        </div>

        {/* MODAL BODY */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
          {/* 1. TABLE OF ALL BASE NUMBERS ("виліза таблиця з номерами по цій темі") */}
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-blue-400" />
                Оберіть номер завдання:
              </span>
              <span className="text-[11px] font-mono text-zinc-400">
                Всього: {filteredNumbers.length} номерів
              </span>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2.5">
              {filteredNumbers.map((grp) => {
                const isSelected = grp.baseNumber === selectedBaseNumber;
                const isCurrentInWorkspace = grp.baseNumber === currentBaseNumber;

                return (
                  <button
                    key={grp.baseNumber}
                    onClick={() => {
                      sounds.playClick();
                      setSelectedBaseNumber(grp.baseNumber);
                    }}
                    className={`p-3 rounded-2xl border-2 flex flex-col items-center justify-center gap-1 cursor-pointer transition-all duration-150 relative ${
                      isSelected
                        ? 'bg-[#dc2626] border-[#f87171] text-white shadow-[0_6px_0_#991b1b] -translate-y-1 scale-105'
                        : isCurrentInWorkspace
                        ? 'bg-[#1e3a8a] border-[#60a5fa] text-white shadow-[0_4px_0_#172554] hover:bg-[#2563eb]'
                        : 'bg-[#1e293b] hover:bg-[#334155] border-[#475569] hover:border-[#3b82f6] text-white shadow-[0_4px_0_#0f172a]'
                    }`}
                  >
                    <span className="text-sm sm:text-base font-black font-mono text-white tracking-wide">
                      {grp.baseNumber}
                    </span>

                    <span
                      className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded-md ${
                        isSelected
                          ? 'bg-black/40 text-white'
                          : 'bg-black/30 text-zinc-300'
                      }`}
                    >
                      {grp.items.length}{' '}
                      {grp.items.length === 1
                        ? 'пр.'
                        : grp.items.length < 5
                        ? 'пр.'
                        : 'пр.'}
                    </span>

                    {isCurrentInWorkspace && !isSelected && (
                      <span className="w-2 h-2 rounded-full bg-blue-400 absolute top-1.5 right-1.5" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. POPPED-OUT EXAMPLES FOR THE CLICKED NUMBER ("вилазять всі приклада які є там") */}
          {activeGroup && (
            <div className="p-5 sm:p-6 rounded-3xl bg-[#1e293b] border-4 border-[#dc2626] shadow-[0_10px_0_#0f172a] space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex items-center justify-between flex-wrap gap-2 border-b border-[#334155] pb-3">
                <div className="flex items-center gap-3">
                  <div className="px-4 py-1.5 rounded-xl bg-[#dc2626] border-2 border-[#ef4444] text-white font-black font-mono text-lg sm:text-xl shadow">
                    {activeGroup.baseNumber}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-black font-mono text-white">
                      Усі приклади завдання ({activeGroup.items.length})
                    </h4>
                    <span className="text-xs font-mono text-zinc-400">
                      Оберіть потрібний приклад для розв'язання
                    </span>
                  </div>
                </div>

                <span className="text-xs font-mono font-bold text-amber-300 bg-black/40 px-3 py-1 rounded-xl border border-zinc-700">
                  ⚡ Натисніть на приклад для переходу
                </span>
              </div>

              {/* GRID OF EXAMPLES POPPED OUT */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-1">
                {activeGroup.items.map((item, idx) => {
                  const isCurrent = item.id === currentExerciseId;

                  // Extract sub-label, e.g. "(1)", "(2)", or exerciseNumber
                  const subLabelMatch = item.exerciseNumber.match(/\(\d+\)/);
                  const subLabel = subLabelMatch ? subLabelMatch[0] : `Приклад ${idx + 1}`;

                  return (
                    <div
                      key={item.id}
                      onClick={() => {
                        sounds.playStart();
                        onSelectExercise(item.id);
                        onClose();
                      }}
                      className={`p-4 rounded-2xl border-2 flex flex-col justify-between gap-3 cursor-pointer select-none transition-all duration-150 group shadow-[0_5px_0_#0f172a] hover:-translate-y-1 ${
                        isCurrent
                          ? 'bg-[#1e3a8a] border-[#3b82f6] text-white shadow-[0_6px_0_#172554]'
                          : 'bg-[#0f172a] hover:bg-[#1e293b] border-[#475569] hover:border-[#dc2626] text-white'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="w-8 h-8 rounded-xl bg-[#dc2626] border border-[#ef4444] flex items-center justify-center font-mono font-black text-white text-xs shadow">
                            {subLabel}
                          </span>
                          <span className="text-xs font-mono font-bold text-white">
                            {item.exerciseNumber}
                          </span>
                        </div>

                        <span
                          className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full text-white ${
                            item.category === 'task'
                              ? 'bg-[#d97706]'
                              : item.category === 'equation'
                              ? 'bg-[#7c3aed]'
                              : 'bg-[#0284c7]'
                          }`}
                        >
                          {item.category === 'task'
                            ? 'Задача'
                            : item.category === 'equation'
                            ? 'Рівняння'
                            : 'Приклад'}
                        </span>
                      </div>

                      {/* Math Expression Preview */}
                      <div className="py-2.5 px-3 rounded-xl bg-[#020617] border border-[#1e293b] min-h-[56px] flex items-center justify-center shadow-inner">
                        {item.expression ? (
                          <TextbookMath expression={item.expression} size="md" />
                        ) : (
                          <span className="text-xs font-mono text-zinc-400 line-clamp-2">
                            {item.taskText || item.questionPrompt}
                          </span>
                        )}
                      </div>

                      <div className="pt-2 border-t border-[#1e293b] flex items-center justify-between text-xs font-mono">
                        <span className="text-zinc-400 text-[11px]">
                          4 варіанти відповідей
                        </span>
                        <span className="text-white font-black flex items-center gap-1 group-hover:translate-x-1 transition-transform text-xs">
                          <span>Розв'язати</span>
                          <ChevronRight className="w-3.5 h-3.5 text-white stroke-[3]" />
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* MODAL FOOTER */}
        <div className="p-3.5 sm:p-4 bg-[#090d16] border-t border-[#1e293b] flex items-center justify-between text-xs font-mono text-white shrink-0">
          <span className="text-zinc-400">
            Знайдено {groupedNumbers.length} номерів ({topicExercises.length} прикладів)
          </span>
          <button
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="px-4 py-2 rounded-xl bg-[#1e293b] hover:bg-[#334155] border border-[#475569] text-white font-bold cursor-pointer transition-colors"
          >
            Закрити
          </button>
        </div>
      </div>
    </div>
  );
};
