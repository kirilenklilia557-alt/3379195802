import React, { useState } from 'react';
import { 
  Users, 
  UserCheck, 
  UserX, 
  Plus, 
  CheckCircle2, 
  X, 
  GraduationCap, 
  Star, 
  Sparkles,
  School,
  ChevronDown
} from 'lucide-react';
import { ClassGroup, Student } from '../types/duo';
import { sounds } from '../utils/soundEffects';

interface ClassRollCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  classes: ClassGroup[];
  currentClassId: string;
  onSelectClass: (classId: string) => void;
  onUpdateClasses: (updated: ClassGroup[]) => void;
  activeStudentId?: string;
  onSelectActiveStudent: (student: Student) => void;
}

export const ClassRollCallModal: React.FC<ClassRollCallModalProps> = ({
  isOpen,
  onClose,
  classes,
  currentClassId,
  onSelectClass,
  onUpdateClasses,
  activeStudentId,
  onSelectActiveStudent
}) => {
  const [showAddClass, setShowAddClass] = useState(false);
  const [newClassName, setNewClassName] = useState('');
  const [showAddStudent, setShowAddStudent] = useState(false);
  const [newStudentName, setNewStudentName] = useState('');
  const [filterMode, setFilterMode] = useState<'all' | 'present' | 'absent'>('all');

  if (!isOpen) return null;

  const currentClass = classes.find(c => c.id === currentClassId) || classes[0];

  const toggleStudentAttendance = (studentId: string) => {
    sounds.playClick();
    const updated = classes.map(c => {
      if (c.id !== currentClass.id) return c;
      const currentVal = c.attendance[studentId] ?? true;
      return {
        ...c,
        attendance: {
          ...c.attendance,
          [studentId]: !currentVal
        }
      };
    });
    onUpdateClasses(updated);
  };

  const markAllPresent = () => {
    sounds.playClick();
    const updated = classes.map(c => {
      if (c.id !== currentClass.id) return c;
      const allPresent: Record<string, boolean> = {};
      c.students.forEach(s => {
        allPresent[s.id] = true;
      });
      return { ...c, attendance: allPresent };
    });
    onUpdateClasses(updated);
  };

  const handleCreateClass = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClassName.trim()) return;

    const newId = `class-${Date.now()}`;
    const newGroup: ClassGroup = {
      id: newId,
      name: newClassName.trim(),
      academicYear: '2025/2026',
      students: [],
      attendance: {}
    };

    const updated = [...classes, newGroup];
    onUpdateClasses(updated);
    onSelectClass(newId);
    setNewClassName('');
    setShowAddClass(false);
    sounds.playLevelUp();
  };

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStudentName.trim()) return;

    const avatars = ['👦', '👧', '🧑', '👩'];
    const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];

    const newStudent: Student = {
      id: `st-${Date.now()}`,
      name: newStudentName.trim(),
      avatar: randomAvatar,
      stars: 0,
      solvedCount: 0
    };

    const updated = classes.map(c => {
      if (c.id !== currentClass.id) return c;
      return {
        ...c,
        students: [...c.students, newStudent],
        attendance: {
          ...c.attendance,
          [newStudent.id]: true
        }
      };
    });

    onUpdateClasses(updated);
    setNewStudentName('');
    setShowAddStudent(false);
    sounds.playClick();
  };

  // Calculations
  const totalStudents = currentClass.students.length;
  const presentCount = currentClass.students.filter(s => currentClass.attendance[s.id] ?? true).length;
  const absentCount = totalStudents - presentCount;
  const absentStudents = currentClass.students.filter(s => currentClass.attendance[s.id] === false);

  const displayedStudents = currentClass.students.filter(s => {
    const isPresent = currentClass.attendance[s.id] ?? true;
    if (filterMode === 'present') return isPresent;
    if (filterMode === 'absent') return !isPresent;
    return true;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-[#111827] border-2 border-slate-700 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh] animate-in fade-in duration-200">
        
        {/* Header */}
        <div className="bg-[#1a233a] p-4 sm:p-6 border-b border-slate-700/80 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-green-500/20 border border-green-500/40 flex items-center justify-center text-green-400">
              <School className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-black text-white">
                  Журнал класу та Перекличка
                </h3>
                <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                  НУШ 8 клас
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Відмічайте, хто присутній на уроці та кого немає
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-slate-200">
          
          {/* Class Switcher & Create Class */}
          <div className="bg-[#182238] rounded-2xl p-4 border border-slate-700/60 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-green-400" />
                Оберіть або створіть клас:
              </span>

              <button
                onClick={() => setShowAddClass(!showAddClass)}
                className="text-xs font-bold text-green-400 hover:text-green-300 flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                {showAddClass ? 'Скасувати' : '+ Новий клас'}
              </button>
            </div>

            {/* Class Pill Selector */}
            <div className="flex flex-wrap items-center gap-2">
              {classes.map(c => {
                const isSelected = c.id === currentClass.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => onSelectClass(c.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
                      isSelected
                        ? 'bg-green-500 text-black shadow-lg shadow-green-500/20 scale-105 border-b-4 border-green-700'
                        : 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700'
                    }`}
                  >
                    <span>{c.name}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-black/20 text-black' : 'bg-slate-900 text-slate-400'}`}>
                      {c.students.length} учнів
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Inline Add Class Form */}
            {showAddClass && (
              <form onSubmit={handleCreateClass} className="flex gap-2 pt-2 border-t border-slate-700/60">
                <input
                  type="text"
                  placeholder="Назва класу (наприклад: 8-В клас, Гурток...)"
                  value={newClassName}
                  onChange={(e) => setNewClassName(e.target.value)}
                  className="bg-slate-900 text-sm rounded-xl px-3.5 py-2 text-white border border-slate-700 focus:outline-hidden focus:border-green-400 flex-1"
                  autoFocus
                />
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-400 text-black font-extrabold text-xs px-4 py-2 rounded-xl transition-all border-b-4 border-green-700 cursor-pointer"
                >
                  Створити
                </button>
              </form>
            )}
          </div>

          {/* Roll-call Status Card: Хто є? Кого нема? */}
          <div className="bg-gradient-to-r from-slate-900 via-[#182238] to-slate-900 rounded-2xl p-4 sm:p-5 border-2 border-slate-700">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-700/80">
              <div>
                <h4 className="text-base font-extrabold text-white flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-green-400" />
                  Переклик на уроці: {currentClass.name}
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Натискайте на ім'я учня, щоб відмітити відсутність або присутність
                </p>
              </div>

              <button
                onClick={markAllPresent}
                className="text-xs font-bold bg-green-500/20 hover:bg-green-500/30 text-green-300 border border-green-500/40 px-3 py-1.5 rounded-xl transition-colors flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                Всі присутні (100%)
              </button>
            </div>

            {/* Attendance Counter */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-3 text-center">
                <span className="text-xs font-bold text-green-400 uppercase tracking-wider block">Присутні</span>
                <span className="text-2xl font-black text-green-300 mt-0.5 block">{presentCount}</span>
                <span className="text-[10px] text-green-400/80">готові до уроку</span>
              </div>

              <div className="bg-rose-500/10 border border-rose-500/30 rounded-xl p-3 text-center">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block">Кого нема (відсутні)</span>
                <span className="text-2xl font-black text-rose-300 mt-0.5 block">{absentCount}</span>
                <span className="text-[10px] text-rose-400/80">не на уроці</span>
              </div>

              <div className="col-span-2 sm:col-span-1 bg-slate-800/60 border border-slate-700 rounded-xl p-3 text-center flex flex-col justify-center">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Усього в списку</span>
                <span className="text-2xl font-black text-white mt-0.5 block">{totalStudents}</span>
                <span className="text-[10px] text-slate-400">учні 8 класу</span>
              </div>
            </div>

            {/* List of absent kids if any */}
            {absentStudents.length > 0 && (
              <div className="mt-3 p-3 bg-rose-950/40 border border-rose-800/50 rounded-xl text-xs text-rose-200">
                <span className="font-bold flex items-center gap-1.5 text-rose-300 mb-1">
                  <UserX className="w-3.5 h-3.5" />
                  Сьогодні відсутні на уроці:
                </span>
                <p className="leading-relaxed">
                  {absentStudents.map(s => s.name).join(', ')}
                </p>
              </div>
            )}
          </div>

          {/* Students List with Interactive Attendance Toggles */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setFilterMode('all')}
                  className={`text-xs font-bold px-2.5 py-1 rounded-lg cursor-pointer ${
                    filterMode === 'all' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Усі ({totalStudents})
                </button>
                <button
                  onClick={() => setFilterMode('present')}
                  className={`text-xs font-bold px-2.5 py-1 rounded-lg cursor-pointer ${
                    filterMode === 'present' ? 'bg-green-500/20 text-green-300' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Присутні ({presentCount})
                </button>
                <button
                  onClick={() => setFilterMode('absent')}
                  className={`text-xs font-bold px-2.5 py-1 rounded-lg cursor-pointer ${
                    filterMode === 'absent' ? 'bg-rose-500/20 text-rose-300' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Кого нема ({absentCount})
                </button>
              </div>

              <button
                onClick={() => setShowAddStudent(!showAddStudent)}
                className="text-xs font-bold text-green-400 hover:text-green-300 flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                {showAddStudent ? 'Скасувати' : '+ Додати учня'}
              </button>
            </div>

            {/* Add Student Form */}
            {showAddStudent && (
              <form onSubmit={handleAddStudent} className="flex gap-2 p-3 bg-slate-800/80 rounded-2xl border border-slate-700">
                <input
                  type="text"
                  placeholder="Прізвище та ім'я учня (наприклад: Шевченко Тарас)"
                  value={newStudentName}
                  onChange={(e) => setNewStudentName(e.target.value)}
                  className="bg-slate-900 text-sm rounded-xl px-3.5 py-2 text-white border border-slate-700 focus:outline-hidden focus:border-green-400 flex-1"
                  autoFocus
                />
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-400 text-black font-extrabold text-xs px-4 py-2 rounded-xl transition-all border-b-4 border-green-700 cursor-pointer"
                >
                  Додати
                </button>
              </form>
            )}

            {/* Students Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {displayedStudents.map(student => {
                const isPresent = currentClass.attendance[student.id] ?? true;
                const isActiveAtBoard = activeStudentId === student.id;

                return (
                  <div
                    key={student.id}
                    className={`p-3 rounded-2xl border transition-all flex items-center justify-between gap-2 select-none ${
                      isActiveAtBoard
                        ? 'bg-amber-500/10 border-amber-500 shadow-md ring-1 ring-amber-400/50'
                        : isPresent
                        ? 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
                        : 'bg-rose-950/20 border-rose-900/50 opacity-70'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-xl">{student.avatar}</span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm font-bold text-white truncate block">
                            {student.name}
                          </span>
                          {isActiveAtBoard && (
                            <span className="text-[10px] font-bold bg-amber-400 text-black px-1.5 py-0.2 rounded-full flex items-center gap-0.5 shrink-0">
                              <Star className="w-2.5 h-2.5 fill-black" />
                              Біля дошки
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-[11px] text-slate-400">
                          <span className="text-amber-300 font-bold flex items-center gap-0.5 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">
                            🏆 {student.score ?? 0} балів
                          </span>
                          <span>•</span>
                          <span className="text-amber-400 font-semibold flex items-center gap-0.5">
                            ⭐ {student.stars} зірок
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      {/* Active student selector */}
                      <button
                        onClick={() => {
                          sounds.playLevelUp();
                          onSelectActiveStudent(student);
                        }}
                        title="Викликати учня до дошки / для відповіді"
                        className={`p-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                          isActiveAtBoard
                            ? 'bg-amber-400 text-black font-bold'
                            : 'bg-slate-700 text-slate-300 hover:text-amber-300 hover:bg-slate-600'
                        }`}
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                      </button>

                      {/* Attendance Toggle Button */}
                      <button
                        onClick={() => toggleStudentAttendance(student.id)}
                        className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 border ${
                          isPresent
                            ? 'bg-green-500/20 text-green-300 border-green-500/40 hover:bg-green-500/30'
                            : 'bg-rose-500/20 text-rose-300 border-rose-500/40 hover:bg-rose-500/30'
                        }`}
                      >
                        {isPresent ? (
                          <>
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            <span>Присутній</span>
                          </>
                        ) : (
                          <>
                            <span className="w-2 h-2 rounded-full bg-rose-500" />
                            <span>Відсутній</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {displayedStudents.length === 0 && (
              <div className="text-center py-8 text-slate-500">
                <Users className="w-8 h-8 mx-auto mb-2 text-slate-600" />
                <p className="text-xs">У цьому списку поки немає учнів</p>
              </div>
            )}
          </div>

        </div>

        {/* Footer */}
        <div className="bg-[#1a233a] p-4 border-t border-slate-700 flex items-center justify-between">
          <div className="text-xs text-slate-400">
            {activeStudentId ? (
              <span className="text-amber-300 font-bold flex items-center gap-1">
                ⭐ Зараз відповідає: {currentClass.students.find(s => s.id === activeStudentId)?.name}
              </span>
            ) : (
              <span>Оберіть учня іконкою ✨, щоб фіксувати його відповіді</span>
            )}
          </div>

          <button
            onClick={onClose}
            className="bg-green-500 hover:bg-green-400 text-black font-extrabold text-xs px-5 py-2.5 rounded-xl transition-all border-b-4 border-green-700 active:border-b-0 active:translate-y-1 cursor-pointer shadow-lg"
          >
            Готово, до уроку!
          </button>
        </div>

      </div>
    </div>
  );
};
