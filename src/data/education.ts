export type Education = {
  id: string;
  org: string;
  orgEn: string;
  program: string;
  programEn: string;
  period: string;
  status: string;
  detail?: string;
};

export const education: Education[] = [
  {
    id: "sogang-grad",
    org: "서강대학교 대학원",
    orgEn: "Sogang University Graduate School",
    program: "중국문화학",
    programEn: "Chinese Cultural Studies",
    period: "2023.09 – 2025.06",
    status: "석사과정 수료 (Completed coursework for M.A.)",
    detail: "GPA 4.0 / 4.3",
  },
  {
    id: "sogang-undergrad",
    org: "서강대학교",
    orgEn: "Sogang University",
    program: "심리학과 · 중국문화 복수전공",
    programEn: "Double major in Psychology and Chinese Culture",
    period: "",
    status: "",
  },
];

export type ResearchProject = {
  titleKo: string;
  org: string;
  period: string;
  bodyKo: string;
};

export const researchProject: ResearchProject = {
  titleKo: "중국 문화 콘텐츠와 마케팅 연구",
  org: "Sogang AI Convergence Lab",
  period: "2024.02 – 2025.12",
  bodyKo:
    "「검은 신화: 오공」 사례를 중심으로 중국 문화 콘텐츠의 글로벌 확산을 스터디 · 토론하고, 협업 원고를 작성했습니다.",
};

export type LanguageCredential = { lang: string; level: string };

export const languages: LanguageCredential[] = [
  { lang: "Korean", level: "Native" },
  { lang: "Chinese", level: "Professional · HSK 6" },
  { lang: "English", level: "Working proficiency" },
];

export const credentialNotes: string[] = [
  "HSK 6급 · 2025년 268점",
  "TOEIC Speaking IM3 · TOEIC 765",
  "사법통역사 자격 취득 · 2026.03",
];
