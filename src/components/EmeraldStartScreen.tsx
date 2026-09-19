import React, { useState } from 'react';
import { sounds } from '../utils/soundEffects';
import { FloatingFormulas } from './FloatingFormulas';

interface EmeraldStartScreenProps {
  onStart: () => void;
}

export const EmeraldStartScreen: React.FC<EmeraldStartScreenProps> = ({ onStart }) => {
  const [isPressing, setIsPressing] = useState<boolean>(false);

  const handleClick = () => {
    if (isPressing) return;
    setIsPressing(true);
    sounds.playStart();

    // Smooth tactile delay allowing 3D button press animation to fully play
    setTimeout(() => {
      onStart();
    }, 280);
  };

  return (
    <div className="fixed inset-0 w-screen h-screen bg-black flex flex-col items-center justify-center select-none overflow-hidden z-50">
      
      {/* Background Floating Formulas */}
      <FloatingFormulas />

      {/* Dynamic CSS animations for 3D emerald gradient & glossy sweep */}
      <style>{`
        @keyframes emeraldGradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes shineSweep {
          0% { transform: translateX(-150%) skewX(-25deg); opacity: 0; }
          20% { opacity: 0.6; }
          40% { transform: translateX(250%) skewX(-25deg); opacity: 0; }
          100% { transform: translateX(250%) skewX(-25deg); opacity: 0; }
        }
        @keyframes ambientGreenGlow {
          0%, 100% {
            filter: drop-shadow(0 0 25px rgba(34, 197, 94, 0.45)) drop-shadow(0 20px 40px rgba(0, 0, 0, 0.9));
          }
          50% {
            filter: drop-shadow(0 0 45px rgba(52, 211, 153, 0.75)) drop-shadow(0 25px 50px rgba(0, 0, 0, 0.95));
          }
        }
        .emerald-flowing-btn {
          background: linear-gradient(
            115deg,
            #15803d 0%,
            #22c55e 20%,
            #4ade80 40%,
            #10b981 60%,
            #16a34a 80%,
            #22c55e 100%
          );
          background-size: 250% 250%;
          animation: emeraldGradientShift 4s ease infinite;
        }
        .emerald-3d-wrapper {
          animation: ambientGreenGlow 3s ease-in-out infinite;
        }
        .shine-light {
          animation: shineSweep 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>

      {/* 3D Button Container with depth base and tactile click physics */}
      <div 
        className={`emerald-3d-wrapper relative w-[85vw] max-w-[500px] z-10 transition-transform duration-200 ${
          isPressing ? 'scale-[0.98]' : ''
        }`}
      >
        
        {/* 3D Base / Pedestal shadow underneath */}
        <div className="absolute inset-0 translate-y-4 sm:translate-y-5 rounded-3xl bg-[#063b19] opacity-90 blur-[2px]" />

        {/* The 3D Interactive Button */}
        <button
          id="start-screen-button"
          onClick={handleClick}
          className={`group relative w-full h-[130px] sm:h-[155px] rounded-3xl cursor-pointer outline-none border-0 transition-all duration-150 transform focus:outline-none ${
            isPressing 
              ? 'translate-y-4 shadow-none' 
              : 'hover:-translate-y-1 active:translate-y-3.5'
          }`}
        >
          {/* 3D Bottom Edge / Side Bevel (gives solid 3D physical block depth) */}
          <div 
            className={`absolute inset-0 rounded-3xl bg-gradient-to-b from-[#0f5326] to-[#083316] transition-all duration-150 ${
              isPressing ? 'translate-y-1' : 'translate-y-3.5 sm:translate-y-4 group-active:translate-y-1'
            }`} 
          />

          {/* Main Top 3D Face with Flowing Iridescent Emerald Gradient */}
          <div className="emerald-flowing-btn absolute inset-0 rounded-3xl p-1 border-t-2 border-l border-emerald-200/50 border-r border-emerald-600/60 shadow-[inset_0_4px_12px_rgba(255,255,255,0.45),inset_0_-8px_16px_rgba(0,0,0,0.45)] flex items-center justify-center overflow-hidden">
            
            {/* Top Gloss Curve / 3D Specular Highlight */}
            <div className="absolute top-0 left-0 right-0 h-[45%] bg-gradient-to-b from-white/30 via-white/10 to-transparent rounded-t-3xl pointer-events-none" />

            {/* Diagonal Sweeping Light Reflection */}
            <div className="shine-light absolute -top-10 -bottom-10 w-28 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

            {/* 3D Embossed Label */}
            <div className="relative z-10 flex items-center justify-center gap-3">
              <span className="text-white font-black text-3xl sm:text-5xl tracking-[0.18em] drop-shadow-[0_3px_5px_rgba(0,0,0,0.7)] group-hover:tracking-[0.22em] transition-all duration-200">
                СТАРТ
              </span>
            </div>

            {/* Inner bottom subtle ambient lip */}
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-black/20 rounded-b-3xl pointer-events-none" />
          </div>
        </button>

      </div>

    </div>
  );
};
