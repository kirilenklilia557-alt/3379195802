import React, { useState } from 'react';
import { 
  BookmarkCheck, 
  Search, 
  Sparkles, 
  Grid, 
  Zap, 
  Copy, 
  Check 
} from 'lucide-react';
import { SQUARES_TABLE, POWERS_TABLE, FORMULAS_SUMMARY } from '../data/squaresTable';
import { sounds } from '../utils/soundEffects';

export const HandbookView: React.FC = () => {
  const [searchNum, setSearchNum] = useState<string>('');
  const [selectedCell, setSelectedCell] = useState<{ tens: number; unit: number; val: number } | null>(null);
  const [copiedFormula, setCopiedFormula] = useState<string | null>(null);

  // Search in table of squares
  const parsedSearch = parseInt(searchNum, 10);
  const highlightedSquare = !isNaN(parsedSearch) && parsedSearch >= 10 && parsedSearch <= 99
    ? {
        tens: Math.floor(parsedSearch / 10),
        unit: parsedSearch % 10,
        square: parsedSearch * parsedSearch
      }
    : null;

  const copyToClipboard = (text: string) => {
    sounds.playClick();
    navigator.clipboard?.writeText(text);
    setCopiedFormula(text);
    setTimeout(() => setCopiedFormula(null), 2000);
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="bg-[#111827] rounded-3xl p-6 border-2 border-slate-700/80 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <BookmarkCheck className="w-4 h-4 text-amber-400" />
              Довідкові матеріали з форзаца підручника
            </span>
            <h2 className="text-xl font-black text-white mt-1">
              Таблиця квадратів (10–99) та алгебраїчні формули
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Швидкий пошук квадратів чисел, степенів та формул скороченого множення
            </p>
          </div>

          {/* Quick Search */}
          <div className="flex items-center gap-2 bg-[#182238] border border-slate-700 rounded-2xl px-3 py-2">
            <Search className="w-4 h-4 text-slate-400" />
            <input
              type="number"
              min="10"
              max="99"
              placeholder="Число 10–99..."
              value={searchNum}
              onChange={(e) => setSearchNum(e.target.value)}
              className="text-xs bg-transparent focus:outline-hidden w-36 font-mono text-white placeholder:text-slate-500"
            />
            {highlightedSquare && (
              <span className="text-xs font-black text-black bg-amber-400 px-2 py-0.5 rounded-lg font-mono">
                {parsedSearch}² = {highlightedSquare.square}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Table of Squares 10-99 */}
      <div className="bg-[#111827] rounded-3xl p-6 border-2 border-slate-700/80 shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-black text-white flex items-center gap-2">
            <Grid className="w-4 h-4 text-amber-400" />
            Таблиця квадратів натуральних чисел від 10 до 99
          </h3>
          {selectedCell && (
            <span className="text-xs font-mono font-black text-black bg-amber-400 px-3 py-1 rounded-xl shadow-sm">
              {selectedCell.tens}{selectedCell.unit}² = {selectedCell.val}
            </span>
          )}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-center border-collapse">
            <thead>
              <tr className="bg-slate-900 text-slate-300 font-mono">
                <th className="p-2.5 border border-slate-700 bg-slate-800 font-black text-amber-400">Десятки \ Одиниці</th>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(unit => (
                  <th key={unit} className={`p-2.5 border border-slate-700 font-black ${
                    highlightedSquare?.unit === unit ? 'bg-amber-400 text-black font-extrabold' : ''
                  }`}>
                    {unit}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SQUARES_TABLE.map((row) => {
                const isRowHighlighted = highlightedSquare?.tens === row.tens;
                return (
                  <tr key={row.tens} className="font-mono">
                    <th className={`p-2 border border-slate-700 bg-slate-800 font-black ${
                      isRowHighlighted ? 'bg-amber-400 text-black font-extrabold' : 'text-slate-400'
                    }`}>
                      {row.tens}
                    </th>
                    {row.values.map((val, unitIdx) => {
                      const isExactTarget = isRowHighlighted && highlightedSquare?.unit === unitIdx;
                      return (
                        <td
                          key={unitIdx}
                          onClick={() => {
                            sounds.playClick();
                            setSelectedCell({ tens: row.tens, unit: unitIdx, val });
                          }}
                          className={`p-2 border border-slate-800 transition-all cursor-pointer select-none ${
                            isExactTarget
                              ? 'bg-amber-400 text-black font-black scale-105 shadow-md'
                              : isRowHighlighted || highlightedSquare?.unit === unitIdx
                              ? 'bg-amber-500/20 text-amber-300 font-bold'
                              : 'hover:bg-slate-800 text-slate-300'
                          }`}
                        >
                          {val}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Formulas & Properties */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Formulas of Shortened Multiplication & Rules */}
        <div className="bg-[#111827] rounded-3xl p-6 border-2 border-slate-700/80 shadow-xl space-y-4">
          <h3 className="text-sm font-black text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-green-400" />
            Основні формули курсу 8 класу
          </h3>

          <div className="space-y-3">
            {FORMULAS_SUMMARY.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl border border-slate-700 bg-[#182238] hover:border-slate-600 transition-colors"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-slate-300">{item.name}</span>
                  <button
                    onClick={() => copyToClipboard(item.formula)}
                    className="p-1 text-slate-400 hover:text-white rounded transition-colors cursor-pointer"
                    title="Копіювати формулу"
                  >
                    {copiedFormula === item.formula ? (
                      <Check className="w-3.5 h-3.5 text-green-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                <div className="text-sm font-black font-mono text-amber-300 mt-1">
                  {item.formula}
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Powers Table */}
        <div className="bg-[#111827] rounded-3xl p-6 border-2 border-slate-700/80 shadow-xl space-y-4">
          <h3 className="text-sm font-black text-white flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" />
            Таблиця степенів чисел (aⁿ)
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-center border-collapse">
              <thead>
                <tr className="bg-slate-900 text-slate-300 font-mono">
                  <th className="p-2 border border-slate-700 font-bold bg-slate-800">Основа</th>
                  <th className="p-2 border border-slate-700">a²</th>
                  <th className="p-2 border border-slate-700">a³</th>
                  <th className="p-2 border border-slate-700">a⁴</th>
                  <th className="p-2 border border-slate-700">a⁵</th>
                  <th className="p-2 border border-slate-700">a⁶</th>
                </tr>
              </thead>
              <tbody>
                {POWERS_TABLE.slice(0, 6).map((item) => (
                  <tr key={item.base} className="font-mono">
                    <th className="p-2 border border-slate-700 bg-slate-800 font-black text-amber-300">
                      {item.base}
                    </th>
                    {item.powers.slice(0, 5).map((p, pIdx) => (
                      <td key={pIdx} className="p-2 border border-slate-800 text-slate-300">
                        {p}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/40 text-amber-200 text-xs space-y-1">
            <span className="font-black block">Порада для швидкого обчислення:</span>
            <p className="text-slate-300">
              Запам’ятайте степені двійки: 2¹ = 2, 2² = 4, 2³ = 8, 2⁴ = 16, 2⁵ = 32, 2⁶ = 64, 2⁷ = 128, 2⁸ = 256, 2¹⁰ = 1024. Вони знадобляться при розкладанні на множники та роботі зі степенями з цілим показником!
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};
