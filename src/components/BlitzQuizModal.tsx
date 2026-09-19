import React, { useState, useEffect } from 'react';
import { Zap, Clock, CheckCircle, XCircle, Award, Sparkles, X, ChevronRight } from 'lucide-react';
import { sounds } from '../utils/soundEffects';
import { DuoOwl } from './DuoOwl';

interface BlitzQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const BLITZ_QUESTIONS: BlitzQuestion[] = [
  {
    id: 'b1',
    question: 'Чому дорівнює арифметичний квадратний корінь √81?',
    options: ['81', '9', '-9', '±9'],
    correctIndex: 1,
    explanation: 'Арифметичний корінь завжди невід’ємний: √81 = 9, бо 9² = 81 та 9 ≥ 0.'
  },
  {
    id: 'b2',
    question: 'Скоротіть дріб: (7x) / (7y)',
    options: ['x / y', '7x / y', '1', 'x - y'],
    correctIndex: 0,
    explanation: 'Ділимо чисельник і знаменник на спільний множник 7.'
  },
  {
    id: 'b3',
    question: 'Обчисліть: (-4)²',
    options: ['-16', '16', '-8', '8'],
    correctIndex: 1,
    explanation: 'Будь-яке число в парному степені є невід’ємним: (-4)·(-4) = 16.'
  },
  {
    id: 'b4',
    question: 'При якому значенні x дріб (x - 3) / (x + 5) не має змісту (ОДЗ)?',
    options: ['x = 3', 'x = 0', 'x = -5', 'x = 5'],
    correctIndex: 2,
    explanation: 'Знаменник не може дорівнювати нулю: x + 5 ≠ 0, отже x ≠ -5.'
  },
  {
    id: 'b5',
    question: 'Розкладіть на множники різницю квадратів: a² - 25',
    options: ['(a - 5)²', '(a - 5)(a + 5)', '(a + 25)(a - 25)', 'a(a - 25)'],
    correctIndex: 1,
    explanation: 'За формулою різниці квадратів: a² - b² = (a - b)(a + b).'
  }
];

interface BlitzQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (xp: number, gems: number) => void;
}

export const BlitzQuizModal: React.FC<BlitzQuizModalProps> = ({
  isOpen,
  onClose,
  onComplete
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(45);

  useEffect(() => {
    if (!isOpen) {
      setCurrentIndex(0);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setScore(0);
      setFinished(false);
      setTimeLeft(45);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setFinished(true);
          sounds.playLevelUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const currentQ = BLITZ_QUESTIONS[currentIndex];

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedAnswer(idx);
    setIsAnswered(true);

    if (idx === currentQ.correctIndex) {
      sounds.playCorrect();
      setScore(prev => prev + 1);
    } else {
      sounds.playWrong();
    }
  };

  const handleNext = () => {
    sounds.playClick();
    if (currentIndex + 1 < BLITZ_QUESTIONS.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setFinished(true);
      sounds.playLevelUp();
      const earnedXp = score * 10;
      const earnedGems = score >= 3 ? 15 : 5;
      onComplete(earnedXp, earnedGems);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="bg-[#111827] border-2 border-amber-500/50 w-full max-w-lg rounded-3xl p-6 shadow-2xl space-y-5 animate-in zoom-in-95 duration-200 relative">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with Timer and Progress */}
        <div className="flex items-center justify-between pr-8">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-amber-400 text-black flex items-center justify-center font-black">
              <Zap className="w-5 h-5 fill-black" />
            </div>
            <div>
              <h3 className="text-base font-black text-white">Бліц-розминка Duo</h3>
              <p className="text-xs text-amber-400 font-bold">Швидкі усні приклади 8 класу</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs font-mono font-bold text-slate-200">
            <Clock className="w-3.5 h-3.5 text-amber-400 animate-spin" />
            <span>{timeLeft} сек</span>
          </div>
        </div>

        {!finished ? (
          <div className="space-y-4">
            
            {/* Progress bar */}
            <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
              <div
                className="h-full bg-gradient-to-r from-amber-400 to-green-400 transition-all duration-300 rounded-full"
                style={{ width: `${((currentIndex + 1) / BLITZ_QUESTIONS.length) * 100}%` }}
              />
            </div>

            {/* Question Box */}
            <div className="bg-[#182238] rounded-2xl p-4 border border-slate-700/80 text-center">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Питання {currentIndex + 1} з {BLITZ_QUESTIONS.length}
              </span>
              <p className="text-lg font-black text-white font-mono">
                {currentQ.question}
              </p>
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {currentQ.options.map((opt, idx) => {
                let btnStyle = 'bg-slate-800/90 text-slate-200 border-slate-700 hover:border-slate-500 hover:bg-slate-700';

                if (isAnswered) {
                  if (idx === currentQ.correctIndex) {
                    btnStyle = 'bg-green-500 text-black border-b-4 border-green-700 font-black shadow-lg shadow-green-500/30';
                  } else if (idx === selectedAnswer) {
                    btnStyle = 'bg-rose-500 text-white border-b-4 border-rose-700 font-black';
                  } else {
                    btnStyle = 'bg-slate-800/40 text-slate-500 border-slate-800';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={isAnswered}
                    className={`p-3.5 rounded-2xl border text-sm font-bold text-center transition-all cursor-pointer select-none ${btnStyle}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {/* Explanation box after answer */}
            {isAnswered && (
              <div className="p-3 bg-slate-800/80 rounded-2xl border border-slate-700 text-xs text-slate-300 space-y-1 animate-in fade-in duration-200">
                <div className="flex items-center gap-1.5 font-bold">
                  {selectedAnswer === currentQ.correctIndex ? (
                    <span className="text-green-400 flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" /> Правильно!
                    </span>
                  ) : (
                    <span className="text-rose-400 flex items-center gap-1">
                      <XCircle className="w-4 h-4" /> Не зовсім так:
                    </span>
                  )}
                </div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  {currentQ.explanation}
                </p>
              </div>
            )}

            {/* Next Button */}
            {isAnswered && (
              <button
                onClick={handleNext}
                className="w-full py-3 rounded-2xl bg-[#58cc02] hover:bg-[#46a302] text-black font-black text-sm border-b-4 border-green-700 cursor-pointer shadow-lg shadow-green-500/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              >
                <span>{currentIndex + 1 < BLITZ_QUESTIONS.length ? 'Наступне запитання' : 'Завершити розминку 🏆'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}

          </div>
        ) : (
          /* Finished Screen */
          <div className="text-center space-y-4 py-3 animate-in zoom-in duration-300">
            <div className="w-16 h-16 mx-auto rounded-3xl bg-amber-400 text-black flex items-center justify-center shadow-xl border-b-4 border-amber-600">
              <Award className="w-10 h-10" />
            </div>

            <div>
              <h3 className="text-xl font-black text-white">Розминку завершено!</h3>
              <p className="text-xs text-slate-400 mt-1">
                Правильних відповідей: <strong className="text-green-400 font-black">{score}</strong> з {BLITZ_QUESTIONS.length}
              </p>
            </div>

            <div className="flex items-center justify-center gap-3">
              <div className="px-4 py-2 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-black">
                +{score * 10} XP
              </div>
              <div className="px-4 py-2 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-black">
                +{score >= 3 ? 15 : 5} 💎
              </div>
            </div>

            <DuoOwl
              size="sm"
              mood={score >= 3 ? 'excited' : 'happy'}
              speech={
                score >= 4
                  ? 'Неймовірно! Твої знання алгебри вражають Duo!'
                  : score >= 2
                  ? 'Гарна розминка перед складнішими номерами!'
                  : 'Повтори правила у підручнику і спробуй ще раз!'
              }
            />

            <button
              onClick={onClose}
              className="w-full py-3 rounded-2xl bg-[#58cc02] hover:bg-[#46a302] text-black font-black text-sm border-b-4 border-green-700 cursor-pointer shadow-lg shadow-green-500/20"
            >
              Чудово, повернутися до доріжки!
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
