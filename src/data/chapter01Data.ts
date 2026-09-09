import {
  ChapterMeta,
  SectionMeta,
  ComparisonRow,
  MountainType,
  CommonMistake,
  HikingStep,
  MountainEthic,
} from '../types/education';

export const CHAPTER_01_META: ChapterMeta = {
  id: 'chapter-01',
  chapterNumber: 1,
  title: '第一章 登山入門',
  subtitle: '初學者登山觀念、安全與基本能力',
  englishTitle: 'Introduction to Mountaineering: Fundamentals, Safety & Core Competencies',
  description: '建立正確登山觀念，了解登山活動、風險與基本能力。登山不是只追求登頂，安全回家才是完成一次山行。',
  readingMinutes: 15,
  sectionsCount: 7,
  targetAudience: '初學者適用・自主登山者入門必讀',
  corePhilosophy: '登山不是只追求登頂，安全回家才是完成一次山行。',
};

export const SECTIONS_META: SectionMeta[] = [
  {
    id: 'sec-01',
    index: '01',
    title: '認識登山活動',
    englishSubtitle: 'What is Mountaineering',
  },
  {
    id: 'sec-02',
    index: '02',
    title: '登山與一般戶外活動的差異',
    englishSubtitle: 'Why Mountaineering Is Not Tourism',
  },
  {
    id: 'sec-03',
    index: '03',
    title: '登山者需具備的能力',
    englishSubtitle: 'Core Competencies',
  },
  {
    id: 'sec-04',
    index: '04',
    title: '登山基本安全觀念',
    englishSubtitle: 'Safety Fundamentals',
  },
  {
    id: 'sec-05',
    index: '05',
    title: '新手常見錯誤',
    englishSubtitle: 'Common Beginner Mistakes',
  },
  {
    id: 'sec-06',
    index: '06',
    title: '第一次登山建議流程',
    englishSubtitle: 'Your First Hike, Step by Step',
  },
  {
    id: 'sec-07',
    index: '07',
    title: '建立正確登山文化',
    englishSubtitle: 'Ethics on the Mountain',
  },
];

export const MOUNTAIN_CATEGORIES: MountainType[] = [
  {
    title: '郊山',
    elevation: '海拔約 1,500 公尺以下',
    characteristics: '多為單日往返，交通便利、步道修築完善、路徑指標清楚，鄰近城鎮與醫療資源。',
    keySkills: ['基本步法與節奏控制', '單日飲水與輕量糧食估算', '簡易離線地圖定位確認'],
    riskLevel: '低',
  },
  {
    title: '中級山',
    elevation: '海拔 1,500–3,000 公尺',
    characteristics: '森林茂密、地形多變陡峭、氣候潮濕多霧、叉路獵徑繁多，極易迷途與遭遇失溫風險。',
    keySkills: ['等高線地圖判讀與指北針', '路跡辨識與防迷路技能', '雨天保暖防護與失溫處置'],
    riskLevel: '中',
  },
  {
    title: '高山',
    elevation: '海拔 3,000 公尺以上',
    characteristics: '需面對低氣壓與高山症威脅、紫外線強烈、氣溫隨時驟降、碎石斷崖與強風極端天候。',
    keySkills: ['急性高山病（AMS）辨識與處置', '保暖分層與強風抗寒穿著', '高海拔體能配速與撤退決斷'],
    riskLevel: '高',
  },
  {
    title: '縱走與長程路線',
    elevation: '連續多日・跨越山系',
    characteristics: '連續多日在無固定補給山區行進，深陷偏遠無訊號帶，身心疲勞高度累積。',
    keySkills: ['多日背包輕量化與負重能力', '水源規劃、營地建置與炊煮管理', '團隊步調協調與突發應變'],
    riskLevel: '極高',
  },
];

export const COMPARISON_DATA: ComparisonRow[] = [
  {
    dimension: '環境條件',
    generalOutdoor: {
      tag: '可控・有設施',
      description: '有人工步道、路燈、涼亭、鋪裝路面，環境變數多由管理單位維護。',
    },
    mountaineering: {
      tag: '自然・多變',
      description: '原始泥土、裸露岩石、倒木、崩壁，天候與地貌每小時皆可能劇烈變化。',
    },
  },
  {
    dimension: '緊急救援',
    generalOutdoor: {
      tag: '通常較容易抵達',
      description: '救護車輛多數能直接開抵現場，或在半小時內有搜救與醫療人員進駐處置。',
    },
    mountaineering: {
      tag: '可能耗時・困難',
      description: '搜救人員需徒步數小時至數日進入，天候不佳時直升機無法起降，需具備就地避難能力。',
    },
  },
  {
    dimension: '通訊覆蓋',
    generalOutdoor: {
      tag: '相對穩定',
      description: '市區行動電話基地台訊號全面覆蓋，隨時可撥打電話或聯絡親友。',
    },
    mountaineering: {
      tag: '可能沒有訊號',
      description: '稜線深谷或背陽面多無手機訊號，無法隨選即求援，通訊中斷為山區常態。',
    },
  },
  {
    dimension: '安全責任',
    generalOutdoor: {
      tag: '可能有較完整的公共服務',
      description: '場地管理者承擔環境維護與警告責任，公共安全機制多數處於被動守護狀態。',
    },
    mountaineering: {
      tag: '登山者必須對自己負責',
      description: '進入高風險環境前，登山者必須主動做好規劃、體能儲備、裝備檢核與風險管理決策。',
    },
  },
];

export const COMMON_MISTAKES: CommonMistake[] = [
  {
    title: '高估自己',
    symptom: '以平地慢跑或健身房運動量推估山區負荷，忽略重裝、連續數千公尺爬升與不平路面的關節耗損。',
    risk: '途中肌力耗盡、抽筋癱軟，導致行程延宕，被迫摸黑行走大幅增加墜崖與迷路機率。',
    correctMindset: '以保守標準評估個人體能，首次山行選擇難度低於自身預期的路線，逐步驗證與累積實地耐力。',
  },
  {
    title: '過度追求登頂',
    symptom: '把「登頂拍照」當成山行的唯一目標，對天色變暗、烏雲密布、身體高山反應或隊友脫節視而不見。',
    risk: '「勉強繼續」讓可控的小變數疊加成無法挽回的重大山難。',
    correctMindset: '山永遠在那裡。登頂只是路程的一半，在設定好的折返時間（Turnaround Time）果斷回頭才是合格的登山者。',
  },
  {
    title: '缺乏行前規劃',
    symptom: '沒有下載離線軌跡、沒查氣象逐時預報、未告知留守聯絡人，單憑網路網紅照片「說走就走」。',
    risk: '把運氣當成計畫；一旦山區起霧或岔路出現，便立刻陷入盲目徘徊與恐慌。',
    correctMindset: '行前規劃決定了山行的安全上限。把每一條路線的里程、爬升、水源點與撤退備案親自梳理清楚。',
  },
];

export const HIKING_STEPS: HikingStep[] = [
  {
    step: '01',
    title: '選擇適合路線',
    summary: '依自身與同伴當前體能與經驗，從標示清楚的入門郊山起步。',
    details: [
      '新手首選單日往返、路徑清楚且逃生撤退點明確的國家步道。',
      '切勿越級挑戰未曾涉足過的高難度中級山或多日縱走。',
    ],
  },
  {
    step: '02',
    title: '了解距離、高度、時間',
    summary: '查明總里程、累積爬升量與預估所需時數，切實換算步速。',
    details: [
      '不僅看平面里程（如 8 公里），更要看總爬升高度（如 800 公尺）。',
      '以一般新手每小時爬升約 250–350 公尺計算合理耗時，並預留 2 小時緩衝時間。',
    ],
  },
  {
    step: '03',
    title: '準備裝備',
    summary: '依路線季節備妥洋蔥式排汗服飾、充足飲水、行進糧、頭燈與雙向雨具。',
    details: [
      '頭燈與備用電池為「無論是否預計摸黑」之必備保命裝備。',
      '必備雨衣雨褲（非輕便雨衣），防風防雨是預防失溫的第一道防線。',
    ],
  },
  {
    step: '04',
    title: '確認天氣',
    summary: '行前 2–3 日密切追蹤山區氣象與降雨機率，遇惡劣天候勇於取消。',
    details: [
      '山區天氣與平地不同，應參考中央氣象署山區逐時預報與衛星雲圖。',
      '颱風外圍環流、豪雨特報或強烈冷氣團來襲時，果斷延期，切勿存有僥倖心理。',
    ],
  },
  {
    step: '05',
    title: '建立同行與留守資訊',
    summary: '至少兩人結伴同行，並向山下信任留守人交付完整行程計畫書。',
    details: [
      '約定「預計下山時間」與「逾時未聯絡之通報啟動標準時間」。',
      '將入山人員名單、緊急聯絡人、路線 GPX 軌跡與車輛停放點留存備查。',
    ],
  },
  {
    step: '06',
    title: '執行山行',
    summary: '量力而為、依步調前進，持續觀察時間流逝、氣候演變與路況。',
    details: [
      '定時補充水分與碳水化合物，不等到口渴飢餓才補充。',
      '交叉比對離線地圖與現場路條，確認身處正確路徑上。',
    ],
  },
  {
    step: '07',
    title: '隨時評估',
    summary: '建立動態停損意識，遇異常時及時調整計畫、折返或原路撤退。',
    details: [
      '抵達預設折返時間（例如下午 13:00），無論距離頂峰多近，一律回頭。',
      '若有隊員體力不支、受傷或天候轉壞，全隊依最慢者調整步調或共同撤退。',
    ],
  },
  {
    step: '08',
    title: '安全回家',
    summary: '安全返回登山口並返抵家門，才算真正完成一次山行。',
    details: [
      '抵達登山口後向留守人回報平安解除留守任務。',
      '檢討本次裝備使用情況、體能耗費與決策過程，作為下次山行的經驗基石。',
    ],
    isFinalMilestone: true,
  },
];

export const MOUNTAIN_ETHICS: MountainEthic[] = [
  {
    title: '尊重山林',
    description: '不採摘花草植物、不刻字塗鴉、不擾動土石地形，盡可能保持山林的原始靜謐。',
    practicalAction: '走在既定步道中央，不截彎取直以免造成邊坡土壤沖蝕退化。',
  },
  {
    title: '不留垃圾（LNT 原則）',
    description: '自己帶上山的任何物品，全數帶下山；高山低溫環境中果皮果核需數年才能分解。',
    practicalAction: '隨身準備夾鏈袋，將零食包裝、紙巾、果皮甚至擦拭後的衛生紙全部帶回平地丟棄。',
  },
  {
    title: '不干擾野生動物',
    description: '野生動物有其自然覓食習性，人類餵食會改變其行為並造成營養失衡或掠食依賴。',
    practicalAction: '食物妥善收納於密封袋內，保持安全觀察距離，不追逐拍照，不喧嘩驚擾。',
  },
  {
    title: '尊重隊友',
    description: '團隊山行是一個生命共同體，走得快不是英雄，照顧全隊安全才是真本事。',
    practicalAction: '配合同伴節奏，不脫隊獨行；自身身體不適時坦誠說出，不隱匿逞強。',
  },
  {
    title: '尊重自身能力限制',
    description: '誠實面對自己的訓練不足與恐懼，敬畏自然力量，謙卑看待每一座山岳。',
    practicalAction: '不因面子或同儕壓力而做出勉強之舉；撤退是智慧與成熟的體現。',
  },
];

export const SYLLABUS_OVERVIEW = [
  {
    chapter: 1,
    title: '第一章 登山入門',
    status: 'current',
    summary: '建立正確觀念、認識山岳分類、理解自主安全與核心能力',
  },
  {
    chapter: 2,
    title: '第二章 行前規劃與風險管理',
    status: 'upcoming',
    summary: '路線研究、海拔落差計算、留守制度與緊急撤退備案擬定',
  },
  {
    chapter: 3,
    title: '第三章 裝備選用與背包打包',
    status: 'upcoming',
    summary: '洋蔥式穿著、三季/四季裝備配重、防水打包與維護保養',
  },
  {
    chapter: 4,
    title: '第四章 地圖判讀與離線導航',
    status: 'upcoming',
    summary: '等高線地形判讀、指北針方位定向與手機離線 GPX 應用',
  },
  {
    chapter: 5,
    title: '第五章 山區氣象與野外保暖',
    status: 'upcoming',
    summary: '山區氣壓與降雨趨勢判別、失溫辨識預防與高山病應對',
  },
  {
    chapter: 6,
    title: '第六章 野外緊急應變與求援',
    status: 'upcoming',
    summary: '迷路 STOP 原則、緊急避難帳搭設、信號傳遞與搜救通報',
  },
  {
    chapter: 7,
    title: '第七章 山林環境倫理與永續',
    status: 'upcoming',
    summary: '無痕山林七大原則實踐、高山生態保護與登山社群文化',
  },
];
