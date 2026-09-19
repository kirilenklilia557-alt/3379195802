import React, { useState } from 'react';
import { EmeraldStartScreen } from './components/EmeraldStartScreen';
import { BookTopicWheelSelector } from './components/BookTopicWheelSelector';
import { TextbookLessonWorkspace } from './components/TextbookLessonWorkspace';
import { CHAPTERS } from './data/chaptersData';
import { INITIAL_CLASSES } from './data/mockClasses';
import { ClassGroup } from './types/duo';
import { sounds } from './utils/soundEffects';

export default function App() {
  // App Phase: 'start' (3D emerald start button) -> 'topic-wheel' (cylindrical 3D book topic wheel) -> 'lesson' (textbook tasks)
  const [screenMode, setScreenMode] = useState<'start' | 'topic-wheel' | 'lesson'>('start');

  // Selected School Textbook: 'tarasenkova' (default, matches user textbook) | 'merzlyak' | 'ister'
  const [selectedBookId, setSelectedBookId] = useState<'merzlyak' | 'tarasenkova' | 'ister'>(() => {
    try {
      const saved = localStorage.getItem('algebra8_selected_textbook');
      if (saved === 'tarasenkova' || saved === 'ister' || saved === 'merzlyak') {
        return saved;
      }
    } catch {
      // ignore
    }
    return 'tarasenkova';
  });

  const handleSelectBook = (bookId: 'merzlyak' | 'tarasenkova' | 'ister') => {
    setSelectedBookId(bookId);
    try {
      localStorage.setItem('algebra8_selected_textbook', bookId);
    } catch {
      // ignore
    }
  };

  // Selected topic / chapter
  const [selectedChapterId, setSelectedChapterId] = useState<string>(CHAPTERS[0].id);
  const [selectedTopicId, setSelectedTopicId] = useState<string>(CHAPTERS[0].topics[0].id);

  // Solved exercises tracked in local state & localStorage: 1 штука = 1 завдання
  const [solvedExercises, setSolvedExercises] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('algebra8_solved_exercises');
      if (saved) {
        return new Set(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
    return new Set<string>();
  });

  // Class & Student Scores State (Persisted in localStorage)
  const [classes, setClasses] = useState<ClassGroup[]>(() => {
    try {
      const saved = localStorage.getItem('algebra8_classes');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return INITIAL_CLASSES;
  });

  const handleUpdateClasses = (updated: ClassGroup[]) => {
    setClasses(updated);
    try {
      localStorage.setItem('algebra8_classes', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const [targetExerciseId, setTargetExerciseId] = useState<string | null>(null);

  const handleTaskSolved = (exerciseId: string) => {
    sounds.playCorrect();
    setSolvedExercises(prev => {
      const updated = new Set(prev);
      updated.add(exerciseId);
      try {
        localStorage.setItem('algebra8_solved_exercises', JSON.stringify(Array.from(updated)));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  // 1. Initial 3D Start Button on black screen
  if (screenMode === 'start') {
    return (
      <EmeraldStartScreen
        onStart={() => setScreenMode('topic-wheel')}
      />
    );
  }

  // 2. 3D Cylindrical Book Topic Wheel Selector
  if (screenMode === 'topic-wheel') {
    return (
      <BookTopicWheelSelector
        selectedChapterId={selectedChapterId}
        selectedTopicId={selectedTopicId}
        selectedBookId={selectedBookId}
        onSelectBookId={handleSelectBook}
        onSelectTopic={(chapterId, topicId) => {
          setSelectedChapterId(chapterId);
          setSelectedTopicId(topicId);
        }}
        onProceedToLesson={(exerciseId) => {
          if (exerciseId) {
            setTargetExerciseId(exerciseId);
          } else {
            setTargetExerciseId(null);
          }
          setScreenMode('lesson');
        }}
        onBackToStart={() => setScreenMode('start')}
      />
    );
  }

  // 3. Pure Textbook Exercise Workspace (Matching User Wireframes)
  return (
    <TextbookLessonWorkspace
      selectedChapterId={selectedChapterId}
      selectedTopicId={selectedTopicId}
      selectedBookId={selectedBookId}
      onSelectBookId={handleSelectBook}
      initialExerciseId={targetExerciseId}
      onSelectTopic={(chapterId, topicId) => {
        setSelectedChapterId(chapterId);
        setSelectedTopicId(topicId);
      }}
      onBackToTopicWheel={() => {
        setTargetExerciseId(null);
        setScreenMode('topic-wheel');
      }}
      onTaskSolved={handleTaskSolved}
      solvedCount={solvedExercises.size}
      classes={classes}
      onUpdateClasses={handleUpdateClasses}
    />
  );
}
