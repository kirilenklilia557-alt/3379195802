import React, { useState } from 'react';
import { Languages, Search, BookOpen } from 'lucide-react';
import { GLOSSARY } from '../data/glossaryData';

export const GlossaryView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredTerms = GLOSSARY.filter(t => 
    t.uk.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.de.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.fr.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-[#111827] rounded-3xl p-6 border-2 border-slate-700/80 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
              <Languages className="w-4 h-4" />
              Багатомовний математичний словничок
            </span>
            <h2 className="text-xl font-black text-white mt-1">
              Терміни з рубрики «Словничок» підручника (8 клас)
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Переклад математичних понять чотирма мовами: Українська, English, Deutsch, Français
            </p>
          </div>

          <div className="flex items-center gap-2 bg-[#182238] border border-slate-700 rounded-2xl px-3.5 py-2 w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="Пошук терміна..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="text-xs bg-transparent focus:outline-hidden w-full text-white placeholder:text-slate-500"
            />
          </div>
        </div>
      </div>

      {/* Grid of Glossary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTerms.map((term, idx) => (
          <div
            key={idx}
            className="p-5 bg-[#111827] rounded-3xl border-2 border-slate-700/80 shadow-xl hover:border-teal-500/60 transition-all space-y-3"
          >
            <div>
              <h3 className="text-base font-black text-white tracking-tight">
                {term.uk}
              </h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                {term.definition}
              </p>
            </div>

            {/* Translation grid */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800 text-xs">
              <div className="p-2.5 rounded-xl bg-[#182238] border border-slate-700/80">
                <span className="text-[10px] font-black text-teal-400 uppercase block">English</span>
                <span className="font-semibold text-slate-200 italic">{term.en}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#182238] border border-slate-700/80">
                <span className="text-[10px] font-black text-amber-400 uppercase block">Deutsch</span>
                <span className="font-semibold text-slate-200 italic">{term.de}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#182238] border border-slate-700/80">
                <span className="text-[10px] font-black text-rose-400 uppercase block">Français</span>
                <span className="font-semibold text-slate-200 italic">{term.fr}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredTerms.length === 0 && (
        <div className="p-12 text-center bg-[#111827] rounded-3xl border-2 border-slate-700 text-slate-400">
          <BookOpen className="w-10 h-10 mx-auto text-slate-600 mb-2" />
          <p className="text-sm font-bold text-slate-300">Термінів за вашим запитом не знайдено</p>
          <p className="text-xs mt-1">Спробуйте ввести інше математичне поняття</p>
        </div>
      )}
    </div>
  );
};
