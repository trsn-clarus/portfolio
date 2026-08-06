export type Experience = {
  id: string;
  company: string;
  role: string;
  start: string;
  end: string | "Present";
  summary: string;
  responsibilities: string[];
  tags?: string[];
};

export const experience: Experience[] = [
  {
    id: "hyundai-rotem",
    company: "Hyundai Rotem",
    role: "AI Application Team",
    start: "2026.02",
    end: "Present",
    summary: "철도 기술문서 전문 AI 번역 시스템을 만들고 있습니다.",
    responsibilities: [
      "철도 기술문서 번역 (번체중문 · 영어)",
      "전문 용어집 구축",
      "LLM 번역 결과 검수 · 품질 개선",
      "품질평가 체계 운영",
      "프로젝트 관계자 요구사항 수집 및 기능 연결",
      "보고서 · 발표자료 작성, 내부 프로그램 시연",
    ],
    tags: ["Python", "Streamlit", "LLM Translation"],
  },
  {
    id: "freelance-subtitle",
    company: "Freelance — Chinese Subtitle Localization",
    role: "번역 · 검수",
    start: "2025.11",
    end: "Present",
    summary: "한국 유튜브 콘텐츠의 중국어 간체 · 번체 자막을 제작하고 검수합니다.",
    responsibilities: ["중국어 간체 · 번체 자막 번역", "자막 검수 및 표현 검토"],
    tags: ["Chinese Localization", "Subtitling"],
  },
  {
    id: "fact-and-g",
    company: "Fact & G",
    role: "한중 · 중한 번역 및 검수",
    start: "2025.12",
    end: "2026.03",
    summary: "한중 · 중한 번역과 검수를 담당했습니다.",
    responsibilities: ["한중 · 중한 번역", "번역 결과 검수"],
  },
  {
    id: "coupang-tw",
    company: "Coupang TW — Search Labeling",
    role: "Search Quality Evaluator",
    start: "2025.11",
    end: "2026.01",
    summary: "대만 마켓 검색 품질을 평가했습니다.",
    responsibilities: [
      "번체중문 검색어와 상품 간 의미적 연관성 평가",
      "검색 의도와 상품 맥락 분석",
      "Search AI 학습 데이터 구축",
    ],
    tags: ["Traditional Chinese", "Search Quality", "Data Labeling"],
  },
  {
    id: "moonriver",
    company: "Moonriver Classic Bar",
    role: "고객 응대 · 매장 운영",
    start: "2022.01",
    end: "2023.03",
    summary:
      "말보다 먼저 필요를 읽어야 하는 현장에서 고객을 응대하고 매장 운영을 도왔습니다.",
    responsibilities: [
      "고객 응대 및 현장 대응",
      "음료 제조",
      "재고와 주문 관리",
      "위생 관리 · 직원 간 협업",
    ],
    tags: ["Customer Service", "Team Collaboration"],
  },
  {
    id: "vapers-united",
    company: "Vapers United",
    role: "해외 파트너 커뮤니케이션 · 로컬라이제이션",
    start: "2020.05",
    end: "2021.03",
    summary: "해외 파트너와 커뮤니케이션하며 제품 등록과 고객 CS를 담당했습니다.",
    responsibilities: [
      "해외 파트너 커뮤니케이션",
      "자료 통역과 번역",
      "제품 등록, 재고와 발주",
      "고객 문의 · CS",
      "신제품 론칭 지원, 해외 마케팅 콘텐츠",
    ],
    tags: ["Cross-border Communication", "Localization"],
  },
  {
    id: "cloud-factory",
    company: "The Cloud Factory",
    role: "Cross-border Product Operations & Localization",
    start: "2018.09",
    end: "2020.02",
    summary: "온라인몰을 운영하며 중국 · 홍콩 본사와 수출입 일정을 조율했습니다.",
    responsibilities: [
      "온라인몰 운영 · 상품 등록",
      "주문과 재고 관리, 고객 CS",
      "중국 · 홍콩 본사와 수출입 일정 조율",
      "계약서 · 카탈로그 · 견적서 한 · 중 · 영 번역",
      "신규 제품 홍보 콘텐츠",
    ],
    tags: ["Cross-border Operations", "Localization", "E-commerce"],
  },
];
