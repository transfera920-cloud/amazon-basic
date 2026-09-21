import React, { useState, useEffect } from 'react';
import { Brand } from './Brand';
import { List, X } from 'lucide-react';
import { SECTIONS_META } from '../../data/chapter01Data';

interface HeaderProps {
  currentSectionId?: string;
}

export const Header: React.FC<HeaderProps> = ({ currentSectionId }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <a href="https://amazon-hike.com/" className="group flex items-center focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg">
          <Brand size="md" />
        </a>

        {/* Right Action Controls (Mobile Section Jump) */}
        <div className="flex items-center gap-2 sm:gap-3">
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
                    ? 'bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 font-semibold'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                <span className="font-mono text-emerald-400 font-bold">{sec.index}</span>
                <span>{sec.title}</span>
              </a>
            ))}
            <a
              href="#summary-heading"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 rounded-lg p-2 text-xs text-slate-300 hover:bg-slate-900 hover:text-white border-t border-slate-800/80 mt-1 pt-2 font-medium"
            >
              <span className="font-mono text-emerald-400 font-bold">★</span>
              <span>本章核心觀念總結</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
