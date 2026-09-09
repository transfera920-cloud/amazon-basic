import React from 'react';

/**
 * SVG 02: 一般戶外活動 vs 登山
 * (Tourism vs Mountaineering)
 * 4 大關鍵維度：環境、救援、通訊、責任
 * 核心觀念：登山者必須在進入高風險環境前，主動做好準備、判斷與風險管理。
 */
export const SvgDiagram02TourismVsClimbing: React.FC = () => {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-700/80 bg-slate-900/90 p-3 sm:p-5 shadow-lg">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <div>
          <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400">
            FIG 1.2・CONTRAST-MATRIX
          </span>
          <h4 className="text-sm sm:text-base font-bold text-slate-100">
            一般戶外活動 vs 登山 本質差異比對圖
          </h4>
        </div>
        <span className="rounded bg-slate-800 px-2 py-0.5 text-[11px] text-slate-300">
          被動依賴 vs 主動自持
        </span>
      </div>

      <div className="w-full overflow-x-auto">
        <svg
          viewBox="0 0 860 380"
          className="w-full min-w-[680px] h-auto"
          role="img"
          aria-label="一般戶外活動與登山差異矩陣圖：從環境、救援、通訊與責任四維度剖析"
        >
          <title>一般戶外活動 vs 登山：四大維度本質差異對照</title>
          <desc>
            左欄列出一般戶外觀光在環境可控、救援及時、通訊普及與公共責任保護的特性；右欄明確點出登山的自然多變、救援耗時困難、通訊盲區及登山者必須主動承擔準備與決策責任。
          </desc>

          {/* Header Row */}
          <rect x="20" y="20" width="200" height="42" rx="6" fill="#1e293b" />
          <text x="120" y="46" fill="#94a3b8" fontSize="13" fontWeight="700" textAnchor="middle">評估維度</text>

          <rect x="235" y="20" width="300" height="42" rx="6" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1" />
          <text x="385" y="43" fill="#bfdbfe" fontSize="14" fontWeight="800" textAnchor="middle">一般戶外活動（公園・風景區）</text>
          <text x="385" y="56" fill="#93c5fd" fontSize="10" textAnchor="middle">外部設施健全・被動安全保護</text>

          <rect x="550" y="20" width="290" height="42" rx="6" fill="#064e3b" stroke="#10b981" strokeWidth="1" />
          <text x="695" y="43" fill="#a7f3d0" fontSize="14" fontWeight="800" textAnchor="middle">登山活動（中高海拔・自然山徑）</text>
          <text x="695" y="56" fill="#6ee7b7" fontSize="10" textAnchor="middle">自主管理・主動風險控制</text>

          {/* Row 1: 環境 */}
          <g transform="translate(0, 75)">
            <rect x="20" y="0" width="200" height="64" rx="6" fill="#0f172a" stroke="#334155" />
            <text x="40" y="28" fill="#f8fafc" fontSize="14" fontWeight="700">01 環境條件</text>
            <text x="40" y="48" fill="#94a3b8" fontSize="11">Environment</text>

            <rect x="235" y="0" width="300" height="64" rx="6" fill="#1e293b" stroke="#334155" />
            <text x="255" y="28" fill="#e2e8f0" fontSize="13" fontWeight="700">可控、有完整人工設施</text>
            <text x="255" y="48" fill="#94a3b8" fontSize="11">鋪裝路面、照明、遮蔽休憩所、防護欄杆</text>

            <rect x="550" y="0" width="290" height="64" rx="6" fill="#0f291e" stroke="#059669" strokeWidth="1.2" />
            <text x="570" y="28" fill="#ecfdf5" fontSize="13" fontWeight="700">自然原始、高度不確定</text>
            <text x="570" y="48" fill="#a7f3d0" fontSize="11">泥濘、落石、崩壁、暴雨強風、低溫急凍</text>
          </g>

          {/* Row 2: 救援 */}
          <g transform="translate(0, 150)">
            <rect x="20" y="0" width="200" height="64" rx="6" fill="#0f172a" stroke="#334155" />
            <text x="40" y="28" fill="#f8fafc" fontSize="14" fontWeight="700">02 緊急救援</text>
            <text x="40" y="48" fill="#94a3b8" fontSize="11">Search & Rescue</text>

            <rect x="235" y="0" width="300" height="64" rx="6" fill="#1e293b" stroke="#334155" />
            <text x="255" y="28" fill="#e2e8f0" fontSize="13" fontWeight="700">救護車輛多數能直接抵達</text>
            <text x="255" y="48" fill="#94a3b8" fontSize="11">醫療後送時效常在黃金 30 分鐘之內</text>

            <rect x="550" y="0" width="290" height="64" rx="6" fill="#0f291e" stroke="#059669" strokeWidth="1.2" />
            <text x="570" y="28" fill="#ecfdf5" fontSize="13" fontWeight="700">可能極度耗時、受天候制約</text>
            <text x="570" y="48" fill="#a7f3d0" fontSize="11">搜救需徒步數小時至數天，直升機受氣候限制</text>
          </g>

          {/* Row 3: 通訊 */}
          <g transform="translate(0, 225)">
            <rect x="20" y="0" width="200" height="64" rx="6" fill="#0f172a" stroke="#334155" />
            <text x="40" y="28" fill="#f8fafc" fontSize="14" fontWeight="700">03 通訊覆蓋</text>
            <text x="40" y="48" fill="#94a3b8" fontSize="11">Connectivity</text>

            <rect x="235" y="0" width="300" height="64" rx="6" fill="#1e293b" stroke="#334155" />
            <text x="255" y="28" fill="#e2e8f0" fontSize="13" fontWeight="700">市區訊號滿格、隨時可連外</text>
            <text x="255" y="48" fill="#94a3b8" fontSize="11">遇事故能即刻撥打 119 或向家人報平安</text>

            <rect x="550" y="0" width="290" height="64" rx="6" fill="#0f291e" stroke="#059669" strokeWidth="1.2" />
            <text x="570" y="28" fill="#ecfdf5" fontSize="13" fontWeight="700">常態性無通訊或微弱訊號</text>
            <text x="570" y="48" fill="#a7f3d0" fontSize="11">必須仰賴離線地圖、衛星通訊器與留守人制度</text>
          </g>

          {/* Row 4: 責任 */}
          <g transform="translate(0, 300)">
            <rect x="20" y="0" width="200" height="64" rx="6" fill="#0f172a" stroke="#334155" />
            <text x="40" y="28" fill="#f8fafc" fontSize="14" fontWeight="700">04 安全責任</text>
            <text x="40" y="48" fill="#94a3b8" fontSize="11">Responsibility</text>

            <rect x="235" y="0" width="300" height="64" rx="6" fill="#1e293b" stroke="#334155" />
            <text x="255" y="28" fill="#e2e8f0" fontSize="13" fontWeight="700">高度依賴管理單位與公共服務</text>
            <text x="255" y="48" fill="#94a3b8" fontSize="11">若有危險通常有警告封閉或保全巡視阻隔</text>

            <rect x="550" y="0" width="290" height="64" rx="6" fill="#1e3a2b" stroke="#10b981" strokeWidth="2" />
            <text x="570" y="28" fill="#34d399" fontSize="13" fontWeight="800">登山者對自身決策完全負責</text>
            <text x="570" y="48" fill="#a7f3d0" fontSize="11">進入前必須主動完成體能、裝備與風險審視</text>
          </g>
        </svg>
      </div>

      <div className="mt-3 rounded-lg border border-amber-500/40 bg-amber-950/30 p-3 text-xs text-amber-200/90">
        <span className="font-bold text-amber-400">觀念導正：</span>
        「自主承擔」並非指發生意外後只能自生自滅，而是強調：
        <strong>
          登山者必須在進入高風險環境前，主動做好充足準備、嚴謹路線研究與風險預防決策
        </strong>
        ，絕不能抱持「反正出事打電話叫直升機」的僥倖心態。
      </div>
    </div>
  );
};
