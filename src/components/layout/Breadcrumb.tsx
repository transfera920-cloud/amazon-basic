import React from 'react';
import { ChevronRight, Home, BookOpen } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items = [
    { label: '亞馬遜國家山岳協會', href: '#' },
    { label: '登山教育', href: '#syllabus-overview' },
    { label: '第一章 登山入門', current: true },
  ],
}) => {
  return (
    <nav
      aria-label="麵包屑導航"
      className="py-3 px-4 sm:px-6 rounded-lg bg-slate-900/50 border border-slate-800 text-xs sm:text-sm text-slate-400 mb-6"
    >
      <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2">
        {items.map((item, index) => {
          const isFirst = index === 0;
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-1.5 sm:gap-2">
              {!isFirst && (
                <ChevronRight
                  className="w-3.5 h-3.5 text-slate-600 shrink-0"
                  aria-hidden="true"
                />
              )}
              {isLast || item.current ? (
                <span
                  className="font-semibold text-emerald-400 truncate max-w-[220px] sm:max-w-none"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href || '#'}
                  className="hover:text-slate-200 transition-colors flex items-center gap-1"
                >
                  {isFirst && <Home className="w-3.5 h-3.5 shrink-0 text-emerald-500/80" />}
                  {index === 1 && <BookOpen className="w-3.5 h-3.5 shrink-0 text-cyan-500/80" />}
                  <span>{item.label}</span>
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
