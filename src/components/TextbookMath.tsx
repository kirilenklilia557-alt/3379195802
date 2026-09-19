import React from 'react';

interface TextbookMathProps {
  expression: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  inline?: boolean;
}

/**
 * TextbookMath: Formats mathematical expressions using authentic textbook conventions:
 * - Real vertical fractions with clean horizontal fraction bars (no computer '/')
 * - True mathematical minus '−' (U+2212) instead of computer '-'
 * - True multiplication dot '·' (U+00B7) instead of computer '*'
 * - True superscripts (x², y³, a⁴) instead of computer '^'
 * - Real square roots '√' with horizontal top vinculum bar
 * - Real math division '∶' (ratio/division colon) or fractions
 * - Italic styling for algebraic variables (x, y, a, b, c, v, t, S, P)
 * - Pure crisp white text for maximum legibility
 */
export const TextbookMath: React.FC<TextbookMathProps> = ({
  expression,
  size = 'md',
  className = '',
  inline = false
}) => {
  if (!expression) return null;

  // Font size classes mapping
  const sizeClasses = {
    sm: 'text-sm sm:text-base',
    md: 'text-base sm:text-lg',
    lg: 'text-xl sm:text-2xl md:text-3xl',
    xl: 'text-2xl sm:text-4xl md:text-5xl',
    '2xl': 'text-3xl sm:text-5xl md:text-6xl',
  };

  // Helper to check if a token is a variable
  const isVariable = (token: string) => {
    return /^[a-zA-Zа-яА-ЯіїєґІЇЄҐ]$/.test(token);
  };

  // Format a simple math segment (no fractions inside)
  const renderMathSegment = (str: string, keyPrefix: string): React.ReactNode => {
    // Replace computer symbols with authentic textbook typography
    let text = str
      .replace(/\\cdot/g, ' · ')
      .replace(/\\times/g, ' · ')
      .replace(/\\div/g, ' ∶ ')
      .replace(/\*/g, ' · ')
      .replace(/\^0/g, '⁰')
      .replace(/\^1/g, '¹')
      .replace(/\^2/g, '²')
      .replace(/\^3/g, '³')
      .replace(/\^4/g, '⁴')
      .replace(/\^5/g, '⁵')
      .replace(/\^6/g, '⁶')
      .replace(/\^7/g, '⁷')
      .replace(/\^8/g, '⁸')
      .replace(/\^9/g, '⁹')
      .replace(/\^n/g, 'ⁿ')
      .replace(/\^k/g, 'ᵏ')
      .replace(/\^m/g, 'ᵐ')
      .replace(/\^-1/g, '⁻¹')
      .replace(/<=/g, ' ≤ ')
      .replace(/>=/g, ' ≥ ')
      .replace(/!=/g, ' ≠ ')
      .replace(/=>/g, ' ⇒ ')
      .replace(/->/g, ' → ')
      .replace(/\+-/g, ' ± ')
      .replace(/([0-9a-zA-Zа-яА-ЯіїєґІЇЄҐ\)\s])-([0-9a-zA-Zа-яА-ЯіїєґІЇЄҐ\(\s])/g, '$1 − $2');

    // Split text into tokens: numbers, variables, operators, roots, and text
    // Example: "y = 3 · 4 − 5" or "5a³ − 20a" or "√16" or "16x²"
    const tokens = text.split(/([0-9]+[a-zA-Zа-яА-ЯіїєґІЇЄҐ⁰¹²³⁴⁵⁶⁷⁸⁹ⁿᵏᵐ⁻]*|[a-zA-Zа-яА-ЯіїєґІЇЄҐ][⁰¹²³⁴⁵⁶⁷⁸⁹ⁿᵏᵐ⁻]*|√[0-9a-zA-Zа-яА-ЯіїєґІЇЄҐ⁰¹²³⁴⁵⁶⁷⁸⁹ⁿᵏᵐ⁻]+|[+\-−=·:∶±≤≥≠⇒→,()]|\s+)/g).filter(Boolean);

    return (
      <span key={keyPrefix} className="inline-flex items-center flex-wrap align-middle">
        {tokens.map((token, i) => {
          // Whitespace
          if (/^\s+$/.test(token)) {
            return <span key={`${keyPrefix}-sp-${i}`}>&nbsp;</span>;
          }

          // Square root: e.g. √16, √x, √(expr)
          if (token.startsWith('√')) {
            const radicand = token.slice(1);
            return (
              <span key={`${keyPrefix}-root-${i}`} className="inline-flex items-center align-middle mx-1">
                <span className="font-serif text-white text-[1.15em] leading-none select-none">√</span>
                <span className="border-t-2 border-white pt-0.5 px-0.5 leading-none font-bold text-white">
                  {radicand}
                </span>
              </span>
            );
          }

          // Variable with exponent: e.g. a², x³, y⁴, х², у³, m²
          if (/^[a-zA-Zа-яА-ЯіїєґІЇЄҐ][⁰¹²³⁴⁵⁶⁷⁸⁹ⁿᵏᵐ⁻]*$/.test(token)) {
            const variableChar = token[0];
            const exponent = token.slice(1);
            return (
              <span key={`${keyPrefix}-var-${i}`} className="text-white">
                <span className="font-serif italic font-semibold text-[1.05em] tracking-tight text-white">{variableChar}</span>
                {exponent && <sup className="font-sans font-bold text-[0.75em] text-white ml-0.5">{exponent}</sup>}
              </span>
            );
          }

          // Coefficient + Variable: e.g. 5a, 2x², 12a³b², 3х, 16x²
          if (/^[0-9]+[a-zA-Zа-яА-ЯіїєґІЇЄҐ]/.test(token)) {
            return (
              <span key={`${keyPrefix}-coeff-${i}`} className="text-white font-bold">
                {token.split(/([a-zA-Zа-яА-ЯіїєґІЇЄҐ][⁰¹²³⁴⁵⁶⁷⁸⁹ⁿᵏᵐ⁻]*)/g).map((sub, j) => {
                  if (/^[a-zA-Zа-яА-ЯіїєґІЇЄҐ][⁰¹²³⁴⁵⁶⁷⁸⁹ⁿᵏᵐ⁻]*$/.test(sub)) {
                    return (
                      <span key={j} className="font-serif italic font-semibold text-[1.05em] text-white">
                        {sub[0]}
                        {sub.slice(1) && <sup className="font-sans font-bold text-[0.75em] text-white">{sub.slice(1)}</sup>}
                      </span>
                    );
                  }
                  return <span key={j} className="font-sans font-bold text-white">{sub}</span>;
                })}
              </span>
            );
          }

          // Operators: +, −, =, ·, : etc.
          if (/[+\-−=·:∶±≤≥≠⇒→]/.test(token)) {
            return (
              <span key={`${keyPrefix}-op-${i}`} className="font-sans font-bold text-white mx-1 select-none">
                {token === '-' ? '−' : token === ':' ? '∶' : token}
              </span>
            );
          }

          // Parentheses
          if (/[()]/.test(token)) {
            return (
              <span key={`${keyPrefix}-par-${i}`} className="font-serif text-white/90 px-0.5 font-normal select-none">
                {token}
              </span>
            );
          }

          // Numbers and generic text
          return (
            <span key={`${keyPrefix}-txt-${i}`} className="font-sans font-bold text-white">
              {token}
            </span>
          );
        })}
      </span>
    );
  };

  // Strip unnecessary outer parentheses e.g. "(5x + 1)" -> "5x + 1"
  const cleanFractionTerm = (term: string) => {
    const trimmed = term.trim();
    if (trimmed.startsWith('(') && trimmed.endsWith(')')) {
      // Ensure matching balanced parentheses
      let depth = 0;
      let balanced = true;
      for (let i = 0; i < trimmed.length - 1; i++) {
        if (trimmed[i] === '(') depth++;
        if (trimmed[i] === ')') depth--;
        if (depth === 0) {
          balanced = false;
          break;
        }
      }
      if (balanced) {
        return trimmed.slice(1, -1).trim();
      }
    }
    return trimmed;
  };

  // Check if string contains fraction division "/"
  // Examples:
  // "(5x + 1) / (x - 7)"
  // "3a / 5b"
  // "y = (x² - 16) / (x - 4)"
  // "S / 2 = 14"
  const hasFraction = expression.includes('/');

  if (!hasFraction) {
    return (
      <span className={`text-white select-all font-bold ${sizeClasses[size]} ${className}`}>
        {renderMathSegment(expression, 'root')}
      </span>
    );
  }

  // Parse fractions.
  // We can split by top-level equations or operators (=, +, -, etc.), or detect fractions.
  // Support compound terms, parenthesized expressions with superscripts, signed expressions:
  // e.g. (x + 3), 16x², 2(x - 3), (m - n)², -(a - b), 5a³b²
  const termPattern = '[−\\-]?(?:\\([^\)]+\\)[⁰¹²³⁴⁵⁶⁷⁸⁹ⁿᵏᵐ⁻]*|[0-9a-zA-Zа-яА-ЯіїєґІЇЄҐ⁰¹²³⁴⁵⁶⁷⁸⁹ⁿᵏᵐ⁻]+)+';
  const fractionRegex = new RegExp(`(${termPattern})\\s*\\/\\s*(${termPattern})`, 'g');

  // If the whole string is a single fraction: e.g. "(5x + 1) / (x - 7)" or "3a / 5b"
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = fractionRegex.exec(expression)) !== null) {
    // Text before the fraction
    if (match.index > lastIndex) {
      const beforeText = expression.substring(lastIndex, match.index);
      parts.push(renderMathSegment(beforeText, `pre-${lastIndex}`));
    }

    const numStr = cleanFractionTerm(match[1]);
    const denStr = cleanFractionTerm(match[2]);

    // Authentic textbook vertical fraction:
    parts.push(
      <span
        key={`frac-${match.index}`}
        className="inline-flex flex-col items-center justify-center align-middle mx-1.5 my-1"
      >
        {/* Numerator (Чисельник) */}
        <span className="text-center px-1.5 pb-0.5 leading-tight font-bold text-white border-b-2 border-white w-full">
          {renderMathSegment(numStr, `num-${match.index}`)}
        </span>
        {/* Denominator (Знаменник) */}
        <span className="text-center px-1.5 pt-0.5 leading-tight font-bold text-white w-full">
          {renderMathSegment(denStr, `den-${match.index}`)}
        </span>
      </span>
    );

    lastIndex = match.index + match[0].length;
  }

  // Text after the last fraction
  if (lastIndex < expression.length) {
    const afterText = expression.substring(lastIndex);
    parts.push(renderMathSegment(afterText, `post-${lastIndex}`));
  }

  return (
    <span className={`text-white select-all font-bold inline-flex items-center flex-wrap align-middle ${sizeClasses[size]} ${className}`}>
      {parts}
    </span>
  );
};
