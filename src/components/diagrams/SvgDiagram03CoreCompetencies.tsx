import React from 'react';

/**
 * SVG 03: 登山者四項核心能力 (Core Competencies)
 * 中心：登山者
 * 四周：體能、技術、判斷、心理
 * 重要規則：「判斷」必須具有核心視覺地位（高亮、核心引領節點）。
 */
export const SvgDiagram03CoreCompetencies: React.FC = () => {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-700/80 bg-slate-900/90 p-3 sm:p-5 shadow-lg">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <div>
          <span className="text-xs font-mono font-semibold tracking-wider text-emerald-400">
            FIG 1.3・COMPETENCY-RADIAL
          </span>
          <h4 className="text-sm sm:text-base font-bold text-slate-100">
            登山者四大核心能力架構圖
          </h4>
        </div>
        <span className="rounded bg-emerald-950 border border-emerald-500/40 px-2 py-0.5 text-[11px] font-bold text-emerald-300">
          判斷力（Judgment）居上位樞紐地位
        </span>
      </div>

      <div className="w-full overflow-x-auto">
        <svg
          viewBox="0 0 840 440"
          className="w-full min-w-[660px] h-auto"
          role="img"
          aria-label="登山者四項核心能力架構圖：中心為登山者，四周為體能、技術、判斷與心理，判斷力擁有最高指揮地位"
        >
          <title>登山者四項核心能力：體能、技術、判斷、心理</title>
          <desc>
            中心為「登山者自主核心」，周圍環繞體能、技術、心理與判斷四個能力節點。其中「判斷」以特別亮眼的金色與翡翠雙色飾環標註，表示體能與裝備皆可補強，但判斷力決定整體生死與撤退。
          </desc>

          <defs>
            {/* Center Gradient */}
            <radialGradient id="center-rad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0f766e" />
              <stop offset="100%" stopColor="#111827" />
            </radialGradient>
            {/* Judgment Super Highlight */}
            <linearGradient id="judgment-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#047857" />
              <stop offset="100%" stopColor="#064e3b" />
            </linearGradient>
            <filter id="glow-gold" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#10b981" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* Connectors from Center */}
          <line x1="420" y1="220" x2="420" y2="90" stroke="#10b981" strokeWidth="3" />
          <line x1="420" y1="220" x2="160" y2="170" stroke="#38bdf8" strokeWidth="2" strokeDasharray="5 5" />
          <line x1="420" y1="220" x2="680" y2="170" stroke="#a855f7" strokeWidth="2" strokeDasharray="5 5" />
          <line x1="420" y1="220" x2="420" y2="350" stroke="#fbbf24" strokeWidth="2" strokeDasharray="5 5" />

          {/* Outer Harmony Orbit */}
          <ellipse cx="420" cy="220" rx="300" ry="160" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="6 6" />

          {/* 1. TOP NODE: 判斷 (JUDGMENT) - HIGHEST PROMINENCE */}
          <g transform="translate(300, 20)" filter="url(#glow-gold)">
            <rect
              width="240"
              height="105"
              rx="12"
              fill="url(#judgment-grad)"
              stroke="#34d399"
              strokeWidth="2.5"
            />
            <rect x="75" y="10" width="90" height="20" rx="4" fill="#022c22" />
            <text x="120" y="24" fill="#34d399" fontSize="10" fontWeight="800" textAnchor="middle">
              ★ 最核心決策能力
            </text>
            <text x="120" y="55" fill="#ffffff" fontSize="22" fontWeight="900" textAnchor="middle">
              判 斷 (Judgment)
            </text>
            <text x="120" y="74" fill="#d1fae5" fontSize="12" textAnchor="middle">
              面對天候、體力、時間變化的決策
            </text>
            <text x="120" y="92" fill="#a7f3d0" fontSize="11" fontWeight="700" textAnchor="middle">
              何時該走、何時該停、何時該撤退
            </text>
          </g>

          {/* 2. LEFT NODE: 體能 (FITNESS) */}
          <g transform="translate(40, 120)">
            <rect width="210" height="110" rx="10" fill="#0f172a" stroke="#0284c7" strokeWidth="1.5" />
            <rect x="12" y="12" width="60" height="18" rx="3" fill="#0369a1" />
            <text x="42" y="25" fill="#e0f2fe" fontSize="10" fontWeight="700" textAnchor="middle">基礎磐石</text>
            <text x="14" y="54" fill="#f8fafc" fontSize="18" fontWeight="800">體 能 (Fitness)</text>
            <text x="14" y="74" fill="#94a3b8" fontSize="11">• 心肺持久力與肌耐力</text>
            <text x="14" y="92" fill="#94a3b8" fontSize="11">• 負重數公斤連續攀爬</text>
          </g>

          {/* 3. RIGHT NODE: 技術 (TECHNICAL) */}
          <g transform="translate(590, 120)">
            <rect width="210" height="110" rx="10" fill="#0f172a" stroke="#8b5cf6" strokeWidth="1.5" />
            <rect x="12" y="12" width="60" height="18" rx="3" fill="#6d28d9" />
            <text x="42" y="25" fill="#ede9fe" fontSize="10" fontWeight="700" textAnchor="middle">實作操作</text>
            <text x="14" y="54" fill="#f8fafc" fontSize="18" fontWeight="800">技 術 (Skills)</text>
            <text x="14" y="74" fill="#94a3b8" fontSize="11">• 等高線地圖與方位判讀</text>
            <text x="14" y="92" fill="#94a3b8" fontSize="11">• 裝備使用、繩索與急救</text>
          </g>

          {/* 4. BOTTOM NODE: 心理 (PSYCHOLOGICAL) */}
          <g transform="translate(300, 310)">
            <rect width="240" height="100" rx="10" fill="#0f172a" stroke="#d97706" strokeWidth="1.5" />
            <rect x="14" y="12" width="60" height="18" rx="3" fill="#b45309" />
            <text x="44" y="25" fill="#fef3c7" fontSize="10" fontWeight="700" textAnchor="middle">自我紀律</text>
            <text x="14" y="52" fill="#f8fafc" fontSize="18" fontWeight="800">心 理 (Resilience)</text>
            <text x="14" y="72" fill="#94a3b8" fontSize="11">• 面對疲勞、恐懼保持冷靜</text>
            <text x="14" y="88" fill="#94a3b8" fontSize="11">• 不受虛榮驅使、嚴守撤退紀律</text>
          </g>

          {/* CENTER HUB: 登山者 */}
          <g transform="translate(420, 220)">
            <circle r="60" fill="url(#center-rad)" stroke="#14b8a6" strokeWidth="2.5" />
            <circle r="52" fill="none" stroke="#2dd4bf" strokeWidth="1" strokeDasharray="3 3" />
            <text x="0" y="-8" fill="#f0fdfa" fontSize="17" fontWeight="900" textAnchor="middle">
              登 山 者
            </text>
            <text x="0" y="12" fill="#5eead4" fontSize="11" fontWeight="600" textAnchor="middle">
              自主實踐主體
            </text>
            <text x="0" y="28" fill="#99f6e4" fontSize="9" textAnchor="middle">
              統合四種能力
            </text>
          </g>
        </svg>
      </div>

      <div className="mt-3 rounded-lg border border-emerald-600/40 bg-emerald-950/20 p-3 text-xs text-slate-200">
        <strong className="text-emerald-400">協會核心格言：</strong>
        體能可以透過平時鍛鍊提升，裝備可以花費預算購買，
        <strong className="text-white">但判斷失誤往往會讓所有的體能與頂級裝備在瞬間失去作用。</strong>
        懂得在正確時機停下並回頭，才是頂尖登山者的真正分水嶺。
      </div>
    </div>
  );
};
