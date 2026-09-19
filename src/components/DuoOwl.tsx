import React from 'react';

export type DuoMood = 'happy' | 'excited' | 'thinking' | 'encouraging' | 'sad';

interface DuoOwlProps {
  mood?: DuoMood;
  size?: 'sm' | 'md' | 'lg';
  speech?: string;
  className?: string;
}

export const DuoOwl: React.FC<DuoOwlProps> = ({
  mood = 'happy',
  size = 'md',
  speech,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-14 h-14',
    md: 'w-24 h-24',
    lg: 'w-36 h-36'
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* SVG Duolingo-style Owl */}
      <div className={`relative shrink-0 ${sizeClasses[size]} transition-transform duration-300 hover:scale-105`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Owl Body - Vibrant Duolingo Green */}
          <ellipse cx="50" cy="54" rx="38" ry="40" fill="#58cc02" />
          
          {/* Lighter belly */}
          <ellipse cx="50" cy="62" rx="28" ry="26" fill="#89e219" />
          
          {/* Left Wing */}
          <path
            d={mood === 'excited' ? "M 12 40 C 4 30, 2 55, 16 64 Z" : "M 14 48 C 6 56, 12 72, 22 68 Z"}
            fill="#46a302"
          />
          {/* Right Wing */}
          <path
            d={mood === 'excited' ? "M 88 40 C 96 30, 98 55, 84 64 Z" : "M 86 48 C 94 56, 88 72, 78 68 Z"}
            fill="#46a302"
          />

          {/* Left Eye Mask / White Circle */}
          <ellipse cx="37" cy="40" rx="14" ry="14" fill="#ffffff" />
          {/* Right Eye Mask / White Circle */}
          <ellipse cx="63" cy="40" rx="14" ry="14" fill="#ffffff" />

          {/* Eye Pupils according to mood */}
          {mood === 'sad' ? (
            <>
              {/* Sad drooping eyes */}
              <circle cx="37" cy="42" r="6" fill="#2b3b4f" />
              <circle cx="63" cy="42" r="6" fill="#2b3b4f" />
              <ellipse cx="34" cy="50" rx="2" ry="4" fill="#60a5fa" opacity="0.8" /> {/* Tear */}
            </>
          ) : mood === 'thinking' ? (
            <>
              {/* Looking up thoughtfully */}
              <circle cx="39" cy="36" r="6" fill="#2b3b4f" />
              <circle cx="65" cy="36" r="6" fill="#2b3b4f" />
              <circle cx="41" cy="34" r="2" fill="#ffffff" />
              <circle cx="67" cy="34" r="2" fill="#ffffff" />
            </>
          ) : mood === 'excited' ? (
            <>
              {/* Big happy sparkly eyes */}
              <circle cx="37" cy="39" r="7" fill="#1b2a3a" />
              <circle cx="63" cy="39" r="7" fill="#1b2a3a" />
              <circle cx="35" cy="36" r="3" fill="#ffffff" />
              <circle cx="61" cy="36" r="3" fill="#ffffff" />
              <circle cx="39" cy="41" r="1.5" fill="#ffffff" />
              <circle cx="65" cy="41" r="1.5" fill="#ffffff" />
            </>
          ) : (
            <>
              {/* Normal friendly eyes */}
              <circle cx="37" cy="40" r="6" fill="#1b2a3a" />
              <circle cx="63" cy="40" r="6" fill="#1b2a3a" />
              <circle cx="35" cy="37" r="2.5" fill="#ffffff" />
              <circle cx="61" cy="37" r="2.5" fill="#ffffff" />
            </>
          )}

          {/* Orange Beak */}
          <polygon points="50,44 43,53 57,53" fill="#ff9600" />

          {/* Feet */}
          <ellipse cx="38" cy="94" rx="8" ry="4" fill="#ff9600" />
          <ellipse cx="62" cy="94" rx="8" ry="4" fill="#ff9600" />
          <circle cx="34" cy="95" r="3" fill="#e08500" />
          <circle cx="66" cy="95" r="3" fill="#e08500" />
        </svg>
      </div>

      {/* Speech Bubble */}
      {speech && (
        <div className="relative bg-[#1e293b] border-2 border-green-500/40 text-slate-100 text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-2xl shadow-lg max-w-xs sm:max-w-sm">
          {/* Arrow */}
          <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-[#1e293b]" />
          <p className="leading-snug">{speech}</p>
        </div>
      )}
    </div>
  );
};
