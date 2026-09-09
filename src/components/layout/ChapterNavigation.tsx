import React, { useEffect, useState } from 'react';
import { SECTIONS_META } from '../../data/chapter01Data';
import { ListFilter, CheckCircle2, ChevronRight, Award } from 'lucide-react';

interface ChapterNavigationProps {
  activeSectionId: string;
}

export const ChapterNavigation: React.FC<ChapterNavigationProps> = ({
  activeSectionId,
}) => {
  const [readSections, setReadSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (activeSectionId) {
      setReadSections((prev) => new Set(prev).add(activeSectionId));
    }
  }, [activeSectionId]);

  return (
    <nav
      aria-label="第一章章節目次導航"
      className="rounded-xl border border-slate-800 bg-slate-900/90 p-4 shadow-xl backdrop-blur-sm lg:sticky lg:top-20"
    >
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <ListFilter className="w-4 h-4 text-emerald-400" />
          <h2 className="text-xs sm:text-sm font-bold tracking-wide text-slate-200">
            本章 7 節目次導航
          </h2>
        </div>
        <span className="text-[11px] font-mono text-emerald-400 font-semibold">
          {readSections.size}/{SECTIONS_META.length} 已研讀
        </span>
      </div>

      <ul className="mt-3 space-y-1">
        {SECTIONS_META.map((sec) => {
          const isActive = activeSectionId === sec.id;
          const isRead = readSections.has(sec.id);

          return (
            <li key={sec.id}>
              <a
                href={`#${sec.id}`}
                className={`group flex items-center justify-between rounded-lg px-2.5 py-2 text-xs transition-all ${
                  isActive
                    ? 'bg-emerald-950/90 border border-emerald-500/60 text-emerald-300 font-bold shadow-sm'
                    : 'text-slate-400 hover:bg-slate-800/80 hover:text-slate-200 border border-transparent'
                }`}
                aria-current={isActive ? 'location' : undefined}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span
                    className={`font-mono text-[11px] font-bold px-1.5 py-0.5 rounded ${
                      isActive
                        ? 'bg-emerald-500 text-slate-950'
                        : 'bg-slate-800 text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    {sec.index}
                  </span>
                  <span className="truncate">{sec.title}</span>
                </div>

                <div className="flex items-center gap-1 shrink-0 ml-2">
                  {isRead && !isActive && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500/70" />
                  )}
                  <ChevronRight
                    className={`w-3.5 h-3.5 transition-transform ${
                      isActive ? 'text-emerald-400 translate-x-0.5' : 'text-slate-600 opacity-0 group-hover:opacity-100'
                    }`}
                  />
                </div>
              </a>
            </li>
          );
        })}

        {/* Chapter Summary Quick Link */}
        <li className="pt-2 border-t border-slate-800/80 mt-2">
          <a
            href="#chapter-summary"
            className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs font-bold transition-colors ${
              activeSectionId === 'chapter-summary'
                ? 'bg-amber-950/80 border border-amber-500/60 text-amber-300'
                : 'text-amber-400/90 hover:bg-amber-950/40 hover:text-amber-200 border border-transparent'
            }`}
          >
            <Award className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="truncate">本章三大核心觀念總結</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
