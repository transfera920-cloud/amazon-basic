/**
 * 亞馬遜國家山岳協會｜登山教育教材系統型別定義
 * 設計母版專用資料結構
 */

export interface ChapterMeta {
  id: string;
  chapterNumber: number;
  title: string;
  subtitle: string;
  englishTitle: string;
  description: string;
  readingMinutes: number;
  sectionsCount: number;
  targetAudience: string;
  corePhilosophy: string;
}

export interface SectionMeta {
  id: string;
  index: string; // e.g. "01"
  title: string;
  englishSubtitle: string;
}

export interface ComparisonRow {
  dimension: string;
  generalOutdoor: {
    tag: string;
    description: string;
  };
  mountaineering: {
    tag: string;
    description: string;
  };
}

export interface MountainType {
  title: string;
  elevation: string;
  characteristics: string;
  keySkills: string[];
  riskLevel: '低' | '中' | '高' | '極高';
}

export interface CommonMistake {
  title: string;
  symptom: string;
  risk: string;
  correctMindset: string;
}

export interface HikingStep {
  step: string;
  title: string;
  summary: string;
  details: string[];
  isFinalMilestone?: boolean;
}

export interface MountainEthic {
  title: string;
  description: string;
  practicalAction: string;
}
