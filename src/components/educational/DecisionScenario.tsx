import React, { useState } from 'react';
import { HelpCircle, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';

export const DecisionScenario: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | null>(null);

  return (
    <div className="my-8 rounded-xl border border-slate-700/80 bg-slate-900/90 p-5 sm:p-6 shadow-xl">
      <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-4">
        <HelpCircle className="w-5 h-5 text-emerald-400" />
        <div>
          <span className="text-xs font-mono font-bold text-emerald-400">
            SCENARIO SIMULATION・JUDGMENT TEST
          </span>
          <h3 className="text-base sm:text-lg font-bold text-slate-100">
            隨堂情境思考：面對臨界點，您的判斷是什麼？
          </h3>
        </div>
      </div>

      <div className="rounded-lg bg-slate-950/70 p-4 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
        <strong className="text-slate-100 block mb-1">【山區現場情境】</strong>
        此時已是下午 13:45，比預設的折返時間（13:30）遲了 15 分鐘。天空中原本的薄雲迅速凝聚成深灰色濃霧，氣溫明顯驟降並開始飄下細雨。
        指針地圖顯示，距離山頂三角點僅剩最後約 20 分鐘路程。同行隊友有一人腳步明顯遲緩沈重，但表示「差一點點而已，我還可以撐」。
      </div>

      <div className="space-y-3">
        {/* Option A */}
        <button
          type="button"
          onClick={() => setSelectedOption('A')}
          className={`w-full text-left rounded-lg p-3.5 border text-xs sm:text-sm transition-all ${
            selectedOption === 'A'
              ? 'border-rose-500 bg-rose-950/30 text-rose-100'
              : 'border-slate-800 bg-slate-950/40 text-slate-300 hover:bg-slate-800'
          }`}
        >
          <div className="flex items-center justify-between font-bold mb-1">
            <span className="text-rose-400">選項 A：</span>
            <span className="text-[11px] text-slate-400">「只差 20 分鐘，衝上去拍完照立刻下山」</span>
          </div>
          <p className="text-xs text-slate-300">
            都辛苦爬了 4 小時，放棄太可惜了。加快腳步衝刺登頂打卡，再抓緊時間跑下山。
          </p>
        </button>

        {/* Option B */}
        <button
          type="button"
          onClick={() => setSelectedOption('B')}
          className={`w-full text-left rounded-lg p-3.5 border text-xs sm:text-sm transition-all ${
            selectedOption === 'B'
              ? 'border-emerald-500 bg-emerald-950/40 text-emerald-100'
              : 'border-slate-800 bg-slate-950/40 text-slate-300 hover:bg-slate-800'
          }`}
        >
          <div className="flex items-center justify-between font-bold mb-1">
            <span className="text-emerald-400">選項 B：</span>
            <span className="text-[11px] text-emerald-300">「嚴守折返時間與隊員狀態，全員立即原路撤退」</span>
          </div>
          <p className="text-xs text-slate-300">
            天候轉壞、隊員體能耗竭、時間已逾時，風險已連鎖擴大。立即穿上雨衣、喝水補充熱量，全員轉身下撤。
          </p>
        </button>
      </div>

      {/* Feedback based on selection */}
      {selectedOption === 'A' && (
        <div className="mt-4 rounded-lg border border-rose-500/50 bg-rose-950/30 p-4 text-xs sm:text-sm text-rose-200 animate-in fade-in duration-200">
          <div className="flex items-center gap-2 font-bold text-rose-300 mb-1">
            <AlertTriangle className="w-4 h-4" />
            <span>危險判斷！這正是典型引發山難的「登頂強迫症」</span>
          </div>
          <p className="leading-relaxed">
            單看「只剩 20 分鐘」，但忽略了登頂拍照停留 10 分鐘，下山更需要 3.5 小時。
            再加上濃霧、濕滑降雨與隊友體力透支，下山步速將嚴重衰退，極可能在天黑後被迫摸黑且面臨失溫危機。
            「勉強繼續」常是讓可控小風險全面失控的起點。
          </p>
        </div>
      )}

      {selectedOption === 'B' && (
        <div className="mt-4 rounded-lg border border-emerald-500/60 bg-emerald-950/40 p-4 text-xs sm:text-sm text-emerald-200 animate-in fade-in duration-200">
          <div className="flex items-center gap-2 font-bold text-emerald-300 mb-1">
            <CheckCircle className="w-4 h-4" />
            <span>完全正確！這是具備成熟山岳素養的卓越決斷</span>
          </div>
          <p className="leading-relaxed">
            亞馬遜國家山岳協會公理：<strong>登山不是只追求登頂，安全回家才是完成一次山行。</strong>
            四項能力中，判斷力至高無上。在面對時間逾時、天候轉惡、隊友疲乏的三重危險訊號時，能夠抗拒登頂誘惑果斷撤退，才是真正合格的自主登山者。
          </p>
        </div>
      )}
    </div>
  );
};
