import React, { useState } from 'react';
import { 
  BookOpen, 
  ChevronRight, 
  Lightbulb, 
  AlertTriangle, 
  CheckCircle, 
  Sparkles, 
  Play, 
  Layers, 
  ArrowRight
} from 'lucide-react';
import { Chapter } from '../types/algebra';
import { CHAPTERS } from '../data/chaptersData';
import { sounds } from '../utils/soundEffects';

interface TopicViewerProps {
  onGoToConstructor: (exerciseId?: string) => void;
}

export const TopicViewer: React.FC<TopicViewerProps> = ({ onGoToConstructor }) => {
  const [selectedChapterId, setSelectedChapterId] = useState<string>(CHAPTERS[1].id); // Chapter 2 by default
  const currentChapter = CHAPTERS.find(c => c.id === selectedChapterId) || CHAPTERS[0];

  const [selectedTopicId, setSelectedTopicId] = useState<string>(currentChapter.topics[0]?.id || '');
  const currentTopic = currentChapter.topics.find(t => t.id === selectedTopicId) || currentChapter.topics[0];

  // Active step in interactive examples
  const [activeExampleStep, setActiveExampleStep] = useState<Record<string, number>>({});

  const handleChapterSelect = (chapter: Chapter) => {
    sounds.playClick();
    setSelectedChapterId(chapter.id);
    if (chapter.topics.length > 0) {
      setSelectedTopicId(chapter.topics[0].id);
    }
  };

  const getRuleIcon = (type: string) => {
    switch (type) {
      case 'remember':
        return <Lightbulb className="w-5 h-5 text-amber-400" />;
      case 'attention':
        return <AlertTriangle className="w-5 h-5 text-rose-400" />;
      case 'important':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getRuleStyle = (type: string) => {
    switch (type) {
      case 'remember':
        return 'bg-amber-950/40 border-amber-500/40 text-amber-200';
      case 'attention':
        return 'bg-rose-950/40 border-rose-500/40 text-rose-200';
      case 'important':
        return 'bg-green-950/40 border-green-500/40 text-green-200';
      default:
        return 'bg-cyan-950/40 border-cyan-500/40 text-cyan-200';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      {/* Sidebar: Chapters & Topics Navigation */}
      <div className="lg:col-span-4 space-y-4">
        <div className="bg-[#111827] rounded-3xl p-5 border-2 border-slate-700/80 shadow-xl">
          <h3 className="text-xs font-black uppercase tracking-wider text-green-400 mb-3 flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-green-400" />
            Розділи підручника (8 клас НУШ)
          </h3>

          <div className="space-y-1.5">
            {CHAPTERS.map((chapter) => {
              const isSelected = chapter.id === selectedChapterId;
              return (
                <button
                  key={chapter.id}
                  onClick={() => handleChapterSelect(chapter)}
                  className={`w-full text-left p-3 rounded-2xl transition-all flex items-start justify-between gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-green-500/20 border-2 border-green-500 text-white font-bold shadow-lg'
                      : 'hover:bg-slate-800 border border-slate-800 text-slate-300'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-black ${
                        isSelected ? 'bg-green-500 text-black' : 'bg-slate-800 text-slate-400'
                      }`}>
                        {chapter.number}
                      </span>
                      <span className="text-sm font-bold leading-tight">
                        {chapter.title}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 line-clamp-1 ml-7">
                      {chapter.description}
                    </p>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 mt-1 transition-transform ${
                    isSelected ? 'rotate-90 text-green-400' : 'text-slate-500'
                  }`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Subtopics of Selected Chapter */}
        <div className="bg-[#111827] rounded-3xl p-5 border-2 border-slate-700/80 shadow-xl">
          <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2">
            Параграфи розділу {currentChapter.number}
          </h4>
          <div className="space-y-1">
            {currentChapter.topics.map((topic) => {
              const isTopicSelected = topic.id === selectedTopicId;
              return (
                <button
                  key={topic.id}
                  onClick={() => {
                    sounds.playClick();
                    setSelectedTopicId(topic.id);
                  }}
                  className={`w-full text-left p-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isTopicSelected
                      ? 'bg-amber-400 text-black shadow-md font-black'
                      : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <div className="line-clamp-2">{topic.title}</div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content Area: Topic Lesson */}
      <div className="lg:col-span-8 space-y-6">
        
        {/* Topic Header Card */}
        <div className="bg-[#111827] rounded-3xl p-6 border-2 border-slate-700/80 shadow-xl space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-black px-3 py-1 rounded-full bg-green-500/20 text-green-300 border border-green-500/30">
              Розділ {currentChapter.number} • Теорія
            </span>

            {/* Direct button to modular constructor */}
            {currentTopic.modularPractice.length > 0 && (
              <button
                onClick={() => {
                  sounds.playClick();
                  onGoToConstructor(currentTopic.modularPractice[0].id);
                }}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#58cc02] hover:bg-[#46a302] text-black text-xs font-black border-b-3 border-green-700 shadow-md transition-all cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5" />
                Конструктор цієї теми
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-black text-white tracking-tight">
              {currentTopic.title}
            </h2>
            <p className="text-sm font-semibold text-slate-300 mt-1">
              {currentTopic.subtitle}
            </p>
          </div>

          {/* Detailed Paragraphs */}
          <div className="space-y-3 pt-2 text-slate-300 text-sm leading-relaxed border-t border-slate-800">
            {currentTopic.paragraphs.map((par, idx) => (
              <p key={idx} className="text-justify">
                {par}
              </p>
            ))}
          </div>

          {/* Key Rules Callouts */}
          <div className="grid grid-cols-1 gap-3 pt-2">
            {currentTopic.keyRules.map((rule, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-2xl border-2 flex items-start gap-3.5 ${getRuleStyle(rule.type)}`}
              >
                <div className="shrink-0 mt-0.5">
                  {getRuleIcon(rule.type)}
                </div>
                <div className="space-y-1">
                  <h4 className="font-black text-sm tracking-tight">
                    {rule.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-slate-200">
                    {rule.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step-by-Step Interactive Example Demonstrations */}
        {currentTopic.interactiveExamples.map((ex) => {
          const currentStepIdx = activeExampleStep[ex.id] ?? (ex.steps.length - 1);
          return (
            <div key={ex.id} className="bg-[#111827] rounded-3xl border-2 border-slate-700/80 shadow-xl overflow-hidden">
              <div className="p-4 bg-[#182238] border-b border-slate-700 text-white flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Play className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="font-black text-sm">
                    {ex.title}
                  </span>
                </div>
                <div className="font-mono text-xs px-2.5 py-1 rounded-xl bg-slate-900 border border-slate-700 text-amber-300 font-bold">
                  {ex.expression}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400 font-bold">
                  <span>Покроковий аналіз розв’язання:</span>
                  <div className="flex gap-1.5">
                    {ex.steps.map((_, sIdx) => (
                      <button
                        key={sIdx}
                        onClick={() => {
                          sounds.playClick();
                          setActiveExampleStep(prev => ({ ...prev, [ex.id]: sIdx }));
                        }}
                        className={`w-7 h-7 rounded-xl text-xs font-black transition-all cursor-pointer ${
                          sIdx === currentStepIdx
                            ? 'bg-[#58cc02] text-black border-b-2 border-green-700'
                            : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                        }`}
                      >
                        {sIdx + 1}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Active Step Details */}
                <div className="p-4 rounded-2xl bg-[#182238] border border-slate-700 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-green-400 uppercase tracking-wide">
                      Крок {currentStepIdx + 1}: {ex.steps[currentStepIdx]?.actionName}
                    </span>
                    <span className="text-xs text-slate-400">
                      (Всього кроків: {ex.steps.length})
                    </span>
                  </div>
                  <div className="text-base font-bold font-mono text-amber-300 bg-slate-900 p-3 rounded-xl border border-slate-800">
                    {ex.steps[currentStepIdx]?.formula}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {ex.steps[currentStepIdx]?.description}
                  </p>
                </div>

                {/* Final Result Badge */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                  <div className="text-xs text-slate-400">
                    Остаточний результат: <span className="font-bold font-mono text-green-400 ml-1">{ex.result}</span>
                  </div>

                  {currentTopic.modularPractice.length > 0 && (
                    <button
                      onClick={() => {
                        sounds.playClick();
                        onGoToConstructor(currentTopic.modularPractice[0].id);
                      }}
                      className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
                    >
                      Спробувати зібрати приклад самостійно
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}

      </div>

    </div>
  );
};
