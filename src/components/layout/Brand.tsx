import React from 'react';

interface BrandProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

/**
 * 亞馬遜國家山岳協會 官方統一品牌元件
 * 嚴禁任何縮寫、英文替代或非授權翻譯
 */
export const Brand: React.FC<BrandProps> = ({ size = 'md', showTagline = true }) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const titleSizes = {
    sm: 'text-base font-bold',
    md: 'text-lg sm:text-xl font-extrabold tracking-tight',
    lg: 'text-2xl sm:text-3xl font-black tracking-tight',
  };

  return (
    <div className="flex items-center gap-2.5 sm:gap-3 select-none">
      {/* Association Official Mountain Crest SVG Emblem */}
      <div
        className={`${iconSizes[size]} relative flex items-center justify-center rounded-lg bg-emerald-950/80 border border-emerald-500/50 p-1.5 shadow-md shadow-emerald-950/40 text-emerald-400`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Mountain Ridge Layers */}
          <path
            d="M16 4L5 25H27L16 4Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 4V25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="2 2"
            className="text-emerald-300"
          />
          {/* Secondary Peak */}
          <path
            d="M22 14L28 25H16"
            stroke="#34d399"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Safe Foundation Base line */}
          <path
            d="M3 28H29"
            stroke="#059669"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* North Star / Safe Return Star */}
          <circle cx="16" cy="4" r="2" fill="#fbbf24" />
        </svg>
      </div>

      <div className="flex flex-col">
        <span className={`${titleSizes[size]} text-slate-100 flex items-center gap-1.5`}>
          亞馬遜國家山岳協會
        </span>
        {showTagline && (
          <span className="text-[11px] sm:text-xs text-emerald-400/90 font-medium tracking-wider">
            登山教育・安全觀念・自主能力
          </span>
        )}
      </div>
    </div>
  );
};
