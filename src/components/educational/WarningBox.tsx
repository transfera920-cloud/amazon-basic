import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface WarningBoxProps {
  title?: string;
  children: React.ReactNode;
}

export const WarningBox: React.FC<WarningBoxProps> = ({
  title = '山岳安全警示',
  children,
}) => {
  return (
    <div
      className="my-6 rounded-xl border border-rose-500/40 bg-rose-950/20 p-4 sm:p-5 text-rose-100 shadow-md"
      role="alert"
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="rounded bg-rose-900/60 p-1 text-rose-300">
          <AlertTriangle className="w-4 h-4" />
        </div>
        <h4 className="text-sm sm:text-base font-bold text-rose-200">
          {title}
        </h4>
      </div>
      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-1">
        {children}
      </div>
    </div>
  );
};
