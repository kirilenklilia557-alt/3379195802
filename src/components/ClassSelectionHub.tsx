import React, { useState } from 'react';
import { 
  Plus, 
  Check, 
  X, 
  Dice5, 
  Sparkles, 
  Users, 
  ArrowRight, 
  RotateCcw,
  Edit3,
  Award,
  BookOpen,
  Target,
  Trophy
} from 'lucide-react';
import { ClassGroup, Student } from '../types/duo';
import { FloatingFormulas } from './FloatingFormulas';
import { sounds } from '../utils/soundEffects';
import { INITIAL_8A_STUDENTS } from '../data/mockClasses';

interface ClassSelectionHubProps {
  classes: ClassGroup[];
  currentClassId: string;
  onSelectClass: (id: string) => void;
  onUpdateClasses: (classes: ClassGroup[]) => void;
  onProceedToLesson: () => void;
  onBackToStart: () => void;
}

export const ClassSelectionHub: React.FC<ClassSelectionHubProps> = ({
  classes,
  currentClassId,
  onSelectClass,
  onUpdateClasses,
  onProceedToLesson,
  onBackToStart
}) => {
  // Current active class (defaults to 8-A with 16 students)
  const currentClass = classes.find(c => c.id === currentClassId) || classes[0] || {
    id: 'class-8a',
    name: '8-А клас',
    academicYear: '2025/2026',
    students: INITIAL_8A_STUDENTS,
    attendance: Object.fromEntries(INITIAL_8A_STUDENTS.map(s => [s.id, true]))
  };

  // Center modal for Students 3D Verification Journal
  const [isJournalCenterModalOpen, setIsJournalCenterModalOpen] = useState<boolean>(false);

  // Center modal for inputting/editing students
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [modalMode, setModalMode] = useState<'create-class' | 'edit-students'>('create-class');

  // Inline editing of a student's name directly in the 3D verification list
  const [inlineEditingStudentId, setInlineEditingStudentId] = useState<string | null>(null);
  const [inlineEditingName, setInlineEditingName] = useState<string>('');

  // Form states
  const [classLetter, setClassLetter] = useState<string>('Б');
  const [studentCountInput, setStudentCountInput] = useState<number>(16);
  const [studentNamesText, setStudentNamesText] = useState<string>('');
  const [initialSolvedTasks, setInitialSolvedTasks] = useState<number>(0);

  // Random student caller state ("викликати до дошки")
  const [isRandomizing, setIsRandomizing] = useState<boolean>(false);
  const [calledStudent, setCalledStudent] = useState<Student | null>(null);

  // When clicking on a class box in the center (e.g. 8-A):
  const handleClassBoxClick = (classId: string) => {
    sounds.playClick();
    onSelectClass(classId);
    // User: "це після натисканія кнопки вибір задач а дотого 3де виріфікація дітеї вибір і можна редагувать дітеї 16 штук в 8а"
    setIsJournalCenterModalOpen(true);
  };

  // Inline student name editing directly on the 3D card
  const handleStartInlineEdit = (student: Student, e: React.MouseEvent) => {
    e.stopPropagation();
    sounds.playClick();
    setInlineEditingStudentId(student.id);
    setInlineEditingName(student.name);
  };

  const handleSaveInlineEdit = (studentId: string, e?: React.MouseEvent | React.FormEvent) => {
    if (e) {
      e.stopPropagation();
      if ('preventDefault' in e) e.preventDefault();
    }
    const trimmed = inlineEditingName.trim();
    if (!trimmed) {
      setInlineEditingStudentId(null);
      return;
    }
    sounds.playLevelUp();
    const updatedStudents = currentClass.students.map(s => 
      s.id === studentId ? { ...s, name: trimmed } : s
    );
    const updatedClasses = classes.map(c => 
      c.id === currentClass.id ? { ...c, students: updatedStudents } : c
    );
    onUpdateClasses(updatedClasses);
    setInlineEditingStudentId(null);
  };

  const handleCancelInlineEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    setInlineEditingStudentId(null);
  };

  const handleOpenJournalModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    sounds.playClick();
    setIsJournalCenterModalOpen(true);
  };

  // Toggle student presence ("галочка: є дитина / нема")
  const toggleAttendance = (studentId: string) => {
    sounds.playClick();
    const currentStatus = currentClass.attendance[studentId] ?? true;
    const updatedAttendance = {
      ...currentClass.attendance,
      [studentId]: !currentStatus
    };

    const updatedClasses = classes.map(c => 
      c.id === currentClass.id 
        ? { ...c, attendance: updatedAttendance } 
        : c
    );

    onUpdateClasses(updatedClasses);
  };

  // Random board call with weighted selection:
  // USER REQUIREMENT: "і зроби щоп віталії кириленко випадав у 2 раза рітше"
  const handleCallRandomStudent = () => {
    const presentStudents = currentClass.students.filter(
      s => (currentClass.attendance[s.id] ?? true) === true
    );

    if (presentStudents.length === 0) {
      sounds.playWrong();
      return;
    }

    sounds.playStart();
    setIsRandomizing(true);
    setCalledStudent(null);

    // Weighted selection: regular student = 1.0, Vitaliy Kyrylenko = 0.5 (2x less often)
    const getStudentWeight = (s: Student) => {
      const lower = s.name.toLowerCase();
      if (lower.includes('кириленко') || lower.includes('віталій')) {
        return 0.5; // у 2 рази рідше
      }
      return 1.0;
    };

    const weightedList = presentStudents.map(s => ({ student: s, weight: getStudentWeight(s) }));
    const totalWeight = weightedList.reduce((acc, curr) => acc + curr.weight, 0);

    let finalChosen = weightedList[0].student;
    let randWeight = Math.random() * totalWeight;
    for (const item of weightedList) {
      if (randWeight < item.weight) {
        finalChosen = item.student;
        break;
      }
      randWeight -= item.weight;
    }

    let counter = 0;
    const interval = setInterval(() => {
      counter++;
      const rand = presentStudents[Math.floor(Math.random() * presentStudents.length)];
      setCalledStudent(rand);

      if (counter > 14) {
        clearInterval(interval);
        setCalledStudent(finalChosen);
        setIsRandomizing(false);
        sounds.playLevelUp();
      }
    }, 100);
  };

  // Open modal to add a new 8th grade class with only letter ("добавить 8 клас і лише букву")
  const handleOpenAddClassModal = () => {
    sounds.playClick();
    setModalMode('create-class');
    setClassLetter('');
    setStudentCountInput(16);
    setStudentNamesText('');
    setInitialSolvedTasks(0);
    setIsEditModalOpen(true);
  };

  // Open modal to edit students for current class
  const handleOpenEditStudentsModal = () => {
    sounds.playClick();
    setModalMode('edit-students');
    setStudentCountInput(currentClass.students.length || 16);
    setStudentNamesText(currentClass.students.map(s => s.name).join('\n'));
    setInitialSolvedTasks(0);
    setIsEditModalOpen(true);
  };

  // Save new class or students
  const handleSaveModal = (e: React.FormEvent) => {
    e.preventDefault();
    sounds.playLevelUp();

    const rawLines = studentNamesText
      .split('\n')
      .map(l => l.trim())
      .filter(l => l.length > 0);

    const generatedStudents: Student[] = [];
    const countToUse = Math.max(rawLines.length, studentCountInput || 1);

    for (let i = 0; i < countToUse; i++) {
      const name = rawLines[i] || `Учень №${i + 1}`;
      generatedStudents.push({
        id: `st-${Date.now()}-${i}`,
        name,
        avatar: ['👦', '👧', '🧑', '👩'][i % 4],
        stars: initialSolvedTasks, // Solved tasks count (шт.)
        solvedCount: initialSolvedTasks
      });
    }

    const defaultAttendance: Record<string, boolean> = {};
    generatedStudents.forEach(s => {
      defaultAttendance[s.id] = true;
    });

    if (modalMode === 'create-class') {
      const cleanLetter = classLetter.trim().toUpperCase() || 'Б';
      const newClassId = `class-8${cleanLetter.toLowerCase()}-${Date.now()}`;
      const newClass: ClassGroup = {
        id: newClassId,
        name: `8-${cleanLetter} клас`,
        academicYear: '2025/2026',
        students: generatedStudents,
        attendance: defaultAttendance
      };

      const updated = [...classes, newClass];
      onUpdateClasses(updated);
      onSelectClass(newClassId);
    } else {
      const updatedClasses = classes.map(c => 
        c.id === currentClass.id
          ? { ...c, students: generatedStudents, attendance: defaultAttendance }
          : c
      );
      onUpdateClasses(updatedClasses);
    }

    setIsEditModalOpen(false);
    setIsJournalCenterModalOpen(true);
  };

  const presentCount = currentClass.students.filter(s => currentClass.attendance[s.id] ?? true).length;

  return (
    <div className="min-h-screen w-full bg-black text-white relative flex flex-col justify-between overflow-x-hidden select-none">
      
      {/* Background Floating 8th Grade Math Formulas */}
      <FloatingFormulas />

      {/* Top Navigation Bar */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between border-b border-slate-800 bg-slate-900/90 backdrop-blur-md">
        <button
          onClick={onBackToStart}
          className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 hover:text-white hover:bg-slate-750 transition-colors text-xs font-bold cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span className="hidden sm:inline">До кнопки СТАРТ</span>
          <span className="sm:hidden">Старт</span>
        </button>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Header Status with "Перший семестр" and "1 шт = 1 завдання" */}
          <button
            onClick={() => handleClassBoxClick(currentClass.id)}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-200 text-xs font-mono font-bold hover:bg-slate-750 transition-colors cursor-pointer"
          >
            <Users className="w-4 h-4 text-blue-400" />
            <span>{currentClass.name}</span>
            <span className="text-slate-500">•</span>
            <span className="px-1.5 py-0.5 rounded bg-slate-700 text-[10px] uppercase text-slate-200">
              І семестр
            </span>
            <span className="text-slate-500">•</span>
            <span>{currentClass.students.length > 0 ? `${presentCount}/${currentClass.students.length} є` : 'Учні не додані'}</span>
          </button>

          <button
            onClick={onProceedToLesson}
            className="flex items-center gap-2 px-4 sm:px-5 py-2 rounded-2xl bg-blue-600 hover:bg-blue-500 border-b-4 border-blue-800 text-white font-black text-xs sm:text-sm uppercase tracking-wide shadow-lg shadow-blue-950/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <span>ВИБІР ЗАДАЧ</span>
            <ArrowRight className="w-4 h-4 text-white stroke-[3]" />
          </button>
        </div>
      </header>

      {/* CENTER VIEWPORT: THE 3 PROMINENT RECTANGLES */}
      <main className="relative z-10 flex-1 w-full max-w-6xl mx-auto px-4 py-6 flex flex-col items-center justify-center my-auto space-y-8">
        
        {/* Title / Rule Banner */}
        <div className="text-center space-y-2.5">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-wider shadow-md">
            <span className="bg-blue-600 text-white px-2 py-0.5 rounded-md font-bold text-[10px]">
              І СЕМЕСТР
            </span>
            <span className="text-white font-mono">1 шт. = одне завдання</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300 font-mono">10 000 шт. = +1 бал до контрольної</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white font-mono">
            Оберіть клас або додайте новий
          </h2>
        </div>

        {/* 3 RECTANGLES IN A ROW */}
        <div className="w-full max-w-4xl grid grid-cols-3 gap-3 sm:gap-6 items-center justify-center">
          
          {/* 1. LEFT RECTANGLE: PLUS ("+") */}
          <div 
            onClick={handleOpenAddClassModal}
            className="aspect-[4/5] sm:aspect-square max-h-[300px] rounded-2xl sm:rounded-3xl bg-slate-800 hover:bg-slate-750 border-4 sm:border-[6px] border-slate-700 hover:border-slate-600 flex flex-col items-center justify-center text-center shadow-xl shadow-black/40 transition-all duration-200 transform hover:scale-[1.03] active:scale-[0.97] cursor-pointer group select-none p-3"
            title="Додати 8 клас"
          >
            <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-2xl bg-slate-900 border-2 border-slate-600 flex items-center justify-center text-slate-300 mb-2 group-hover:rotate-90 transition-transform duration-300">
              <Plus className="w-8 h-8 sm:w-12 sm:h-12 stroke-[3]" />
            </div>
            <span className="text-[11px] sm:text-sm font-bold uppercase tracking-wider text-slate-200 text-center">
              + Додати 8 клас
            </span>
            <span className="text-[9px] sm:text-xs text-slate-400 hidden sm:block mt-1">
              (лише буква)
            </span>
          </div>

          {/* 2. CENTER RECTANGLE: "8-А" */}
          <div 
            onClick={() => handleClassBoxClick(currentClass.id)}
            className="aspect-[4/5] sm:aspect-square max-h-[320px] rounded-2xl sm:rounded-3xl bg-slate-800/95 hover:bg-slate-800 border-4 sm:border-[6px] border-blue-600 flex flex-col items-center justify-between text-center shadow-2xl shadow-black/50 transition-all duration-200 transform hover:scale-[1.04] active:scale-[0.97] cursor-pointer group select-none p-4 sm:p-6 relative overflow-hidden ring-2 ring-blue-500/20"
            title="Натисніть для 3D верифікації учнів 8-А"
          >
            {/* Top Indicator */}
            <div className="w-full flex items-center justify-between text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-300">
              <span className="bg-slate-900 text-slate-200 px-2 py-0.5 rounded border border-slate-700">
                І семестр
              </span>
              <span className="bg-blue-600 text-white px-2 py-0.5 rounded-full text-[9px] font-bold">
                {currentClass.students.length} учнів
              </span>
            </div>

            {/* BIG BOLD "8-А" IN CENTER */}
            <div className="my-auto py-2">
              <h3 className="text-4xl sm:text-7xl font-black text-white font-mono tracking-tight drop-shadow-md group-hover:text-blue-200 transition-colors">
                {currentClass.name.replace(' клас', '')}
              </h3>
              
              {/* Task bonus badge */}
              <div className="mt-2.5 px-3 py-1 rounded-xl bg-slate-900 border border-slate-700 inline-flex flex-col items-center">
                <span className="text-[10px] sm:text-xs text-slate-200 font-bold font-mono">
                  1 шт. = одне завдання
                </span>
                <span className="text-[9px] sm:text-[10px] text-slate-400 font-medium font-mono">
                  10 000 шт. = +1 бал
                </span>
              </div>
            </div>

            {/* Bottom prompt */}
            <div className="w-full pt-2 border-t border-slate-700 flex items-center justify-between gap-1.5 text-[10px] sm:text-xs">
              <span className="text-slate-300 font-bold flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-blue-400" />
                <span>3D Верифікація учнів ➔</span>
              </span>
              <button
                type="button"
                onClick={handleOpenJournalModal}
                className="px-2 py-0.5 rounded-lg bg-slate-900 hover:bg-slate-750 border border-slate-700 text-[10px] font-bold text-slate-200 flex items-center gap-1 transition-colors cursor-pointer"
                title="Відкрити журнал учнів"
              >
                <span>{currentClass.students.length} учнів</span>
              </button>
            </div>
          </div>

          {/* 3. RIGHT RECTANGLE: PLUS ("+") */}
          <div 
            onClick={handleOpenAddClassModal}
            className="aspect-[4/5] sm:aspect-square max-h-[300px] rounded-2xl sm:rounded-3xl bg-slate-800 hover:bg-slate-750 border-4 sm:border-[6px] border-slate-700 hover:border-slate-600 flex flex-col items-center justify-center text-center shadow-xl shadow-black/40 transition-all duration-200 transform hover:scale-[1.03] active:scale-[0.97] cursor-pointer group select-none p-3"
            title="Додати 8 клас"
          >
            <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-2xl bg-slate-900 border-2 border-slate-600 flex items-center justify-center text-slate-300 mb-2 group-hover:rotate-90 transition-transform duration-300">
              <Plus className="w-8 h-8 sm:w-12 sm:h-12 stroke-[3]" />
            </div>
            <span className="text-[11px] sm:text-sm font-bold uppercase tracking-wider text-slate-200 text-center">
              + Додати 8 клас
            </span>
            <span className="text-[9px] sm:text-xs text-slate-400 hidden sm:block mt-1">
              (лише буква)
            </span>
          </div>

        </div>

        {/* Existing Classes Switcher Pills */}
        {classes.length > 1 && (
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <span className="text-xs text-slate-400 font-bold">Створені класи:</span>
            {classes.map(c => (
              <button
                key={c.id}
                onClick={() => handleClassBoxClick(c.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase font-mono tracking-wider transition-all cursor-pointer ${
                  c.id === currentClass.id
                    ? 'bg-blue-600 text-white border-2 border-white shadow-lg'
                    : 'bg-slate-800 text-slate-300 border border-slate-700 hover:border-slate-500'
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        )}

        {/* BOTTOM CARD: Calming eye-relaxing colors without neon green */}
        <div className="w-full max-w-xl p-4 sm:p-5 rounded-3xl bg-slate-900 border-2 border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl shadow-black/40">
          
          <div className="flex items-center gap-3.5 w-full sm:w-auto">
            {/* Academic badge replacing the coin */}
            <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-600 flex flex-col items-center justify-center shrink-0 shadow-md">
              <Trophy className="w-5 h-5 text-amber-400" />
              <span className="text-[9px] font-mono font-bold text-slate-200">
                1 шт
              </span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px] font-bold uppercase tracking-wider text-slate-300">
                  Перший семестр
                </span>
                <strong className="text-xs sm:text-sm font-bold text-white block">
                  Урок для {currentClass.name}
                </strong>
              </div>

              {/* Relaxing, calm typography */}
              <div className="text-[11px] text-slate-300 space-y-0.5 font-mono">
                <div className="text-slate-200 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>1 штука = одне завдання</span>
                </div>
                <div className="text-slate-400 font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                  <span>10 000 шт. = +1 бал до контрольної</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setIsJournalCenterModalOpen(true)}
              className="px-4 py-3 rounded-2xl bg-slate-800 hover:bg-slate-750 border border-slate-600 text-slate-200 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
            >
              <Users className="w-4 h-4 text-blue-400" />
              <span>3D Верифікація ({currentClass.students.length})</span>
            </button>
            <button
              onClick={onProceedToLesson}
              className="flex-1 sm:flex-initial px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 border-b-4 border-blue-800 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-blue-950/40 hover:scale-105 active:scale-95 transition-all cursor-pointer shrink-0 flex items-center justify-center gap-2"
            >
              <span>ВИБІР ЗАДАЧ 🚀</span>
            </button>
          </div>
        </div>

      </main>

      {/* 1. CENTER MODAL: 3D VERIFICATION OF CHILDREN */}
      {isJournalCenterModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div className="w-full max-w-lg bg-slate-900 border-2 border-slate-700 rounded-3xl p-5 sm:p-7 shadow-2xl relative text-white space-y-4 max-h-[90vh] flex flex-col">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 block">
                    3D Верифікація учнів
                  </span>
                  <span className="px-1.5 py-0.2 rounded bg-slate-800 border border-slate-700 text-[9px] font-bold text-slate-300 uppercase">
                    Перший семестр
                  </span>
                </div>
                <h3 className="text-xl font-black text-white font-mono flex items-center gap-2 mt-0.5">
                  <span>{currentClass.name}</span>
                  <span className="text-xs text-slate-300 font-normal">
                    ({presentCount} з {currentClass.students.length} присутні)
                  </span>
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleOpenEditStudentsModal}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-200 hover:text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Редагувати список 16 учнів"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Редагувати учнів</span>
                </button>

                <button
                  onClick={() => setIsJournalCenterModalOpen(false)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Rule Reminder Pill in Journal */}
            <div className="px-3.5 py-2 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center justify-between text-xs font-mono">
              <span className="text-blue-300 font-bold">1 шт. = 1 завдання</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300 font-bold">10 000 шт. = +1 бал (І семестр)</span>
            </div>

            {/* Random Call Button ("ВИКЛИКАТИ ДО ДОШКИ 🎲") */}
            <button
              id="call-to-board-button"
              onClick={handleCallRandomStudent}
              disabled={isRandomizing}
              className="w-full py-3.5 px-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-black text-sm uppercase tracking-wider flex items-center justify-center gap-3 shadow-lg shadow-blue-950/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer border-b-4 border-blue-800"
            >
              <Dice5 className="w-5 h-5 text-white" />
              <span>ВИКЛИКАТИ ДО ДОШКИ 🎲</span>
            </button>

            {/* Winner Call Announcement */}
            {calledStudent && (
              <div className="p-3.5 rounded-2xl bg-slate-800 border-2 border-blue-500/80 shadow-xl flex items-center gap-3 animate-bounce">
                <div className="text-2xl">{calledStudent.avatar}</div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-300 block">
                    До дошки викликано:
                  </span>
                  <strong className="text-sm font-black text-white font-mono block truncate">
                    {calledStudent.name}
                  </strong>
                </div>
                <div className="px-2 py-1 rounded-lg bg-slate-900 border border-slate-700 text-[11px] font-mono font-bold text-slate-200 text-right">
                  <span>+1 шт.</span>
                </div>
              </div>
            )}

            {/* Scrollable Students List */}
            <div className="flex-1 overflow-y-auto space-y-2.5 pr-1 max-h-[50vh]">
              {currentClass.students.length === 0 ? (
                <div className="p-8 rounded-2xl bg-slate-850 border border-dashed border-slate-700 text-center space-y-3">
                  <Users className="w-8 h-8 text-slate-500 mx-auto" />
                  <p className="text-sm text-slate-300 font-bold">
                    У класі {currentClass.name} ще немає введених учнів!
                  </p>
                  <p className="text-xs text-slate-400">
                    Введіть імена дітей та кількість у вікні налаштування.
                  </p>
                  <button
                    onClick={handleOpenEditStudentsModal}
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase"
                  >
                    + Ввести імена та кількість дітей
                  </button>
                </div>
              ) : (
                currentClass.students.map((student, idx) => {
                  const isPresent = currentClass.attendance[student.id] ?? true;
                  const isInlineEditing = inlineEditingStudentId === student.id;

                  return (
                    <div
                      key={student.id}
                      onClick={() => {
                        if (!isInlineEditing) {
                          toggleAttendance(student.id);
                        }
                      }}
                      className={`w-full px-4 py-3 rounded-2xl border border-slate-700 shadow-md flex items-center justify-between gap-3 cursor-pointer transition-all duration-150 transform hover:scale-[1.01] active:scale-[0.99] select-none ${
                        isPresent 
                          ? 'bg-[#b91c1c]' // Soft crimson
                          : 'bg-[#450a0a] opacity-60'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0 flex-1">
                        <span className="text-xs font-black text-white/80 font-mono w-5 shrink-0">
                          {idx + 1}.
                        </span>
                        <span className="text-base shrink-0">{student.avatar}</span>
                        
                        {isInlineEditing ? (
                          <div 
                            onClick={(e) => e.stopPropagation()} 
                            className="flex items-center gap-1.5 min-w-0 flex-1"
                          >
                            <input
                              type="text"
                              value={inlineEditingName}
                              onChange={(e) => setInlineEditingName(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') handleSaveInlineEdit(student.id, e);
                                if (e.key === 'Escape') setInlineEditingStudentId(null);
                              }}
                              className="bg-black/90 border border-blue-400 rounded-lg px-2.5 py-1 text-xs text-white font-bold w-full focus:outline-none"
                              autoFocus
                            />
                            <button
                              type="button"
                              onClick={(e) => handleSaveInlineEdit(student.id, e)}
                              className="p-1 rounded bg-blue-600 hover:bg-blue-500 text-white cursor-pointer shrink-0"
                              title="Зберегти"
                            >
                              <Check className="w-3.5 h-3.5 stroke-[3]" />
                            </button>
                            <button
                              type="button"
                              onClick={handleCancelInlineEdit}
                              className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer shrink-0"
                              title="Скасувати"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1.5 min-w-0 flex-1">
                            <span className="text-sm font-black text-white block truncate tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                              {student.name}
                            </span>
                            <button
                              type="button"
                              onClick={(e) => handleStartInlineEdit(student, e)}
                              className="p-1 rounded-md bg-black/40 hover:bg-black/70 text-white/80 hover:text-white transition-colors shrink-0"
                              title="Редагувати ім'я учня"
                            >
                              <Edit3 className="w-3 h-3" />
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Attendance Toggle: "Галочка є дитина / нема" */}
                      <div className="flex items-center gap-2 shrink-0">
                        <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-md border ${
                          isPresent 
                            ? 'bg-black/40 text-white border-white/30' 
                            : 'bg-black/60 text-slate-400 border-slate-700'
                        }`}>
                          {isPresent ? 'Є' : 'Нема'}
                        </span>

                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center border transition-colors ${
                          isPresent 
                            ? 'bg-white text-slate-900 border-white font-bold' 
                            : 'bg-slate-800 border-slate-600 text-slate-500'
                        }`}>
                          {isPresent ? <Check className="w-4 h-4 stroke-[3]" /> : <X className="w-4 h-4" />}
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Modal Bottom Buttons */}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
              <button
                onClick={() => setIsJournalCenterModalOpen(false)}
                className="flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-300 font-bold text-xs cursor-pointer transition-colors"
              >
                ← Назад до класів
              </button>
              <button
                onClick={onProceedToLesson}
                className="flex-1 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-xs sm:text-sm uppercase tracking-wider cursor-pointer shadow-lg shadow-blue-950/40 flex items-center justify-center gap-1.5 border-b-4 border-blue-800 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>ВИБІР ЗАДАЧ 🚀</span>
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 2. CENTER MODAL: INPUT / EDIT STUDENTS */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-xl bg-slate-900 border-2 border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl relative text-white space-y-6 max-h-[92vh] overflow-y-auto">
            
            <button
              onClick={() => setIsEditModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-750 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block">
                  {modalMode === 'create-class' ? 'Створення нового 8 класу' : 'Введення списку учнів (Перший семестр)'}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white font-mono">
                  {modalMode === 'create-class' ? 'Додати 8 клас' : `Учні для ${currentClass.name}`}
                </h3>
              </div>
            </div>

            {/* Rule explanation card */}
            <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 text-xs font-mono space-y-1">
              <div className="flex items-center gap-2 text-blue-300 font-bold">
                <Award className="w-4 h-4 text-blue-400" />
                <span>Правило оцінювання (Перший семестр):</span>
              </div>
              <p className="text-slate-300 pl-6">
                <strong>1 штука</strong> = одне розв'язане завдання.
              </p>
              <p className="text-slate-200 font-bold pl-6">
                <strong>10 000 шт.</strong> = +1 бал до семестрової контрольної роботи.
              </p>
            </div>

            <form onSubmit={handleSaveModal} className="space-y-5">
              
              {/* If creating new class: only ask for the letter ("добавить 8 клас і лише букву") */}
              {modalMode === 'create-class' && (
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                    Літера 8-го класу:
                  </label>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold font-mono text-blue-400 px-4 py-3 bg-slate-800 border border-slate-700 rounded-2xl">
                      8 -
                    </span>
                    <input
                      type="text"
                      maxLength={2}
                      value={classLetter}
                      onChange={(e) => setClassLetter(e.target.value.toUpperCase())}
                      placeholder="Б"
                      className="flex-1 bg-slate-800 border border-slate-700 rounded-2xl px-5 py-3 text-2xl font-bold font-mono text-white focus:outline-none focus:border-blue-400 tracking-wider text-center"
                      required
                    />
                  </div>
                  <span className="text-[11px] text-slate-400 block">
                    Введіть лише літеру класу (наприклад: Б, В, Г...)
                  </span>
                </div>
              )}

              {/* Number of Students input ("кількість") */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                  Кількість дітей у класі:
                </label>
                <input
                  type="number"
                  min={1}
                  max={45}
                  value={studentCountInput}
                  onChange={(e) => setStudentCountInput(parseInt(e.target.value, 10) || 1)}
                  className="w-full bg-slate-800 border border-slate-700 focus:border-blue-400 rounded-2xl px-4 py-3 text-base font-bold font-mono text-white focus:outline-none"
                  required
                />
              </div>

              {/* Student Names Textarea ("імя прізвище дітеї") */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                    Ім'я та прізвище дітей (кожне з нового рядка):
                  </label>
                </div>
                <textarea
                  rows={6}
                  value={studentNamesText}
                  onChange={(e) => setStudentNamesText(e.target.value)}
                  placeholder="Введіть імена дітей:&#10;Іваненко Софія&#10;Коваленко Денис&#10;Шевченко Олена&#10;Бондаренко Марія..."
                  className="w-full bg-slate-800 border border-slate-700 focus:border-blue-400 rounded-2xl p-4 text-sm font-mono text-white focus:outline-none leading-relaxed placeholder:text-slate-500"
                />
                <span className="text-[11px] text-slate-400 block">
                  Якщо поле порожнє, учнів буде пронумеровано автоматично (Учень №1, Учень №2...).
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 border-b-4 border-blue-800 text-white font-black text-base uppercase tracking-wider shadow-xl shadow-blue-950/40 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <Check className="w-5 h-5 stroke-[3]" />
                <span>Зберегти та запам'ятати учнів</span>
              </button>

            </form>
          </div>
        </div>
      )}

    </div>
  );
};
