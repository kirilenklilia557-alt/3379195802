import React from 'react';

interface FlashSpinCoinProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isSpinning?: boolean;
  count?: number;
  showCountBadge?: boolean;
}

export const FlashSpinCoin: React.FC<FlashSpinCoinProps> = ({
  size = 'md',
  isSpinning = false,
  count,
  showCountBadge = false
}) => {
  // Enhanced sizing with high-definition rendering
  const sizeStyles = {
    sm: {
      container: 'w-11 h-11',
      centerEight: 'text-lg',
      subDigit: 'text-[7px]',
      digitRadius: 36,
      border: 'border-2'
    },
    md: {
      container: 'w-16 h-16',
      centerEight: 'text-2xl',
      subDigit: 'text-[9px]',
      digitRadius: 37,
      border: 'border-[3px]'
    },
    lg: {
      container: 'w-24 h-24',
      centerEight: 'text-4xl',
      subDigit: 'text-xs',
      digitRadius: 38,
      border: 'border-4'
    },
    xl: {
      container: 'w-36 h-36',
      centerEight: 'text-6xl',
      subDigit: 'text-sm',
      digitRadius: 38,
      border: 'border-4'
    }
  };

  const currentSize = sizeStyles[size];
  const digits = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="relative inline-flex items-center justify-center select-none group">
      <style>{`
        @keyframes flashCoin3DRotate {
          0% {
            transform: perspective(700px) rotateY(0deg) scale(1);
          }
          50% {
            transform: perspective(700px) rotateY(180deg) scale(1.08);
          }
          100% {
            transform: perspective(700px) rotateY(360deg) scale(1);
          }
        }
        @keyframes coinGleamSweep {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes neonCoinPulse {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(234, 179, 8, 0.7)) drop-shadow(0 0 16px rgba(34, 197, 94, 0.4));
          }
          50% {
            filter: drop-shadow(0 0 18px rgba(250, 204, 21, 0.95)) drop-shadow(0 0 28px rgba(52, 211, 153, 0.8));
          }
        }
        .coin-metal-gradient {
          background: radial-gradient(circle at 35% 30%, #fffbeb 0%, #fde047 25%, #ca8a04 55%, #854d0e 85%, #451a03 100%);
        }
        .coin-inner-shield {
          background: radial-gradient(circle at 40% 35%, #10b981 0%, #047857 45%, #064e3b 80%, #022c22 100%);
        }
      `}</style>

      {/* Main 3D Coin Body */}
      <div
        className={`${currentSize.container} rounded-full relative flex items-center justify-center transition-all duration-300 ${
          isSpinning ? 'animate-[flashCoin3DRotate_0.75s_linear_infinite]' : 'group-hover:scale-110'
        }`}
        style={{
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.9), inset 0 2px 4px rgba(255, 255, 255, 0.9), inset 0 -3px 6px rgba(0, 0, 0, 0.8)',
          animation: isSpinning ? 'flashCoin3DRotate 0.7s cubic-bezier(0.4, 0, 0.2, 1) infinite' : 'neonCoinPulse 2.8s ease-in-out infinite'
        }}
      >
        {/* Outer Ribbed Gold Rim */}
        <div className="absolute inset-0 rounded-full coin-metal-gradient p-0.5 border-2 border-amber-300 shadow-inner">
          
          {/* Inner Groove Line */}
          <div className="w-full h-full rounded-full border border-amber-950/40 relative flex items-center justify-center">
            
            {/* 8 Medallion Digits Circular Ring */}
            {digits.map((digit, idx) => {
              const angle = (idx * 360) / 8 - 90; // Start from top
              const rad = (angle * Math.PI) / 180;
              const x = 50 + currentSize.digitRadius * Math.cos(rad);
              const y = 50 + currentSize.digitRadius * Math.sin(rad);

              return (
                <div
                  key={digit}
                  className={`absolute font-mono font-black text-amber-950 flex items-center justify-center rounded-full bg-amber-200/90 shadow-[0_1px_2px_rgba(0,0,0,0.6)] ${currentSize.subDigit}`}
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: 'translate(-50%, -50%)',
                    width: size === 'sm' ? '11px' : size === 'md' ? '14px' : size === 'lg' ? '20px' : '28px',
                    height: size === 'sm' ? '11px' : size === 'md' ? '14px' : size === 'lg' ? '20px' : '28px',
                    border: '1px solid #78350f'
                  }}
                >
                  {digit}
                </div>
              );
            })}

            {/* Central Emerald Core with Big 3D "8" */}
            <div 
              className="w-[58%] h-[58%] rounded-full coin-inner-shield border-2 border-amber-300 shadow-[inset_0_2px_4px_rgba(255,255,255,0.6),inset_0_-3px_5px_rgba(0,0,0,0.8)] flex items-center justify-center relative overflow-hidden"
            >
              {/* Radial light specular highlight */}
              <div className="absolute -top-1 left-1/4 w-3/4 h-2/3 bg-white/25 rounded-full blur-[1px] pointer-events-none" />

              {/* Big Embossed "8" */}
              <span 
                className={`${currentSize.centerEight} font-mono font-black text-amber-300 drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)] tracking-tighter relative z-10`}
                style={{
                  textShadow: '0 0 6px rgba(253, 224, 71, 0.8), 0 2px 2px #451a03'
                }}
              >
                8
              </span>
            </div>

          </div>
        </div>

      </div>

      {/* Floating Badge showing count if provided */}
      {showCountBadge && count !== undefined && (
        <span className="absolute -bottom-1 -right-2 bg-gradient-to-r from-amber-400 to-yellow-500 text-black border-2 border-black text-[10px] font-black px-1.5 py-0.2 rounded-full shadow-lg font-mono">
          x{count}
        </span>
      )}
    </div>
  );
};
