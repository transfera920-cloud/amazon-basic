import React, { useState } from 'react';
import { CheckSquare, Square, RefreshCw, CheckCircle2, AlertCircle } from 'lucide-react';

interface ChecklistItem {
  id: string;
  step: string;
  title: string;
  question: string;
  hint: string;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: 'chk-1',
    step: '01 路線',
    title: '路線等級符合自身能力',
    question: '我是否選擇了單日可往返、步道清楚且高度落差在自身負荷內的入門郊山？',
    hint: '切勿新手首次就挑戰中級山黑森林或高山縱走。',
  },
  {
    id: 'chk-2',
    step: '02 數據',
    title: '掌握距離、爬升與耗時',
    question: '我是否明確查清了總里程（km）、累積爬升（m）並預留至少 2 小時安全緩衝？',
    hint: '以每小時爬升約 250-300m 估算，切勿僅看平地時速。',
  },
  {
    id: 'chk-3',
    step: '03 裝備',
    title: '必備保命裝備一應俱全',
    question: '背包內是否備齊頭燈（確認有電＋備用電池）、雙截式雨衣雨褲、足量水與行進糧？',
    hint: '即便預計中午下山，頭燈與雨具仍為絕對不可省略之保命裝備。',
  },
  {
    id: 'chk-4',
    step: '04 天氣',
    title: '掌握最新山區氣象預報',
    question: '行前 48 小時內是否已查閱山區逐時降雨機率，並已設想遇大雨果斷取消的共識？',
    hint: '只要降雨機率過高或發布豪雨特報，立即延期，山永遠在那裡。',
  },
  {
    id: 'chk-5',
    step: '05 留守',
    title: '建立留守人與行程計畫書',
    question: '是否已將入山名單、預定軌跡、預計下山時間及逾時通報標準明確交給山下親友？',
    hint: '約定好若超過指定時間（如晚上 20:00）未聯絡，留守人啟動通報程序。',
  },
  {
    id: 'chk-6',
    step: '06 導航',
    title: '離線地圖與航跡備妥',
    question: '手機是否已下載離線地圖與本次路線 GPX 軌跡，並已開啟飛航省電模式確認定位正常？',
    hint: '山區無訊號是常態，切勿依賴線上 Google Maps。',
  },
  {
    id: 'chk-7',
    step: '07 停損',
    title: '設定明確折返時間（Turnaround Time）',
    question: '全隊是否已明訂今日折返時刻（如 12:30），無論是否登頂一律準時回頭？',
    hint: '折返是智慧與自律的展現，登頂只是路程的一半。',
  },
  {
    id: 'chk-8',
    step: '08 安全',
    title: '以全員安全回家為最高承諾',
    question: '我們是否認同「登山不是只追求登頂，安全回家才是完成一次山行」？',
    hint: '安全下山並平安返抵家門，才算完成這趟旅程。',
  },
];

export const InteractiveChecklist: React.FC = () => {
  const [checkedIds, setCheckedIds] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setCheckedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleReset = () => {
    setCheckedIds(new Set());
  };

  const isComplete = checkedIds.size === CHECKLIST_ITEMS.length;

  return (
    <div className="my-8 rounded-xl border border-slate-700/80 bg-slate-900/90 p-5 sm:p-6 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
        <div>
          <span className="text-xs font-mono font-bold tracking-wider text-emerald-400">
            PRACTICAL TOOL・INTERACTIVE CHECKLIST
          </span>
          <h3 className="text-base sm:text-lg font-bold text-slate-100">
            第一次登山行前 8 步驟自檢互動清單
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded border border-emerald-500/30">
            檢核進度：{checkedIds.size} / {CHECKLIST_ITEMS.length}
          </span>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200"
            title="重置清單"
          >
            <RefreshCw className="w-3 h-3" />
            <span>重置</span>
          </button>
        </div>
      </div>

      <p className="mt-3 text-xs sm:text-sm text-slate-300">
        出發前請與同行夥伴逐條逐項核對。只有 8 項全數落實，才符合亞馬遜國家山岳協會對自主登山者的行前安全合格要求。
      </p>

      <div className="mt-4 space-y-2.5">
        {CHECKLIST_ITEMS.map((item) => {
          const isChecked = checkedIds.has(item.id);

          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`cursor-pointer rounded-lg border p-3.5 transition-all select-none ${
                isChecked
                  ? 'border-emerald-500/60 bg-emerald-950/20 text-slate-100'
                  : 'border-slate-800 bg-slate-950/40 text-slate-300 hover:border-slate-700 hover:bg-slate-800/40'
              }`}
              role="checkbox"
              aria-checked={isChecked}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault();
                  toggleItem(item.id);
                }
              }}
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 shrink-0 text-emerald-400">
                  {isChecked ? (
                    <CheckSquare className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <Square className="w-5 h-5 text-slate-500" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-800 text-emerald-300">
                      {item.step}
                    </span>
                    <h4 className="text-sm font-bold text-slate-100">{item.title}</h4>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">{item.question}</p>
                  <p className="text-[11px] text-slate-400 mt-1 italic">
                    💡 提示：{item.hint}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {isComplete ? (
        <div className="mt-5 rounded-lg border border-emerald-500 bg-emerald-950/50 p-4 text-xs sm:text-sm text-emerald-200 flex items-center gap-3">
          <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
          <div>
            <strong className="text-white block text-sm">
              太棒了！已完成 8 項行前安全自檢
            </strong>
            您與隊伍已具備自主登山者的嚴謹自律態度。請在山行中持續貫徹隨時評估與安全回家的信念！
          </div>
        </div>
      ) : (
        <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
          <span>尚有未確認項目。在山林面前，沒有任何一項準備是可以打折或省略的。</span>
        </div>
      )}
    </div>
  );
};
