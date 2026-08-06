export type Profile = {
  nameKo: string;
  nameEn: string;
  identity: string;
  roleDescriptor: string;
  heroStatementKo: string;
  heroStatementEn: string;
  heroSupportingKo: string;
  currentRoleKo: string;
  currentRoleHref?: string;
  stats: { value: string; label: string }[];
};

export const profile: Profile = {
  nameKo: "조민수",
  nameEn: "Minsoo Cho",
  identity: "Clarus",
  roleDescriptor: "AI Translation Systems · Global Communication · Product Operations",
  heroStatementKo: "언어로 시작해, 데이터를 거쳐, 실제로 작동하는 시스템을 만듭니다.",
  heroStatementEn: "I translate complexity into working systems.",
  heroSupportingKo:
    "중국에서 익힌 언어와 문화, 해외 사업 현장에서 배운 운영 감각, 그리고 AI와 데이터 기술을 연결해 조직이 실제로 사용할 수 있는 결과물을 만듭니다.",
  currentRoleKo: "Hyundai Rotem · AI Application Team",
  stats: [
    { value: "12 yrs", label: "Lived in China" },
    { value: "7,750", label: "Terminology pairs built" },
    { value: "5", label: "Evaluation metrics used" },
  ],
};
