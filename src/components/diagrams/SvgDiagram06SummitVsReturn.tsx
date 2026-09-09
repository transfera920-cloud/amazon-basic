import React from 'react';

/**
 * SVG 06: 登頂與安全回家的關係
 * (Summiting vs Safe Return)
 * 表現：
 * 登頂 = 可選目標 (Optional Goal)
 * 安全回家 = 必須完成 (Mandatory Goal)
 */
export const SvgDiagram06SummitVsReturn: React.FC = () => {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-700/80 bg-slate-900/90 p-3 sm:p-5 shadow-lg">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <div>
          <span className="text-xs font-mono font-semibold tracking-wider text-emerald-400">
            FIG 1.6・PHILOSOPHY-DIALECTIC
          </span>
          <h4 className="text-sm sm:text-base font-bold text-slate-100">
            登頂目標與安全回家層級關係圖
          </h4>
        </div>
        <span className="rounded bg-slate-800 px-2 py-0.5 text-[11px] text-slate-300">
          核心價值優先權確立
        </span>
      </div>

      <div className="w-full overflow-x-auto">
        <svg
          viewBox="0 0 880 380"
          className="w-full min-w-[700px] h-auto"
          role="img"
          aria-label="登頂為可選目標與安全回家為必須完成目標的層級對比圖"
        >
          <title>登頂與安全回家的關係：可選目標 vs 必須完成</title>
          <desc>
            左側以山峰剪影標註山頂為「可選目標」，附帶停損撤退線；右側以巨大的安全防護盾牌標記安全回家為「必須完成」，強調登頂絕非成功的前提，安全歸返才是山行的唯一圓滿條件。
          </desc>

          <defs>
            <linearGradient id="opt-mountain" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="mand-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#065f46" />
              <stop offset="100%" stopColor="#022c22" />
            </linearGradient>
          </defs>

          {/* Left Block: 登頂 = 可選目標 */}
          <g transform="translate(30, 20)">
            <rect
              width="380"
              height="300"
              rx="12"
              fill="url(#opt-mountain)"
              stroke="#64748b"
              strokeWidth="1.5"
            />
            {/* Mountain peak silhouette */}
            <path
              d="M 60 260 L 190 80 L 320 260 Z"
              fill="#1e293b"
              stroke="#475569"
              strokeWidth="2"
            />
            {/* Snow cap / Summit flag */}
            <path d="M 160 120 L 190 80 L 220 120 Z" fill="#94a3b8" />
            <circle cx="190" cy="80" r="7" fill="#f59e0b" />

            {/* Summit Badge */}
            <rect x="130" y="45" width="120" height="24" rx="12" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" />
            <text x="190" y="61" fill="#fde68a" fontSize="11" fontWeight="700" textAnchor="middle">
              山頂 (Summit)
            </text>

            {/* Turnaround Line across mountain */}
            <line x1="100" y1="160" x2="280" y2="160" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="6 4" />
            <rect x="115" y="148" width="150" height="22" rx="4" fill="#7f1d1d" />
            <text x="190" y="163" fill="#fecaca" fontSize="11" fontWeight="800" textAnchor="middle">
              ▲ 撤退決策線 (Turnaround)
            </text>

            {/* Status pill */}
            <rect x="25" y="210" width="330" height="70" rx="8" fill="#0f172a" stroke="#334155" />
            <text x="40" y="235" fill="#f59e0b" fontSize="17" fontWeight="900">
              登 頂 ＝ 可 選 目 標
            </text>
            <text x="40" y="255" fill="#94a3b8" fontSize="11">
              • 僅在天候、體力、時限皆完美符合的前提下方可追求
            </text>
            <text x="40" y="271" fill="#ef4444" fontSize="11" fontWeight="600">
              • 遇異常隨時捨棄，放棄登頂非但不丟臉，更屬高階智慧
            </text>
          </g>

          {/* VS Divider */}
          <g transform="translate(420, 150)">
            <circle cx="20" cy="20" r="22" fill="#1e293b" stroke="#334155" strokeWidth="2" />
            <text x="20" y="26" fill="#94a3b8" fontSize="14" fontWeight="900" textAnchor="middle">VS</text>
          </g>

          {/* Right Block: 安全回家 = 必須完成 */}
          <g transform="translate(470, 20)">
            <rect
              width="380"
              height="300"
              rx="12"
              fill="url(#mand-grad)"
              stroke="#10b981"
              strokeWidth="2.5"
            />
            {/* Safety House / Home Shield Silhouette */}
            <g transform="translate(140, 60)">
              <path
                d="M 50 15 L 90 45 L 90 90 L 10 90 L 10 45 Z"
                fill="#047857"
                stroke="#34d399"
                strokeWidth="2.5"
              />
              <rect x="38" y="55" width="24" height="35" rx="3" fill="#022c22" />
              {/* Warm light from door */}
              <circle cx="50" cy="72" r="4" fill="#fbbf24" />
            </g>

            {/* Badge */}
            <rect x="115" y="20" width="150" height="26" rx="13" fill="#022c22" stroke="#34d399" strokeWidth="1.5" />
            <text x="190" y="37" fill="#a7f3d0" fontSize="12" fontWeight="800" textAnchor="middle">
              家門 (Safe Harbor)
            </text>

            {/* Status pill */}
            <rect x="25" y="180" width="330" height="100" rx="8" fill="#022c22" stroke="#059669" />
            <text x="40" y="208" fill="#34d399" fontSize="18" fontWeight="900">
              安 全 回 家 ＝ 必 須 完 成
            </text>
            <text x="40" y="230" fill="#d1fae5" fontSize="12" fontWeight="700">
              • 唯一不可妥協、無條件執行的終極承諾
            </text>
            <text x="40" y="248" fill="#a7f3d0" fontSize="11">
              • 安全返回登山口並返抵家門，這趟山行才算真正結束
            </text>
            <text x="40" y="266" fill="#6ee7b7" fontSize="11">
              • 留得青山在，不怕沒山爬；山永遠都在等候準備好的人
            </text>
          </g>

          {/* Bottom Summary Bar */}
          <g transform="translate(30, 335)">
            <rect x="0" y="0" width="820" height="34" rx="6" fill="#0f172a" stroke="#10b981" strokeWidth="1" />
            <text x="410" y="22" fill="#ecfdf5" fontSize="13" fontWeight="700" textAnchor="middle">
              亞馬遜國家山岳協會公理：登山不是只追求登頂，安全回家才是完成一次山行。
            </text>
          </g>
        </svg>
      </div>

      <div className="mt-3 rounded-lg border border-slate-700/60 bg-slate-800/60 p-3 text-xs text-slate-300 leading-relaxed">
        <span className="font-bold text-emerald-400">認知重塑：</span>
        山岳歷史上絕大多數的重大山難，起因並非技巧不足，而是源於「
        <strong className="text-rose-400">登頂強迫症（Summit Fever）</strong>
        」——將本屬可選的目標誤認為非完成不可，從而忽視天候轉壞與體能臨界。
        在該撤退時果敢轉身下山，才是具備真正山岳素養的登山者。
      </div>
    </div>
  );
};
