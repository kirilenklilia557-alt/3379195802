export interface Student {
  id: string;
  name: string;
  avatar: string;
  stars: number;
  solvedCount: number;
  score?: number; // бали учня (з старта 0)
}

export interface ClassGroup {
  id: string;
  name: string;
  academicYear: string;
  students: Student[];
  attendance: Record<string, boolean>; // studentId -> true (present), false (absent)
}

export interface HandwritingAnalysisResult {
  recognizedText: string;
  isCorrect: boolean;
  errorStep: string | null;
  errorExplanation: string;
  correctSolution: string;
  teacherPraise: string;
  confidence: number;
}

export interface UserStats {
  streak: number;
  gems: number;
  hearts: number;
  maxHearts: number;
  xp: number;
}
