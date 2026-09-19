import { ClassGroup, Student } from '../types/duo';

export const INITIAL_8A_STUDENTS: Student[] = [
  { id: 'st-1', name: '1. Андрій Б.', avatar: '👦', stars: 0, solvedCount: 0, score: 0 },
  { id: 'st-2', name: '2. Богдан К.', avatar: '👦', stars: 0, solvedCount: 0, score: 0 },
  { id: 'st-3', name: '3. Віталій Кириленко', avatar: '🧑', stars: 0, solvedCount: 0, score: 0 },
  { id: 'st-4', name: '4. Дарина П.', avatar: '👧', stars: 0, solvedCount: 0, score: 0 },
  { id: 'st-5', name: '5. Денис С.', avatar: '🧑', stars: 0, solvedCount: 0, score: 0 },
  { id: 'st-6', name: '6. Іван Т.', avatar: '👦', stars: 0, solvedCount: 0, score: 0 },
  { id: 'st-7', name: '7. Катерина В.', avatar: '👩', stars: 0, solvedCount: 0, score: 0 },
  { id: 'st-8', name: '8. Максим Л.', avatar: '👦', stars: 0, solvedCount: 0, score: 0 },
  { id: 'st-9', name: '9. Марія О.', avatar: '👧', stars: 0, solvedCount: 0, score: 0 },
  { id: 'st-10', name: '10. Михайло Р.', avatar: '🧑', stars: 0, solvedCount: 0, score: 0 },
  { id: 'st-11', name: '11. Назарій К.', avatar: '👦', stars: 0, solvedCount: 0, score: 0 },
  { id: 'st-12', name: '12. Оксана Д.', avatar: '👧', stars: 0, solvedCount: 0, score: 0 },
  { id: 'st-13', name: '13. Олександр М.', avatar: '👦', stars: 0, solvedCount: 0, score: 0 },
  { id: 'st-14', name: '14. Поліна Ш.', avatar: '👩', stars: 0, solvedCount: 0, score: 0 },
  { id: 'st-15', name: '15. Софія Г.', avatar: '👧', stars: 0, solvedCount: 0, score: 0 },
  { id: 'st-16', name: '16. Ярослав В.', avatar: '👦', stars: 0, solvedCount: 0, score: 0 },
];

export const INITIAL_CLASSES: ClassGroup[] = [
  {
    id: 'class-8a',
    name: '8-А клас',
    academicYear: '2025/2026',
    students: INITIAL_8A_STUDENTS,
    attendance: Object.fromEntries(INITIAL_8A_STUDENTS.map(s => [s.id, true]))
  }
];
