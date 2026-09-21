import React from 'react';
import { Clock, BookCheck, ShieldCheck } from 'lucide-react';
import { CHAPTER_01_META } from '../../data/chapter01Data';

export const ChapterHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-gradient-to-b from-slate-900/95 via-slate-900/80 to-[#0d1b1e] p-6 sm:p-8 lg:p-12 shadow-2xl mb-12">
      {/* Decorative Top Mountain Vector Contour Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10" aria-hidden="true">
        <svg viewBox="0 0 1000 400" className="w-full h-full object-cover">
          <path d="M0 350 L200 240 L450 310 L700 180 L880 260 L1000 190 L1000 400 L0 400 Z" fill="#10b981" />
          <path d="M0 380 L300 290 L600 340 L850 220 L1000 270 L1000 400 L0 400 Z" fill="#047857" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Chapter Title & H1 */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-100 tracking-tight leading-tight">
            {CHAPTER_01_META.title}
            <span className="sr-only">：</span>
            <span className="mt-2 block text-base sm:text-xl font-semibold tracking-normal text-slate-300">
              {CHAPTER_01_META.subtitle}
            </span>
          </h1>
          <p className="text-xs sm:text-sm font-mono text-slate-400 tracking-wide">
            {CHAPTER_01_META.englishTitle}
          </p>
        </div>

        {/* Intro Description */}
        <p className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
          {CHAPTER_01_META.description}
          登山並非單純的觀光或體力消耗，而是需要充足準備、客觀自我評估、扎實技術與嚴格心理紀律的自主探險。
          從第一步起，建立足以受用終身的正確登山思維。
        </p>

        {/* Metadata Info Pills */}
        <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-6 border-y border-slate-800/90 py-3 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-1.5">
            <BookCheck className="w-4 h-4 text-emerald-400" />
            <span>
              單元規模：<strong className="text-white">共 {CHAPTER_01_META.sectionsCount} 節</strong>
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span>
              研讀時長：<strong className="text-white">約 {CHAPTER_01_META.readingMinutes} 分鐘</strong>
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>
              對象導向：<strong className="text-white">{CHAPTER_01_META.targetAudience}</strong>
            </span>
          </div>
        </div>

        {/* Core Philosophy Highlight Card */}
        <div className="mt-6 rounded-xl border-2 border-emerald-500/50 bg-emerald-950/40 p-4 sm:p-5 shadow-lg">
          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-emerald-900/60 p-2 text-emerald-400 shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold tracking-wider text-emerald-400 uppercase">
                亞馬遜國家山岳協會 核心登山公理
              </span>
              <p className="text-lg sm:text-2xl font-black text-slate-100 tracking-tight mt-0.5 leading-snug">
                「{CHAPTER_01_META.corePhilosophy}」
              </p>
              <p className="mt-1 text-xs sm:text-sm text-emerald-200/90 leading-relaxed">
                山永遠在那裡，登頂只代表行程走到了一半。唯有全員毫髮無傷地返回登山口、踏入家門，這趟山行才是真正的圓滿與成功。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
