import { GlossaryTerm } from '../types/algebra';

export const GLOSSARY: GlossaryTerm[] = [
  {
    uk: 'Спільний знаменник',
    en: 'common denominator',
    de: 'gemeinsamer Nenner (m)',
    fr: 'dénominateur commun',
    definition: 'Спільне кратне виразів, що є знаменниками даних дробів, на яке кожен зі знаменників ділиться без остачі.'
  },
  {
    uk: 'Раціональний вираз',
    en: 'rational function',
    de: 'rationale Funktion (f)',
    fr: 'expression rationnelle',
    definition: 'Вираз, складений зі змінних і чисел за допомогою дій додавання, віднімання, множення, ділення та піднесення до степеня.'
  },
  {
    uk: 'Раціональний дріб',
    en: 'rational fraction',
    de: 'rationaler Bruch (m)',
    fr: 'fraction rationnelle',
    definition: 'Дріб вигляду A/B, чисельник і знаменник якого є многочленами (де знаменник B не дорівнює нулю тотожно).'
  },
  {
    uk: 'Додавання й віднімання раціональних дробів',
    en: 'addition and subtraction of rational fractions',
    de: 'Addition und Subtraktion von rationalen Brüchen',
    fr: 'addition et soustraction de fractions rationnelles',
    definition: 'Дія, при якій дроби зводять до спільного знаменника, а чисельники додають або віднімають.'
  },
  {
    uk: 'Множення раціональних дробів',
    en: 'multiplying rational fractions',
    de: 'Multiplikation rationaler Brüchen',
    fr: 'multiplication des fractions rationnelles',
    definition: 'Правило: перемножити чисельники для нового чисельника, перемножити знаменники для нового знаменника: (A/B) · (C/D) = (A·C)/(B·D).'
  },
  {
    uk: 'Ділення раціональних дробів',
    en: 'dividing rational fractions',
    de: 'Division rationalen Brücher',
    fr: 'division des fractions rationnelles',
    definition: 'Щоб поділити раціональні дроби, ділене множать на дріб, обернений до дільника: (A/B) : (C/D) = (A·D)/(B·C).'
  },
  {
    uk: 'Дробово-раціональне рівняння',
    en: 'fractional-rational equation',
    de: 'bruch-rationale Gleichung',
    fr: 'équation rationnelle fractionnaire',
    definition: 'Рівняння, у якому принаймні одна з частин містить ділення на вираз зі змінною.'
  },
  {
    uk: 'Степінь з від’ємним показником',
    en: 'degree with a negative exponent',
    de: 'Grad mit negativem Exponenten',
    fr: 'puissance avec un exposant négatif',
    definition: 'Для будь-якого a ≠ 0 і натурального n: a^(-n) = 1 / (a^n). Також (a/b)^(-n) = (b/a)^n.'
  },
  {
    uk: 'Стандартний вигляд числа',
    en: 'the standard form of a number',
    de: 'die Standardform einer Zahl',
    fr: 'la forme standard d’un nombre',
    definition: 'Запис числа у вигляді a · 10^n, де 1 ≤ a < 10, а порядок n — ціле число.'
  },
  {
    uk: 'Гіпербола',
    en: 'hyperbole',
    de: 'Hyperbel (m)',
    fr: 'hyperbole',
    definition: 'Крива лінія з двох віток, що є графіком оберненої пропорційності y = k/x (k ≠ 0).'
  },
  {
    uk: 'Парабола',
    en: 'parabola',
    de: 'Parabel (f)',
    fr: 'parabole',
    definition: 'Крива з вершиною в початку координат (0;0), яка є графіком квадратичної функції y = x².'
  },
  {
    uk: 'Арифметичний квадратний корінь',
    en: 'arithmetic square root',
    de: 'arithmetische Quadratwurzel (f)',
    fr: 'racine carrée arithmétique',
    definition: 'Невід’ємне число b, квадрат якого дорівнює a (b ≥ 0, b² = a). Позначається √a.'
  },
  {
    uk: 'Ірраціональне число',
    en: 'irrational number',
    de: 'irrationale Zahl (f)',
    fr: 'nombre irrationnel',
    definition: 'Число, яке не можна записати у вигляді нескоротного звичайного дробу m/n; нескінченний неперіодичний десятковий дріб (наприклад, √2, π).'
  },
  {
    uk: 'Квадратне рівняння',
    en: 'quadratic equation',
    de: 'quadratische Gleichung (f)',
    fr: 'équation quadratique',
    definition: 'Рівняння виду ax² + bx + c = 0, де a ≠ 0, b, c — дійсні числа.'
  },
  {
    uk: 'Дискримінант',
    en: 'discriminant of a quadratic equation',
    de: 'Diskriminante der quadratischen Gleichung',
    fr: 'le discriminant d’une équation quadratique',
    definition: 'Вираз D = b² - 4ac, знак якого визначає кількість дійсних коренів квадратного рівняння: D>0 (2 корені), D=0 (1 корінь), D<0 (немає дійсних коренів).'
  },
  {
    uk: 'Теорема Вієта',
    en: 'Vieta’s formula',
    de: 'Vietascher Wurzelsatz (m)',
    fr: 'théorème de Viète',
    definition: 'Для зведеного рівняння x² + px + q = 0 корені задовольняють: x₁ + x₂ = -p, x₁ · x₂ = q.'
  },
  {
    uk: 'Мода вибірки',
    en: 'mode of a sample',
    de: 'Modestichprobe (f)',
    fr: 'mode d’une série statistique',
    definition: 'Значення у вибірці чи варіаційному ряді, яке трапляється найчастіше.'
  },
  {
    uk: 'Ймовірність події',
    en: 'probability',
    de: 'Wahrscheinlichkeit (f)',
    fr: 'probabilité',
    definition: 'Відношення числа m сприятливих подій до числа n усіх рівноможливих наслідків: P(A) = m/n (0 ≤ P(A) ≤ 1).'
  }
];
