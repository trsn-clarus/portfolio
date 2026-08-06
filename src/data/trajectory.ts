export type SectionState =
  | "intro"
  | "language"
  | "operations"
  | "data"
  | "ai-systems"
  | "people"
  | "rest";

export type TrajectoryStage = {
  id: string;
  index: string;
  period: string;
  titleKo: string;
  titleEn: string;
  bodyKo: string;
  points: string[];
  state: SectionState;
};

export const trajectory: TrajectoryStage[] = [
  {
    id: "language",
    index: "01",
    period: "성장기 · 학부",
    titleKo: "언어",
    titleEn: "Language",
    bodyKo:
      "중국에서 12년을 살며 현지 초·중·고 교육과정을 그대로 거쳤습니다. 심리학과 중국문화학을 함께 공부하면서, 언어는 단어가 아니라 그 뒤의 사람과 맥락이라는 걸 배웠습니다.",
    points: [
      "중국 12년 거주 · 현지 초·중·고 교육과정 이수",
      "서강대학교 심리학과 · 중국문화학 복수전공",
      "한국어 · 중국어 · 영어 실무 통번역",
      "번체 · 간체, 중국 · 대만 표현 차이에 대한 이해",
    ],
    state: "language",
  },
  {
    id: "operations",
    index: "02",
    period: "2018 – 2021",
    titleKo: "운영",
    titleEn: "Operations",
    bodyKo:
      "언어는 곧 실무가 됐습니다. 중국·홍콩 파트너와 발주 일정을 조율하고, 온라인몰을 운영하고, 고객 문의에 직접 응대하면서 언어가 사업으로 이어지는 과정을 현장에서 배웠습니다.",
    points: [
      "중국 · 홍콩 파트너 커뮤니케이션",
      "해외 발주와 수출입 일정 조율",
      "온라인몰 운영 · 상품 등록 · 고객 CS",
      "계약서 · 카탈로그 · 견적서 한 · 중 · 영 번역",
    ],
    state: "operations",
  },
  {
    id: "data",
    index: "03",
    period: "2025",
    titleKo: "데이터",
    titleEn: "Data",
    bodyKo:
      "언어를 데이터로 다루는 경험이 이어졌습니다. 대만 검색 품질 평가에서 검색어와 상품 사이의 의미적 연관성을 판단 기준으로 구조화하고, AI 학습 데이터를 만들었습니다.",
    points: [
      "대만 마켓 검색 품질 평가",
      "번체중문 검색어 – 상품 의미 연관성 평가",
      "검색 의도와 상품 맥락 분석",
      "Search AI 학습 데이터 구축",
    ],
    state: "data",
  },
  {
    id: "ai-systems",
    index: "04",
    period: "2026 – 현재",
    titleKo: "AI 시스템",
    titleEn: "AI Systems",
    bodyKo:
      "지금은 현대로템에서 철도 기술문서를 위한 AI 번역 시스템을 만듭니다. 언어와 문화에 대한 이해, 데이터를 다루는 감각, 도구를 만드는 능력이 한 자리에서 만납니다.",
    points: [
      "철도 기술문서 AI 번역 시스템 구축",
      "전문 용어집 · 번역 결과 검수 · 품질평가 체계",
      "Python · Streamlit 기반 내부 도구",
      "프로젝트 관계자 요구사항 조율 · 보고서 작성",
    ],
    state: "ai-systems",
  },
];
