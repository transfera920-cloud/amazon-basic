import React from 'react';

interface EducationalCardProps {
  badge?: string;
  badgeColor?: 'emerald' | 'cyan' | 'purple' | 'amber' | 'rose';
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export const EducationalCard: React.FC<EducationalCardProps> = ({
  badge,
  badgeColor = 'emerald',
  title,
  subtitle,
  children,
  footer,
}) => {
  const badgeClasses = {
    emerald: 'bg-emerald-950 text-emerald-300 border-emerald-500/40',
    cyan: 'bg-cyan-950 text-cyan-300 border-cyan-500/40',
    purple: 'bg-purple-950 text-purple-300 border-purple-500/40',
    amber: 'bg-amber-950 text-amber-300 border-amber-500/40',
    rose: 'bg-rose-950 text-rose-300 border-rose-500/40',
  };

  return (
    <div className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/80 p-5 shadow-md hover:border-slate-700 transition-colors">
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          {badge && (
            <span
              className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded border ${badgeClasses[badgeColor]}`}
            >
              {badge}
            </span>
          )}
          {subtitle && <span className="text-xs text-slate-400">{subtitle}</span>}
        </div>

        <h3 className="text-base sm:text-lg font-bold text-slate-100 tracking-tight mb-2">
          {title}
        </h3>

        <div className="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-2">
          {children}
        </div>
      </div>

      {footer && (
        <div className="mt-4 pt-3 border-t border-slate-800/80 text-xs text-slate-400">
          {footer}
        </div>
      )}
    </div>
  );
};
