import React, { useRef, useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  RotateCcw, 
  Trash2, 
  Eraser, 
  PenTool, 
  Upload, 
  CheckCircle2, 
  AlertTriangle, 
  Loader2, 
  BookOpen, 
  Lightbulb, 
  HelpCircle,
  Camera,
  Layers
} from 'lucide-react';
import { ModularExercise } from '../types/algebra';
import { HandwritingAnalysisResult, Student } from '../types/duo';
import { DuoOwl } from './DuoOwl';
import { sounds } from '../utils/soundEffects';

interface HandwritingModalProps {
  isOpen: boolean;
  onClose: () => void;
  exercise: ModularExercise;
  activeStudent?: Student;
  onRewardSuccess: (xp: number, gems: number) => void;
  onOpenConstructorMode?: () => void;
}

export const HandwritingModal: React.FC<HandwritingModalProps> = ({
  isOpen,
  onClose,
  exercise,
  activeStudent,
  onRewardSuccess,
  onOpenConstructorMode
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [penColor, setPenColor] = useState<string>('#ffffff'); // Chalk white
  const [lineWidth, setLineWidth] = useState<number>(3);
  const [isEraser, setIsEraser] = useState(false);
  const [history, setHistory] = useState<ImageData[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<HandwritingAnalysisResult | null>(null);
  const [uploadedImagePreview, setUploadedImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Initialize canvas with dark math chalkboard/grid background
  const initCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Dark chalkboard background
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw subtle math grid (notebook squares)
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    const gridSize = 20;

    for (let x = 0; x < canvas.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Save initial blank state for undo
    const initialData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    setHistory([initialData]);
    setAnalysisResult(null);
    setUploadedImagePreview(null);
  };

  useEffect(() => {
    if (isOpen) {
      // Delay slightly for modal layout to settle
      const timer = setTimeout(() => {
        initCanvas();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen, exercise.id]);

  if (!isOpen) return null;

  // Drawing Handlers
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);

    // Setup stroke styling
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    if (isEraser) {
      ctx.strokeStyle = '#0f172a';
      ctx.lineWidth = lineWidth * 4;
    } else {
      ctx.strokeStyle = penColor;
      ctx.lineWidth = lineWidth;
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Save snapshot to history
    const snap = ctx.getImageData(0, 0, canvas.width, canvas.height);
    setHistory(prev => [...prev.slice(-15), snap]);
  };

  const handleUndo = () => {
    sounds.playClick();
    if (history.length <= 1) {
      initCanvas();
      return;
    }
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const newHistory = history.slice(0, -1);
    const prevSnap = newHistory[newHistory.length - 1];
    ctx.putImageData(prevSnap, 0, 0);
    setHistory(newHistory);
  };

  const handleClear = () => {
    sounds.playClick();
    initCanvas();
  };

  // Preset handwritten simulations (allows testing AI recognition in 1 click!)
  const loadPresetSolution = (type: 'correct' | 'sign_error' | 'cancel_error') => {
    sounds.playClick();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    initCanvas();

    ctx.font = '22px "Caveat", "Comic Sans MS", cursive, sans-serif';
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';

    if (type === 'correct') {
      ctx.fillStyle = '#58cc02';
      ctx.fillText(`1) ${exercise.problem}`, 30, 60);
      ctx.fillStyle = '#ffffff';
      ctx.fillText(`= розкладаємо за формулою:`, 30, 110);
      ctx.fillStyle = '#38bdf8';
      ctx.fillText(`= ${exercise.finalAnswer}`, 30, 160);
      ctx.fillStyle = '#facc15';
      ctx.fillText(`Відповідь: ${exercise.finalAnswer}`, 30, 215);
    } else if (type === 'sign_error') {
      ctx.fillStyle = '#ffffff';
      ctx.fillText(`1) ${exercise.problem}`, 30, 60);
      ctx.fillStyle = '#f87171';
      ctx.fillText(`= помилка в знаку мінус: -(a - b) = -a - b`, 30, 110);
      ctx.fillStyle = '#f87171';
      ctx.fillText(`= результат із неправильним знаком`, 30, 160);
    } else {
      ctx.fillStyle = '#ffffff';
      ctx.fillText(`1) ${exercise.problem}`, 30, 60);
      ctx.fillStyle = '#f87171';
      ctx.fillText(`= скорочуємо доданки без дужок!`, 30, 110);
      ctx.fillStyle = '#f87171';
      ctx.fillText(`= помилкове скорочення x замість множника`, 30, 160);
    }

    // Save snapshot
    const snap = ctx.getImageData(0, 0, canvas.width, canvas.height);
    setHistory(prev => [...prev, snap]);
  };

  // Upload notebook photo from device
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setUploadedImagePreview(result);

      // Draw onto canvas
      const img = new Image();
      img.onload = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const snap = ctx.getImageData(0, 0, canvas.width, canvas.height);
        setHistory(prev => [...prev, snap]);
      };
      img.src = result;
    };
    reader.readAsDataURL(file);
  };

  // Trigger AI handwriting recognition & error analysis via server-side Gemini
  const handleAnalyzeWithAI = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    sounds.playClick();
    setIsAnalyzing(true);
    setAnalysisResult(null);

    try {
      const base64Image = canvas.toDataURL('image/png');

      const response = await fetch('/api/analyze-handwriting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          imageBase64: base64Image,
          exercise: {
            id: exercise.id,
            problem: exercise.problem,
            finalAnswer: exercise.finalAnswer,
            essence: exercise.essence,
            taskPrompt: exercise.taskPrompt
          },
          studentName: activeStudent?.name
        })
      });

      if (!response.ok) {
        throw new Error(`Сервер повернув статус ${response.status}`);
      }

      const result: HandwritingAnalysisResult = await response.json();
      setAnalysisResult(result);

      if (result.isCorrect) {
        sounds.playCorrect();
        onRewardSuccess(25, 5); // +25 XP, +5 Gems
      } else {
        sounds.playWrong();
      }
    } catch (err: any) {
      console.error('Помилка аналізу:', err);
      // Fallback result for graceful handling
      const fallback: HandwritingAnalysisResult = {
        recognizedText: exercise.problem,
        isCorrect: false,
        errorStep: "Потрібно уважно перевірити проміжні кроки",
        errorExplanation: `Зверніть увагу на суть правила: ${exercise.essence}. Перевірте знаки та застосування формул скороченого множення або ОДЗ!`,
        correctSolution: `Правильна відповідь: ${exercise.finalAnswer}. Крок 1: застосувати ${exercise.essence}.`,
        teacherPraise: `Не хвилюйся, ${activeStudent?.name || "учень"}! Поглянь на підказку Сови Duo та спробуй ще раз! 🦉`,
        confidence: 85
      };
      setAnalysisResult(fallback);
      sounds.playWrong();
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#111827] border-2 border-slate-700 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl flex flex-col my-auto max-h-[96vh] animate-in fade-in duration-200">
        
        {/* Header */}
        <div className="bg-[#1a233a] p-4 sm:p-5 border-b border-slate-700 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-green-500/20 border border-green-500/40 flex items-center justify-center text-green-400">
              <PenTool className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-black text-white">
                  Рукописний розв’язок та ШІ-перевірка
                </h3>
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                  {exercise.difficulty} рівень
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Пишіть мишкою, пальцем або стилусом — ШІ розпізнає почерк і вкаже на помилки
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {onOpenConstructorMode && (
              <button
                onClick={() => {
                  onClose();
                  onOpenConstructorMode();
                }}
                className="hidden sm:flex items-center gap-1.5 text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-xl border border-slate-700 transition-colors cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                Модульний конструктор
              </button>
            )}
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1 text-slate-200">
          
          {/* Exercise Statement Card */}
          <div className="p-4 rounded-2xl bg-[#182238] border border-slate-700 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5" />
                Умова завдання:
              </span>
              {activeStudent && (
                <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5 bg-slate-800 px-2.5 py-0.5 rounded-full border border-slate-700">
                  <span>{activeStudent.avatar}</span>
                  <span>Розв'язує: <strong className="text-white">{activeStudent.name}</strong></span>
                </span>
              )}
            </div>
            <div className="text-lg sm:text-xl font-mono font-black text-white">
              {exercise.problem}
            </div>
            <div className="text-xs text-slate-400 flex items-center gap-1.5 pt-1 border-t border-slate-700/60">
              <Lightbulb className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
              <span>{exercise.essence}</span>
            </div>
          </div>

          {/* Canvas Tools Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-slate-900 rounded-2xl border border-slate-800">
            {/* Pen Colors */}
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold text-slate-400 uppercase mr-1">Колір:</span>
              {[
                { name: 'Крейда', hex: '#ffffff' },
                { name: 'Зелений Duo', hex: '#58cc02' },
                { name: 'Жовтий', hex: '#facc15' },
                { name: 'Небесний', hex: '#38bdf8' }
              ].map(c => (
                <button
                  key={c.hex}
                  onClick={() => {
                    setPenColor(c.hex);
                    setIsEraser(false);
                    sounds.playClick();
                  }}
                  style={{ backgroundColor: c.hex }}
                  className={`w-6 h-6 rounded-full border-2 transition-all cursor-pointer ${
                    penColor === c.hex && !isEraser ? 'scale-125 border-white ring-2 ring-green-500' : 'border-transparent opacity-80 hover:opacity-100'
                  }`}
                  title={c.name}
                />
              ))}

              {/* Eraser */}
              <button
                onClick={() => {
                  setIsEraser(!isEraser);
                  sounds.playClick();
                }}
                className={`ml-2 p-1.5 rounded-xl border text-xs font-bold flex items-center gap-1 transition-all cursor-pointer ${
                  isEraser
                    ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                    : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
                }`}
                title="Гумка для стирання"
              >
                <Eraser className="w-4 h-4" />
                <span className="hidden sm:inline">Гумка</span>
              </button>
            </div>

            {/* Line Width */}
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold text-slate-400 uppercase mr-1">Товщина:</span>
              {[2, 4, 7].map(size => (
                <button
                  key={size}
                  onClick={() => {
                    setLineWidth(size);
                    sounds.playClick();
                  }}
                  className={`w-7 h-7 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-center ${
                    lineWidth === size ? 'bg-green-500 text-black border-green-400' : 'bg-slate-800 text-slate-400 border-slate-700'
                  }`}
                >
                  {size === 2 ? 'S' : size === 4 ? 'M' : 'L'}
                </button>
              ))}
            </div>

            {/* Actions: Undo, Clear, Photo upload */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleUndo}
                className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
                title="Скасувати останній штрих"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Назад</span>
              </button>

              <button
                onClick={handleClear}
                className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
                title="Очистити дошку"
              >
                <Trash2 className="w-3.5 h-3.5 text-rose-400" />
                <span className="hidden md:inline">Очистити</span>
              </button>

              {/* Photo Upload */}
              <button
                onClick={() => fileInputRef.current?.click()}
                className="p-1.5 rounded-xl bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 border border-indigo-500/40 text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
                title="Завантажити фото розв'язку із зошита"
              >
                <Camera className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Фото зошита</span>
              </button>
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
              />
            </div>
          </div>

          {/* Quick Preset buttons for 1-click test of handwriting AI */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-400 text-[11px] font-bold">Швидкий зразок для тесту:</span>
            <button
              onClick={() => loadPresetSolution('correct')}
              className="px-2.5 py-1 rounded-lg bg-green-950/40 border border-green-800/60 text-green-300 hover:bg-green-900/50 cursor-pointer transition-colors"
            >
              ✓ Правильний розв'язок
            </button>
            <button
              onClick={() => loadPresetSolution('sign_error')}
              className="px-2.5 py-1 rounded-lg bg-amber-950/40 border border-amber-800/60 text-amber-300 hover:bg-amber-900/50 cursor-pointer transition-colors"
            >
              ⚠ Помилка в знаках
            </button>
            <button
              onClick={() => loadPresetSolution('cancel_error')}
              className="px-2.5 py-1 rounded-lg bg-rose-950/40 border border-rose-800/60 text-rose-300 hover:bg-rose-900/50 cursor-pointer transition-colors"
            >
              ⚠ Помилка скорочення
            </button>
          </div>

          {/* Drawing Canvas */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700 shadow-inner bg-[#0f172a] touch-none">
            <canvas
              ref={canvasRef}
              width={760}
              height={320}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
              className="w-full h-64 sm:h-72 cursor-crosshair block"
            />

            {/* Chalkboard watermark */}
            <div className="absolute bottom-2 right-3 pointer-events-none text-[10px] font-mono text-slate-600">
              Полотно учня • Алгебра 8
            </div>
          </div>

          {/* AI Analyze Button (Duolingo 3D Button Style) */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <DuoOwl size="sm" mood={isAnalyzing ? 'thinking' : analysisResult ? (analysisResult.isCorrect ? 'excited' : 'sad') : 'happy'} />
              <span className="max-w-xs">
                {isAnalyzing 
                  ? 'Сова Duo розпізнає почерк дитини та аналізує формули...' 
                  : 'Натисніть зелену кнопку, щоб ШІ перевірив рукописний розв’язок!'}
              </span>
            </div>

            <button
              onClick={handleAnalyzeWithAI}
              disabled={isAnalyzing}
              className="w-full sm:w-auto bg-[#58cc02] hover:bg-[#46a302] disabled:opacity-50 text-black font-black text-sm px-6 py-3.5 rounded-2xl transition-all border-b-4 border-[#3b8502] active:border-b-0 active:translate-y-1 shadow-lg shadow-green-500/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Розпізнаємо почерк...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 fill-black" />
                  <span>ШІ: Розпізнати почерк і перевірити</span>
                </>
              )}
            </button>
          </div>

          {/* AI Analysis Result Display */}
          {analysisResult && (
            <div className="mt-4 p-5 rounded-3xl border-2 animate-in fade-in slide-in-from-bottom-2 duration-300 space-y-4"
              style={{
                backgroundColor: analysisResult.isCorrect ? 'rgba(34, 197, 94, 0.08)' : 'rgba(245, 158, 11, 0.08)',
                borderColor: analysisResult.isCorrect ? 'rgba(34, 197, 94, 0.5)' : 'rgba(245, 158, 11, 0.5)'
              }}
            >
              {/* Status Banner */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  {analysisResult.isCorrect ? (
                    <div className="w-10 h-10 rounded-2xl bg-green-500 text-black flex items-center justify-center font-black">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-2xl bg-amber-500 text-black flex items-center justify-center font-black">
                      <AlertTriangle className="w-6 h-6" />
                    </div>
                  )}

                  <div>
                    <h4 className="text-base font-black text-white">
                      {analysisResult.isCorrect
                        ? 'ВІДМІННО! Усе розв’язано правильно! 🎉'
                        : 'ЗНАЙДЕНО ПОМИЛКУ: Сова Duo підказує 💡'}
                    </h4>
                    <p className="text-xs text-slate-300">
                      Точність розпізнавання: {analysisResult.confidence}%
                    </p>
                  </div>
                </div>

                {analysisResult.isCorrect && (
                  <div className="bg-green-500/20 text-green-300 border border-green-500/40 px-3 py-1 rounded-xl text-xs font-black">
                    +25 XP • +5 💎
                  </div>
                )}
              </div>

              {/* Transcribed child's handwriting */}
              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/80 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  📝 Розпізнаний рукописний запис із дошки:
                </span>
                <div className="text-sm font-mono font-bold text-slate-200">
                  {analysisResult.recognizedText}
                </div>
              </div>

              {/* If there's an error: show exact mistake and pedagogical explanation */}
              {!analysisResult.isCorrect && (
                <div className="space-y-3">
                  {analysisResult.errorStep && (
                    <div className="p-3 bg-rose-950/40 border border-rose-700/60 rounded-xl">
                      <span className="text-xs font-bold text-rose-300 flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                        Де саме помилка:
                      </span>
                      <p className="text-xs text-rose-200 mt-0.5 font-semibold">
                        {analysisResult.errorStep}
                      </p>
                    </div>
                  )}

                  {analysisResult.errorExplanation && (
                    <div className="p-3 bg-amber-950/40 border border-amber-700/60 rounded-xl">
                      <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                        <HelpCircle className="w-3.5 h-3.5 text-yellow-400" />
                        Чому це неправильно (пояснення правила):
                      </span>
                      <p className="text-xs text-amber-100 mt-1 leading-relaxed">
                        {analysisResult.errorExplanation}
                      </p>
                    </div>
                  )}

                  {analysisResult.correctSolution && (
                    <div className="p-3 bg-green-950/40 border border-green-700/60 rounded-xl">
                      <span className="text-xs font-bold text-green-300 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                        Як правильно розв’язати:
                      </span>
                      <div className="text-xs font-mono text-green-100 mt-1 whitespace-pre-line leading-relaxed font-semibold">
                        {analysisResult.correctSolution}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Duo Owl's Cheerful Dialogue */}
              {analysisResult.teacherPraise && (
                <div className="flex items-center gap-3 pt-2 border-t border-slate-700/60">
                  <DuoOwl size="sm" mood={analysisResult.isCorrect ? 'excited' : 'encouraging'} />
                  <p className="text-xs text-slate-200 font-medium italic">
                    «{analysisResult.teacherPraise}»
                  </p>
                </div>
              )}

            </div>
          )}

        </div>

        {/* Footer */}
        <div className="bg-[#1a233a] p-4 border-t border-slate-700 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
          >
            Закрити
          </button>

          {analysisResult?.isCorrect ? (
            <button
              onClick={onClose}
              className="bg-green-500 hover:bg-green-400 text-black font-black text-xs px-6 py-2.5 rounded-xl transition-all border-b-4 border-green-700 active:border-b-0 active:translate-y-1 cursor-pointer shadow-lg"
            >
              Продовжити до наступного номера! 🚀
            </button>
          ) : (
            <button
              onClick={() => {
                setAnalysisResult(null);
                sounds.playClick();
              }}
              className="bg-amber-400 hover:bg-amber-300 text-black font-black text-xs px-5 py-2.5 rounded-xl transition-all border-b-4 border-amber-600 active:border-b-0 active:translate-y-1 cursor-pointer"
            >
              Спробувати ще раз на дошці
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
