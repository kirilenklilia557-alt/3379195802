import React, { useMemo } from 'react';

interface FormulaItem {
  id: number;
  text: string;
  top: number;
  left: number;
  duration: number;
  delay: number;
  size: string;
  opacity: number;
}

const FORMULAS_POOL = [
  '(a + b)² = a² + 2ab + b²',
  '(a - b)² = a² - 2ab + b²',
  'a² - b² = (a - b)(a + b)',
  '√a² = |a|',
  '√(a · b) = √a · √b',
  'D = b² - 4ac',
  'x₁,₂ = (-b ± √D) / 2a',
  'y = k / x',
  'y = x²',
  'a / b · c / d = ac / bd',
  'a⁻ⁿ = 1 / aⁿ',
  'a⁰ = 1  (a ≠ 0)',
  'x₁ + x₂ = -p',
  'x₁ · x₂ = q',
  '(a / b)ⁿ = aⁿ / bⁿ',
  '√(a / b) = √a / √b'
];

export const FloatingFormulas: React.FC = () => {
  // Completely disabled as requested: removed background formula distractions to relax the eyes
  return null;
};
