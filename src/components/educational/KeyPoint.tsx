import React from 'react';
import { ShieldAlert, CheckCircle } from 'lucide-react';

interface KeyPointProps {
  title?: string;
  children: React.ReactNode;
  variant?: 'highlight' | 'emphasis' | 'philosophy';
}

export const KeyPoint: React.FC<KeyPointProps> = ({
  title = '核心重點',
  children,
  variant = 'highlight',
}) => {
  const styles = {
    highlight: 'border-emerald-500/60 bg-emerald-950/30 text-emerald-100',
    emphasis: 'border-cyan-500/60 bg-cyan-950/30 text-cyan-100',
    philosophy: 'border-amber-500/60 bg-amber-950/30 text-amber-100',
  };

  const badgeColors = {
    highlight: 'bg-emerald-900/80 text-emerald-300 border-emerald-500/40',
    emphasis: 'bg-cyan-900/80 text-cyan-300 border-cyan-500/40',
    philosophy: 'bg-amber-900/80 text-amber-300 border-amber-500/40',
  };

  return (
    <aside
      className={`my-6 rounded-xl border-l-4 p-4 sm:p-5 shadow-md ${styles[variant]} transition-colors`}
      role="note"
    >
      <div className="flex items-center gap-2 mb-2">
        <span
          className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded border ${badgeColors[variant]}`}
        >
          <CheckCircle className="w-3.5 h-3.5" />
          {title}
        </span>
      </div>
      <div className="text-sm sm:text-base font-medium leading-relaxed text-slate-200">
        {children}
      </div>
    </aside>
  );
};
