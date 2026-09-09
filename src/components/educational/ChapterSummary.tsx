import React from 'react';
import { Award, ShieldCheck, HeartHandshake, Compass, Check } from 'lucide-react';
import { SvgDiagram06SummitVsReturn } from '../diagrams/SvgDiagram06SummitVsReturn';

export const ChapterSummary: React.FC = () => {
  return (
    <section
      id="chapter-summary"
      className="scroll-mt-24 rounded-2xl border-2 border-emerald-500/60 bg-gradient-to-b from-slate-900 via-slate-900 to-[#091517] p-6 sm:p-8 lg:p-12 shadow-2xl mb-12"
      aria-labelledby="summary-heading"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-5 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Award className="w-5 h-5 text-emerald-400" />
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
              CHAPTER 01・TAKEAWAYS
            </span>
          </div>
          <h2
            id="summary-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-100 tracking-tight"
          >
            第一章 核心總結與三項關鍵觀念
          </h2>
        </div>
        <span className="rounded-full bg-emerald-950 border border-emerald-500/50 px-3 py-1 text-xs font-bold text-emerald-300">
          亞馬遜國家山岳協會 必備核心信念
        </span>
      </div>

      <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mb-8">
        完成第一章的研讀後，初學者必須將以下三項核心觀念深植於心。往後每一趟行前規劃、裝備檢整、行進間的喘息與遭遇突發狀況的瞬間，這三項原則都將是你最重要的決策指針。
      </p>

      {/* Three Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Core 01 */}
        <div className="flex flex-col justify-between rounded-xl border border-slate-700 bg-slate-950/70 p-6 shadow-md">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-mono font-black text-emerald-400">01</span>
              <span className="rounded bg-emerald-950/80 px-2 py-0.5 text-[11px] font-bold text-emerald-300 border border-emerald-500/30">
                本質認識
              </span>
            </div>
            <h3 className="text-lg font-black text-slate-100 mb-2">
              登山不是一般旅遊
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              它是需要自主準備、嚴謹風險管理與高度自持的戶外活動。山林中沒有無所不在的護欄與即時救援，安全必須由登山者主動建立。
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-slate-800 text-xs font-semibold text-emerald-400">
            ✓ 拒絕盲目跟風與僥倖心態
          </div>
        </div>

        {/* Core 02 - HIGHLIGHTED */}
        <div className="flex flex-col justify-between rounded-xl border-2 border-emerald-500 bg-emerald-950/30 p-6 shadow-xl relative overflow-hidden">
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-mono font-black text-emerald-300">02</span>
              <span className="rounded bg-emerald-500 text-slate-950 px-2 py-0.5 text-[11px] font-extrabold">
                ★ 終極公理
              </span>
            </div>
            <h3 className="text-lg font-black text-white mb-2">
              安全比登頂重要
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-medium">
              登頂只是可選目標。
              <strong className="text-white underline decoration-emerald-400 decoration-2 underline-offset-4">
                安全回家才是完成一次山行。
              </strong>
              在設定好的折返時間勇敢撤退，比冒險登頂更加值得敬重。
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-emerald-500/40 text-xs font-extrabold text-emerald-300">
            ★ 山永遠在那裡，生命只有一次
          </div>
        </div>

        {/* Core 03 */}
        <div className="flex flex-col justify-between rounded-xl border border-slate-700 bg-slate-950/70 p-6 shadow-md">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-mono font-black text-emerald-400">03</span>
              <span className="rounded bg-slate-800 px-2 py-0.5 text-[11px] font-bold text-slate-300">
                關鍵樞紐
              </span>
            </div>
            <h3 className="text-lg font-black text-slate-100 mb-2">
              判斷能力是核心能力
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              體能可以透過鍛鍊補強，裝備可以透過預算添購。
              <strong className="text-slate-100">
                但唯有成熟的判斷力，才能決定什麼時候該走、該停、該撤退。
              </strong>
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-slate-800 text-xs font-semibold text-emerald-400">
            ✓ 敬畏山岳，嚴守行進紀律
          </div>
        </div>
      </div>

      {/* Embed SVG 06 to synthesize core philosophy */}
      <div className="mt-8">
        <SvgDiagram06SummitVsReturn />
      </div>

      {/* Graduation pledge for Chapter 1 */}
      <div className="mt-8 rounded-xl border border-emerald-500/40 bg-slate-950/80 p-5 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-xs font-mono font-bold text-emerald-400">
            CONGRATULATIONS・FOUNDATION COMPLETED
          </span>
          <h4 className="text-base sm:text-lg font-bold text-white">
            您已完成第一章「登山入門」觀念奠基
          </h4>
          <p className="text-xs text-slate-400">
            後續章節將深入行前規劃、等高線地圖、裝備打包與緊急避難技術。
          </p>
        </div>

        <a
          href="#syllabus-overview"
          className="shrink-0 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-emerald-500 transition-colors shadow-md"
        >
          <span>查看後續章節目錄</span>
          <Compass className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};
