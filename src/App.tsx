import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Breadcrumb } from './components/layout/Breadcrumb';
import { ChapterHero } from './components/layout/ChapterHero';
import { ChapterNavigation } from './components/layout/ChapterNavigation';
import { Footer } from './components/layout/Footer';

import { Section } from './components/educational/Section';
import { SectionHeading } from './components/educational/SectionHeading';
import { KeyPoint } from './components/educational/KeyPoint';
import { WarningBox } from './components/educational/WarningBox';
import { EducationalCard } from './components/educational/EducationalCard';
import { Comparison } from './components/educational/Comparison';
import { ChapterSummary } from './components/educational/ChapterSummary';
import { InteractiveChecklist } from './components/educational/InteractiveChecklist';
import { DecisionScenario } from './components/educational/DecisionScenario';

import { SvgDiagram01Classification } from './components/diagrams/SvgDiagram01Classification';
import { SvgDiagram02TourismVsClimbing } from './components/diagrams/SvgDiagram02TourismVsClimbing';
import { SvgDiagram03CoreCompetencies } from './components/diagrams/SvgDiagram03CoreCompetencies';
import { SvgDiagram04SafetyTriangle } from './components/diagrams/SvgDiagram04SafetyTriangle';
import { SvgDiagram05HikingProcess } from './components/diagrams/SvgDiagram05HikingProcess';

import {
  MOUNTAIN_CATEGORIES,
  COMMON_MISTAKES,
  HIKING_STEPS,
  MOUNTAIN_ETHICS,
  SECTIONS_META,
} from './data/chapter01Data';

export default function App() {
  const [activeSectionId, setActiveSectionId] = useState<string>('sec-01');

  // IntersectionObserver for active section highlight
  useEffect(() => {
    const sectionIds = [...SECTIONS_META.map((s) => s.id), 'chapter-summary'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSectionId(id);
            }
          });
        },
        {
          rootMargin: '-20% 0px -60% 0px',
          threshold: 0.1,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0b1315] text-[#e2e8f0] flex flex-col font-sans selection:bg-emerald-700 selection:text-white">
      {/* 1. Header (Sticky navigation, reading progress, brand) */}
      <Header currentSectionId={activeSectionId} />

      {/* Main Container */}
      <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 pb-16">
        {/* Breadcrumb Navigation */}
        <Breadcrumb />

        {/* Chapter 1 Hero with core philosophy banner */}
        <ChapterHero />

        {/* Two-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Main Reading Content Area (8 Cols on Desktop) */}
          <article className="lg:col-span-8 min-w-0">
            {/* ========================================================
                SECTION 01: 認識登山活動 (What is Mountaineering)
               ======================================================== */}
            <Section id="sec-01">
              <SectionHeading
                id="sec-01"
                index="01"
                title="認識登山活動"
                englishSubtitle="What is Mountaineering"
              />

              <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  登山是以「<strong>徒步進入山區、走完既定路線、安全返回</strong>
                  」為核心的戶外活動。它並非單純的風景區觀光或休閒散步，而是一場需要體能自持、獨立地圖判讀、客觀風險判斷與嚴謹行前準備的長時間自主行動。
                </p>
                <p>
                  在山林中，沒有鋪設整齊的柏油大道，也沒有隨叫隨到的支援人員。每一步的落腳、每一次的喘息與每一項抉擇，都考驗著登山者對自然法則的理解與自我身心狀態的掌握。
                </p>
              </div>

              {/* Native SVG Diagram 01 */}
              <div className="my-8">
                <SvgDiagram01Classification />
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-100 mt-8 mb-4">
                台灣登山活動教育分類解析
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {MOUNTAIN_CATEGORIES.map((cat, idx) => (
                  <EducationalCard
                    key={idx}
                    badge={`0${idx + 1} 類別`}
                    badgeColor={
                      cat.riskLevel === '低'
                        ? 'emerald'
                        : cat.riskLevel === '中'
                        ? 'cyan'
                        : cat.riskLevel === '高'
                        ? 'purple'
                        : 'amber'
                    }
                    title={cat.title}
                    subtitle={cat.elevation}
                    footer={
                      <span className="font-semibold text-slate-300">
                        關鍵能力：{cat.keySkills.join('、')}
                      </span>
                    }
                  >
                    <p>{cat.characteristics}</p>
                  </EducationalCard>
                ))}
              </div>

              <KeyPoint variant="highlight" title="核心原則">
                不同分類的登山活動，所需具備的體能基礎、裝備規格與風險等級完全不同。
                <strong>清楚認識自己今天走的是哪一種山、面對的是哪種環境，是登山安全的第一步。</strong>
              </KeyPoint>

              <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-3.5 text-xs text-slate-400">
                <span className="font-bold text-emerald-400">重要補充：</span>
                以上為教育上的概略分類，
                <strong className="text-slate-200">
                  實際路線難度仍需依地形坡度、當季氣候、天候驟變、行程長度與個人即時體能進行綜合研判
                </strong>
                ，絕不能僅憑海拔高度數字作為唯一的安全衡量依據。
              </div>
            </Section>

            {/* ========================================================
                SECTION 02: 登山與一般戶外活動的差異 (Why Mountaineering Is Not Tourism)
               ======================================================== */}
            <Section id="sec-02">
              <SectionHeading
                id="sec-02"
                index="02"
                title="登山與一般戶外活動的差異"
                englishSubtitle="Why Mountaineering Is Not Tourism"
              />

              <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  許多初學者容易將「登山」誤認為是風景區健行或觀光旅遊的延伸。然而兩者在根本體系上有著本質上的截然不同。
                </p>
                <p>
                  一般戶外活動（如都會公園散步、休閒農場或開發完善的觀光遊樂區）多半在
                  <strong>有即時救援、有穩定通訊訊號、有定期設施維護與補給</strong>
                  的可控環境中進行。而登山活動則常在遠離城鎮、通訊死角多、天氣劇烈多變的高風險自然山林中進行，登山者必須具備獨力承擔多數風險的心理與實務準備。
                </p>
              </div>

              {/* Comparison Matrix Component */}
              <Comparison />

              {/* Native SVG Diagram 02 */}
              <div className="my-8">
                <SvgDiagram02TourismVsClimbing />
              </div>

              <KeyPoint variant="emphasis" title="正確自主觀念">
                不要把「自主承擔」曲解成「發生意外後只能自己默默處理、不能求援」。
                正確的現代登山教育概念是：
                <strong className="text-white">
                  登山者必須在進入高風險自然環境之前，主動做好充分準備、嚴謹路線判斷與風險管理
                </strong>
                ，而非抱持盲目無知的心態將自身安全完全外包給搜救人員。
              </KeyPoint>
            </Section>

            {/* ========================================================
                SECTION 03: 登山者需具備的能力 (Core Competencies)
               ======================================================== */}
            <Section id="sec-03">
              <SectionHeading
                id="sec-03"
                index="03"
                title="登山者需具備的能力"
                englishSubtitle="Core Competencies"
              />

              <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  要成為一名合格且能讓家人安心的自主登山者，必須培養全面且均衡的能力體系。
                  亞馬遜國家山岳協會將登山者能力架構歸納為四大基石：
                  <strong>體能、技術、判斷、心理</strong>。
                </p>
              </div>

              {/* Native SVG Diagram 03 */}
              <div className="my-8">
                <SvgDiagram03CoreCompetencies />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <EducationalCard
                  badge="能力一"
                  badgeColor="cyan"
                  title="體能 (Physical Fitness)"
                  subtitle="持久的行動基石"
                >
                  <p>
                    持續長時間行走、背負數公斤重裝上下連續陡坡的心肺耐力與肌耐力。體能是支撐所有登山活動的生理基礎，體力透支是導致失足與判斷渙散的主因。
                  </p>
                </EducationalCard>

                <EducationalCard
                  badge="能力二"
                  badgeColor="purple"
                  title="技術 (Technical Skills)"
                  subtitle="落實於行動的工具"
                >
                  <p>
                    等高線地圖判讀、指北針定向、手機離線地圖操作、洋蔥式裝備選用、基礎繩結與野外失溫/受傷急救處置等實作操作技能。
                  </p>
                </EducationalCard>

                <EducationalCard
                  badge="能力三・核心最高"
                  badgeColor="emerald"
                  title="判斷 (Judgment)"
                  subtitle="決定生死的指揮官"
                >
                  <p>
                    面對山區天氣驟變、行進時間延宕、隊員體力極限時，能否冷靜衡量現況，果斷做出「折返、改道或就地避難」的決策。
                  </p>
                </EducationalCard>

                <EducationalCard
                  badge="能力四"
                  badgeColor="amber"
                  title="心理 (Psychological Resilience)"
                  subtitle="自律與敬畏之心"
                >
                  <p>
                    面對疲勞、飢餓、黑暗與未知恐懼時保持冷靜與條理；不因同儕壓力逞強，不被虛榮心驅使冒進，嚴格遵循預定的停損紀律。
                  </p>
                </EducationalCard>
              </div>

              <KeyPoint variant="philosophy" title="亞馬遜國家山岳協會核心論斷">
                四項能力中，<strong>判斷力是登山者最關鍵、最具決定性的核心能力</strong>。
                體能可以透過平時累積訓練，裝備可以用金錢購買，
                <strong className="text-white">
                  但判斷失誤往往會讓所有的充沛體能與昂貴裝備在幾分鐘內化為烏有
                </strong>
                。
              </KeyPoint>

              {/* Scenario Simulation Component */}
              <DecisionScenario />
            </Section>

            {/* ========================================================
                SECTION 04: 登山基本安全觀念 (Safety Fundamentals)
               ======================================================== */}
            <Section id="sec-04">
              <SectionHeading
                id="sec-04"
                index="04"
                title="登山基本安全觀念"
                englishSubtitle="Safety Fundamentals"
              />

              <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  登山的安全體系不是單純由運氣決定的。在山林中，任何意外事故的發生，背後幾乎都有清晰的連鎖因果關係。
                </p>
                <p>
                  亞馬遜國家山岳協會的安全模型指出：
                  <strong>登山安全由「人員」、「裝備」與「環境」三大維度交織而成</strong>
                  。三者相互作用，任一維度的失衡都會被放大並波及其他環節。
                </p>
              </div>

              {/* Native SVG Diagram 04 */}
              <div className="my-8">
                <SvgDiagram04SafetyTriangle />
              </div>

              <div className="space-y-3 mt-6">
                <div className="rounded-xl border border-sky-500/30 bg-sky-950/20 p-4">
                  <h4 className="text-sm font-bold text-sky-300 mb-1">
                    01 人員因素（主體盲點）
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    體能儲備不足、高估自我能力、缺乏路線先備知識、同儕逞強盲從、隱瞞自身不適、隊伍彼此脫節落單。
                  </p>
                </div>

                <div className="rounded-xl border border-purple-500/30 bg-purple-950/20 p-4">
                  <h4 className="text-sm font-bold text-purple-300 mb-1">
                    02 裝備因素（防護缺口）
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    裝備遺漏或不足（如未帶頭燈、未帶雨具）、裝備故障損壞、平時未練習不會操作、未依極端環境溫度合理選配。
                  </p>
                </div>

                <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-4">
                  <h4 className="text-sm font-bold text-amber-300 mb-1">
                    03 環境因素（自然考驗）
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    午後對流雷陣雨、氣溫急遽暴跌、濃霧迷漫視線受阻、濕滑樹根泥濘、落石崩壁、高山低氧氣候。
                  </p>
                </div>
              </div>

              <KeyPoint variant="highlight" title="安全核心洞見">
                <strong>登山意外通常不是單一孤立因素造成，而是人、裝備、環境互相作用的骨牌連鎖效應。</strong>
                安全不是「碰巧沒出事」，而是「
                <strong className="text-white">事先想過可能的最壞變化，並備有具體的應對處置方案</strong>
                」。行前準備的周延程度，決定了一次山行的安全天花板。
              </KeyPoint>
            </Section>

            {/* ========================================================
                SECTION 05: 新手常見錯誤 (Common Beginner Mistakes)
               ======================================================== */}
            <Section id="sec-05">
              <SectionHeading
                id="sec-05"
                index="05"
                title="新手常見錯誤"
                englishSubtitle="Common Beginner Mistakes"
              />

              <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  統計歷年山區迷途與求援案例，大部分初學者的事故並非源自不可抗力的天災，而是源於可以預先避免的認知盲點。認清這些常見陷阱，是保護自己的關鍵防線。
                </p>
              </div>

              <div className="space-y-4 my-6">
                {COMMON_MISTAKES.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-rose-500/30 bg-slate-950/60 p-5 shadow-sm space-y-2.5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-500/40">
                        盲點 0{idx + 1}
                      </span>
                      <h4 className="text-base font-bold text-slate-100">
                        {item.title}
                      </h4>
                    </div>

                    <div className="text-xs sm:text-sm text-slate-300 space-y-1.5 pl-1">
                      <p>
                        <strong className="text-slate-200">典型徵兆：</strong>
                        {item.symptom}
                      </p>
                      <p className="text-rose-300/90 font-medium">
                        <strong>潛在危險：</strong>
                        {item.risk}
                      </p>
                      <p className="text-emerald-300/90">
                        <strong>正確思維：</strong>
                        {item.correctMindset}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <WarningBox title="嚴正警示：勉強繼續是風險失控的根源">
                在山林之中，<strong>「勉強繼續」往往會讓原本可控的小小不適或微小延誤，一步步演變成無法逆轉的重大山難</strong>。
                學會在該撤退時坦然、果斷地撤退，其技術與心理難度遠高於咬牙登頂。
                <strong>知退者，方為真正的登山名家。</strong>
              </WarningBox>
            </Section>

            {/* ========================================================
                SECTION 06: 第一次登山建議流程 (Your First Hike, Step by Step)
               ======================================================== */}
            <Section id="sec-06">
              <SectionHeading
                id="sec-06"
                index="06"
                title="第一次登山建議流程"
                englishSubtitle="Your First Hike, Step by Step"
              />

              <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  如何有條不紊地完成第一次真正意義上的登山？亞馬遜國家山岳協會制定了標準的
                  8 步驟行前與實踐閉環流程。
                </p>
                <p>
                  請注意：整個流程的終點節點被嚴格定義為<strong>「安全回家」</strong>
                  ，絕不可將「登頂」作為流程的終點。
                </p>
              </div>

              {/* Native SVG Diagram 05 */}
              <div className="my-8">
                <SvgDiagram05HikingProcess />
              </div>

              {/* 8 Step Educational Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                {HIKING_STEPS.map((step) => (
                  <div
                    key={step.step}
                    className={`rounded-xl border p-4 shadow-sm transition-all ${
                      step.isFinalMilestone
                        ? 'border-emerald-500/80 bg-emerald-950/30'
                        : 'border-slate-800 bg-slate-900/80'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                          step.isFinalMilestone
                            ? 'bg-emerald-500 text-slate-950 font-black'
                            : 'bg-slate-800 text-emerald-400'
                        }`}
                      >
                        STEP {step.step}
                      </span>
                      <h4
                        className={`text-sm sm:text-base font-bold ${
                          step.isFinalMilestone ? 'text-white' : 'text-slate-100'
                        }`}
                      >
                        {step.title}
                      </h4>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 mb-2 font-medium">
                      {step.summary}
                    </p>

                    <ul className="text-xs text-slate-400 space-y-1 list-disc list-inside">
                      {step.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <KeyPoint variant="highlight" title="流程教育真諦">
                <strong>把完整的 8 步驟流程謹慎走過一次，其教育價值與安全積累遠比匆促走完一座名山更為深遠。</strong>
                每一步驟皆有其防錯機制，唯有形成習慣，山行安全才能得到制度性保障。
              </KeyPoint>

              {/* Interactive Self-Assessment Checklist */}
              <InteractiveChecklist />
            </Section>

            {/* ========================================================
                SECTION 07: 建立正確登山文化 (Ethics on the Mountain)
               ======================================================== */}
            <Section id="sec-07">
              <SectionHeading
                id="sec-07"
                index="07"
                title="建立正確登山文化"
                englishSubtitle="Ethics on the Mountain"
              />

              <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  登山不僅是一項運動，更是一種對大自然與生命的態度。
                  一個成熟的登山社群，必然擁有深刻的自律文化與環境倫理。
                </p>
                <p>
                  亞馬遜國家山岳協會倡導五大山林倫理實踐準則，讓登山者在探索壯麗風景的同時，守護山林的純粹。
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                {MOUNTAIN_ETHICS.map((ethic, idx) => (
                  <EducationalCard
                    key={idx}
                    badge={`倫理準則 0${idx + 1}`}
                    badgeColor="emerald"
                    title={ethic.title}
                    footer={
                      <span className="text-emerald-300/90 font-medium">
                        實踐方式：{ethic.practicalAction}
                      </span>
                    }
                  >
                    <p>{ethic.description}</p>
                  </EducationalCard>
                ))}
              </div>

              <KeyPoint variant="philosophy" title="文化即安全（Culture is Safety）">
                良好的登山文化絕非流於形式的客套禮貌，
                <strong>它本身就是整體登山環境永續運作與全隊生命安全的最高基礎</strong>
                。當每位隊友都能誠實表達身體極限、不逞強冒進並互相關懷，團隊的風險防護網才能真正發揮實效。
              </KeyPoint>
            </Section>

            {/* ========================================================
                SECTION 13: 本章最後的三個核心觀念 (Chapter Summary)
               ======================================================== */}
            <ChapterSummary />
          </article>

          {/* Right Sidebar: Table of Contents & Study Navigation (4 Cols on Desktop) */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="space-y-6 lg:sticky lg:top-20">
              <ChapterNavigation activeSectionId={activeSectionId} />

              {/* Official Association Identity Stamp */}
              <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-xs text-slate-400 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="font-bold text-slate-200">認證教學體系</span>
                  <span className="text-emerald-400 font-mono">母版 v1.0</span>
                </div>
                <p className="leading-relaxed">
                  本頁面為<strong>亞馬遜國家山岳協會</strong>
                  官方登山教育教材母版。全系列章節（行前規劃、裝備、地圖、氣象、急救與倫理）皆以本章視覺、SEO 與品牌規範為統一基準。
                </p>
                <div className="text-[11px] text-emerald-400/90 bg-emerald-950/40 p-2 rounded border border-emerald-500/20">
                  核心箴言：登山不是只追求登頂，安全回家才是完成一次山行。
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer (Brand consistency, curriculum links, safety hotline) */}
      <Footer />
    </div>
  );
}
