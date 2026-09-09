import React from 'react';
import { COMPARISON_DATA } from '../../data/chapter01Data';
import { TreePine, Mountain, ArrowRight } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <div className="my-6 space-y-4">
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-hidden rounded-xl border border-slate-800 bg-slate-900/90 shadow-md">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="border-b border-slate-800 bg-slate-950/80 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <tr>
              <th className="py-3.5 px-4 w-1/4">評估維度</th>
              <th className="py-3.5 px-4 w-3/8 text-sky-400">
                <span className="flex items-center gap-1.5">
                  <TreePine className="w-4 h-4" />
                  一般戶外活動（公園・風景區）
                </span>
              </th>
              <th className="py-3.5 px-4 w-3/8 text-emerald-400">
                <span className="flex items-center gap-1.5">
                  <Mountain className="w-4 h-4" />
                  登山活動（自然山徑・中高海拔）
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/80">
            {COMPARISON_DATA.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                <td className="py-3.5 px-4 font-bold text-slate-200">
                  {row.dimension}
                </td>
                <td className="py-3.5 px-4 text-slate-300">
                  <span className="inline-block mb-1 text-xs font-semibold px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-500/30">
                    {row.generalOutdoor.tag}
                  </span>
                  <p className="text-xs text-slate-400">{row.generalOutdoor.description}</p>
                </td>
                <td className="py-3.5 px-4 text-slate-200 bg-emerald-950/10">
                  <span className="inline-block mb-1 text-xs font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/40">
                    {row.mountaineering.tag}
                  </span>
                  <p className="text-xs text-slate-300">{row.mountaineering.description}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-3">
        {COMPARISON_DATA.map((row, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-slate-800 bg-slate-900/90 p-4 shadow-sm space-y-3"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-mono font-bold text-emerald-400">
                DIMENSION 0{idx + 1}
              </span>
              <h4 className="text-sm font-bold text-slate-100">{row.dimension}</h4>
            </div>

            {/* General outdoor */}
            <div className="rounded-lg bg-slate-950/60 p-3 border border-slate-800/60">
              <div className="flex items-center gap-1.5 text-xs font-bold text-sky-400 mb-1">
                <TreePine className="w-3.5 h-3.5" />
                <span>一般戶外活動</span>
              </div>
              <span className="inline-block text-[11px] font-semibold text-sky-300 mb-1">
                {row.generalOutdoor.tag}
              </span>
              <p className="text-xs text-slate-400">{row.generalOutdoor.description}</p>
            </div>

            {/* Mountaineering */}
            <div className="rounded-lg bg-emerald-950/30 p-3 border border-emerald-500/30">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 mb-1">
                <Mountain className="w-3.5 h-3.5" />
                <span>登山活動</span>
              </div>
              <span className="inline-block text-[11px] font-bold text-emerald-300 mb-1">
                {row.mountaineering.tag}
              </span>
              <p className="text-xs text-slate-300">{row.mountaineering.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
