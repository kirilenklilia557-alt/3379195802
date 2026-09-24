import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { 
  ArrowLeft, 
  ChevronUp, 
  ChevronDown, 
  BookOpen, 
  Sparkles, 
  ArrowRight,
  Layers
} from 'lucide-react';
import { CHAPTERS } from '../data/chaptersData';
import { getTopicExerciseRange } from '../data/textbookTasksData';
import { SUPPORTED_TEXTBOOKS } from '../data/textbooksData';
import { Topic } from '../types/algebra';
import { FloatingFormulas } from './FloatingFormulas';
import { sounds } from '../utils/soundEffects';

interface BookTopicItem {
  chapterId: string;
  chapterNumber: number;
  chapterTitle: string;
  topic: Topic;
  globalIndex: number;
}

interface BookTopicWheelSelectorProps {
  selectedChapterId: string;
  selectedTopicId: string;
  selectedBookId?: 'merzlyak' | 'tarasenkova' | 'ister';
  onSelectBookId?: (bookId: 'merzlyak' | 'tarasenkova' | 'ister') => void;
  onSelectTopic: (chapterId: string, topicId: string) => void;
  onProceedToLesson: (initialExerciseId?: string) => void;
  onBackToStart: () => void;
}

export const BookTopicWheelSelector: React.FC<BookTopicWheelSelectorProps> = ({
  selectedChapterId,
  selectedTopicId,
  selectedBookId = 'tarasenkova',
  onSelectBookId,
  onSelectTopic,
  onProceedToLesson,
  onBackToStart
}) => {
  const [showBookDropdown, setShowBookDropdown] = useState(false);
  const currentBook = SUPPORTED_TEXTBOOKS.find(b => b.id === selectedBookId) || SUPPORTED_TEXTBOOKS[0];
  // Flatten all topics across chapters into a single linear book progression
  const allBookTopics = useMemo<BookTopicItem[]>(() => {
    const list: BookTopicItem[] = [];
    let idx = 0;
    CHAPTERS.forEach((ch) => {
      ch.topics.forEach((t) => {
        list.push({
          chapterId: ch.id,
          chapterNumber: ch.number,
          chapterTitle: ch.title,
          topic: t,
          globalIndex: idx++
        });
      });
    });
    return list;
  }, []);

  // Find initial index matching current selected chapter/topic
  const initialIndex = useMemo(() => {
    const foundIdx = allBookTopics.findIndex(
      (item) => item.chapterId === selectedChapterId && item.topic.id === selectedTopicId
    );
    return foundIdx >= 0 ? foundIdx : 1;
  }, [allBookTopics, selectedChapterId, selectedTopicId]);

  const [activeIndex, setActiveIndex] = useState<number>(initialIndex);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastWheelTime = useRef<number>(0);
  const touchStartY = useRef<number>(0);

  // Sync selection when activeIndex changes
  const updateSelection = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(allBookTopics.length - 1, index));
      setActiveIndex(clamped);
      sounds.playClick();
      const item = allBookTopics[clamped];
      if (item) {
        onSelectTopic(item.chapterId, item.topic.id);
      }
    },
    [allBookTopics, onSelectTopic]
  );

  // Mouse wheel listener for 3D rotation
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const now = Date.now();
    if (now - lastWheelTime.current < 85) return;
    lastWheelTime.current = now;

    if (e.deltaY > 15) {
      updateSelection(activeIndex + 1);
    } else if (e.deltaY < -15) {
      updateSelection(activeIndex - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        updateSelection(activeIndex + 1);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        updateSelection(activeIndex - 1);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        sounds.playStart();
        onProceedToLesson();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, updateSelection, onProceedToLesson]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(deltaY) > 30) {
      if (deltaY < 0) {
        updateSelection(activeIndex + 1);
      } else {
        updateSelection(activeIndex - 1);
      }
    }
  };

  const currentTopicItem = allBookTopics[activeIndex] || allBookTopics[0];

  // 5 slots visible on the cylindrical wheel
  const visibleOffsets = [-2, -1, 0, 1, 2];

  // Visual 3D perspective configuration with deep extruded bevels
  const getSlotStyle = (offset: number) => {
    switch (offset) {
      case 0:
        return {
          width: '98%',
          maxWidth: '820px',
          height: '124px',
          scale: 1,
          opacity: 1,
          zIndex: 30,
          rotateX: 0,
          borderWidth: '4px',
          glow: 'shadow-[0_10px_0_#1e3a8a,0_18px_30px_rgba(15,23,42,0.6)] ring-2 ring-blue-500/50'
        };
      case -1:
      case 1:
        return {
          width: '74%',
          maxWidth: '620px',
          height: '74px',
          scale: 0.95,
          opacity: 0.85,
          zIndex: 20,
          rotateX: offset < 0 ? 24 : -24,
          borderWidth: '3px',
          glow: 'shadow-[0_6px_0_#0f172a,0_10px_18px_rgba(15,23,42,0.5)]'
        };
      case -2:
      case 2:
      default:
        return {
          width: '52%',
          maxWidth: '440px',
          height: '56px',
          scale: 0.84,
          opacity: 0.55,
          zIndex: 10,
          rotateX: offset < 0 ? 42 : -42,
          borderWidth: '2px',
          glow: 'shadow-[0_4px_0_#020617,0_6px_12px_rgba(2,6,23,0.5)]'
        };
    }
  };

  return (
    <div 
      className="min-h-screen w-full bg-[#0a0f1d] text-white relative flex flex-col justify-between overflow-x-hidden select-none pb-8"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Floating Math Formulas (disabled for eye comfort) */}
      <FloatingFormulas />

      {/* TOP HEADER BAR */}
      <header className="relative z-30 w-full max-w-6xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between border-b border-slate-800 bg-slate-900/90 backdrop-blur-md">
        
        {/* Back to Start Button */}
        <button
          onClick={onBackToStart}
          className="flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 hover:text-white hover:bg-slate-750 transition-all text-xs font-bold cursor-pointer shadow-[0_3px_0_#0f172a] active:translate-y-0.5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>На головну</span>
        </button>

        {/* Center: Textbook Information Selector Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowBookDropdown(!showBookDropdown)}
            className="flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-2xl bg-slate-800/95 border border-blue-500/50 hover:border-blue-400 text-blue-200 text-xs sm:text-sm font-semibold shadow-[0_4px_0_#0f172a] transition-all cursor-pointer group"
          >
            <span className="text-base">{currentBook.icon}</span>
            <span className="text-white font-black">{currentBook.name}</span>
            <span className="text-blue-300 font-bold hidden md:inline">({currentBook.authors})</span>
            <span className="text-[10px] bg-blue-500/30 text-blue-300 px-2 py-0.5 rounded-full border border-blue-400/30">
              Змінити ▾
            </span>
          </button>

          {showBookDropdown && (
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-72 sm:w-80 bg-slate-900 border border-blue-500/50 rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
              <div className="px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-slate-400 border-b border-slate-800">
                Оберіть підручник з алгебри:
              </div>
              <div className="mt-1 space-y-1">
                {SUPPORTED_TEXTBOOKS.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => {
                      sounds.playClick();
                      onSelectBookId?.(b.id);
                      setShowBookDropdown(false);
                    }}
                    className={`w-full text-left p-2.5 rounded-xl text-xs flex items-center gap-2.5 transition-all cursor-pointer ${
                      selectedBookId === b.id
                        ? 'bg-blue-600 text-white font-bold'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <span className="text-xl">{b.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold truncate">{b.name}</div>
                      <div className="text-[10px] opacity-80 truncate">{b.authors} • {b.badge}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Start Button */}
        <button
          onClick={() => {
            sounds.playStart();
            onProceedToLesson();
          }}
          className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-blue-600 hover:bg-blue-500 border-b-4 border-blue-800 text-white font-black text-xs sm:text-sm uppercase tracking-wide shadow-lg shadow-blue-950/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <span>Почати урок</span>
          <ArrowRight className="w-4 h-4 text-white stroke-[3]" />
        </button>
      </header>

      {/* MAIN 3D TOPIC WHEEL CAROUSEL */}
      <main className="relative z-20 flex-1 w-full max-w-4xl mx-auto px-4 flex flex-col items-center justify-center my-4">
        
        {/* Helper Instructions */}
        <div className="text-center space-y-1 mb-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 text-slate-200 text-xs font-bold uppercase tracking-wider shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Крутіть 3D колесо для вибору теми або оберіть завдання нижче</span>
          </div>
        </div>

        {/* Up Arrow for Wheel Rotation */}
        <button
          onClick={() => updateSelection(activeIndex - 1)}
          disabled={activeIndex <= 0}
          className={`p-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 mb-2 transition-all cursor-pointer ${
            activeIndex <= 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-slate-700 hover:text-white hover:scale-110 active:scale-95 shadow-[0_3px_0_#0f172a]'
          }`}
          title="Попередня тема"
        >
          <ChevronUp className="w-5 h-5 stroke-[3]" />
        </button>

        {/* 3D Wheel Slots Container */}
        <div 
          ref={containerRef}
          className="w-full flex flex-col items-center justify-center space-y-2.5 sm:space-y-3.5 py-1"
          style={{ perspective: '1100px' }}
        >
          {visibleOffsets.map((offset) => {
            const itemIndex = activeIndex + offset;
            const item = allBookTopics[itemIndex];
            const slot = getSlotStyle(offset);
            const isCenter = offset === 0;

            if (!item) {
              return (
                <div 
                  key={`empty-${offset}`}
                  className="rounded-2xl sm:rounded-3xl border border-dashed border-slate-800 bg-slate-900/40"
                  style={{
                    width: slot.width,
                    maxWidth: slot.maxWidth,
                    height: slot.height,
                    opacity: 0.15
                  }}
                />
              );
            }

            return (
              <div
                key={item.topic.id}
                onClick={() => {
                  if (isCenter) {
                    sounds.playStart();
                    onProceedToLesson();
                  } else {
                    updateSelection(itemIndex);
                  }
                }}
                className={`rounded-2xl sm:rounded-3xl bg-slate-900 border-slate-700 flex flex-col items-center justify-center text-center px-4 transition-all duration-250 cursor-pointer ${slot.glow} ${
                  isCenter 
                    ? 'hover:scale-[1.01] active:scale-[0.99] border-blue-500' 
                    : 'hover:opacity-90 hover:border-slate-500'
                }`}
                style={{
                  width: slot.width,
                  maxWidth: slot.maxWidth,
                  height: slot.height,
                  borderWidth: slot.borderWidth,
                  opacity: slot.opacity,
                  transform: `scale(${slot.scale}) rotateX(${slot.rotateX}deg)`,
                  transformOrigin: 'center center'
                }}
              >
                {/* Center Item: Full topic details */}
                {isCenter ? (
                  <div className="w-full flex items-center justify-between gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-800 border-2 border-blue-400 flex items-center justify-center text-blue-400 shrink-0 shadow-lg">
                      <BookOpen className="w-6 h-6" />
                    </div>

                    <div className="flex-1 text-center min-w-0 px-2 space-y-1">
                      <span className="text-xs font-mono uppercase tracking-widest text-blue-300 font-bold block truncate">
                        Розділ {item.chapterNumber}: {item.chapterTitle}
                      </span>
                      <h3 className="text-base sm:text-xl font-black text-white font-mono truncate leading-tight drop-shadow-md">
                        {item.topic.title}
                      </h3>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-200 font-mono font-bold text-xs sm:text-sm shadow-md">
                        <Layers className="w-3.5 h-3.5 text-blue-400" />
                        <span>{getTopicExerciseRange(item.topic.id, item.globalIndex).label}</span>
                      </div>
                    </div>

                    <div className="px-4 py-2 rounded-2xl bg-blue-600 text-white font-black text-xs sm:text-sm uppercase tracking-wider shrink-0 hidden sm:flex items-center gap-1.5 shadow-lg border-b-4 border-blue-800">
                      <span>Обрано ✓</span>
                    </div>
                  </div>
                ) : (
                  /* Neighbor Items (Upper & Lower): Title preview */
                  <div className="w-full text-center truncate px-2 space-y-0.5">
                    <span className="text-sm sm:text-base font-bold text-white font-mono truncate block">
                      {item.topic.title}
                    </span>
                    <div className="flex items-center justify-center gap-2 text-xs text-slate-300 font-mono">
                      <span>Розділ {item.chapterNumber}</span>
                      <span>•</span>
                      <span className="text-blue-300 font-bold">{getTopicExerciseRange(item.topic.id, item.globalIndex).label}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Down Arrow for Wheel Rotation */}
        <button
          onClick={() => updateSelection(activeIndex + 1)}
          disabled={activeIndex >= allBookTopics.length - 1}
          className={`p-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 mt-2 transition-all cursor-pointer ${
            activeIndex >= allBookTopics.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-slate-700 hover:text-white hover:scale-110 active:scale-95 shadow-[0_3px_0_#0f172a]'
          }`}
          title="Наступна тема"
        >
          <ChevronDown className="w-5 h-5 stroke-[3]" />
        </button>

        {/* Start Selected Topic Button */}
        <div className="mt-4 flex flex-col items-center gap-2">
          <button
            onClick={() => {
              sounds.playStart();
              onProceedToLesson();
            }}
            className="px-8 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 border-b-4 border-blue-800 text-white font-black text-sm sm:text-base uppercase tracking-wider shadow-xl shadow-blue-950/50 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center gap-2.5"
          >
            <span>Розпочати тему</span>
            <ArrowRight className="w-5 h-5 text-white stroke-[3]" />
          </button>
          <span className="text-xs text-slate-400 font-mono">
            {currentTopicItem.topic.title} • {getTopicExerciseRange(currentTopicItem.topic.id).label}
          </span>
        </div>

      </main>
    </div>
  );
};
