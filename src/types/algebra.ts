export interface GlossaryTerm {
  uk: string;
  en: string;
  de: string;
  fr: string;
  definition: string;
}

export interface ModularStep {
  id: string;
  title: string;
  math: string;
  explanation: string;
  ruleTag?: string; // e.g. "Формула різниці квадратів", "ОДЗ", "Дискримінант"
}

export interface ModularExercise {
  id: string;
  problem: string;
  difficulty: 'Початковий' | 'Середній' | 'Достатній' | 'Високий';
  category: string;
  taskPrompt: string;
  essence: string; // Суть приклада - key mathematical concept
  availableModules: ModularStep[]; // All modular blocks available to choose from (including distractors)
  correctSequence: string[]; // Order of modular step IDs that solve the problem
  finalAnswer: string;
  hint: string;
}

export interface TheorySection {
  id: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  keyRules: {
    type: 'remember' | 'attention' | 'important' | 'history' | 'vocabulary';
    title: string;
    content: string;
  }[];
  interactiveExamples: {
    id: string;
    title: string;
    expression: string;
    steps: {
      stepNum: number;
      actionName: string;
      formula: string;
      description: string;
    }[];
    result: string;
  }[];
  modularPractice: ModularExercise[];
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  iconName: string;
  color: string;
  description: string;
  topics: TheorySection[];
}

export type Topic = TheorySection;
