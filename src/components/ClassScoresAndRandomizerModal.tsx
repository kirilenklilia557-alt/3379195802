import React, { useState, useMemo } from 'react';
import { 
  Users, 
  X, 
  Sparkles, 
  Dice5, 
  Trophy, 
  Plus, 
  Minus, 
  RotateCcw, 
  GraduationCap, 
  UserCheck, 
  CheckCircle2,
  Award,
  Hash
} from 'lucide-react';
import { ClassGroup, Student } from '../types/duo';
import { sounds } from '../utils/soundEffects';

interface ClassScoresAndRandomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  classes: ClassGroup[];
  currentClassId: string;
  onSelectClass: (id: string) => void;
  onUpdateClasses: (updated: ClassGroup[]) => void;
  activeExerciseNumber?: string;
  activeExerciseTitle?: string;
  activeStudentId?: string;
  onSelectActiveStudent?: (student: Student) => void;
}

/**
 * Calculates weighted random chance for student selection.
 * USER REQUIREMENT: "зроби щоп віталії кириленко випадав у 2 раза рітше"
 * Regular student weight: 1.0
 * Vitaliy Kyrylenko weight: 0.5 (exactly 2 times less frequently)
 */
export const getStudentSelectionWeight = (student: Student): number => {
  const lower = student.name.toLowerCase();
  if (lower.includes('кириленко') || lower.includes('віталій')) {
    return 0.5; // у 2 рази рідше
  }
  return 1.0;
};

export const ClassScoresAndRandomizerModal: React.FC<ClassScoresAndRandomizerModalProps> = ({
  isOpen,
  onClose,
  classes,
  currentClassId,
  onSelectClass,
  onUpdateClasses,
  activeExerciseNumber = '№ 85',
  activeExerciseTitle = 'Додавання та віднімання дробів',
  activeStudentId,
  onSelectActiveStudent
}) => {
  const currentClass = classes.find(c => c.id === currentClassId) || classes[0];

  // Randomizer states
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [randomWinner, setRandomWinner] = useState<Student | null>(null);
  const [rollStepIndex, setRollStepIndex] = useState<number>(0);
  const [filterMode, setFilterMode] = useState<'all' | 'present' | 'absent'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Present students list for randomizer
  const presentStudents = useMemo(() => {
    return currentClass.students.filter(s => (currentClass.attendance[s.id] ?? true) === true);
  }, [currentClass]);

  if (!isOpen) return null;

  // Add / deduct points for a student ("з старта в них ноль")
  const handleModifyScore = (studentId: string, delta: number) => {
    sounds.playClick();
    const updatedStudents = currentClass.students.map(s => {
      if (s.id === studentId) {
        const newScore = Math.max(0, (s.score ?? 0) + delta);
        return { ...s, score: newScore };
      }
      return s;
    });

    const updatedClasses = classes.map(c => 
      c.id === currentClass.id ? { ...c, students: updatedStudents } : c
    );
    onUpdateClasses(updatedClasses);

    if (delta > 0) {
      sounds.playLevelUp();
    }
  };

  // Reset student score to 0
  const handleResetStudentScore = (studentId: string) => {
    sounds.playClick();
    const updatedStudents = currentClass.students.map(s => {
      if (s.id === studentId) {
        return { ...s, score: 0 };
      }
      return s;
    });
    const updatedClasses = classes.map(c => 
      c.id === currentClass.id ? { ...c, students: updatedStudents } : c
    );
    onUpdateClasses(updatedClasses);
  };

  // Reset ALL students in this class to 0 points ("з старта в них ноль")
  const handleResetAllScores = () => {
    sounds.playClick();
    const updatedStudents = currentClass.students.map(s => ({ ...s, score: 0 }));
    const updatedClasses = classes.map(c => 
      c.id === currentClass.id ? { ...c, students: updatedStudents } : c
    );
    onUpdateClasses(updatedClasses);
  };

  // Attendance toggle
  const toggleAttendance = (studentId: string) => {
    sounds.playClick();
    const currentVal = currentClass.attendance[studentId] ?? true;
    const updatedAttendance = {
      ...currentClass.attendance,
      [studentId]: !currentVal
    };
    const updatedClasses = classes.map(c => 
      c.id === currentClass.id ? { ...c, attendance: updatedAttendance } : c
    );
    onUpdateClasses(updatedClasses);
  };

  // Run the 3D Weighted Randomizer
  const handleRunRandomizer = () => {
    if (presentStudents.length === 0) {
      sounds.playWrong();
      return;
    }

    sounds.playStart();
    setIsRolling(true);
    setRandomWinner(null);

    // Weighted selection logic
    const weightedItems = presentStudents.map(s => ({
      student: s,
      weight: getStudentSelectionWeight(s)
    }));
    const totalWeight = weightedItems.reduce((sum, item) => sum + item.weight, 0);

    let randomVal = Math.random() * totalWeight;
    let chosen = weightedItems[0].student;
    for (const item of weightedItems) {
      if (randomVal < item.weight) {
        chosen = item.student;
        break;
      }
      randomVal -= item.weight;
    }

    // Visual cycling simulation in 3D
    let ticks = 0;
    const interval = setInterval(() => {
      ticks++;
      const tempRand = presentStudents[Math.floor(Math.random() * presentStudents.length)];
      setRandomWinner(tempRand);
      setRollStepIndex(ticks);

      if (ticks > 16) {
        clearInterval(interval);
        setRandomWinner(chosen);
        setIsRolling(false);
        sounds.playLevelUp();
        if (onSelectActiveStudent) {
          onSelectActiveStudent(chosen);
        }
      }
    }, 90);
  };

  // Filtered students list for display
  const displayedStudents = currentClass.students.filter(s => {
    const isPresent = currentClass.attendance[s.id] ?? true;
    if (filterMode === 'present' && !isPresent) return false;
    if (filterMode === 'absent' && isPresent) return false;
    if (searchQuery.trim() && !s.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  const totalClassScore = currentClass.students.reduce((acc, s) => acc + (s.score ?? 0), 0);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      style={{ perspective: '1400px' }}
    >
      <div 
        className="w-full max-w-4xl max-h-[92vh] bg-[#0f172a] border-4 border-[#3b82f6] rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* MODAL HEADER: Title + Class switcher + Close (SOLID COLORS & WHITE TEXT) */}
        <div className="px-5 py-4 bg-[#1e3a8a] border-b-2 border-[#3b82f6] flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#2563eb] border-2 border-[#60a5fa] flex items-center justify-center text-white shadow-md">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-black font-mono text-white tracking-wide">
                  Журнал оцінювання та Рандомайзер
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-[#2563eb] text-white border border-[#60a5fa] text-[11px] font-black font-mono">
                  {currentClass.name}
                </span>
              </div>
              <p className="text-xs text-blue-200 font-mono">
                Виклик до дошки • Бали з нуля • Фіксація відповідей
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Class Pill Switcher */}
            <div className="hidden sm:flex items-center gap-1.5 p-1 rounded-xl bg-[#020617] border border-[#334155]">
              {classes.map(c => (
                <button
                  key={c.id}
                  onClick={() => onSelectClass(c.id)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold font-mono transition-all cursor-pointer ${
                    c.id === currentClass.id 
                      ? 'bg-[#2563eb] text-white shadow-md font-black' 
                      : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-xl bg-[#1e293b] hover:bg-[#334155] text-white flex items-center justify-center transition-all cursor-pointer border border-[#475569] shadow-md"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* SCROLLABLE MAIN CONTENT */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-white">

          {/* 1. USER REQUIREMENT: "і було так номер зверху" (TASK NUMBER AT THE TOP IN 3D, SOLID COLOR & WHITE TEXT) */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#1e293b] border-2 border-[#475569] shadow-[0_6px_0_#0f172a] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl bg-[#dc2626] border-2 border-[#ef4444] text-white flex flex-col items-center justify-center font-black font-mono shadow-[0_4px_0_#991b1b] shrink-0">
                <span className="text-[10px] uppercase tracking-wider text-white">Номер</span>
                <span className="text-xl leading-none text-white">{activeExerciseNumber.replace('№', '').trim()}</span>
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-300 block">
                  🎯 Поточне завдання для відповіді біля дошки:
                </span>
                <h4 className="text-base sm:text-lg font-black text-white font-mono">
                  Завдання {activeExerciseNumber} • {activeExerciseTitle}
                </h4>
                <p className="text-xs text-zinc-300 font-mono mt-0.5">
                  Викличте учня рандомайзером для розв'язання цього завдання
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="px-4 py-2 rounded-xl bg-[#020617] border border-[#334155] text-center font-mono">
                <span className="text-[10px] text-zinc-400 uppercase block">Всього балів класу:</span>
                <span className="text-lg font-black text-amber-300">{totalClassScore} б.</span>
              </div>
            </div>
          </div>

          {/* 2. USER REQUIREMENT: "і рандомаїзер і зроби щоп віталії кириленко випадав у 2 раза рітше" */}
          <div className="p-5 rounded-2xl bg-[#1e293b] border-2 border-[#3b82f6] shadow-[0_8px_0_#0f172a] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="text-base font-black text-white font-mono flex items-center gap-2">
                  <Dice5 className="w-5 h-5 text-blue-400" />
                  <span className="text-white">3D Рандомайзер: Хто піде до дошки?</span>
                </h4>
                <p className="text-xs text-zinc-300 font-mono mt-0.5">
                  Обирає виключно присутніх учнів • Віталій Кириленко випадає у 2 рази рідше (вага 0.5×)
                </p>
              </div>

              <button
                onClick={handleRunRandomizer}
                disabled={isRolling || presentStudents.length === 0}
                className={`px-6 py-3 rounded-2xl font-black font-mono text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 shadow-[0_5px_0_#1e3a8a] active:translate-y-1 active:shadow-[0_1px_0_#1e3a8a] ${
                  isRolling
                    ? 'bg-zinc-800 text-zinc-400 cursor-wait'
                    : 'bg-[#2563eb] hover:bg-[#1d4ed8] text-white'
                }`}
              >
                <Dice5 className={`w-5 h-5 text-white ${isRolling ? 'animate-spin' : ''}`} />
                <span className="text-white">{isRolling ? 'Крутимо барабан...' : '🎲 Викликати до дошки!'}</span>
              </button>
            </div>

            {/* Randomizer Drum Display Stage */}
            <div className="p-5 rounded-2xl bg-[#020617] border-2 border-[#334155] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl border-2 transition-all ${
                  isRolling
                    ? 'bg-[#d97706] border-[#f59e0b] animate-bounce text-white'
                    : randomWinner
                    ? 'bg-[#16a34a] border-[#4ade80] shadow-[0_0_20px_rgba(22,163,74,0.5)] text-white'
                    : 'bg-[#1e293b] border-[#475569] text-white'
                }`}>
                  {randomWinner ? randomWinner.avatar : '🎲'}
                </div>

                <div>
                  <span className="text-[11px] font-mono uppercase font-bold text-zinc-400 block">
                    {isRolling ? 'Визначається учень...' : randomWinner ? '🎉 Обраний учень біля дошки:' : 'Натисніть кнопку, щоб обрати учня:'}
                  </span>
                  <div className="text-xl sm:text-2xl font-black font-mono text-white mt-0.5">
                    {randomWinner ? randomWinner.name : '— Очікує запуску —'}
                  </div>
                  {randomWinner && (
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-mono text-amber-300 font-bold">
                        Бали учня: {randomWinner.score ?? 0} б.
                      </span>
                      {randomWinner.name.toLowerCase().includes('кириленко') && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#d97706] text-white border border-[#f59e0b] font-bold">
                          🎯 Вага 0.5× (у 2 рази рідше)
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Quick reward buttons for the student at the board */}
              {randomWinner && (
                <div className="flex items-center gap-2 flex-wrap justify-center">
                  <span className="text-xs font-mono text-white mr-1 hidden lg:inline font-bold">Оцінити:</span>
                  <button
                    onClick={() => handleModifyScore(randomWinner.id, 1)}
                    className="px-3.5 py-1.5 rounded-xl bg-[#16a34a] hover:bg-[#15803d] border border-[#4ade80] text-white font-black text-xs font-mono shadow-[0_3px_0_#14532d] active:translate-y-0.5 cursor-pointer"
                  >
                    +1 бал
                  </button>
                  <button
                    onClick={() => handleModifyScore(randomWinner.id, 2)}
                    className="px-3.5 py-1.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] border border-[#38bdf8] text-white font-black text-xs font-mono shadow-[0_3px_0_#075985] active:translate-y-0.5 cursor-pointer"
                  >
                    +2 бали
                  </button>
                  <button
                    onClick={() => handleModifyScore(randomWinner.id, 5)}
                    className="px-3.5 py-1.5 rounded-xl bg-[#d97706] hover:bg-[#b45309] border border-[#f59e0b] text-white font-black text-xs font-mono shadow-[0_3px_0_#78350f] active:translate-y-0.5 cursor-pointer"
                  >
                    +5 балів
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* 3. USER REQUIREMENT: "віконо з балами з старта них ноль" (SCORES LIST STARTING AT 0) */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-[#334155]">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-400" />
                <h4 className="text-base font-black text-white font-mono">
                  Таблиця балів класу (з старта у всіх 0 балів)
                </h4>
              </div>

              {/* Action buttons: Reset all to 0 & filters */}
              <div className="flex items-center gap-2 flex-wrap">
                <button
                  onClick={handleResetAllScores}
                  className="px-3 py-1.5 rounded-xl bg-[#1e293b] hover:bg-[#334155] border border-[#475569] text-white text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer"
                  title="Скинути всі бали учнів на 0"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-white" />
                  <span className="text-white">Скинути всі на 0</span>
                </button>

                <div className="flex items-center gap-1 bg-[#020617] p-1 rounded-xl border border-[#334155]">
                  <button
                    onClick={() => setFilterMode('all')}
                    className={`px-2.5 py-0.5 rounded-lg text-xs font-mono font-bold cursor-pointer ${
                      filterMode === 'all' ? 'bg-[#2563eb] text-white font-black' : 'text-zinc-400'
                    }`}
                  >
                    Всі ({currentClass.students.length})
                  </button>
                  <button
                    onClick={() => setFilterMode('present')}
                    className={`px-2.5 py-0.5 rounded-lg text-xs font-mono font-bold cursor-pointer ${
                      filterMode === 'present' ? 'bg-[#16a34a] text-white font-black' : 'text-zinc-400'
                    }`}
                  >
                    Присутні ({presentStudents.length})
                  </button>
                  <button
                    onClick={() => setFilterMode('absent')}
                    className={`px-2.5 py-0.5 rounded-lg text-xs font-mono font-bold cursor-pointer ${
                      filterMode === 'absent' ? 'bg-[#dc2626] text-white font-black' : 'text-zinc-400'
                    }`}
                  >
                    Відсутні ({currentClass.students.length - presentStudents.length})
                  </button>
                </div>
              </div>
            </div>

            {/* Students 3D Score Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {displayedStudents.map((student) => {
                const isPresent = currentClass.attendance[student.id] ?? true;
                const isAtBoard = randomWinner?.id === student.id || activeStudentId === student.id;
                const score = student.score ?? 0;
                const isVitaliy = student.name.toLowerCase().includes('кириленко') || student.name.toLowerCase().includes('віталій');

                return (
                  <div
                    key={student.id}
                    className={`p-3.5 rounded-2xl border-2 transition-all flex items-center justify-between gap-3 shadow-[0_5px_0_#0f172a] select-none ${
                      isAtBoard
                        ? 'bg-[#1e3a8a] border-[#3b82f6] text-white shadow-[0_6px_0_#172554] ring-2 ring-[#60a5fa]'
                        : isPresent
                        ? 'bg-[#1e293b] border-[#475569] text-white hover:border-[#3b82f6]'
                        : 'bg-[#1e293b]/50 border-red-900/50 opacity-60 text-zinc-300'
                    }`}
                  >
                    {/* Left: Avatar & Name & Status */}
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="text-2xl w-10 h-10 rounded-xl bg-[#020617] border border-[#475569] flex items-center justify-center shrink-0">
                        {student.avatar}
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-sm font-black font-mono text-white truncate block">
                            {student.name}
                          </span>
                          {isAtBoard && (
                            <span className="text-[10px] font-bold bg-[#d97706] text-white px-1.5 py-0.2 rounded-md font-mono">
                              Біля дошки
                            </span>
                          )}
                          {isVitaliy && (
                            <span 
                              className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-[#d97706] text-white border border-[#f59e0b] font-bold"
                              title="Ймовірність випадання зменшена вдвічі (вага 0.5×)"
                            >
                              0.5× шанс
                            </span>
                          )}
                        </div>

                        {/* Presence Toggle Button */}
                        <button
                          onClick={() => toggleAttendance(student.id)}
                          className={`mt-1 text-[10px] font-mono font-bold flex items-center gap-1 cursor-pointer ${
                            isPresent ? 'text-emerald-400' : 'text-red-400'
                          }`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${isPresent ? 'bg-emerald-400 animate-pulse' : 'bg-red-400'}`} />
                          <span className={isPresent ? 'text-emerald-300' : 'text-red-300'}>
                            {isPresent ? 'Присутній на уроці' : 'Відсутній'}
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Right: 3D Score Badge + Quick Point Adjusters */}
                    <div className="flex items-center gap-2 shrink-0">
                      {/* Score Badge (Starts at 0) */}
                      <div className="px-3 py-1.5 rounded-xl bg-[#020617] border-2 border-[#f59e0b] text-center font-mono shadow-[0_3px_0_#78350f]">
                        <span className="text-xs font-black text-amber-300 block leading-tight">
                          {score}
                        </span>
                        <span className="text-[9px] text-zinc-300 block uppercase font-bold">
                          балів
                        </span>
                      </div>

                      {/* Controls: -1, +1, +2 */}
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handleModifyScore(student.id, -1)}
                            disabled={score <= 0}
                            className="w-7 h-7 rounded-lg bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-black flex items-center justify-center cursor-pointer active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed border border-[#ef4444]"
                            title="-1 бал"
                          >
                            <Minus className="w-3.5 h-3.5 text-white stroke-[3]" />
                          </button>
                          <button
                            onClick={() => handleModifyScore(student.id, 1)}
                            className="w-7 h-7 rounded-lg bg-[#16a34a] hover:bg-[#15803d] text-white font-black text-xs flex items-center justify-center cursor-pointer shadow-[0_2px_0_#14532d] active:translate-y-0.5 border border-[#4ade80]"
                            title="+1 бал"
                          >
                            <Plus className="w-3.5 h-3.5 text-white stroke-[3]" />
                          </button>
                        </div>
                        <button
                          onClick={() => handleModifyScore(student.id, 2)}
                          className="w-full py-0.5 rounded-md bg-[#2563eb] hover:bg-[#1d4ed8] text-white border border-[#60a5fa] text-[10px] font-mono font-bold cursor-pointer"
                          title="+2 бали"
                        >
                          +2 б.
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* MODAL FOOTER */}
        <div className="px-6 py-4 bg-[#020617] border-t-2 border-[#1e293b] flex items-center justify-between shrink-0">
          <div className="text-xs text-zinc-300 font-mono">
            {randomWinner ? (
              <span className="text-amber-300 font-bold">
                ⭐ Зараз біля дошки: {randomWinner.name} ({randomWinner.score ?? 0} б.)
              </span>
            ) : (
              <span className="text-white">Бали зберігаються автоматично • Початковий бал: 0</span>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-2xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-black font-mono text-xs sm:text-sm uppercase tracking-wider shadow-[0_5px_0_#1e3a8a] active:translate-y-1 active:shadow-[0_1px_0_#1e3a8a] cursor-pointer"
          >
            Повернутися до уроку ➔
          </button>
        </div>

      </div>
    </div>
  );
};
