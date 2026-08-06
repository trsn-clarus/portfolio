import type { SectionState } from "./trajectory";

export type ProjectLink = {
  href: string;
  label: string;
  external?: boolean;
};

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  id: string;
  index: string;
  category: string;
  titleKo: string;
  org: string;
  period: string;
  role: string;
  situationKo: string;
  problemKo: string;
  actionKo: string[];
  constraintsKo?: string[];
  evidenceKo: string[];
  outcomeKo: string;
  tags: string[];
  links?: ProjectLink[];
  image?: ProjectImage;
  weight: "primary" | "secondary";
  state: SectionState;
};

export const projects: Project[] = [
  {
    id: "railway-ai-translation",
    index: "01",
    category: "AI Translation Systems",
    titleKo: "철도 기술문서 AI 번역 시스템",
    org: "Hyundai Rotem · AI Application Team",
    period: "2026.02 – 현재",
    role: "요구사항 조율 · 번역 검수 · 품질평가 · 내부 도구 개발",
    situationKo:
      "철도 기술문서는 번체중문과 영어를 오가며 번역되어야 하고, 문서마다 표현 기준이 조금씩 달랐습니다.",
    problemKo:
      "LLM 번역 결과를 그대로 쓰기 어려웠고, 번역을 검수하는 기준이 담당자마다 달랐습니다.",
    actionKo: [
      "철도 기술문서 특화 LLM 번역 흐름을 구축했습니다",
      "약 7,750쌍 규모의 철도 전문 용어집을 번역 과정에 연동했습니다",
      "번역 검수 기준을 정리해 내부 도구에 반영했습니다",
      "Python · Streamlit 기반 도구로 검수와 품질평가를 한 화면에서 처리하도록 했습니다",
      "폐쇄망 · 오프라인 환경에서 동작하도록 구성했습니다",
      "프로젝트 관계자의 요구사항을 수집해 기능으로 연결했습니다",
    ],
    constraintsKo: ["사내 폐쇄망 환경", "회사 인프라 · 배포 범위는 비공개"],
    evidenceKo: [
      "철도 전문 용어 약 7,750쌍 구축",
      "BLEU · chrF++ · TER · BERTScore · COMET, 5개 지표로 결과 비교",
      "내부 사용자 대상 프로그램 시연과 사용 안내 진행",
    ],
    outcomeKo: "담당자마다 달랐던 검수 기준을 도구 안에 구조화했습니다.",
    tags: ["Python", "Streamlit", "LLM Translation", "Glossary", "Offline / Closed Network"],
    weight: "primary",
    state: "ai-systems",
  },
  {
    id: "translation-quality-evaluation",
    index: "02",
    category: "Evaluation & Quality",
    titleKo: "번역 품질평가 도구",
    org: "Hyundai Rotem",
    period: "2026",
    role: "설계 · 개발",
    situationKo: "같은 번역 결과를 두고도 평가하는 사람마다 품질 판단이 달랐습니다.",
    problemKo: "모델과 담당자별로 채점 기준이 제각각이라 결과를 서로 비교하기 어려웠습니다.",
    actionKo: [
      "Python · Streamlit으로 평가 도구를 만들었습니다",
      "BLEU · chrF++ · TER · BERTScore · COMET 5개 지표를 한 화면에서 비교하도록 구성했습니다",
      "모델별 결과를 동일한 기준으로 정렬해 비교할 수 있게 했습니다",
      "반복되는 오류를 유형화하고 검수 기준에 반영했습니다",
    ],
    evidenceKo: ["5개 지표 동시 비교", "모델 간 결과를 같은 기준으로 정렬해 비교"],
    outcomeKo: "주관적으로 갈리던 품질 판단을 비교 가능한 지표로 바꿨습니다.",
    tags: ["Python", "Streamlit", "BLEU", "chrF++", "TER", "BERTScore", "COMET"],
    weight: "primary",
    state: "ai-systems",
  },
  {
    id: "railway-terminology-asset",
    index: "03",
    category: "Domain Data Asset",
    titleKo: "철도 번체중문 용어 자산",
    org: "Hyundai Rotem",
    period: "2026",
    role: "데이터 설계 · 큐레이션",
    situationKo: "철도 기술문서에는 자동 번역만으로 처리하기 어려운 전문 용어가 많았습니다.",
    problemKo: "표준화된 번체중문 용어 기준이 없어 번역마다 표기가 달라졌습니다.",
    actionKo: [
      "철도 전문 용어 약 7,750쌍을 직접 큐레이션했습니다",
      "번체중문 표기 기준을 정리해 번역 흐름에 연동했습니다",
      "프로젝트 표현 기준으로 용어 일관성을 유지했습니다",
    ],
    evidenceKo: ["약 7,750쌍 규모의 용어집", "번역 흐름과 연동해 표기 일관성 확인"],
    outcomeKo: "자동화로 되지 않는 부분을 사람의 판단으로 정리한 자산으로 만들었습니다.",
    tags: ["Traditional Chinese", "Terminology", "Domain Expertise"],
    weight: "secondary",
    state: "ai-systems",
  },
  {
    id: "soom-brand-system",
    index: "04",
    category: "Brand System & Web",
    titleKo: "SOOM — 브랜드 시스템 & 웹",
    org: "개인 프로젝트",
    period: "2025 – 현재",
    role: "브랜드 전략 · 정보 구조 · 콘텐츠 구조 · 웹 개발",
    situationKo:
      "차 사셰 브랜드 terroir & proof에서 출발해, 회복이라는 감각적이고 추상적인 경험을 전달하는 브랜드 SOOM으로 재편하는 작업이었습니다.",
    problemKo:
      '차와 음료라는 출발점 때문에 자칫 "티 제품을 파는 사이트"로 읽힐 위험이 있었고, 제품을 나열하는 방식으로는 "감각을 통해 회복 경험을 설계한다"는 정체성이 전달되지 않았습니다.',
    actionKo: [
      "SOOM(브랜드) → Recovery(핵심 경험) → Languages(Taste·Scent·Sound·Space·Body) → Collections(Quiet Street 외 4개)로 이어지는 브랜드 위계를 설계했습니다",
      "이전 브랜드(terroir & proof)를 완전히 지우지 않으면서도 메인 브랜드처럼 보이지 않도록 노출 범위를 문서로 정리했습니다",
      "콘텐츠는 데이터 파일 하나, 공개 범위는 릴리스 feature flag 파일 하나로 관리되도록 구조화해 카피 수정과 단계적 공개를 분리했습니다",
      "아직 공개하지 않는 섹션은 <template>으로 감싸 JS 유무와 무관하게 접근성 트리·DOM·이미지 요청에서 완전히 제외되도록 구성했습니다",
      "9개 환경 상태(색·밀도·흐름·확산)를 CSS 토큰 하나로 선언해 인터페이스와 배경 환경이 항상 같은 값을 참조하도록 만들었습니다",
      "모바일 이미지 왜곡 문제를 해결하고 신뢰감 있는 타이포그래피 시스템을 만들었습니다",
      "외부 CDN 없이 런타임 의존 라이브러리까지 저장소에 포함해 전부 자체 호스팅했습니다",
      "접근성과 prefers-reduced-motion 대응을 포함했습니다",
      "GitHub Pages에 정적 사이트로 배포했습니다",
    ],
    evidenceKo: [
      "V1 · Brand Foundation 공개",
      "5개 감각 언어 · 5개 컬렉션 · 9개 환경 상태의 정보 구조",
      "반응형 · 접근성 대응 완료",
    ],
    outcomeKo: "브랜드 전략부터 구현까지 혼자 맡아 하나의 세계관으로 완성했습니다.",
    tags: ["Brand Strategy", "Information Architecture", "Motion Design", "Accessibility"],
    links: [
      { href: "https://trsnclarus.com/soom/", label: "SOOM 방문", external: true },
      { href: "https://github.com/trsn-clarus/soom", label: "GitHub", external: true },
    ],
    image: {
      src: "/portfolio/work/soom-hero.jpg",
      alt: "SOOM 웹사이트 히어로 화면 — \"Recovery has many languages.\"",
      width: 1600,
      height: 1000,
    },
    weight: "primary",
    state: "people",
  },
  {
    id: "cross-border-operations",
    index: "05",
    category: "Product Operations & Localization",
    titleKo: "해외 파트너 운영 & 로컬라이제이션",
    org: "The Cloud Factory · Vapers United",
    period: "2018.09 – 2021.03",
    role: "온라인몰 운영 · 해외 파트너 커뮤니케이션 · 로컬라이제이션",
    situationKo: "해외 파트너와 협업해 신제품을 출시하고, 동시에 온라인몰을 운영해야 했습니다.",
    problemKo: "언어 장벽, 발주 일정 조율, 고객 CS가 동시에 필요했습니다.",
    actionKo: [
      "중국 · 홍콩 본사와 수출입 일정을 조율했습니다",
      "계약서 · 카탈로그 · 견적서를 한 · 중 · 영으로 번역했습니다",
      "온라인몰 상품 등록, 주문과 재고를 관리했습니다",
      "고객 CS를 응대하고 신제품 마케팅 콘텐츠를 현지화했습니다",
    ],
    evidenceKo: ["2개 회사, 약 3년에 걸친 실무", "한 · 중 · 영 3개 언어로 문서 작업"],
    outcomeKo: "언어와 운영이 만나는 지점에서 실무 감각을 익혔습니다.",
    tags: ["Cross-border Communication", "E-commerce Operations", "Localization"],
    weight: "secondary",
    state: "operations",
  },
];
