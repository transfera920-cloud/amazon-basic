import React, { useState, useEffect } from 'react';
import { Brand } from './Brand';
import { BookOpen, List, Printer, Compass, X } from 'lucide-react';
import { SECTIONS_META, SYLLABUS_OVERVIEW } from '../../data/chapter01Data';

interface HeaderProps {
  currentSectionId?: string;
}

export const Header: React.FC<HeaderProps> = ({ currentSectionId }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const progress = (totalScroll / windowHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-[#0b1315]/95 backdrop-blur-md transition-all">
      {/* Top Reading Progress Bar */}
      <div
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-300 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="頁面閱讀進度"
      />

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Official Brand */}
        <a href="#root" className="group flex items-center focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg">
          <Brand size="md" />
        </a>

        {/* Center Curriculum Label (Desktop) */}
        <div className="hidden lg:flex items-center gap-3 border-l border-slate-800 pl-5 text-xs text-slate-400">
          <span className="rounded bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 font-bold text-emerald-400">
            第一章 登山入門
          </span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-300">安全觀念與基本能力養成教材</span>
        </div>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Syllabus Menu Button */}
          <button
            type="button"
            onClick={() => setIsSyllabusModalOpen(true)}
            className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/80 px-2.5 py-1.5 text-xs font-semibold text-slate-200 hover:border-emerald-500/60 hover:bg-slate-700 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
            title="查看全系列登山教育章節目錄"
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">系列全章目次</span>
            <span className="sm:hidden">目錄</span>
          </button>

          {/* Quick Section Jump (Mobile / Tablet) */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex lg:hidden items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/80 px-2.5 py-1.5 text-xs font-semibold text-slate-200 hover:border-emerald-500/60 hover:bg-slate-700 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-expanded={isMenuOpen}
            aria-label="章節跳轉選單"
          >
            {isMenuOpen ? <X className="w-4 h-4 text-emerald-400" /> : <List className="w-4 h-4 text-emerald-400" />}
            <span className="text-xs">章節目次</span>
          </button>

          {/* Print Friendly Button (Desktop) */}
          <button
            type="button"
            onClick={handlePrint}
            className="hidden md:flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/60 px-2.5 py-1.5 text-xs text-slate-400 hover:text-slate-200 hover:border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
            title="列印或另存為 PDF 教材"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>教材列印</span>
          </button>
        </div>
      </div>

      {/* Mobile Section Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950/98 px-4 py-3 shadow-2xl backdrop-blur-lg animate-in slide-in-from-top-2 duration-200">
          <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
            <span className="font-bold text-emerald-400">本章 7 節快速導航</span>
            <span>點擊快速跳轉</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-[60vh] overflow-y-auto">
            {SECTIONS_META.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-2 rounded-lg p-2 text-xs transition-colors ${
                  currentSectionId === sec.id
                    ? 'bg-emerald-950/80 border border-emerald-500/60 text-emerald-300 font-bold'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <span className="font-mono font-bold text-emerald-400">{sec.index}</span>
                <span className="truncate">{sec.title}</span>
              </a>
            ))}
            <a
              href="#chapter-summary"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 rounded-lg p-2 text-xs font-bold text-amber-300 hover:bg-slate-800"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>本章核心觀念總結</span>
            </a>
          </div>
        </div>
      )}

      {/* Curriculum Syllabus Modal */}
      {isSyllabusModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-150">
          <div className="relative w-full max-w-2xl rounded-xl border border-slate-700 bg-slate-900 p-5 sm:p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs font-bold text-emerald-400">亞馬遜國家山岳協會</span>
                <h3 className="text-lg font-bold text-white">登山教育全系列大綱</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsSyllabusModalOpen(false)}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white"
                aria-label="關閉"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="mt-3 text-xs sm:text-sm text-slate-300">
              本系列為亞馬遜國家山岳協會官方標準登山教材，全系列各章皆沿用本母版設計規範與安全原則。
            </p>

            <div className="mt-4 space-y-2 max-h-[60vh] overflow-y-auto pr-1">
              {SYLLABUS_OVERVIEW.map((item) => (
                <div
                  key={item.chapter}
                  className={`rounded-lg p-3 border transition-colors ${
                    item.status === 'current'
                      ? 'border-emerald-500/70 bg-emerald-950/30'
                      : 'border-slate-800 bg-slate-950/50 opacity-80'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-bold ${item.status === 'current' ? 'text-emerald-400' : 'text-slate-400'}`}>
                      {item.title}
                    </span>
                    {item.status === 'current' ? (
                      <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                        正在研讀（母版）
                      </span>
                    ) : (
                      <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] text-slate-400">
                        依本母版規範後續推出
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-slate-300">{item.summary}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setIsSyllabusModalOpen(false)}
                className="rounded-lg bg-emerald-600 px-4 py-1.5 text-xs font-bold text-white hover:bg-emerald-500 transition-colors"
              >
                繼續閱讀第一章
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
