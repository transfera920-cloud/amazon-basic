import React from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, children, className = '' }) => {
  return (
    <section
      id={id}
      className={`scroll-mt-24 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:p-8 lg:p-10 shadow-lg backdrop-blur-sm transition-all duration-200 mb-12 ${className}`}
    >
      {children}
    </section>
  );
};
