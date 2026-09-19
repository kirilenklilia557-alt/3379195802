import React, { useState } from 'react';
import { 
  TrendingUp, 
  CheckCircle2, 
  XCircle, 
  Info, 
  Sliders, 
  Compass,
  Table as TableIcon
} from 'lucide-react';
import { sounds } from '../utils/soundEffects';

export const FunctionGrapher: React.FC = () => {
  const [funcMode, setFuncMode] = useState<'hyperbola' | 'parabola' | 'sqrt'>('hyperbola');
  const [kParam, setKParam] = useState<number>(6);

  // Point testing tool
  const [testPoint, setTestPoint] = useState<{ x: string; y: string }>({ x: '2', y: '3' });
  const [testResult, setTestResult] = useState<{ checked: boolean; isMatch: boolean; message: string }>({
    checked: false,
    isMatch: false,
    message: ''
  });

  // Graph dimensions
  const width = 500;
  const height = 400;
  const originX = width / 2;
  const originY = height / 2;
  const scale = 25; // 25 px per 1 unit

  // Generate paths based on mode
  const generatePaths = () => {
    if (funcMode === 'hyperbola') {
      let pathPos = '';
      let pathNeg = '';

      for (let px = 0.2; px <= 10; px += 0.1) {
        const py = kParam / px;
        const sx = originX + px * scale;
        const sy = originY - py * scale;
        if (sy >= 0 && sy <= height) {
          if (!pathPos) pathPos = `M ${sx} ${sy}`;
          else pathPos += ` L ${sx} ${sy}`;
        }
      }

      for (let px = -10; px <= -0.2; px += 0.1) {
        const py = kParam / px;
        const sx = originX + px * scale;
        const sy = originY - py * scale;
        if (sy >= 0 && sy <= height) {
          if (!pathNeg) pathNeg = `M ${sx} ${sy}`;
          else pathNeg += ` L ${sx} ${sy}`;
        }
      }

      return { pathPos, pathNeg };
    } else if (funcMode === 'parabola') {
      let path = '';
      for (let px = -4.5; px <= 4.5; px += 0.1) {
        const py = px * px;
        const sx = originX + px * scale;
        const sy = originY - py * scale;
        if (sy >= 0 && sy <= height) {
          if (!path) path = `M ${sx} ${sy}`;
          else path += ` L ${sx} ${sy}`;
        }
      }
      return { pathPos: path, pathNeg: '' };
    } else {
      let path = '';
      for (let px = 0; px <= 9.5; px += 0.05) {
        const py = Math.sqrt(px);
        const sx = originX + px * scale;
        const sy = originY - py * scale;
        if (sy >= 0 && sy <= height) {
          if (!path) path = `M ${sx} ${sy}`;
          else path += ` L ${sx} ${sy}`;
        }
      }
      return { pathPos: path, pathNeg: '' };
    }
  };

  const { pathPos, pathNeg } = generatePaths();

  const checkPointMembership = () => {
    sounds.playClick();
    const px = parseFloat(testPoint.x);
    const py = parseFloat(testPoint.y);

    if (isNaN(px) || isNaN(py)) {
      setTestResult({
        checked: true,
        isMatch: false,
        message: 'Введіть коректні числа для X та Y.'
      });
      sounds.playWrong();
      return;
    }

    let expectedY = 0;
    let valid = true;

    if (funcMode === 'hyperbola') {
      if (px === 0) {
        setTestResult({
          checked: true,
          isMatch: false,
          message: 'Точка не належить графіку: функція y = k/x не визначена при x = 0 (ділення на 0 неможливе!).'
        });
        sounds.playWrong();
        return;
      }
      expectedY = kParam / px;
    } else if (funcMode === 'parabola') {
      expectedY = px * px;
    } else {
      if (px < 0) {
        setTestResult({
          checked: true,
          isMatch: false,
          message: 'Точка не належить графіку: підкореневий вираз не може бути від’ємним (x ≥ 0).'
        });
        sounds.playWrong();
        return;
      }
      expectedY = Math.sqrt(px);
    }

    const matches = Math.abs(expectedY - py) < 0.001;
    if (matches) {
      sounds.playCorrect();
    } else {
      sounds.playWrong();
    }

    setTestResult({
      checked: true,
      isMatch: matches,
      message: matches
        ? `Правильно! Точка A(${px}; ${py}) НАЛЕЖИТЬ графіку, оскільки рівність виконується: f(${px}) = ${expectedY.toFixed(2)} = ${py}.`
        : `Точка A(${px}; ${py}) НЕ належить графіку. При x = ${px} значення f(x) = ${expectedY.toFixed(2)} ≠ ${py}.`
    });
  };

  const getTablePoints = () => {
    if (funcMode === 'hyperbola') {
      return [-4, -2, -1, 1, 2, 4].map(x => ({
        x,
        y: (kParam / x).toFixed(1)
      }));
    } else if (funcMode === 'parabola') {
      return [-3, -2, -1, 0, 1, 2, 3].map(x => ({
        x,
        y: (x * x).toString()
      }));
    } else {
      return [0, 1, 4, 9].map(x => ({
        x,
        y: Math.sqrt(x).toString()
      }));
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Header & Function Selector */}
      <div className="bg-[#111827] rounded-3xl p-6 border-2 border-slate-700/80 shadow-xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-green-400 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-green-400" />
              Інтерактивна лабораторія функцій 8 класу
            </span>
            <h2 className="text-xl font-black text-white mt-1">
              Дослідження графіків та властивостей функцій
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Обернена пропорційність (y = k/x), квадратична функція (y = x²) та корінь (y = √x)
            </p>
          </div>

          <div className="flex bg-[#182238] p-1.5 rounded-2xl border border-slate-700">
            <button
              onClick={() => {
                sounds.playClick();
                setFuncMode('hyperbola');
                setTestResult({ checked: false, isMatch: false, message: '' });
              }}
              className={`px-3 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                funcMode === 'hyperbola'
                  ? 'bg-[#58cc02] text-black shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              y = k / x (Гіпербола)
            </button>
            <button
              onClick={() => {
                sounds.playClick();
                setFuncMode('parabola');
                setTestResult({ checked: false, isMatch: false, message: '' });
              }}
              className={`px-3 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                funcMode === 'parabola'
                  ? 'bg-amber-400 text-black shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              y = x² (Парабола)
            </button>
            <button
              onClick={() => {
                sounds.playClick();
                setFuncMode('sqrt');
                setTestResult({ checked: false, isMatch: false, message: '' });
              }}
              className={`px-3 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                funcMode === 'sqrt'
                  ? 'bg-cyan-400 text-black shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              y = √x (Вітка)
            </button>
          </div>
        </div>

        {/* Hyperbola parameter k slider */}
        {funcMode === 'hyperbola' && (
          <div className="mt-5 p-4 rounded-2xl bg-[#182238] border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Sliders className="w-5 h-5 text-green-400" />
              <div>
                <span className="text-xs font-bold text-slate-300">Коефіцієнт k: </span>
                <span className="font-mono text-base font-black text-amber-300">{kParam}</span>
                <p className="text-[11px] text-slate-400">
                  {kParam > 0 
                    ? 'k > 0: вітки в I та III чвертях (спадна функція)' 
                    : 'k < 0: вітки в II та IV чвертях (зростаюча функція)'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-64">
              <span className="text-xs font-mono text-slate-400">-12</span>
              <input
                type="range"
                min="-12"
                max="12"
                step="1"
                value={kParam}
                onChange={(e) => {
                  const val = parseInt(e.target.value, 10);
                  setKParam(val === 0 ? 1 : val);
                }}
                className="w-full accent-green-500 cursor-pointer"
              />
              <span className="text-xs font-mono text-slate-400">+12</span>
            </div>
          </div>
        )}
      </div>

      {/* Main Visualizer Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* SVG Interactive Canvas */}
        <div className="lg:col-span-7 bg-[#111827] rounded-3xl p-5 border-2 border-slate-700/80 shadow-xl flex flex-col items-center justify-center">
          <div className="w-full flex items-center justify-between mb-2">
            <span className="text-xs font-black text-slate-400 uppercase tracking-wide">
              Координатна площина
            </span>
            <span className="text-xs font-mono font-black text-black bg-green-400 px-3 py-1 rounded-xl shadow-sm">
              {funcMode === 'hyperbola' ? `y = ${kParam} / x` : funcMode === 'parabola' ? 'y = x²' : 'y = √x'}
            </span>
          </div>

          <div className="relative border-2 border-slate-800 rounded-2xl bg-[#090d16] overflow-hidden shadow-inner max-w-full">
            <svg width={width} height={height} className="max-w-full h-auto">
              <defs>
                <pattern id="grid" width={scale} height={scale} patternUnits="userSpaceOnUse">
                  <path d={`M ${scale} 0 L 0 0 0 ${scale}`} fill="none" stroke="#1e293b" strokeWidth="1" />
                </pattern>
              </defs>

              {/* Grid */}
              <rect width={width} height={height} fill="url(#grid)" />

              {/* Axes */}
              <line x1="0" y1={originY} x2={width} y2={originY} stroke="#475569" strokeWidth="2" />
              <line x1={originX} y1="0" x2={originX} y2={height} stroke="#475569" strokeWidth="2" />

              {/* Axis Arrowheads & Labels */}
              <text x={width - 15} y={originY - 8} fill="#94a3b8" fontSize="12" fontWeight="bold">X</text>
              <text x={originX + 8} y="15" fill="#94a3b8" fontSize="12" fontWeight="bold">Y</text>
              <text x={originX - 12} y={originY + 14} fill="#64748b" fontSize="10">0</text>

              {/* Unit ticks */}
              {[-8, -6, -4, -2, 2, 4, 6, 8].map(num => (
                <g key={`x-${num}`}>
                  <line 
                    x1={originX + num * scale} 
                    y1={originY - 3} 
                    x2={originX + num * scale} 
                    y2={originY + 3} 
                    stroke="#475569" 
                  />
                  <text 
                    x={originX + num * scale - 4} 
                    y={originY + 14} 
                    fontSize="9" 
                    fill="#64748b"
                  >
                    {num}
                  </text>
                </g>
              ))}

              {[-6, -4, -2, 2, 4, 6].map(num => (
                <g key={`y-${num}`}>
                  <line 
                    x1={originX - 3} 
                    y1={originY - num * scale} 
                    x2={originX + 3} 
                    y2={originY - num * scale} 
                    stroke="#475569" 
                  />
                  <text 
                    x={originX - 18} 
                    y={originY - num * scale + 3} 
                    fontSize="9" 
                    fill="#64748b"
                  >
                    {num}
                  </text>
                </g>
              ))}

              {/* Render Graph Curves with vibrant neon glow */}
              {pathPos && (
                <path 
                  d={pathPos} 
                  fill="none" 
                  stroke="#58cc02" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  className="drop-shadow-[0_0_8px_rgba(88,204,2,0.6)]"
                />
              )}
              {pathNeg && (
                <path 
                  d={pathNeg} 
                  fill="none" 
                  stroke="#58cc02" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  className="drop-shadow-[0_0_8px_rgba(88,204,2,0.6)]"
                />
              )}

              {/* Highlight points */}
              {getTablePoints().map((pt, idx) => {
                const px = pt.x;
                const py = parseFloat(pt.y);
                if (isNaN(py)) return null;
                const sx = originX + px * scale;
                const sy = originY - py * scale;
                if (sy < 0 || sy > height || sx < 0 || sx > width) return null;
                return (
                  <circle
                    key={idx}
                    cx={sx}
                    cy={sy}
                    r="4"
                    fill="#f59e0b"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                  />
                );
              })}
            </svg>
          </div>
        </div>

        {/* Controls, Properties & Point Testing Tool */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Properties Card */}
          <div className="bg-[#111827] rounded-3xl p-5 border-2 border-slate-700/80 shadow-xl space-y-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-green-400 flex items-center gap-1.5">
              <Info className="w-4 h-4 text-green-400" />
              Властивості обраної функції
            </h3>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between p-2 rounded-xl bg-[#182238] border border-slate-700">
                <span className="text-slate-400 font-bold">Область визначення (D(f)):</span>
                <span className="font-mono font-black text-amber-300">
                  {funcMode === 'hyperbola' ? 'x ≠ 0 ((-∞; 0) ∪ (0; +∞))' : funcMode === 'parabola' ? '(-∞; +∞)' : '[0; +∞)'}
                </span>
              </div>

              <div className="flex justify-between p-2 rounded-xl bg-[#182238] border border-slate-700">
                <span className="text-slate-400 font-bold">Область значень (E(f)):</span>
                <span className="font-mono font-black text-amber-300">
                  {funcMode === 'hyperbola' ? 'y ≠ 0 ((-∞; 0) ∪ (0; +∞))' : funcMode === 'parabola' ? '[0; +∞)' : '[0; +∞)'}
                </span>
              </div>

              <div className="flex justify-between p-2 rounded-xl bg-[#182238] border border-slate-700">
                <span className="text-slate-400 font-bold">Розташування:</span>
                <span className="font-bold text-white">
                  {funcMode === 'hyperbola' 
                    ? (kParam > 0 ? 'I та III чверті' : 'II та IV чверті')
                    : funcMode === 'parabola' 
                    ? 'I та II чверті' 
                    : 'I чверть'}
                </span>
              </div>

              <div className="flex justify-between p-2 rounded-xl bg-[#182238] border border-slate-700">
                <span className="text-slate-400 font-bold">Зростання / Спадання:</span>
                <span className="font-bold text-white">
                  {funcMode === 'hyperbola' 
                    ? (kParam > 0 ? 'Спадає при x < 0 та x > 0' : 'Зростає при x < 0 та x > 0')
                    : funcMode === 'parabola'
                    ? 'Спадає при x ≤ 0, зростає при x ≥ 0'
                    : 'Зростає на всій області визначення'}
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Point Membership Tester */}
          <div className="bg-[#111827] rounded-3xl p-5 border-2 border-slate-700/80 shadow-xl space-y-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-cyan-400" />
              Тренажер: Чи належить точка графіку?
            </h3>
            <p className="text-xs text-slate-400">
              Введіть координати точки A(x; y) і перевірте, чи проходить через неї графік:
            </p>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 flex-1">
                <span className="text-xs font-mono font-black text-slate-400">X:</span>
                <input
                  type="text"
                  value={testPoint.x}
                  onChange={(e) => setTestPoint(prev => ({ ...prev, x: e.target.value }))}
                  className="w-full text-xs font-mono p-2.5 rounded-xl border border-slate-700 bg-[#182238] text-white focus:ring-2 focus:ring-green-500 focus:outline-hidden"
                  placeholder="2"
                />
              </div>

              <div className="flex items-center gap-1.5 flex-1">
                <span className="text-xs font-mono font-black text-slate-400">Y:</span>
                <input
                  type="text"
                  value={testPoint.y}
                  onChange={(e) => setTestPoint(prev => ({ ...prev, y: e.target.value }))}
                  className="w-full text-xs font-mono p-2.5 rounded-xl border border-slate-700 bg-[#182238] text-white focus:ring-2 focus:ring-green-500 focus:outline-hidden"
                  placeholder="3"
                />
              </div>

              <button
                onClick={checkPointMembership}
                className="px-4 py-2.5 bg-[#58cc02] hover:bg-[#46a302] text-black rounded-xl text-xs font-black border-b-2 border-green-700 transition-all cursor-pointer shrink-0"
              >
                Перевірити
              </button>
            </div>

            {testResult.checked && (
              <div className={`p-3 rounded-2xl border text-xs flex items-start gap-2 ${
                testResult.isMatch 
                  ? 'bg-green-950/40 border-green-500/40 text-green-300' 
                  : 'bg-rose-950/40 border-rose-500/40 text-rose-300'
              }`}>
                {testResult.isMatch ? (
                  <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                )}
                <span className="leading-relaxed">{testResult.message}</span>
              </div>
            )}
          </div>

          {/* Quick Value Table */}
          <div className="bg-[#111827] rounded-3xl p-4 border-2 border-slate-700/80 shadow-xl">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <TableIcon className="w-3.5 h-3.5" />
              Таблиця опорних точок (x; y)
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-center border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-slate-300 font-mono">
                    <th className="p-1.5 border border-slate-700">x</th>
                    {getTablePoints().slice(0, 6).map((pt, i) => (
                      <td key={i} className="p-1.5 border border-slate-700 font-bold">{pt.x}</td>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#182238] text-amber-300 font-mono font-bold">
                    <th className="p-1.5 border border-slate-700 bg-slate-800 text-slate-400">y</th>
                    {getTablePoints().slice(0, 6).map((pt, i) => (
                      <td key={i} className="p-1.5 border border-slate-700">{pt.y}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
