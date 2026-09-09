import React from 'react';

/**
 * SVG 04: 登山基本安全觀念 (Safety Fundamentals)
 * 中心：登山安全
 * 三個互相連結交互影響的節點：人員、裝備、環境
 * 核心概念：登山意外絕非單一因素造成，而是三者連鎖交互作用的結果。
 */
export const SvgDiagram04SafetyTriangle: React.FC = () => {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-700/80 bg-slate-900/90 p-3 sm:p-5 shadow-lg">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <div>
          <span className="text-xs font-mono font-semibold tracking-wider text-emerald-400">
            FIG 1.4・TRI-SYSTEM
          </span>
          <h4 className="text-sm sm:text-base font-bold text-slate-100">
            人・裝備・環境 交互安全動態模型
          </h4>
        </div>
        <span className="rounded bg-slate-800 px-2 py-0.5 text-[11px] text-slate-300">
          連鎖因果防範系統
        </span>
      </div>

      <div className="w-full overflow-x-auto">
        <svg
          viewBox="0 0 840 430"
          className="w-full min-w-[660px] h-auto"
          role="img"
          aria-label="人、裝備、環境三要素交互作用與中心登山安全之圖解"
        >
          <title>登山基本安全觀念：人員、裝備、環境三元互動圖</title>
          <desc>
            頂端為人員因素，左下為裝備因素，右下為環境因素。三者之間有雙向循環箭頭彼此影響，正中心為登山安全的核心盾牌。若任一環節失控，將引發連鎖反應。
          </desc>

          <defs>
            <marker id="arrow-emerald" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M1,1 L7,4 L1,7 Z" fill="#10b981" />
            </marker>
            <radialGradient id="safe-shield" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#047857" />
              <stop offset="100%" stopColor="#022c22" />
            </radialGradient>
          </defs>

          {/* Tri-connector paths with arrows */}
          {/* Top to Left */}
          <path
            d="M 370 120 L 220 220"
            fill="none"
            stroke="#10b981"
            strokeWidth="2.5"
            markerEnd="url(#arrow-emerald)"
          />
          <path
            d="M 230 240 L 380 140"
            fill="none"
            stroke="#34d399"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />

          {/* Top to Right */}
          <path
            d="M 470 120 L 620 220"
            fill="none"
            stroke="#10b981"
            strokeWidth="2.5"
            markerEnd="url(#arrow-emerald)"
          />
          <path
            d="M 610 240 L 460 140"
            fill="none"
            stroke="#34d399"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />

          {/* Left to Right */}
          <path
            d="M 280 320 L 560 320"
            fill="none"
            stroke="#10b981"
            strokeWidth="2.5"
            markerEnd="url(#arrow-emerald)"
          />
          <path
            d="M 560 335 L 280 335"
            fill="none"
            stroke="#34d399"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />

          {/* 1. NODE: 人員因素 (TOP) */}
          <g transform="translate(300, 20)">
            <rect width="240" height="110" rx="10" fill="#0f172a" stroke="#0ea5e9" strokeWidth="2" />
            <rect x="14" y="10" width="70" height="20" rx="4" fill="#0369a1" />
            <text x="49" y="24" fill="#e0f2fe" fontSize="11" fontWeight="700" textAnchor="middle">主體因素</text>
            <text x="14" y="55" fill="#f8fafc" fontSize="18" fontWeight="800">人員 (Human)</text>
            <text x="14" y="76" fill="#94a3b8" fontSize="11">• 體能不足、過度自信疲勞</text>
            <text x="14" y="93" fill="#94a3b8" fontSize="11">• 經驗欠缺、同儕盲從、隱匿不適</text>
          </g>

          {/* 2. NODE: 裝備因素 (BOTTOM-LEFT) */}
          <g transform="translate(30, 240)">
            <rect width="240" height="110" rx="10" fill="#0f172a" stroke="#a855f7" strokeWidth="2" />
            <rect x="14" y="10" width="70" height="20" rx="4" fill="#6b21a8" />
            <text x="49" y="24" fill="#f3e8ff" fontSize="11" fontWeight="700" textAnchor="middle">防護工具</text>
            <text x="14" y="55" fill="#f8fafc" fontSize="18" fontWeight="800">裝備 (Equipment)</text>
            <text x="14" y="76" fill="#94a3b8" fontSize="11">• 裝備不足、不會操作或失靈</text>
            <text x="14" y="93" fill="#94a3b8" fontSize="11">• 缺少頭燈/雨衣/保暖層/離線地圖</text>
          </g>

          {/* 3. NODE: 環境因素 (BOTTOM-RIGHT) */}
          <g transform="translate(570, 240)">
            <rect width="240" height="110" rx="10" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
            <rect x="14" y="10" width="70" height="20" rx="4" fill="#b45309" />
            <text x="49" y="24" fill="#fef3c7" fontSize="11" fontWeight="700" textAnchor="middle">自然邊界</text>
            <text x="14" y="55" fill="#f8fafc" fontSize="18" fontWeight="800">環境 (Environment)</text>
            <text x="14" y="76" fill="#94a3b8" fontSize="11">• 氣溫驟降、濃霧暴雨、崩塌路損</text>
            <text x="14" y="93" fill="#94a3b8" fontSize="11">• 低壓缺氧、無訊號帶、落石隱患</text>
          </g>

          {/* CENTER SHIELD: 登山安全 */}
          <g transform="translate(420, 240)">
            <circle r="66" fill="url(#safe-shield)" stroke="#10b981" strokeWidth="3" />
            <circle r="56" fill="none" stroke="#6ee7b7" strokeWidth="1" strokeDasharray="3 3" />
            <text x="0" y="-12" fill="#ecfdf5" fontSize="18" fontWeight="900" textAnchor="middle">
              登山安全
            </text>
            <text x="0" y="10" fill="#a7f3d0" fontSize="11" fontWeight="700" textAnchor="middle">
              事前預防體系
            </text>
            <text x="0" y="28" fill="#d1fae5" fontSize="10" textAnchor="middle">
              動態平衡平衡態
            </text>
          </g>

          {/* Bottom Banner */}
          <g transform="translate(100, 390)">
            <rect x="0" y="0" width="640" height="30" rx="6" fill="#1e293b" />
            <text x="320" y="20" fill="#cbd5e1" fontSize="12" fontWeight="600" textAnchor="middle">
              連鎖法則：低溫環境（環境） + 雨衣損壞（裝備） + 隱忍逞強（人員） = 致命失溫事故
            </text>
          </g>
        </svg>
      </div>

      <div className="mt-3 rounded-lg border border-slate-700/60 bg-slate-800/60 p-3 text-xs text-slate-300">
        <span className="font-bold text-emerald-400">安全核心詮釋：</span>
        安全絕不是「碰巧沒出事」，而是「
        <strong className="text-white">行前事先想過各種最壞情境，現場具備應對能力與備案</strong>
        」。行前規劃的嚴謹度，決定了你在山林中承受風險的安全上限。
      </div>
    </div>
  );
};
