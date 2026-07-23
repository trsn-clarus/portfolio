export type Project = {
  flag?: boolean;
  badge: string;
  topTags: string[];
  title: string;
  role: string;
  desc: string; // may contain <span class="accent"> markup
  contribution?: { label: string; percent: number };
  features: string[];
  bottomTags: string[];
  link?: { href: string; label: string };
};

export const creds: string[] = [
  "서강대학교 출신 · 중국문화학 전공",
  "중국 12년 거주 — 현지 언어·문화 체득",
  "인증 한중(중→한) 사법통역사 · HSK 6급",
  "바이브코딩(AI 협업)으로 AI 번역·검토 시스템 구축",
  "품질 평가기 · 운영 콘솔 · 웹까지 직접 제작",
  "AI 코딩툴(Claude·Codex·VS Code) 능숙 · MS Office(Excel·PPT·Word) 고급",
];

export const projects: Project[] = [
  {
    flag: true,
    badge: "Flagship · Enterprise",
    topTags: ["Python", "FastAPI", "SvelteKit", "PostgreSQL", "vLLM / LiteLLM"],
    title: "철도 기업용 AI 번역·검토 플랫폼",
    role: "기획 · UI · 구현 · 품질검토 전 과정 단독 담당 (배포 제외) — VS Code에서 Claude · Codex 활용",
    desc: "철도 기술문서를 위한 엔드투엔드 번역·품질관리 플랫폼. 다국어 번역, 문서(PDF/DOCX) 번역, 다국어 문법 검토, 무참조 품질평가(QE), 그리고 자동 품질 게이트를 하나의 파이프라인으로 묶었습니다. 레이어 경계·보안·회복력을 규칙으로 강제하는 프로덕션 아키텍처.",
    contribution: {
      label: "직접 담당 범위 — 기획 · UI · 구현 · 품질검토 (배포/인프라 운영 제외)",
      percent: 90,
    },
    features: [
      "다국어 번역: 한↔중(번체·대만 시행청별 용어집), 영·러·프",
      "문서 번역: PyMuPDF 원본 좌표 유지 · 스캔 PDF OCR(Tesseract)",
      "다국어 문법 검토: 구조화 출력 + Word 코멘트 자동 주입",
      "무참조 품질평가(QE): COMET-Kiwi 기반 점수화",
      "AQOS 품질 관리 플레인 · 자동 출고 게이트(G1~G15)",
      "글로벌 LLM slot manager · LiteLLM 게이트웨이(Kong)",
      "회복력: 과부하 제어 · 회로차단기 · graceful shutdown",
      "보안: SSO 인증 · 소유자 접근통제 · 감사 로그",
    ],
    bottomTags: ["Docker", "Kong", "PyMuPDF", "Tesseract", "Qwen", "COMET-Kiwi"],
  },
  {
    flag: true,
    badge: "Domain Asset · 직접 구축",
    topTags: ["번체중문", "용어 큐레이션", "도메인 전문성"],
    title: "철도 번체중문 용어집 — 직접 구축한 핵심 자산",
    role: "데이터 설계 · 큐레이션 — 번역 플랫폼을 떠받치는 사람의 자산",
    desc: 'HSK 6급 사법통역사가 <span class="accent">직접 큐레이션</span>한 철도 기술 용어집. 단순 단어 매칭이 아니라 대만 <span class="accent">4개 지역 시행청별</span> 번체중문 표기 차이까지 분기해 넣었습니다. 이 부분은 자동화로 안 되고, 사람이 알아야 합니다.',
    features: [
      "약 <b>7,700+ 항목</b>의 철도 기술 용어 정제",
      "대만 4개 지역 표기 분기: 臺北 · 臺中 · 高雄 · 桃園",
      "다국어: 영↔번체중 · 영↔러 · 영↔불 용어집",
      "카테고리 · 우선순위 · 노트 구조의 용어 DB",
      "강제 용어 치환으로 번역·검토 게이트와 연동",
      "재시도에도 용어집 주입 → 표준 표기 일관성 유지",
    ],
    bottomTags: ["臺北 / 臺中 / 高雄 / 桃園", "forced glossary", "일관성 게이트"],
  },
  {
    badge: "Tooling · Ops Console",
    topTags: ["Python", "FastAPI", "Uvicorn", "CLI"],
    title: "Clarus Admin Copilot — 번역기 운영 콘솔",
    role: "기획 · 설계 · 개발 — 로컬 관리자 콘솔 (tma CLI + 웹 대시보드)",
    desc: '번역 플랫폼을 대신 운영하기 위한 관리자 콘솔. 비전공 운영자도 한 화면에서 상태·리스크·"오늘 할 일"을 파악하고 처리할 수 있게 설계했습니다. 모든 쓰기는 <span class="accent">backup → diff → audit log → rollback</span> 경로를 강제하고, 권한 플래그로 기능을 세분화해 안전하게 노출합니다.',
    features: [
      "운영 대시보드: 상태·리스크 큐·최근 실패·핸드오프 준비도",
      "품질평가 · golden set · 회귀 테스트 관리",
      "용어집/모델/prompt 변경 승인 (changeset → 승인 → apply)",
      'Copilot: 콘솔 상태 진단 + "수정 요청서" 자동 생성',
      "감사 로그 · 백업 · 롤백 이력 추적",
      "후임 운영자용 handoff 패키지 생성",
    ],
    bottomTags: ["psutil", "PyYAML", "RAG / Chroma", "권한 게이트"],
  },
  {
    badge: "AI · Eval Platform",
    topTags: ["Python 3.11", "Streamlit", "Transformers"],
    title: "BLEU Scorer — 기계번역 품질 평가 플랫폼",
    role: "설계 · 개발 — Streamlit UI + CLI 배치",
    desc: '번역 품질을 여러 표준 지표로 정량 측정·비교하는 평가 플랫폼. 웹 UI와 CLI 배치 두 경로로 <span class="accent">BLEU · chrF++ · BERTScore · COMET</span> 점수를 산출하고, 모델 간 비교와 회귀를 지원합니다. HuggingFace 오프라인 실행으로 사내 폐쇄망에서도 동작.',
    features: [
      "4대 지표: BLEU · chrF++ · BERTScore · COMET",
      "다국어: 영 ↔ 러 · 불 · 중 · 한",
      "Streamlit 대시보드 + CLI 배치 채점",
      "모델 간 비교 · 회귀 · Excel 리포트",
      "HuggingFace 오프라인(폐쇄망) 실행",
      "감시 프로세스(supervisor)로 무중단 운영",
    ],
    bottomTags: ["sacrebleu", "BERTScore", "unbabel-comet", "pandas", "openpyxl"],
  },
  {
    badge: "Service · Web",
    topTags: ["Web", "브랜딩"],
    title: "TRSN CLARUS — 한중 번역·통역 서비스",
    role: "기획 · 디자인 · 개발 — trsnclarus.com",
    desc: "사법·비즈니스 한중 번역/통역 전문 서비스의 공식 사이트. 서비스 소개, 진행 과정, 이력, AI 번역 결과 감수까지 담았습니다. 기계 번역과 뭐가 다른지를 분명하게 보여주는 데 초점을 뒀습니다.",
    features: [
      "한중 번역 / 사법·비즈니스 통역 / 전문 문서 번역",
      "AI 번역 결과 품질 검수(감수·교정) 서비스",
      "미니멀·신뢰 중심의 이중언어 UX",
      "웹 개발 · Python 자동화 서비스 소개",
    ],
    bottomTags: [],
    link: { href: "https://trsnclarus.com/", label: "사이트 방문 ↗" },
  },
  {
    badge: "Brand · Web",
    topTags: ["Static Site", "GitHub Pages"],
    title: "Terroir & Proof — 무알코올 블렌딩 티 브랜드",
    role: "브랜드 웹 기획 · 디자인 · 개발 — trsnclarus.com/terroir-proof",
    desc: '위스키의 경험을 무알코올로 재해석한 프리미엄 블렌딩 티 브랜드(떼루아앤프루프)의 공식 브랜드 페이지. "술 없이도 함께 즐기는 대화의 시간"이라는 감성을 이중언어로 담은 라이프스타일 중심의 정적 사이트.',
    features: [
      "브랜드 스토리 · 리추얼(5단계) · 블렌드 가이드",
      "제품 라인업(Quiet Street: 10Y·12Y·NAS) 소개",
      "미니멀 감성 비주얼 · 이중언어(EN/KO)",
      "정적 사이트 · GitHub Pages 배포",
    ],
    bottomTags: [],
    link: { href: "https://trsnclarus.com/terroir-proof/", label: "사이트 방문 ↗" },
  },
  {
    badge: "Field Work · Localization & QC",
    topTags: ["더클라우드팩토리", "베이퍼스유나이티드"],
    title: "닥터베이프 크래프트 일회용 전자담배 글로벌 론칭",
    role: "통번역 · 해외 파트너 커뮤니케이션 · 품질검사(QC) — 2018.09 – 2021.03",
    desc: "소프트웨어를 만들기 전, 이 도메인 전문성은 실제 제품 현장에서 시작됐습니다. 닥터베이프(Dr. Vape)가 출시한 크래프트 일회용 전자담배 프로젝트에서 중국·홍콩 협력업체와의 실시간 통번역, 계약서·카탈로그·제품 사양서 번역, 생산 단계 품질검사(QC)를 담당하며 언어와 제품 품질이 만나는 지점을 직접 경험했습니다.",
    features: [
      "중국·홍콩 협력업체 실시간 통번역",
      "계약서·카탈로그·제품 사양서 번역",
      "생산 단계 품질검사(QC) 기준 확인·소통",
      "신제품 마케팅 콘텐츠 현지화",
    ],
    bottomTags: ["한·중·영 3개 언어", "품질검사(QC)", "해외 파트너 커뮤니케이션"],
  },
];

export const skillGroups: { title: string; chips: string[] }[] = [
  {
    title: "Backend & Infra",
    chips: ["Python", "FastAPI", "PostgreSQL", "Docker", "Kong", "비동기 워커/큐"],
  },
  {
    title: "Frontend",
    chips: ["SvelteKit", "TypeScript", "반응형 UI", "브랜드 웹", "정적 사이트"],
  },
  {
    title: "AI / Translation",
    chips: [
      "vLLM · LiteLLM",
      "Qwen",
      "프롬프트 엔지니어링",
      "RAG/용어집",
      "품질평가(QE)",
      "GEC 검토",
    ],
  },
  {
    title: "Tools · AI 활용 · Office",
    chips: [
      "Claude",
      "Codex",
      "Cursor / VS Code",
      "프롬프트 엔지니어링",
      "MS Excel (함수·피벗)",
      "PowerPoint",
      "Word",
      "문서·데이터 자동화",
    ],
  },
];
