export type Activity = {
  id: string;
  org: string;
  orgEn: string;
  period: string;
  role: string;
  bodyKo: string;
};

export const activities: Activity[] = [
  {
    id: "scout",
    org: "한국스카우트연맹",
    orgEn: "Korean Scout Association",
    period: "2010 – 2026.05",
    role: "지도자 (2017~)",
    bodyKo:
      "2010년부터 활동을 시작해 2017년부터는 지도자로 참여하고 있습니다. 중급 지도자 과정을 수료했습니다.",
  },
  {
    id: "magis",
    org: "예수회 마지스 청소년센터",
    orgEn: "Jesuit Magis Youth Center",
    period: "2017.03 – 2026.05",
    role: "멘토 · 동반자",
    bodyKo: "청년 · 청소년 교육교류 프로그램에서 참가자와 소통하며 오랜 기간 동행했습니다.",
  },
  {
    id: "ignatius-exchange",
    org: "이냐시오영성연구소 국제교류",
    orgEn: "Ignatius Center — International Exchange",
    period: "2024.08 – 2025.01",
    role: "한중 통번역 · 현장 진행",
    bodyKo:
      "한국 · 대만 학생 국제교류 프로그램에서 통번역과 현장 진행을 맡았습니다. 제주 친환경 농장 체험도 함께 진행했습니다.",
  },
  {
    id: "sogang-mentoring",
    org: "서강대학교 새내기 멘토링",
    orgEn: "Reflection and Growth Mentoring",
    period: "2018.01 – 2021.01",
    role: "멘토",
    bodyKo: "신입생을 대상으로 대화와 성찰 활동을 지원했습니다.",
  },
];
