import React, { useState } from 'react';
import { 
  Crown, 
  Star, 
  Check, 
  Play, 
  PenTool, 
  Layers, 
  Sparkles, 
  Flame, 
  Trophy, 
  Gift, 
  Users, 
  Zap, 
  CheckCircle2, 
  Award,
  ChevronRight,
  Shield,
  Heart,
  X,
  BookOpen
} from 'lucide-react';
import { Chapter, ModularExercise } from '../types/algebra';
import { ClassGroup, Student } from '../types/duo';
import { DuoOwl } from './DuoOwl';
import { BlitzQuizModal } from './BlitzQuizModal';
import { sounds } from '../utils/soundEffects';

interface DuolingoPathProps {
  chapters: Chapter[];
  selectedChapterId: string;
  onSelectChapter: (id: string) => void;
  selectedTopicId: string;
  onSelectTopic: (id: string) => void;
  solvedExercises: Set<string>;
  onOpenHandwriting: (exercise: ModularExercise) => void;
  onOpenConstructor: (exerciseId: string) => void;
  onOpenRollCall: () => void;
  currentClass: ClassGroup;
  activeStudent?: Student;
  onSelectActiveStudent?: (student: Student) => void;
  streak?: number;
  gems?: number;
  hearts?: number;
  onReward?: (xpBonus: number, gemBonus: number) => void;
}

export const DuolingoPath: React.FC<DuolingoPathProps> = ({
  chapters,
  selectedChapterId,
  onSelectChapter,
  selectedTopicId,
  onSelectTopic,
  solvedExercises,
  onOpenHandwriting,
  onOpenConstructor,
  onOpenRollCall,
  currentClass,
  activeStudent,
  onSelectActiveStudent,
  streak = 5,
  gems = 150,
  hearts = 5,
  onReward
}) => {
  const [selectedExerciseForModal, setSelectedExerciseForModal] = useState<ModularExercise | null>(null);
  const [isBlitzOpen, setIsBlitzOpen] = useState(false);
  const [isChestOpen, setIsChestOpen] = useState(false);
  const [chestClaimed, setChestClaimed] = useState(false);

  const currentChapter = chapters.find(c => c.id === selectedChapterId) || chapters[0];
  const currentTopic = currentChapter.topics.find(t => t.id === selectedTopicId) || currentChapter.topics[0];

  const exercises = currentTopic.modularPractice;
  const nextExercise = exercises.find(ex => !solvedExercises.has(ex.id)) || exercises[0];
  const completedInTopic = exercises.filter(ex => solvedExercises.has(ex.id)).length;
  const progressPercent = exercises.length > 0 ? Math.round((completedInTopic / exercises.length) * 100) : 0;

  // Attendance stats
  const totalStudents = currentClass.students.length;
  const presentCount = currentClass.students.filter(s => currentClass.attendance[s.id] ?? true).length;
  const absentCount = totalStudents - presentCount;

  // Sorted students for League Leaderboard
  const sortedStudents = [...currentClass.students].sort((a, b) => (b.stars * 10 + b.solvedCount) - (a.stars * 10 + a.solvedCount));

  // Duolingo stepping stones offset positions
  const offsets = [
    'translate-x-0',
    '-translate-x-12 sm:-translate-x-20',
    'translate-x-12 sm:translate-x-20',
    'translate-x-0',
    '-translate-x-10 sm:-translate-x-16',
    'translate-x-10 sm:translate-x-16'
  ];

  const handleOpenChest = () => {
    sounds.playChest();
    setIsChestOpen(true);
    if (!chestClaimed && onReward) {
      onReward(50, 100);
      setChestClaimed(true);
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-16">
      
      {/* 1. Quick Class & Attendance Banner */}
      <div className="bg-[#111827] border-2 border-slate-700/80 rounded-3xl p-4 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-green-500/20 border border-green-500/40 flex items-center justify-center text-green-400">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Клас на уроці:</span>
              <strong className="text-sm font-black text-white">{currentClass.name}</strong>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300 mt-0.5">
              <span className="text-green-400 font-bold">🟢 {presentCount} присутніх</span>
              <span>•</span>
              <span className="text-rose-400 font-bold">🔴 {absentCount} кого нема</span>
              {activeStudent && (
                <>
                  <span>•</span>
                  <span className="text-amber-400 font-bold flex items-center gap-1">
                    ⭐ Відповідає: {activeStudent.name}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              sounds.playClick();
              setIsBlitzOpen(true);
            }}
            className="bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-black px-3.5 py-2 rounded-2xl transition-all cursor-pointer flex items-center gap-1.5"
          >
            <Zap className="w-3.5 h-3.5 fill-amber-400" />
            <span>⚡ Бліц-розминка</span>
          </button>

          <button
            onClick={() => {
              sounds.playClick();
              onOpenRollCall();
            }}
            className="bg-[#58cc02] hover:bg-[#46a302] text-black border-b-3 border-green-700 text-xs font-black px-4 py-2 rounded-2xl transition-all cursor-pointer flex items-center gap-1.5 shrink-0 shadow-lg shadow-green-500/20"
          >
            <span>📋 Перекличка класу</span>
          </button>
        </div>
      </div>

      {/* 2. Centered Topic & Subtopic Selector Header */}
      <div className="bg-[#111827] border-2 border-green-500/30 rounded-3xl p-6 shadow-2xl space-y-5 text-center relative overflow-hidden">
        {/* Glow accent */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-40 bg-green-500/10 blur-3xl pointer-events-none rounded-full" />

        {/* Chapter / Main Topic Navigation */}
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-green-400">
            <Sparkles className="w-4 h-4" />
            <span>Оберіть розділ курсу «Алгебра 8»:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {chapters.map(ch => {
              const isSelected = ch.id === currentChapter.id;
              return (
                <button
                  key={ch.id}
                  onClick={() => {
                    sounds.playClick();
                    onSelectChapter(ch.id);
                    onSelectTopic(ch.topics[0].id);
                  }}
                  className={`px-3.5 py-2 rounded-2xl text-xs font-black transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-[#58cc02] text-black border-green-400 shadow-lg shadow-green-500/20 scale-105 border-b-4 border-green-700'
                      : 'bg-slate-800/90 text-slate-300 border-slate-700 hover:border-slate-600 hover:text-white'
                  }`}
                >
                  Розділ {ch.number}: {ch.title.split(' ')[0]}...
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Chapter Details */}
        <div className="pt-2">
          <span className="text-[11px] font-extrabold uppercase px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 inline-block">
            Тема {currentChapter.number} • {currentChapter.title}
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-white mt-2">
            {currentTopic.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mt-1">
            {currentTopic.subtitle}
          </p>
        </div>

        {/* Subtopic Selector */}
        <div className="pt-2 border-t border-slate-800 space-y-2">
          <span className="text-xs font-bold text-slate-400 block">
            Підтема (параграф) у цьому розділі:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {currentChapter.topics.map((t, idx) => {
              const isSelected = t.id === currentTopic.id;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    sounds.playClick();
                    onSelectTopic(t.id);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-amber-400 text-black font-extrabold shadow-md border-b-3 border-amber-600'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  § {idx + 1}: {t.title.slice(0, 26)}...
                </button>
              );
            })}
          </div>
        </div>

        {/* Topic Progress Bar */}
        <div className="max-w-md mx-auto pt-2 space-y-1.5">
          <div className="flex justify-between text-xs font-bold">
            <span className="text-slate-400">Прогрес завдань теми:</span>
            <span className="text-green-400 font-mono">{completedInTopic} з {exercises.length} розв'язано ({progressPercent}%)</span>
          </div>
          <div className="w-full h-3.5 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700">
            <div
              className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full transition-all duration-500 shadow-sm"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* 3. Main Grid: Winding Path on Left/Center + Duolingo Rail on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT / CENTER: Duolingo Stepping Stones Pathway */}
        <div className="lg:col-span-8 flex flex-col items-center space-y-6">
          
          {/* 1. Hero Green START Banner (Найперше з'являється велика зелена кнопка СТАРТ) */}
          <div className="w-full bg-gradient-to-r from-[#111827] via-[#0e2717] to-[#111827] border-2 border-[#58cc02] rounded-3xl p-5 sm:p-6 shadow-2xl shadow-green-500/10 flex flex-col sm:flex-row items-center justify-between gap-4 relative overflow-hidden">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl bg-[#58cc02] text-black flex items-center justify-center font-black shadow-lg shadow-green-500/30 shrink-0">
                <Play className="w-8 h-8 fill-black ml-0.5" />
              </div>
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="text-xs font-black uppercase tracking-wider text-[#58cc02]">
                    Готово до старту:
                  </span>
                  <span className="text-[10px] font-bold text-slate-300 bg-slate-800/90 px-2.5 py-0.5 rounded-full border border-slate-700">
                    {nextExercise ? `Завдання № ${nextExercise.id.replace('mod-', '')}` : 'Усі завдання теми пройдено!'}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-black text-white font-mono mt-0.5">
                  {nextExercise ? nextExercise.problem : currentTopic.title}
                </h3>
                <p className="text-xs text-slate-400">
                  {nextExercise ? `${nextExercise.category} • ${nextExercise.difficulty} • +${nextExercise.xpReward} XP` : 'Чудова робота! Оберіть іншу тему.'}
                </p>
              </div>
            </div>

            <button
              id="hero-start-btn"
              onClick={() => {
                sounds.playStart();
                if (nextExercise) {
                  setSelectedExerciseForModal(nextExercise);
                }
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#58cc02] hover:bg-[#46a302] border-b-6 border-green-700 text-black font-black text-lg uppercase tracking-wider shadow-xl shadow-green-500/30 flex items-center justify-center gap-2.5 transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0 animate-pulse select-none"
            >
              <Play className="w-6 h-6 fill-black" />
              <span>СТАРТ</span>
            </button>
          </div>

          {/* Duo Owl Encouragement Message */}
          <div className="w-full flex justify-center">
            <DuoOwl
              size="md"
              mood={progressPercent > 50 ? 'excited' : 'happy'}
              speech={
                progressPercent === 100
                  ? 'Урааа! Ти повністю пройшов цю тему! Натисни на скриню та забери 100 діамантів! 👑'
                  : progressPercent > 0
                  ? `Чудовий темп! Уже ${completedInTopic} прикладів пройдено. Тисни СТАРТ і пиши розв'язок від руки!`
                  : "Привіт! Натискай велику зелену кнопку «СТАРТ» або обирай номер на доріжці, щоб розпочати урок!"
              }
            />
          </div>

          {/* Stepping Stones Path */}
          <div className="relative py-6 flex flex-col items-center space-y-10 w-full">
            
            {/* Winding Connecting Line in Background */}
            <div className="absolute top-8 bottom-12 w-2.5 bg-slate-800 rounded-full -z-0" />

            {exercises.map((exercise, index) => {
              const isSolved = solvedExercises.has(exercise.id);
              const isCurrent = !isSolved && (index === 0 || solvedExercises.has(exercises[index - 1].id));
              const offsetClass = offsets[index % offsets.length];

              return (
                <div
                  key={exercise.id}
                  className={`relative z-10 flex flex-col items-center transition-transform duration-300 ${offsetClass}`}
                >
                  {/* Stepping Stone Node 3D Button */}
                  <div className="relative group">
                    <button
                      onClick={() => {
                        sounds.playStart();
                        setSelectedExerciseForModal(exercise);
                      }}
                      className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex flex-col items-center justify-center font-black transition-all cursor-pointer shadow-2xl select-none ${
                        isSolved
                          ? 'bg-[#58cc02] hover:bg-[#46a302] text-black border-b-8 border-green-700 hover:scale-105 shadow-green-500/30'
                          : isCurrent
                          ? 'bg-[#58cc02] hover:bg-[#46a302] text-black border-b-8 border-green-700 hover:scale-110 shadow-2xl shadow-green-500/50 ring-4 ring-green-400/50'
                          : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-b-8 border-slate-950 hover:scale-105'
                      }`}
                    >
                      {isSolved ? (
                        <>
                          <Crown className="w-8 h-8 text-black mb-0.5 fill-black" />
                          <span className="text-[11px] font-black">№ {index + 1}</span>
                        </>
                      ) : isCurrent ? (
                        <>
                          <Play className="w-8 h-8 text-black mb-0.5 fill-black ml-0.5" />
                          <span className="text-[11px] font-black uppercase tracking-wider">СТАРТ</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-7 h-7 mb-0.5 fill-current" />
                          <span className="text-[11px] font-bold">№ {index + 1}</span>
                        </>
                      )}
                    </button>

                    {/* Checkmark or Floating Green Start Tag */}
                    {isSolved && (
                      <div className="absolute -top-2 -right-2 w-7 h-7 bg-amber-400 text-black rounded-full flex items-center justify-center font-bold text-xs shadow-md border-2 border-slate-900">
                        ✓
                      </div>
                    )}
                    {isCurrent && (
                      <div className="absolute -top-11 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center animate-bounce">
                        <div className="bg-[#58cc02] text-black text-[11px] font-black uppercase px-3.5 py-1 rounded-xl shadow-xl border-2 border-white flex items-center gap-1.5 whitespace-nowrap">
                          <Play className="w-3 h-3 fill-black text-black" />
                          СТАРТ
                        </div>
                        <div className="w-0 h-0 border-x-5 border-x-transparent border-t-5 border-t-[#58cc02] -mt-0.5" />
                      </div>
                    )}
                  </div>

                  {/* Problem Preview Card */}
                  <div 
                    onClick={() => {
                      sounds.playStart();
                      setSelectedExerciseForModal(exercise);
                    }}
                    className={`mt-2.5 text-center max-w-[200px] sm:max-w-[240px] p-2.5 rounded-2xl border transition-all cursor-pointer select-none ${
                      isCurrent
                        ? 'bg-[#182a1d] border-green-500/80 shadow-md ring-1 ring-green-500/40'
                        : 'bg-[#182238]/90 hover:bg-[#202c48] border-slate-700'
                    }`}
                  >
                    <span className={`text-xs font-bold font-mono block truncate ${
                      isCurrent ? 'text-green-300 font-extrabold' : 'text-amber-300'
                    }`}>
                      {exercise.problem}
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">
                      {exercise.category} • {exercise.difficulty}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Final Milestone Chest */}
            <div className="relative z-10 flex flex-col items-center pt-6">
              <button
                onClick={handleOpenChest}
                className={`w-24 h-24 rounded-3xl flex items-center justify-center shadow-2xl border-b-8 transition-all cursor-pointer ${
                  progressPercent === 100 || chestClaimed
                    ? 'bg-amber-400 text-black border-amber-600 animate-bounce hover:scale-105'
                    : 'bg-slate-800 text-amber-400 border-slate-950 hover:bg-slate-700'
                }`}
              >
                <Trophy className="w-12 h-12" />
              </button>
              <span className="text-xs font-black text-amber-400 mt-2 uppercase tracking-wider">
                {chestClaimed ? 'Скриня відкрита! (+100 💎)' : 'Скриня теми (Натисніть для нагороди)'}
              </span>
            </div>

          </div>

        </div>

        {/* RIGHT: Duolingo Sidebar (Quests, Streak, Class League) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* 1. Daily Quests Card */}
          <div className="bg-[#111827] border-2 border-slate-700/80 rounded-3xl p-5 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg">🎯</span>
                <h3 className="text-sm font-black text-white">Щоденні квести</h3>
              </div>
              <span className="text-[11px] font-bold text-amber-400">Сьогодні</span>
            </div>

            <div className="space-y-3">
              {/* Quest 1 */}
              <div className="p-3 bg-[#182238] rounded-2xl border border-slate-700/80 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-200">✍️ Розв'язати 2 завдання від руки</span>
                  <span className="text-cyan-400 font-bold font-mono">+10 💎</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: `${Math.min(100, (completedInTopic / 2) * 100)}%` }}
                  />
                </div>
                <div className="text-[10px] text-slate-400 text-right">
                  {Math.min(2, completedInTopic)} / 2
                </div>
              </div>

              {/* Quest 2 */}
              <div className="p-3 bg-[#182238] rounded-2xl border border-slate-700/80 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-200">📋 Перевірити присутність у класі</span>
                  <span className="text-cyan-400 font-bold font-mono">+5 💎</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full w-full" />
                </div>
                <div className="text-[10px] text-green-400 text-right font-bold">
                  Виконано ✓
                </div>
              </div>

              {/* Quest 3 */}
              <div className="p-3 bg-[#182238] rounded-2xl border border-slate-700/80 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-200">⚡ Пройти бліц-розминку</span>
                  <span className="text-amber-400 font-bold font-mono">+20 XP</span>
                </div>
                <button
                  onClick={() => {
                    sounds.playClick();
                    setIsBlitzOpen(true);
                  }}
                  className="w-full py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-black transition-colors cursor-pointer text-center"
                >
                  Розпочати розминку
                </button>
              </div>
            </div>
          </div>

          {/* 2. Class League Leaderboard (Турнірна ліга класу) */}
          <div className="bg-[#111827] border-2 border-slate-700/80 rounded-3xl p-5 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-400" />
                <h3 className="text-sm font-black text-white">Ліга {currentClass.name}</h3>
              </div>
              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Золота ліга
              </span>
            </div>

            <p className="text-[11px] text-slate-400">
              Рейтинг активності учнів на уроці за зірочками та розв'язаними номерами:
            </p>

            <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
              {sortedStudents.map((student, idx) => {
                const isActive = student.id === activeStudent?.id;
                const isTop1 = idx === 0;
                const isTop2 = idx === 1;
                const isTop3 = idx === 2;

                return (
                  <div
                    key={student.id}
                    onClick={() => onSelectActiveStudent && onSelectActiveStudent(student)}
                    className={`p-2.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-2 select-none ${
                      isActive
                        ? 'bg-green-500/20 border-green-500 text-white ring-2 ring-green-500/50'
                        : 'bg-[#182238] border-slate-700 hover:border-slate-500 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="font-black text-xs w-5 text-center shrink-0">
                        {isTop1 ? '🥇' : isTop2 ? '🥈' : isTop3 ? '🥉' : `${idx + 1}`}
                      </span>
                      <div className="min-w-0">
                        <strong className="text-xs font-bold block truncate text-white">
                          {student.name}
                        </strong>
                        <span className="text-[10px] text-slate-400 block">
                          Розв'язано: {student.solvedCount}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 shrink-0">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="text-xs font-black text-amber-300 font-mono">
                        {student.stars}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={onOpenRollCall}
              className="w-full py-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-black text-slate-200 transition-colors cursor-pointer text-center"
            >
              Відкрити повний журнал класу
            </button>
          </div>

          {/* 3. Duo Owl Math Fact */}
          <div className="p-4 bg-gradient-to-br from-indigo-950/40 to-slate-900 border-2 border-indigo-500/30 rounded-3xl space-y-2">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-black uppercase">
              <Sparkles className="w-4 h-4" />
              <span>Порада від Duo на сьогодні</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              «Пам’ятай: квадратний корінь $\sqrt{'{'}a{'}'}$ існує лише тоді, коли підкореневий вираз $a \ge 0$. А дріб не має змісту, коли його знаменник дорівнює 0!»
            </p>
          </div>

        </div>

      </div>

      {/* Duolingo Classic Level Card / Launch Choice Modal */}
      {selectedExerciseForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-[#111827] border-2 border-slate-700 w-full max-w-lg rounded-3xl p-6 shadow-2xl space-y-5 animate-in zoom-in-95 duration-200 relative">
            
            {/* Close Cross */}
            <button
              onClick={() => setSelectedExerciseForModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1.5 rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-2 pr-6">
              <span className="text-[11px] font-black uppercase tracking-wider text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20 inline-block">
                Номер {selectedExerciseForModal.id.replace('mod-', '')} • {selectedExerciseForModal.category}
              </span>
              <h3 className="text-xl font-black text-white mt-1">
                Оберіть формат розв'язання
              </h3>
              
              <div className="p-4 bg-[#182238] rounded-2xl border border-slate-700 font-mono text-base font-bold text-amber-300 shadow-inner">
                {selectedExerciseForModal.problem}
              </div>
              
              <p className="text-xs text-slate-400">
                {selectedExerciseForModal.essence}
              </p>

              <div className="flex items-center justify-center gap-3 pt-1">
                <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-lg border border-amber-500/20">
                  +{selectedExerciseForModal.xpReward} XP
                </span>
                <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-lg border border-cyan-500/20">
                  +5 💎 Діамантів
                </span>
              </div>
            </div>

            {/* Action Buttons styled as Duolingo 3D Chunky Buttons */}
            <div className="space-y-3 pt-2">
              
              {/* PRIMARY DUOLINGO BUTTON: Handwritten + AI */}
              <button
                onClick={() => {
                  sounds.playStart();
                  const ex = selectedExerciseForModal;
                  setSelectedExerciseForModal(null);
                  onOpenHandwriting(ex);
                }}
                className="w-full p-4 rounded-2xl bg-[#58cc02] hover:bg-[#46a302] border-b-6 border-green-700 text-black font-black text-base flex items-center justify-between cursor-pointer transition-all hover:scale-[1.02] shadow-xl shadow-green-500/20 select-none"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-black/15 flex items-center justify-center">
                    <PenTool className="w-6 h-6 text-black" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-black uppercase tracking-tight leading-none">
                      Писати від руки + ШІ
                    </div>
                    <div className="text-[11px] font-bold text-green-950 mt-1">
                      ШІ розпізнає почерк і вкаже на помилки
                    </div>
                  </div>
                </div>
                <span className="text-xs font-black bg-black text-white px-2.5 py-1 rounded-xl">
                  СТАРТ ⭐
                </span>
              </button>

              {/* SECONDARY DUOLINGO BUTTON: Modular Step-by-Step Constructor */}
              <button
                onClick={() => {
                  sounds.playClick();
                  const exId = selectedExerciseForModal.id;
                  setSelectedExerciseForModal(null);
                  onOpenConstructor(exId);
                }}
                className="w-full p-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 border-b-4 border-slate-950 text-white font-black text-sm flex items-center justify-between cursor-pointer transition-all select-none border border-slate-700"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-white">
                      Модульний конструктор дій
                    </div>
                    <div className="text-[10px] text-slate-400">
                      Покрокове збирання розв'язку з блоків
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

            </div>

          </div>
        </div>
      )}

      {/* Chest Celebration Modal */}
      {isChestOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-[#111827] border-2 border-amber-500/60 w-full max-w-md rounded-3xl p-6 shadow-2xl text-center space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-20 h-20 mx-auto rounded-3xl bg-amber-400 text-black flex items-center justify-center shadow-xl border-b-4 border-amber-600 animate-bounce">
              <Trophy className="w-12 h-12" />
            </div>

            <div>
              <h3 className="text-2xl font-black text-white">Скриня теми відкрита!</h3>
              <p className="text-xs text-slate-400 mt-1">
                Вітаємо! Ти успішно освоюєш програму «Алгебра 8 клас» за стандартами НУШ!
              </p>
            </div>

            <div className="flex items-center justify-center gap-4">
              <div className="px-4 py-2 bg-amber-500/20 border border-amber-500/40 rounded-2xl text-amber-300 font-black text-sm">
                +50 XP Досвіду
              </div>
              <div className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/40 rounded-2xl text-cyan-300 font-black text-sm">
                +100 💎 Діамантів
              </div>
            </div>

            <DuoOwl
              size="sm"
              mood="excited"
              speech="Ти неймовірний! Продовжуй у тому ж дусі на наступній темі!"
            />

            <button
              onClick={() => setIsChestOpen(false)}
              className="w-full py-3 rounded-2xl bg-[#58cc02] hover:bg-[#46a302] text-black font-black text-sm border-b-4 border-green-700 cursor-pointer shadow-lg shadow-green-500/20"
            >
              Забрати нагороду!
            </button>
          </div>
        </div>
      )}

      {/* Blitz Quiz Modal */}
      <BlitzQuizModal
        isOpen={isBlitzOpen}
        onClose={() => setIsBlitzOpen(false)}
        onComplete={(xp, gemsBonus) => {
          if (onReward) {
            onReward(xp, gemsBonus);
          }
        }}
      />

    </div>
  );
};
