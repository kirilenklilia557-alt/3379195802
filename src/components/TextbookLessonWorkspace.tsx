import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  ArrowLeft, 
  Check, 
  X, 
  Sparkles, 
  Dice5, 
  BookOpen, 
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  HelpCircle,
  Trophy,
  Hash,
  Layers,
  Box,
  Search,
  Filter,
  Calculator,
  FileText,
  CheckCircle2,
  ListOrdered,
  RotateCw,
  Play,
  Users
} from 'lucide-react';
import { ClassGroup, Student } from '../types/duo';
import { TextbookExercise, StepByStepExercise, StepByStepStage } from '../types/textbook';
import { 
  getExercisesForTopic, 
  getTopicExerciseRange, 
  findTopicInfoForNumber, 
  TOPIC_EXERCISE_RANGES,
  TopicLookupResult,
  randomizeOptions 
} from '../data/textbookTasksData';
import { CHAPTERS } from '../data/chaptersData';
import { INITIAL_CLASSES } from '../data/mockClasses';
import { ClassScoresAndRandomizerModal } from './ClassScoresAndRandomizerModal';
import { TopicNumbersTableModal } from './TopicNumbersTableModal';
import { CustomTextbookExerciseModal } from './CustomTextbookExerciseModal';
import { SUPPORTED_TEXTBOOKS } from '../data/textbooksData';
import { FloatingFormulas } from './FloatingFormulas';
import { TextbookMath } from './TextbookMath';
import { sounds } from '../utils/soundEffects';

interface TextbookLessonWorkspaceProps {
  selectedChapterId: string;
  selectedTopicId: string;
  selectedBookId?: 'merzlyak' | 'tarasenkova' | 'ister';
  onSelectBookId?: (bookId: 'merzlyak' | 'tarasenkova' | 'ister') => void;
  initialExerciseId?: string | null;
  onSelectTopic?: (chapterId: string, topicId: string) => void;
  onBackToTopicWheel: () => void;
  onOpenJournal?: () => void;
  onTaskSolved: (exerciseId: string) => void;
  solvedCount: number;
  currentClass?: ClassGroup;
  classes?: ClassGroup[];
  onUpdateClasses?: (updated: ClassGroup[]) => void;
  onSelectClass?: (classId: string) => void;
}

export const TextbookLessonWorkspace: React.FC<TextbookLessonWorkspaceProps> = ({
  selectedChapterId,
  selectedTopicId,
  selectedBookId = 'tarasenkova',
  onSelectBookId,
  initialExerciseId,
  onSelectTopic,
  onBackToTopicWheel,
  onTaskSolved,
  solvedCount,
  classes,
  onUpdateClasses,
  currentClass,
  onSelectClass
}) => {
  // Active topic & chapter state
  const [activeChapterId, setActiveChapterId] = useState<string>(selectedChapterId);
  const [activeTopicId, setActiveTopicId] = useState<string>(selectedTopicId);
  const [pendingNumberToSelect, setPendingNumberToSelect] = useState<number | null>(null);
  const [toastNotice, setToastNotice] = useState<{ title: string; subtitle: string } | null>(null);

  // Class Scores & Randomizer Modal State
  const [isJournalModalOpen, setIsJournalModalOpen] = useState<boolean>(false);
  const [currentClassId, setCurrentClassId] = useState<string>(currentClass?.id || 'class-8a');
  const [activeStudent, setActiveStudent] = useState<Student | null>(null);

  const activeClasses = classes || INITIAL_CLASSES;
  const currentClassData = activeClasses.find(c => c.id === currentClassId) || activeClasses[0];

  // Quick modify score for student called to the board
  const handleQuickModifyActiveStudentScore = (delta: number) => {
    if (!activeStudent) return;
    const currentClassObj = currentClassData;
    const updatedStudents = currentClassObj.students.map(s => {
      if (s.id === activeStudent.id) {
        const newScore = Math.max(0, (s.score ?? 0) + delta);
        return { ...s, score: newScore };
      }
      return s;
    });
    const updatedClasses = activeClasses.map(c => 
      c.id === currentClassObj.id ? { ...c, students: updatedStudents } : c
    );
    if (onUpdateClasses) {
      onUpdateClasses(updatedClasses);
    }
    setActiveStudent(prev => prev ? { ...prev, score: Math.max(0, (prev.score ?? 0) + delta) } : null);
    if (delta > 0) {
      sounds.playLevelUp();
    } else {
      sounds.playClick();
    }
  };

  // Custom Textbook Exercise Modal State
  const [isCustomBookModalOpen, setIsCustomBookModalOpen] = useState<boolean>(false);
  const [customAddedExercises, setCustomAddedExercises] = useState<TextbookExercise[]>([]);

  // Modal for choosing tasks by topic numbers table:
  // USER REQUIREMENT: "і при натисканю на номер вилаза таблиця з номерами по ці темі натискаєш на номер і вилазять всі приклада які є там"
  const [isNumbersTableModalOpen, setIsNumbersTableModalOpen] = useState<boolean>(false);
  const [isTopicTasksModalOpen, setIsTopicTasksModalOpen] = useState<boolean>(false);
  const [taskFilter, setTaskFilter] = useState<'all' | 'example' | 'equation' | 'task'>('all');
  const [taskSearchQuery, setTaskSearchQuery] = useState<string>('');

  const currentBook = useMemo(() => {
    return SUPPORTED_TEXTBOOKS.find(b => b.id === selectedBookId) || SUPPORTED_TEXTBOOKS[0];
  }, [selectedBookId]);

  useEffect(() => {
    setActiveChapterId(selectedChapterId);
    setActiveTopicId(selectedTopicId);
  }, [selectedChapterId, selectedTopicId]);

  // Auto-dismiss toast notice after 5 seconds
  useEffect(() => {
    if (!toastNotice) return;
    const timer = setTimeout(() => {
      setToastNotice(null);
    }, 5000);
    return () => clearTimeout(timer);
  }, [toastNotice]);

  // Find current chapter & topic metadata
  const currentChapter = useMemo(() => {
    return CHAPTERS.find(ch => ch.id === activeChapterId) || CHAPTERS[0];
  }, [activeChapterId]);

  const currentTopic = useMemo(() => {
    return currentChapter.topics.find(t => t.id === activeTopicId) || currentChapter.topics[0];
  }, [currentChapter, activeTopicId]);

  // All exercises available for this selected topic, incorporating chosen textbook and user-entered exercises
  const topicExercises = useMemo(() => {
    const baseExercises = getExercisesForTopic(currentTopic.id, currentChapter.id, selectedBookId);
    const customForThis = customAddedExercises.filter(
      ex => ex.topicId === currentTopic.id || !ex.topicId
    );
    return [...customForThis, ...baseExercises];
  }, [currentTopic.id, currentChapter.id, selectedBookId, customAddedExercises]);

  // Topic exercise range: "зроби щоп по темі писало ще віт якого поякиї номер"
  const topicRange = useMemo(() => {
    if (topicExercises.length > 0) {
      const nums = topicExercises
        .map(e => e.baseNumber)
        .filter((n): n is number => typeof n === 'number' && !isNaN(n));
      if (nums.length > 0) {
        const minNum = Math.min(...nums);
        const maxNum = Math.max(...nums);
        return {
          fromNumber: minNum,
          toNumber: maxNum,
          label: `від № ${minNum} по № ${maxNum}`
        };
      }
    }
    return getTopicExerciseRange(currentTopic.id);
  }, [currentTopic.id, topicExercises]);

  // Current active exercise index
  const [currentExerciseIdx, setCurrentExerciseIdx] = useState<number>(0);

  // Jump to initial exercise if provided
  useEffect(() => {
    if (initialExerciseId) {
      const foundIdx = topicExercises.findIndex(ex => ex.id === initialExerciseId);
      if (foundIdx >= 0) {
        setCurrentExerciseIdx(foundIdx);
      }
    }
  }, [initialExerciseId, topicExercises]);

  // When exercises change and we have a pending number to select (e.g. user jumped to № 85)
  useEffect(() => {
    if (pendingNumberToSelect !== null) {
      const idx = topicExercises.findIndex(ex => ex.baseNumber === pendingNumberToSelect);
      if (idx >= 0) {
        setCurrentExerciseIdx(idx);
        setPendingNumberToSelect(null);
      }
    }
  }, [topicExercises, pendingNumberToSelect]);

  const currentExercise: TextbookExercise = topicExercises[currentExerciseIdx] || topicExercises[0];

  // Guaranteed Choice Exercise Format for ALL questions:
  // USER REQUIREMENT: "щоп всі питаня требували лише вибор правильноїі вітповіді"
  // USER REQUIREMENT: "і вітповіді ма.ть в ірзнобої бути правильна віт ане вищас перше"
  const effectiveExercise = useMemo(() => {
    if (!currentExercise) return null;
    let rawOptions = currentExercise.type === 'choice' ? currentExercise.options : undefined;
    const rawPrompt = (currentExercise as any).questionPrompt || (currentExercise as any).title || 'Оберіть правильну відповідь:';

    if (!rawOptions || rawOptions.length === 0) {
      const fallbackAns = (currentExercise as any).finalAnswer || 'Правильна відповідь';
      rawOptions = [
        { id: 'opt-1', label: 'А', text: fallbackAns, isCorrect: true },
        { id: 'opt-2', label: 'Б', text: 'Помилковий варіант 1', isCorrect: false },
        { id: 'opt-3', label: 'В', text: 'Помилковий варіант 2', isCorrect: false },
        { id: 'opt-4', label: 'Г', text: 'Помилковий варіант 3', isCorrect: false },
      ];
    }

    // Deterministically randomize option positions so correct answer is NOT always 'А'
    const randomized = randomizeOptions(rawOptions, currentExercise.id);

    return {
      ...currentExercise,
      type: 'choice' as const,
      questionPrompt: rawPrompt,
      options: randomized,
      explanation: currentExercise.explanation || 'Покрокове математичне пояснення.'
    };
  }, [currentExercise]);

  // Choice Exercise State
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  const [isChoiceEvaluated, setIsChoiceEvaluated] = useState<boolean>(false);

  // Step-by-Step Exercise State (preserved for legacy safety, but choice UI is always rendered)
  const [currentStageIdx, setCurrentStageIdx] = useState<number>(0);
  const [userMathInput, setUserMathInput] = useState<string>('');
  const [stageStatus, setStageStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState<string>('');
  const [isExerciseCompleted, setIsExerciseCompleted] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  // Reset exercise states when switching exercise
  useEffect(() => {
    setSelectedChoiceId(null);
    setIsChoiceEvaluated(false);
    setCurrentStageIdx(0);
    setUserMathInput('');
    setStageStatus('idle');
    setFeedbackMessage('');
    setIsExerciseCompleted(false);
  }, [currentExerciseIdx, activeTopicId]);

  // Parts belonging to the currently active base number
  const currentNumberParts = useMemo(() => {
    if (!currentExercise?.baseNumber) return [currentExercise];
    return topicExercises.filter(ex => ex.baseNumber === currentExercise.baseNumber);
  }, [topicExercises, currentExercise]);

  // USER REQUIREMENT: "добав кнопку прогорнуть щоп можа було прогортати прклади"
  const handleScrollNextExample = () => {
    sounds.playClick();
    const nextIdx = (currentExerciseIdx + 1) % topicExercises.length;
    setCurrentExerciseIdx(nextIdx);
  };

  const handleScrollPrevExample = () => {
    sounds.playClick();
    const prevIdx = (currentExerciseIdx - 1 + topicExercises.length) % topicExercises.length;
    setCurrentExerciseIdx(prevIdx);
  };

  // Choice Selection (ALL questions are answered by choosing the correct option)
  const handleSelectChoice = (optionId: string) => {
    if (isChoiceEvaluated || !effectiveExercise) return;
    setSelectedChoiceId(optionId);
    setIsChoiceEvaluated(true);

    const selected = effectiveExercise.options.find(o => o.id === optionId);
    if (selected?.isCorrect) {
      sounds.playCorrect();
      onTaskSolved(effectiveExercise.id);
      // Give point to student called to the board
      if (activeStudent) {
        handleQuickModifyActiveStudentScore(1);
      }
    } else {
      sounds.playWrong();
    }
  };

  // Math keypad button handler
  const handleKeypadInsert = (symbol: string) => {
    sounds.playClick();
    setUserMathInput(prev => prev + symbol);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeypadBackspace = () => {
    sounds.playClick();
    setUserMathInput(prev => prev.slice(0, -1));
  };

  const handleKeypadClear = () => {
    sounds.playClick();
    setUserMathInput('');
  };

  // Helper to normalize algebraic answer for comparison
  const normalizeAnswer = (str: string): string => {
    return str
      .toLowerCase()
      .replace(/\s+/g, '')
      .replace(/\*/g, '·')
      .replace(/\^2/g, '²')
      .replace(/\^3/g, '³')
      .replace(/\^4/g, '⁴')
      .replace(/−/g, '-')
      .trim();
  };

  // Step-by-Step validation
  const handleCheckStep = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (currentExercise.type !== 'step_by_step') return;

    const currentStage: StepByStepStage = currentExercise.stages[currentStageIdx];
    if (!currentStage) return;

    const normalizedUser = normalizeAnswer(userMathInput);
    if (!normalizedUser) {
      setStageStatus('wrong');
      setFeedbackMessage('Введіть відповідь у поле перед перевіркою!');
      return;
    }

    const acceptable = currentStage.acceptableAnswers.map(normalizeAnswer);
    const expected = normalizeAnswer(currentStage.expectedAnswer);

    const isMatch = acceptable.includes(normalizedUser) || normalizedUser === expected;

    if (isMatch) {
      sounds.playLevelUp();
      setStageStatus('correct');
      setFeedbackMessage('Правильно! Крок виконано бездоганно!');

      // If more stages remain
      if (currentStageIdx + 1 < currentExercise.stages.length) {
        setTimeout(() => {
          setCurrentStageIdx(prev => prev + 1);
          setUserMathInput('');
          setStageStatus('idle');
          setFeedbackMessage('');
        }, 1200);
      } else {
        // Entire problem completed!
        setIsExerciseCompleted(true);
        onTaskSolved(currentExercise.id);
      }
    } else {
      sounds.playWrong();
      setStageStatus('wrong');
      setFeedbackMessage('Помилка у кроці. Перевірте обчислення та спробуйте ще раз.');
    }
  };

  // Filtered exercises for topic tasks modal
  const modalFilteredExercises = useMemo(() => {
    return topicExercises.filter(ex => {
      if (taskFilter !== 'all' && ex.category !== taskFilter) return false;
      if (taskSearchQuery.trim()) {
        const q = taskSearchQuery.toLowerCase();
        const numMatch = ex.exerciseNumber.toLowerCase().includes(q);
        const exprMatch = ex.expression?.toLowerCase().includes(q);
        const titleMatch = ex.title?.toLowerCase().includes(q);
        return numMatch || exprMatch || titleMatch;
      }
      return true;
    });
  }, [topicExercises, taskFilter, taskSearchQuery]);

  const taskCounts = useMemo(() => {
    return {
      all: topicExercises.length,
      examples: topicExercises.filter(e => e.category === 'example').length,
      equations: topicExercises.filter(e => e.category === 'equation').length,
      tasks: topicExercises.filter(e => e.category === 'task').length,
    };
  }, [topicExercises]);

  return (
    <div className="min-h-screen w-full bg-[#090d16] text-white relative flex flex-col justify-between overflow-x-hidden select-none">
      
      {/* Background Floating Formulas */}
      <FloatingFormulas />

      {/* TOP ACADEMIC 3D NAVIGATION BAR (CLEAN & CENTERED NUMBER) */}
      <header className="relative z-30 bg-[#0f172a] border-b-2 border-[#1e293b] px-4 py-3 sm:py-4 shadow-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          
          {/* Left: Back to wheel & Textbook Badge */}
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToTopicWheel}
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#1e293b] hover:bg-[#334155] border-2 border-[#475569] text-white text-xs sm:text-sm font-bold shadow-[0_5px_0_#0f172a] active:translate-y-1 active:shadow-[0_1px_0_#0f172a] transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-white" />
              <span className="text-white">До вибору теми</span>
            </button>
          </div>

          {/* CENTER: 3D RED EXERCISE NUMBER BUTTON ("при натисканю на номер вилаза таблиця з номерами по ці темі") */}
          <div className="flex items-center gap-2 sm:gap-3 justify-center">
            <button
              onClick={() => {
                sounds.playClick();
                setIsNumbersTableModalOpen(true);
              }}
              className="px-5 sm:px-8 py-2 sm:py-2.5 rounded-2xl sm:rounded-3xl bg-[#dc2626] hover:bg-[#b91c1c] border-4 border-[#ef4444] text-white font-black font-mono text-2xl sm:text-3xl shadow-[0_6px_0_#991b1b] transform hover:scale-105 active:translate-y-1 active:shadow-[0_1px_0_#991b1b] transition-all tracking-wider cursor-pointer group flex items-center gap-2 select-none"
              title="Натисніть на номер, щоб відкрити таблицю номерів цієї теми"
            >
              <span>{effectiveExercise?.exerciseNumber || currentExercise.exerciseNumber}</span>
              <ChevronDown className="w-5 h-5 text-white/90 group-hover:translate-y-0.5 transition-transform shrink-0" />
            </button>

            <span className={`hidden sm:inline-block px-3 py-1 rounded-xl font-mono text-xs font-black uppercase tracking-wide border-2 shadow-md ${
              currentExercise.category === 'task' 
                ? 'bg-[#d97706] border-[#f59e0b] text-white shadow-[0_3px_0_#92400e]' 
                : currentExercise.category === 'equation' 
                ? 'bg-[#7c3aed] border-[#8b5cf6] text-white shadow-[0_3px_0_#5b21b6]' 
                : 'bg-[#0284c7] border-[#38bdf8] text-white shadow-[0_3px_0_#0369a1]'
            }`}>
              {currentExercise.category === 'task' ? '📝 Задача' : currentExercise.category === 'equation' ? '⚖️ Рівняння' : '⚡ Приклад'}
            </span>
          </div>

          {/* Right: Previous / Current / Next scrolling controls */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-[#1e293b] border-2 border-[#334155] shadow-md">
            <button
              onClick={handleScrollPrevExample}
              className="px-3 py-1.5 rounded-xl bg-[#0f172a] hover:bg-[#334155] text-white text-xs font-mono font-bold flex items-center gap-1 cursor-pointer transition-all"
              title="Попередній приклад"
            >
              <ChevronLeft className="w-3.5 h-3.5 text-white" />
              <span className="hidden sm:inline text-white">Попередній</span>
            </button>

            <span className="px-2.5 text-xs font-mono text-white font-bold">
              {currentExerciseIdx + 1} / {topicExercises.length}
            </span>

            <button
              onClick={handleScrollNextExample}
              className="px-3.5 py-1.5 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs font-mono font-black flex items-center gap-1 shadow-[0_3px_0_#1e3a8a] active:translate-y-0.5 cursor-pointer transition-all"
              title="Прогорнути до наступного прикладу"
            >
              <span className="text-white">Прогорнути</span>
              <ChevronRight className="w-3.5 h-3.5 stroke-[3] text-white" />
            </button>
          </div>

        </div>

        {/* Toast notice */}
        {toastNotice && (
          <div className="max-w-xl mx-auto mt-2 px-4 py-2 rounded-xl bg-[#1e293b] border-2 border-amber-400 text-white font-mono text-xs sm:text-sm flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
              <div>
                <strong className="text-white">{toastNotice.title}</strong> — <span className="text-amber-200">{toastNotice.subtitle}</span>
              </div>
            </div>
            <button onClick={() => setToastNotice(null)} className="text-white hover:text-amber-300">
              ✕
            </button>
          </div>
        )}
      </header>

      {/* WORKSPACE MAIN AREA */}
      <main className="relative z-20 flex-1 max-w-6xl mx-auto w-full px-4 py-6 flex flex-col justify-center space-y-6">

        {/* SUBTITLE WITH TOPIC AND RANGE (CENTERED) */}
        <div className="w-full max-w-5xl mx-auto flex items-center justify-center pt-1">
          <div className="text-xs sm:text-sm text-white font-mono flex flex-wrap items-center justify-center gap-2">
            <span className="text-emerald-400 font-bold">{currentTopic.title}</span>
            <span className="text-zinc-500 hidden sm:inline">•</span>
            <span className="px-3 py-0.5 rounded-full bg-[#1e293b] border border-[#475569] text-white font-bold">
              {topicRange.label} ({topicExercises.length} прикладів)
            </span>
          </div>
        </div>

        {/* ACTIVE STUDENT CALLED TO BOARD BADGE */}
        {activeStudent && (
          <div className="w-full max-w-5xl mx-auto p-4 rounded-3xl bg-[#1e293b] border-4 border-[#7c3aed] shadow-[0_8px_0_#0f172a] flex items-center justify-between flex-wrap gap-3 animate-in fade-in">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#7c3aed] border-2 border-[#a78bfa] flex items-center justify-center text-2xl shadow-md">
                {activeStudent.avatar || '🧑'}
              </div>
              <div>
                <div className="text-[11px] text-amber-300 font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                  🎯 Відповідає біля дошки (8-А):
                </div>
                <div className="text-base sm:text-lg font-black font-mono text-white flex items-center gap-2">
                  <span>{activeStudent.name}</span>
                  <span className="px-2.5 py-0.5 rounded-lg bg-[#2563eb] text-white text-xs font-black">
                    {activeStudent.score || 0} б.
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleQuickModifyActiveStudentScore(1)}
                className="px-3.5 py-2 rounded-xl bg-[#16a34a] hover:bg-[#15803d] border-2 border-[#4ade80] text-white font-mono font-black text-xs uppercase shadow-[0_3px_0_#14532d] active:translate-y-0.5 cursor-pointer"
                title="Додати 1 бал за правильну відповідь"
              >
                +1 бал
              </button>
              <button
                onClick={() => handleQuickModifyActiveStudentScore(-1)}
                className="px-3.5 py-2 rounded-xl bg-[#dc2626] hover:bg-[#b91c1c] border-2 border-[#f87171] text-white font-mono font-black text-xs uppercase shadow-[0_3px_0_#991b1b] active:translate-y-0.5 cursor-pointer"
                title="Зняти 1 бал"
              >
                -1 бал
              </button>
              <button
                onClick={() => setIsJournalModalOpen(true)}
                className="px-3.5 py-2 rounded-xl bg-[#334155] hover:bg-[#475569] border-2 border-[#64748b] text-white font-mono font-bold text-xs shadow cursor-pointer"
                title="Відкрити журнал та рандомайзер для виклику іншого учня"
              >
                Змінити учня 🎲
              </button>
            </div>
          </div>
        )}

        {/* 2. TASK TEXT (FOR WORD PROBLEMS) (SOLID COLOR & WHITE TEXT) */}
        {currentExercise.taskText && (
          <div className="w-full max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#1e293b] border-4 border-[#3b82f6] shadow-[0_12px_0_#0f172a] space-y-3 animate-in fade-in">
            <div className="flex items-center gap-2 text-white text-sm font-bold uppercase tracking-wider font-mono">
              <FileText className="w-5 h-5 text-blue-400" />
              <span className="text-white font-black">Умова задачі:</span>
            </div>
            <p className="text-lg sm:text-2xl font-bold font-mono text-white leading-relaxed">
              {currentExercise.taskText}
            </p>
          </div>
        )}

        {/* 3. MULTIPLE CHOICE QUESTION INTERFACE FOR ALL QUESTIONS */}
        {/* USER REQUIREMENT: "щоп всі питаня требували лише вибор правильноїі вітповіді" */}
        {effectiveExercise && (
          <div className="space-y-6 w-full max-w-5xl mx-auto animate-in fade-in duration-300">
            
            {/* SUB-EXAMPLES BAR OF CURRENT NUMBER: (1) (2) (3) (4) (5) (6)... */}
            {currentNumberParts.length > 1 && (
              <div className="w-full p-3 sm:p-4 rounded-2xl bg-[#1e293b] border-2 border-[#3b82f6] shadow-md flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                    Приклади номера № {currentExercise.baseNumber || ''}:
                  </span>
                  <span className="text-xs font-mono text-blue-300 font-semibold">
                    (всі {currentNumberParts.length} прикладів)
                  </span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                  {currentNumberParts.map((part) => {
                    const isPartActive = part.id === currentExercise.id;
                    return (
                      <button
                        key={part.id}
                        onClick={() => {
                          sounds.playClick();
                          const idx = topicExercises.findIndex(e => e.id === part.id);
                          if (idx >= 0) setCurrentExerciseIdx(idx);
                        }}
                        className={`px-3 sm:px-4 py-1.5 rounded-xl font-mono text-xs sm:text-sm font-black transition-all cursor-pointer select-none ${
                          isPartActive
                            ? 'bg-[#dc2626] border-2 border-[#f87171] text-white shadow-[0_4px_0_#991b1b] scale-105'
                            : 'bg-[#0f172a] hover:bg-[#334155] border border-[#475569] text-zinc-300 hover:text-white'
                        }`}
                        title={`Перейти до прикладу (${part.partNumber})`}
                      >
                        Приклад ({part.partNumber || 1})
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* SOLID 3D QUESTION CONTAINER */}
            <div className="w-full p-6 sm:p-10 rounded-3xl sm:rounded-[36px] bg-[#0f172a] border-4 sm:border-[6px] border-[#3b82f6] shadow-[0_14px_0_#1e3a8a] text-center space-y-6 relative">
              
              {/* Question prompt badge - PURE WHITE TEXT */}
              <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-2xl bg-[#2563eb] border-2 border-[#60a5fa] text-white text-base sm:text-xl font-black shadow-md">
                <span className="w-3 h-3 rounded-full bg-white animate-pulse shrink-0" />
                <span className="text-white tracking-wide">{effectiveExercise.questionPrompt}</span>
              </div>

              {/* Authentic Textbook Math Formula with horizontal fraction bar, textbook exponents, minus, etc. */}
              {effectiveExercise.expression && (
                <div className="py-4 px-4 rounded-2xl bg-[#020617] border-2 border-[#1e293b] flex items-center justify-center min-h-[110px] shadow-inner">
                  <TextbookMath expression={effectiveExercise.expression} size="2xl" />
                </div>
              )}
            </div>

            {/* 4 RED 3D SOLID BUTTONS IN A ROW (CHOICE OPTIONS) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {effectiveExercise.options.map((opt) => {
                const isSelected = selectedChoiceId === opt.id;
                
                let cardStyle = 'border-4 border-[#ef4444] bg-[#dc2626] hover:bg-[#b91c1c] text-white shadow-[0_10px_0_#991b1b] hover:-translate-y-1.5 hover:shadow-[0_14px_0_#991b1b] active:translate-y-2 active:shadow-[0_2px_0_#991b1b]';

                if (isChoiceEvaluated) {
                  if (opt.isCorrect) {
                    cardStyle = 'border-4 border-[#4ade80] bg-[#16a34a] text-white shadow-[0_12px_0_#15803d] scale-105';
                  } else if (isSelected && !opt.isCorrect) {
                    cardStyle = 'border-4 border-[#f87171] bg-[#991b1b] text-white shadow-[0_5px_0_#450a0a] opacity-90';
                  } else {
                    cardStyle = 'border-4 border-[#334155] bg-[#1e293b] text-zinc-400 opacity-40';
                  }
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectChoice(opt.id)}
                    disabled={isChoiceEvaluated}
                    className={`p-6 sm:p-7 rounded-3xl flex flex-col items-center justify-between text-center transition-all duration-200 cursor-pointer select-none group min-h-[150px] sm:min-h-[190px] ${cardStyle}`}
                  >
                    <span className="w-10 h-10 rounded-2xl bg-black/40 border-2 border-white/50 flex items-center justify-center font-black text-white text-lg group-hover:scale-110 transition-transform shadow">
                      {opt.label}
                    </span>

                    <div className="my-auto py-2 flex items-center justify-center w-full">
                      <TextbookMath expression={opt.text} size="xl" />
                    </div>

                    <div className="h-6 flex items-center justify-center">
                      {isChoiceEvaluated && opt.isCorrect && (
                        <span className="text-white font-black text-xs flex items-center gap-1 bg-black/30 px-2.5 py-1 rounded-full border border-white/40">
                          <Check className="w-4 h-4 stroke-[3] text-white" /> Правильно!
                        </span>
                      )}
                      {isChoiceEvaluated && isSelected && !opt.isCorrect && (
                        <span className="text-white font-black text-xs flex items-center gap-1 bg-black/30 px-2.5 py-1 rounded-full border border-white/40">
                          <X className="w-4 h-4 stroke-[3] text-white" /> Невірно
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Explanation card after choice evaluation (SOLID COLOR & WHITE TEXT) */}
            {isChoiceEvaluated && (
              <div className="p-6 rounded-3xl bg-[#0f172a] border-4 border-[#10b981] shadow-[0_8px_0_#064e3b] space-y-3 animate-in fade-in">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-sm font-mono font-bold text-white uppercase tracking-wide flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span className="text-white font-bold">Пояснення розв'язання:</span>
                  </span>

                  <button
                    onClick={handleScrollNextExample}
                    className="px-5 py-2 rounded-xl bg-[#16a34a] hover:bg-[#15803d] border-2 border-[#4ade80] text-white font-mono font-black text-xs uppercase tracking-wider shadow-[0_4px_0_#14532d] active:translate-y-0.5 cursor-pointer"
                  >
                    Наступний приклад ➔
                  </button>
                </div>
                <div className="text-base sm:text-lg font-mono text-white leading-relaxed pt-1">
                  <TextbookMath expression={effectiveExercise.explanation} size="md" />
                </div>
              </div>
            )}

          </div>
        )}

      </main>

      {/* TOPIC NUMBERS TABLE & POPPED-OUT EXAMPLES MODAL */}
      {/* USER REQUIREMENT: "і при натисканю на номер вилаза таблиця з номерами по ці темі натискаєш на номер і вилазять всі приклада які є там" */}
      <TopicNumbersTableModal
        isOpen={isNumbersTableModalOpen}
        onClose={() => setIsNumbersTableModalOpen(false)}
        topicTitle={currentTopic.title}
        chapterNumber={currentChapter.number}
        topicExercises={topicExercises}
        currentExerciseId={currentExercise.id}
        onSelectExercise={(exerciseId) => {
          const foundIdx = topicExercises.findIndex(e => e.id === exerciseId);
          if (foundIdx >= 0) {
            setCurrentExerciseIdx(foundIdx);
            setSelectedChoiceId(null);
            setIsChoiceEvaluated(false);
          }
        }}
      />

      {/* 8-A CLASS JOURNAL & 3D WEIGHTED RANDOMIZER MODAL */}
      <ClassScoresAndRandomizerModal
        isOpen={isJournalModalOpen}
        onClose={() => setIsJournalModalOpen(false)}
        classes={activeClasses}
        currentClassId={currentClassId}
        onSelectClass={setCurrentClassId}
        onUpdateClasses={(updated) => {
          if (onUpdateClasses) onUpdateClasses(updated);
        }}
        activeExerciseNumber={effectiveExercise?.exerciseNumber || currentExercise.exerciseNumber}
        activeExerciseTitle={effectiveExercise?.taskText || effectiveExercise?.questionPrompt || currentTopic.title}
        activeStudentId={activeStudent?.id}
        onSelectActiveStudent={(st) => {
          setActiveStudent(st);
        }}
      />

      {/* TEXTBOOK CHOOSER & CUSTOM BOOK EXERCISE INPUT MODAL */}
      <CustomTextbookExerciseModal
        isOpen={isCustomBookModalOpen}
        onClose={() => setIsCustomBookModalOpen(false)}
        selectedBookId={selectedBookId}
        onSelectBookId={(newBookId) => {
          onSelectBookId?.(newBookId);
          setCurrentExerciseIdx(0);
          setToastNotice({
            title: `Підручник змінено: ${newBookId === 'merzlyak' ? 'Мерзляк' : newBookId === 'tarasenkova' ? 'Тарасенкова' : 'Істер'}`,
            subtitle: 'Завантажено автентичні завдання з обраної книги.'
          });
        }}
        onAddCustomExercise={(newExercise) => {
          setCustomAddedExercises(prev => [newExercise, ...prev]);
          setCurrentExerciseIdx(0);
          setToastNotice({
            title: `Додано завдання: ${newExercise.exerciseNumber}`,
            subtitle: 'Завдання з вашої книги готове до розв\'язання біля дошки!'
          });
        }}
        activeTopicId={activeTopicId}
        activeChapterId={activeChapterId}
      />

    </div>
  );
};
