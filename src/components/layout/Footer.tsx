import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="syllabus-overview" className="mt-6 sm:mt-8 border-t border-slate-800 bg-[#070e10] text-slate-400 text-xs sm:text-sm">
      <a
        href="https://amazon-hike.com/"
        className="block py-4 sm:py-5 px-4 sm:px-6 lg:px-8 text-center hover:bg-slate-900/40 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500"
        aria-label="前往亞馬遜國家山岳協會主網站"
      >
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} <span className="text-slate-300 font-medium hover:text-emerald-400 transition-colors">亞馬遜國家山岳協會</span>. 版權所有. 登山教育普及推廣專案.
        </p>
      </a>
    </footer>
  );
};
