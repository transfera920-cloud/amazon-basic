import React from 'react';

/**
 * SVG 01: 登山活動分類 (Mountaineering Classification)
 * 郊山 → 中級山 → 高山 → 縱走／長程
 * 依據亞馬遜國家山岳協會規範：
 * 視覺上不暗示海拔是唯一標準，突顯路線複雜度、自持能力與風險層級。
 */
export const SvgDiagram01Classification: React.FC = () => {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-700/80 bg-slate-900/90 p-3 sm:p-5 shadow-lg">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <div>
          <span className="text-xs font-mono font-semibold tracking-wider text-emerald-400">
            FIG 1.1・INFO-CHART
          </span>
          <h4 className="text-sm sm:text-base font-bold text-slate-100">
            登山活動教育分類光譜圖
          </h4>
        </div>
        <span className="rounded bg-slate-800 px-2 py-0.5 text-[11px] text-slate-300">
          綜合風險與能力需求模型
        </span>
      </div>

      <div className="w-full overflow-x-auto">
        <svg
          viewBox="0 0 880 340"
          className="w-full min-w-[700px] h-auto"
          role="img"
          aria-label="登山活動分類資訊圖表：郊山、中級山、高山、縱走長程路線之海拔概況與風險光譜"
        >
          <title>登山活動分類光譜：郊山、中級山、高山、縱走長程路線</title>
          <desc>
            由左至右展示四種山岳類型：郊山（約1500公尺以下）、中級山（1500至3000公尺）、高山（3000公尺以上）、縱走長程路線（連續多日跨山系）。下方標示風險層級與地圖判讀、自主管理需求逐步攀升。
          </desc>

          <defs>
            <linearGradient id="grad-suburban" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#059669" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="grad-mid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="grad-alpine" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="grad-traverse" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="risk-axis" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="35%" stopColor="#06b6d4" />
              <stop offset="70%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>

          {/* Background Grid */}
          <line x1="40" y1="230" x2="840" y2="230" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="40" y1="160" x2="840" y2="160" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="40" y1="90" x2="840" y2="90" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />

          {/* Section 1: 郊山 */}
          <g transform="translate(40, 30)">
            <rect width="185" height="235" rx="10" fill="url(#grad-suburban)" stroke="#059669" strokeWidth="1.5" />
            <rect x="12" y="14" width="46" height="20" rx="4" fill="#065f46" />
            <text x="35" y="28" fill="#a7f3d0" fontSize="11" fontWeight="700" textAnchor="middle">01 類別</text>
            <text x="14" y="58" fill="#f8fafc" fontSize="18" fontWeight="800">郊山</text>
            <text x="14" y="78" fill="#94a3b8" fontSize="11">Suburban Mountain</text>

            <rect x="14" y="90" width="157" height="24" rx="4" fill="#1e293b" />
            <text x="22" y="106" fill="#34d399" fontSize="11" fontWeight="600">概估約 1,500m 以下</text>

            <text x="14" y="132" fill="#cbd5e1" fontSize="12" fontWeight="600">特性：</text>
            <text x="14" y="150" fill="#94a3b8" fontSize="11">• 單日往返、交通便利</text>
            <text x="14" y="168" fill="#94a3b8" fontSize="11">• 步道指標相對健全</text>
            <text x="14" y="186" fill="#94a3b8" fontSize="11">• 訊號覆蓋率相對較高</text>

            <rect x="14" y="200" width="157" height="22" rx="4" fill="#064e3b" />
            <text x="92" y="215" fill="#a7f3d0" fontSize="11" fontWeight="700" textAnchor="middle">自主風險：低 ~ 中度</text>
          </g>

          {/* Section 2: 中級山 */}
          <g transform="translate(245, 30)">
            <rect width="185" height="235" rx="10" fill="url(#grad-mid)" stroke="#0284c7" strokeWidth="1.5" />
            <rect x="12" y="14" width="46" height="20" rx="4" fill="#075985" />
            <text x="35" y="28" fill="#bae6fd" fontSize="11" fontWeight="700" textAnchor="middle">02 類別</text>
            <text x="14" y="58" fill="#f8fafc" fontSize="18" fontWeight="800">中級山</text>
            <text x="14" y="78" fill="#94a3b8" fontSize="11">Mid-Elevation Forest</text>

            <rect x="14" y="90" width="157" height="24" rx="4" fill="#1e293b" />
            <text x="22" y="106" fill="#38bdf8" fontSize="11" fontWeight="600">約 1,500 – 3,000m</text>

            <text x="14" y="132" fill="#cbd5e1" fontSize="12" fontWeight="600">特性：</text>
            <text x="14" y="150" fill="#94a3b8" fontSize="11">• 植被茂密、路跡易紊亂</text>
            <text x="14" y="168" fill="#94a3b8" fontSize="11">• 濕滑泥濘、溫差濕冷</text>
            <text x="14" y="186" fill="#f87171" fontSize="11" fontWeight="600">! 迷途風險為全類型最高</text>

            <rect x="14" y="200" width="157" height="22" rx="4" fill="#0c4a6e" />
            <text x="92" y="215" fill="#bae6fd" fontSize="11" fontWeight="700" textAnchor="middle">核心需求：地圖判讀</text>
          </g>

          {/* Section 3: 高山 */}
          <g transform="translate(450, 30)">
            <rect width="185" height="235" rx="10" fill="url(#grad-alpine)" stroke="#8b5cf6" strokeWidth="1.5" />
            <rect x="12" y="14" width="46" height="20" rx="4" fill="#5b21b6" />
            <text x="35" y="28" fill="#ddd6fe" fontSize="11" fontWeight="700" textAnchor="middle">03 類別</text>
            <text x="14" y="58" fill="#f8fafc" fontSize="18" fontWeight="800">高山</text>
            <text x="14" y="78" fill="#94a3b8" fontSize="11">Alpine Peaks (3000m+)</text>

            <rect x="14" y="90" width="157" height="24" rx="4" fill="#1e293b" />
            <text x="22" y="106" fill="#c084fc" fontSize="11" fontWeight="600">海拔 3,000 公尺以上</text>

            <text x="14" y="132" fill="#cbd5e1" fontSize="12" fontWeight="600">特性：</text>
            <text x="14" y="150" fill="#94a3b8" fontSize="11">• 低氣壓、高山症威脅</text>
            <text x="14" y="168" fill="#94a3b8" fontSize="11">• 天氣劇變、強風與低溫</text>
            <text x="14" y="186" fill="#94a3b8" fontSize="11">• 懸崖裸岩、地形險峻</text>

            <rect x="14" y="200" width="157" height="22" rx="4" fill="#4c1d95" />
            <text x="92" y="215" fill="#ddd6fe" fontSize="11" fontWeight="700" textAnchor="middle">核心需求：高山病應對</text>
          </g>

          {/* Section 4: 縱走與長程路線 */}
          <g transform="translate(655, 30)">
            <rect width="185" height="235" rx="10" fill="url(#grad-traverse)" stroke="#f59e0b" strokeWidth="1.5" />
            <rect x="12" y="14" width="46" height="20" rx="4" fill="#78350f" />
            <text x="35" y="28" fill="#fde68a" fontSize="11" fontWeight="700" textAnchor="middle">04 類別</text>
            <text x="14" y="58" fill="#f8fafc" fontSize="18" fontWeight="800">縱走長程</text>
            <text x="14" y="78" fill="#94a3b8" fontSize="11">Long Range Traverse</text>

            <rect x="14" y="90" width="157" height="24" rx="4" fill="#1e293b" />
            <text x="22" y="106" fill="#fbbf24" fontSize="11" fontWeight="600">連續多日・跨越山脊</text>

            <text x="14" y="132" fill="#cbd5e1" fontSize="12" fontWeight="600">特性：</text>
            <text x="14" y="150" fill="#94a3b8" fontSize="11">• 無補給自主營宿負重</text>
            <text x="14" y="168" fill="#94a3b8" fontSize="11">• 疲勞累積與天候持續性</text>
            <text x="14" y="186" fill="#94a3b8" fontSize="11">• 深處偏遠區、救援極難</text>

            <rect x="14" y="200" width="157" height="22" rx="4" fill="#78350f" />
            <text x="92" y="215" fill="#fde68a" fontSize="11" fontWeight="700" textAnchor="middle">核心需求：全方位自持</text>
          </g>

          {/* Bottom Spectrum Gradient Axis */}
          <g transform="translate(40, 280)">
            <rect x="0" y="5" width="800" height="8" rx="4" fill="url(#risk-axis)" />
            <text x="0" y="28" fill="#34d399" fontSize="12" fontWeight="700">← 基礎步法與體能入門</text>
            <text x="400" y="28" fill="#94a3b8" fontSize="12" textAnchor="middle">
              環境未知度、自主決策門檻與安全容錯率要求持續升高
            </text>
            <text x="800" y="28" fill="#f59e0b" fontSize="12" fontWeight="700" textAnchor="end">複合風險管理與身心耐力 →</text>
          </g>
        </svg>
      </div>

      <div className="mt-3 rounded-lg border border-slate-700/60 bg-slate-800/60 p-2.5 text-xs text-slate-300 leading-relaxed">
        <span className="font-semibold text-emerald-400">協會註記：</span>
        以上為教育上的概略分類，
        <strong className="text-slate-100">實際難度絕非僅由海拔高度決定</strong>
        ，仍需依路線陡度、地形地質、當季天候、行程長度與個人當前能力進行綜合嚴謹評估。
      </div>
    </div>
  );
};
