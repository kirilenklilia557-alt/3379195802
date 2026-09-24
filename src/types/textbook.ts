export type ExerciseType = 'choice' | 'step_by_step';
export type ExerciseCategory = 'example' | 'equation' | 'task'; // приклад | рівняння | задача

export interface ChoiceOption {
  id: string;
  label: string; // 'А' | 'Б' | 'В' | 'Г'
  text: string;
  isCorrect: boolean;
}

export interface ChoiceExercise {
  id: string;
  topicId: string;
  chapterId: string;
  exerciseNumber: string; // e.g. "№ 34 (1)" or "№ 128 (3)"
  baseNumber?: number;    // e.g. 34
  partNumber?: number;    // e.g. 1
  category?: ExerciseCategory; // 'example' | 'equation' | 'task'
  taskText?: string;      // For word problems (задачі)
  type: 'choice';
  questionPrompt: string; // e.g. "Спростіть вираз:" або "Розв'яжіть задачу:"
  expression: string;     // e.g. "(a + 3)² - (a - 3)²"
  options: ChoiceOption[];
  explanation: string;
  essence?: string;
  isAuthenticBook?: boolean;
}

export interface StepByStepStage {
  stepNum: number;
  totalSteps: number;
  instruction: string;       // e.g. "Крок 1: Застосуйте формулу квадрата суми (a + b)² = a² + 2ab + b²"
  readyExampleFormula: string; // e.g. "Зразок: (a + b)² = a² + 2ab + b² -> (x + 3)² = x² + 6x + 9"
  expectedAnswer: string;    // Normalized string, e.g. "x²+6x+9"
  acceptableAnswers: string[]; // Variations: ["x^2+6x+9", "x²+6x+9", "x^2 + 6x + 9"]
  inputPlaceholder: string;  // e.g. "Введіть x² + 6x + 9"
  hint: string;
}

export interface StepByStepExercise {
  id: string;
  topicId: string;
  chapterId: string;
  exerciseNumber: string; // e.g. "№ 34 (2)"
  baseNumber?: number;    // e.g. 34
  partNumber?: number;    // e.g. 2
  category?: ExerciseCategory; // 'example' | 'equation' | 'task'
  taskText?: string;      // For word problems (задачі)
  type: 'step_by_step';
  title: string;          // e.g. "Поетапне перетворення виразу"
  expression: string;     // e.g. "(x + 3)² - (x - 3)²"
  stages: StepByStepStage[];
  finalAnswer: string;
  explanation: string;
  isAuthenticBook?: boolean;
}

export type TextbookExercise = ChoiceExercise | StepByStepExercise;

