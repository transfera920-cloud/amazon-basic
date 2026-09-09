import React from 'react';
import { Brand } from './Brand';
import { ShieldAlert, Heart, ExternalLink, ArrowUp, Mountain, PhoneCall } from 'lucide-react';
import { SYLLABUS_OVERVIEW } from '../../data/chapter01Data';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t border-slate-800 bg-[#070e10] text-slate-400 text-xs sm:text-sm">
      {/* Top Emergency Action Banner */}
      <div className="border-b border-slate-800/80 bg-slate-950/60 py-4 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-amber-300">
            <ShieldAlert className="w-4 h-4 shrink-0 text-amber-400" />
            <span>
              <strong>山區緊急求援警語：</strong>
              山區遇難受困時，請保持冷靜就地避難，手機無訊號時請撥打 <strong>112</strong> 手機緊急求救電話；有訊號請撥 <strong>119</strong>。
            </span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 shrink-0">
            <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
            <span>登山留守人制度是搜救黃金時間的第一道保險</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Brand size="md" />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md mt-2">
              亞馬遜國家山岳協會致力於推展專業、科學且嚴謹的登山教育體系。我們倡導以安全防範、風險評估、地圖判讀與環境倫理為基石，培養每一位山岳愛好者具備獨立自主的戶外行動能力。
            </p>
            <div className="rounded-lg border border-emerald-500/30 bg-emerald-950/30 p-3 text-xs text-emerald-200/90 max-w-md">
              <strong className="text-emerald-300">本站核心精神：</strong>
              登山不是只追求登頂，安全回家才是完成一次山行。
            </div>
          </div>

          {/* Curriculum Links Col */}
          <div id="syllabus-overview" className="space-y-2">
            <h3 className="text-xs font-bold font-mono tracking-wider text-slate-200 uppercase">
              登山教育系列全章
            </h3>
            <ul className="space-y-1.5 text-xs">
              {SYLLABUS_OVERVIEW.map((item) => (
                <li key={item.chapter}>
                  <a
                    href={item.chapter === 1 ? '#root' : '#syllabus-overview'}
                    className={`flex items-center justify-between py-1 transition-colors ${
                      item.chapter === 1
                        ? 'text-emerald-400 font-bold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span>{item.title}</span>
                    {item.chapter === 1 ? (
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-900/60 text-emerald-300">
                        當前母版
                      </span>
                    ) : (
                      <span className="text-[10px] text-slate-400">研製中</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Education Principles & Ethics Col */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold font-mono tracking-wider text-slate-200 uppercase">
              教材母版與規範
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-400">•</span>
                <span>全站一致品牌：亞馬遜國家山岳協會</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-400">•</span>
                <span>完全免費教育開源，不依賴任何付費服務</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-400">•</span>
                <span>原生 SVG 資訊圖表與無障礙網頁標準</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-400">•</span>
                <span>嚴守 LNT 無痕山林七大原則</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-400">•</span>
                <span>絕不把登頂或意志力視為安全保證</span>
              </li>
            </ul>

            <div className="pt-3">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/90 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
                <span>返回第一章頂部</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} 亞馬遜國家山岳協會. 版權所有. 登山教育普及推廣專案.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>官方登山教材母版 v1.0</span>
            <span>•</span>
            <span className="text-emerald-500 font-medium">安全回家・山行圓滿</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
