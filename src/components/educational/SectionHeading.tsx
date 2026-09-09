import React from 'react';
import { Hash } from 'lucide-react';

interface SectionHeadingProps {
  index: string; // e.g. "01"
  title: string; // Chinese title
  englishSubtitle: string; // English subtitle
  id: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  index,
  title,
  englishSubtitle,
  id,
}) => {
  return (
    <header className="mb-6 border-b border-slate-800 pb-5">
      <div className="flex items-center gap-2 mb-1.5">
        <span className="font-mono text-xs font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/40 text-emerald-400">
          SECTION {index}
        </span>
        <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">
          {englishSubtitle}
        </span>
      </div>

      <div className="flex items-center justify-between group">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-100 tracking-tight flex items-center gap-3">
          <span>{index}</span>
          <span>{title}</span>
        </h2>

        <a
          href={`#${id}`}
          className="opacity-40 group-hover:opacity-100 text-slate-400 hover:text-emerald-400 p-1.5 rounded transition-opacity"
          aria-label={`直接連結到 ${title}`}
          title="複製或定位至本節"
        >
          <Hash className="w-5 h-5" />
        </a>
      </div>
    </header>
  );
};
