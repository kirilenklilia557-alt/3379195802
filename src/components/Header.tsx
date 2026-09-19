import React from 'react';
import { 
  BookOpen, 
  Layers, 
  TrendingUp, 
  BookmarkCheck, 
  Languages, 
  Flame,
  Gem,
  Heart,
  Volume2,
  VolumeX,
  Users,
  Compass,
  GraduationCap
} from 'lucide-react';
import { ClassGroup, Student } from '../types/duo';
import { sounds } from '../utils/soundEffects';

export type ActiveTabType = 'duo-path' | 'constructor' | 'textbook' | 'graphs' | 'handbook' | 'glossary';

interface HeaderProps {
  activeTab: ActiveTabType;
  setActiveTab: (tab: ActiveTabType) => void;
  streak: number;
  gems: number;
  hearts: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
  currentClass: ClassGroup;
  onOpenRollCall: () => void;
  activeStudent?: Student;
  onReturnToStart?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  streak,
  gems,
  hearts,
  soundEnabled,
  onToggleSound,
  currentClass,
  onOpenRollCall,
  activeStudent,
  onReturnToStart
}) => {
  const presentCount = currentClass.students.filter(s => currentClass.attendance[s.id] ?? true).length;

  return (
    <header className="sticky top-0 z-40 bg-[#090d16]/95 backdrop-blur-md border-b border-slate-800 shadow-xl">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 gap-2 sm:gap-4">
          
          {/* Logo & Duo Branding */}
          <div 
            className="flex items-center gap-2.5 cursor-pointer select-none shrink-0 group" 
            onClick={() => {
              sounds.playClick();
              if (onReturnToStart) {
                onReturnToStart();
              } else {
                setActiveTab('duo-path');
              }
            }}
            title="Натисніть для повернення на Стартовий екран"
          >
            {/* Duolingo Owl Avatar / App Mark */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-emerald-500 border-b-4 border-emerald-700 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 font-black text-xl group-hover:scale-105 transition-transform">
              🦉
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="font-black text-white text-base sm:text-lg leading-tight tracking-tight">
                  Алгебра <span className="text-emerald-400">8</span>
                </h1>
                <span className="text-[10px] font-black uppercase px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Duo НУШ
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden md:block">
                Шлях уроків • Рукописний ШІ-аналіз • Конструктор
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto py-1 scrollbar-none">
            <button
              onClick={() => {
                sounds.playClick();
                setActiveTab('duo-path');
              }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-2xl text-xs font-black transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'duo-path'
                  ? 'bg-green-500 text-black border-b-4 border-green-700 shadow-lg shadow-green-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Шлях Duo</span>
            </button>

            <button
              onClick={() => {
                sounds.playClick();
                setActiveTab('constructor');
              }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-2xl text-xs font-black transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'constructor'
                  ? 'bg-amber-400 text-black border-b-4 border-amber-600 shadow-lg shadow-amber-400/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Конструктор</span>
            </button>

            <button
              onClick={() => {
                sounds.playClick();
                setActiveTab('textbook');
              }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-2xl text-xs font-black transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'textbook'
                  ? 'bg-blue-500 text-white border-b-4 border-blue-700 shadow-lg shadow-blue-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Підручник</span>
            </button>

            <button
              onClick={() => {
                sounds.playClick();
                setActiveTab('graphs');
              }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-2xl text-xs font-black transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'graphs'
                  ? 'bg-purple-500 text-white border-b-4 border-purple-700 shadow-lg'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span className="hidden md:inline">Графіки</span>
            </button>

            <button
              onClick={() => {
                sounds.playClick();
                setActiveTab('handbook');
              }}
              className={`flex items-center gap-1.5 px-2.5 py-2 rounded-2xl text-xs font-black transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'handbook'
                  ? 'bg-orange-500 text-white border-b-4 border-orange-700 shadow-lg'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <BookmarkCheck className="w-4 h-4" />
              <span className="hidden lg:inline">Таблиця квадратів</span>
            </button>

            <button
              onClick={() => {
                sounds.playClick();
                setActiveTab('glossary');
              }}
              className={`flex items-center gap-1.5 px-2.5 py-2 rounded-2xl text-xs font-black transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'glossary'
                  ? 'bg-teal-500 text-white border-b-4 border-teal-700 shadow-lg'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <Languages className="w-4 h-4" />
              <span className="hidden lg:inline">Словничок</span>
            </button>
          </nav>

          {/* Right Section: Duolingo Gamification Stats & Class Roll-Call */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            
            {/* Class & Roll-Call Pill */}
            <button
              onClick={() => {
                sounds.playClick();
                onOpenRollCall();
              }}
              className="bg-[#182238] hover:bg-[#202c48] border border-slate-700 text-xs font-bold px-2.5 sm:px-3 py-1.5 rounded-2xl transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Перекличка класу: хто є, кого нема"
            >
              <Users className="w-3.5 h-3.5 text-green-400" />
              <span className="text-white hidden sm:inline">{currentClass.name}:</span>
              <span className="text-green-400 font-extrabold">{presentCount} учнів</span>
            </button>

            {/* Streak Counter */}
            <div className="flex items-center gap-1 px-2.5 py-1.5 bg-[#182238] rounded-2xl border border-slate-700 text-amber-400 text-xs font-black" title="Серія днів">
              <Flame className="w-4 h-4 fill-amber-400 text-amber-500 animate-pulse" />
              <span>{streak}</span>
            </div>

            {/* Gems */}
            <div className="flex items-center gap-1 px-2.5 py-1.5 bg-[#182238] rounded-2xl border border-slate-700 text-cyan-400 text-xs font-black" title="Діаманти">
              <Gem className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />
              <span>{gems}</span>
            </div>

            {/* Hearts */}
            <div className="flex items-center gap-1 px-2.5 py-1.5 bg-[#182238] rounded-2xl border border-slate-700 text-rose-400 text-xs font-black" title="Життя">
              <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
              <span>{hearts}</span>
            </div>

            {/* Sound Toggle */}
            <button
              onClick={onToggleSound}
              className="p-2 rounded-2xl bg-[#182238] hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700 transition-colors cursor-pointer"
              title={soundEnabled ? 'Вимкнути звук' : 'Увімкнути звук'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-green-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
            </button>

          </div>

        </div>
      </div>
    </header>
  );
};
