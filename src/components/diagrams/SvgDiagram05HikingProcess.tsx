import React from 'react';

/**
 * SVG 05: 第一次登山建議流程
 * (Your First Hike, Step by Step)
 * 8 大連續步驟：
 * 01 選擇適合路線 → 02 了解距離、高度、時間 → 03 準備裝備 → 04 確認天氣 →
 * 05 建立同行與留守資訊 → 06 執行山行 → 07 隨時評估 → 08 安全回家
 * 嚴格規範：最終節點必須是「安全回家」，不可把「登頂」設計為終點！
 */
export const SvgDiagram05HikingProcess: React.FC = () => {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-700/80 bg-slate-900/90 p-3 sm:p-5 shadow-lg">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <div>
          <span className="text-xs font-mono font-semibold tracking-wider text-emerald-400">
            FIG 1.5・PROCESS-PIPELINE
          </span>
          <h4 className="text-sm sm:text-base font-bold text-slate-100">
            初學者第一次山行標準 8 步驟循環圖
          </h4>
        </div>
        <span className="rounded bg-emerald-950 border border-emerald-500/40 px-2 py-0.5 text-[11px] font-bold text-emerald-300">
          以「安全回家」為唯一終點里程碑
        </span>
      </div>

      <div className="w-full overflow-x-auto">
        <svg
          viewBox="0 0 960 420"
          className="w-full min-w-[760px] h-auto"
          role="img"
          aria-label="第一次登山建議流程八步驟：從路線選擇到安全回家的完整閉環流程圖"
        >
          <title>第一次登山建議流程：八大步驟至安全回家</title>
          <desc>
            第一排步驟 01 選擇適合路線、02 了解距離高度時間、03 準備裝備、04 確認天氣；經由右側轉折引導至第二排 05 建立同行留守、06 執行山行、07 隨時評估、最後以醒目的金色翡翠徽章 08 安全回家結尾。
          </desc>

          <defs>
            <marker id="arrow-proc" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M1,1 L7,4 L1,7 Z" fill="#10b981" />
            </marker>
            <linearGradient id="home-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
          </defs>

          {/* Connectors Row 1 */}
          <line x1="195" y1="75" x2="250" y2="75" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#arrow-proc)" />
          <line x1="435" y1="75" x2="490" y2="75" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#arrow-proc)" />
          <line x1="675" y1="75" x2="730" y2="75" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#arrow-proc)" />

          {/* Turnaround curve from row 1 to row 2 */}
          <path
            d="M 825 130 C 930 130, 930 250, 825 250"
            fill="none"
            stroke="#10b981"
            strokeWidth="2.5"
            strokeDasharray="4 4"
            markerEnd="url(#arrow-proc)"
          />

          {/* Connectors Row 2 (Right to Left) */}
          <line x1="725" y1="280" x2="670" y2="280" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#arrow-proc)" />
          <line x1="485" y1="280" x2="430" y2="280" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#arrow-proc)" />
          <line x1="245" y1="280" x2="190" y2="280" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#arrow-proc)" />

          {/* Row 1 Steps */}
          {/* Step 01 */}
          <g transform="translate(15, 20)">
            <rect width="180" height="110" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
            <circle cx="28" cy="28" r="14" fill="#065f46" />
            <text x="28" y="33" fill="#a7f3d0" fontSize="12" fontWeight="800" textAnchor="middle">01</text>
            <text x="52" y="32" fill="#34d399" fontSize="11" fontWeight="700">行前評估</text>
            <text x="14" y="62" fill="#f8fafc" fontSize="15" fontWeight="800">選擇適合路線</text>
            <text x="14" y="84" fill="#94a3b8" fontSize="11">• 依自身體能循序漸進</text>
            <text x="14" y="99" fill="#94a3b8" fontSize="11">• 新手從入門郊山出發</text>
          </g>

          {/* Step 02 */}
          <g transform="translate(255, 20)">
            <rect width="180" height="110" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
            <circle cx="28" cy="28" r="14" fill="#065f46" />
            <text x="28" y="33" fill="#a7f3d0" fontSize="12" fontWeight="800" textAnchor="middle">02</text>
            <text x="52" y="32" fill="#34d399" fontSize="11" fontWeight="700">路線剖析</text>
            <text x="14" y="62" fill="#f8fafc" fontSize="15" fontWeight="800">距離・高度・時間</text>
            <text x="14" y="84" fill="#94a3b8" fontSize="11">• 查明總爬升與里程</text>
            <text x="14" y="99" fill="#94a3b8" fontSize="11">• 合理估時並預留緩衝</text>
          </g>

          {/* Step 03 */}
          <g transform="translate(495, 20)">
            <rect width="180" height="110" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
            <circle cx="28" cy="28" r="14" fill="#065f46" />
            <text x="28" y="33" fill="#a7f3d0" fontSize="12" fontWeight="800" textAnchor="middle">03</text>
            <text x="52" y="32" fill="#34d399" fontSize="11" fontWeight="700">裝備檢整</text>
            <text x="14" y="62" fill="#f8fafc" fontSize="15" fontWeight="800">準備必備裝備</text>
            <text x="14" y="84" fill="#94a3b8" fontSize="11">• 頭燈・雨衣・水・行進糧</text>
            <text x="14" y="99" fill="#94a3b8" fontSize="11">• 離線地圖載好備用電</text>
          </g>

          {/* Step 04 */}
          <g transform="translate(735, 20)">
            <rect width="180" height="110" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
            <circle cx="28" cy="28" r="14" fill="#065f46" />
            <text x="28" y="33" fill="#a7f3d0" fontSize="12" fontWeight="800" textAnchor="middle">04</text>
            <text x="52" y="32" fill="#34d399" fontSize="11" fontWeight="700">天候追蹤</text>
            <text x="14" y="62" fill="#f8fafc" fontSize="15" fontWeight="800">確認天氣動態</text>
            <text x="14" y="84" fill="#94a3b8" fontSize="11">• 前 2-3 日持續追蹤</text>
            <text x="14" y="99" fill="#94a3b8" fontSize="11">• 惡劣天候果斷取消</text>
          </g>

          {/* Row 2 Steps */}
          {/* Step 05 */}
          <g transform="translate(735, 225)">
            <rect width="180" height="110" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
            <circle cx="28" cy="28" r="14" fill="#075985" />
            <text x="28" y="33" fill="#bae6fd" fontSize="12" fontWeight="800" textAnchor="middle">05</text>
            <text x="52" y="32" fill="#38bdf8" fontSize="11" fontWeight="700">安全網絡</text>
            <text x="14" y="62" fill="#f8fafc" fontSize="15" fontWeight="800">同行與留守資訊</text>
            <text x="14" y="84" fill="#94a3b8" fontSize="11">• 兩人以上結伴成行</text>
            <text x="14" y="99" fill="#94a3b8" fontSize="11">• 計畫書與通報時間交留守</text>
          </g>

          {/* Step 06 */}
          <g transform="translate(495, 225)">
            <rect width="180" height="110" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
            <circle cx="28" cy="28" r="14" fill="#075985" />
            <text x="28" y="33" fill="#bae6fd" fontSize="12" fontWeight="800" textAnchor="middle">06</text>
            <text x="52" y="32" fill="#38bdf8" fontSize="11" fontWeight="700">實地前進</text>
            <text x="14" y="62" fill="#f8fafc" fontSize="15" fontWeight="800">執行山行行動</text>
            <text x="14" y="84" fill="#94a3b8" fontSize="11">• 依最慢隊友配速</text>
            <text x="14" y="99" fill="#94a3b8" fontSize="11">• 觀察體力、水分與路跡</text>
          </g>

          {/* Step 07 */}
          <g transform="translate(255, 225)">
            <rect width="180" height="110" rx="8" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2" />
            <circle cx="28" cy="28" r="14" fill="#4338ca" />
            <text x="28" y="33" fill="#e0e7ff" fontSize="12" fontWeight="800" textAnchor="middle">07</text>
            <text x="52" y="32" fill="#818cf8" fontSize="11" fontWeight="700">動態決斷</text>
            <text x="14" y="62" fill="#f8fafc" fontSize="15" fontWeight="800">隨時動態評估</text>
            <text x="14" y="84" fill="#cbd5e1" fontSize="11">• 設立折返時間（Turnaround）</text>
            <text x="14" y="99" fill="#fca5a5" fontSize="11" fontWeight="700">• 遇狀況毫不猶豫撤退</text>
          </g>

          {/* Step 08 - FINAL TERMINUS: 安全回家 */}
          <g transform="translate(15, 215)">
            <rect
              width="180"
              height="125"
              rx="10"
              fill="url(#home-grad)"
              stroke="#6ee7b7"
              strokeWidth="2.5"
            />
            <circle cx="28" cy="28" r="15" fill="#022c22" />
            <text x="28" y="34" fill="#a7f3d0" fontSize="13" fontWeight="900" textAnchor="middle">08</text>
            <rect x="52" y="16" width="112" height="20" rx="4" fill="#064e3b" />
            <text x="108" y="30" fill="#ecfdf5" fontSize="10" fontWeight="800" textAnchor="middle">★ 唯一終點標記</text>
            <text x="14" y="66" fill="#ffffff" fontSize="18" fontWeight="900">安全回家</text>
            <text x="14" y="88" fill="#d1fae5" fontSize="12" fontWeight="700">Safe Return Home</text>
            <text x="14" y="108" fill="#ecfdf5" fontSize="11">完成平安回報・山行圓滿</text>
          </g>

          {/* Bottom Banner */}
          <g transform="translate(15, 365)">
            <rect x="0" y="0" width="900" height="36" rx="6" fill="#1e293b" stroke="#334155" />
            <text x="450" y="23" fill="#cbd5e1" fontSize="13" fontWeight="600" textAnchor="middle">
              教學準則：把整套流程穩健走過一次，其教育價值遠大於單純攀登一座高山。
            </text>
          </g>
        </svg>
      </div>

      <div className="mt-3 rounded-lg border border-emerald-600/40 bg-emerald-950/20 p-3 text-xs text-slate-200">
        <strong className="text-emerald-400">流程教育精髓：</strong>
        登頂只不過是行進路線上的中間折返點。
        <strong className="text-white">唯有安全返回家中、解除留守人通報、讓家人安心，才代表一次山行的真正完成。</strong>
      </div>
    </div>
  );
};
