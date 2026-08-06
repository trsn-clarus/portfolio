export type CapabilityGroup = {
  id: string;
  titleEn: string;
  items: string[];
};

export const capabilities: CapabilityGroup[] = [
  {
    id: "ai-translation",
    titleEn: "AI Translation Systems",
    items: ["LLM translation", "Translation memory", "Glossary", "OCR", "Alignment", "Quality evaluation"],
  },
  {
    id: "evaluation",
    titleEn: "Evaluation & Quality",
    items: ["BLEU", "chrF++", "TER", "BERTScore", "COMET", "Error taxonomy", "Review criteria"],
  },
  {
    id: "multilingual",
    titleEn: "Multilingual Communication",
    items: [
      "Korean",
      "Simplified Chinese",
      "Traditional Chinese",
      "English",
      "Localization",
      "Interpretation",
      "Cross-cultural communication",
    ],
  },
  {
    id: "product-ops",
    titleEn: "Product & Operations",
    items: [
      "Requirements gathering",
      "Stakeholder coordination",
      "Overseas ordering",
      "Inventory",
      "E-commerce operations",
      "Customer support",
      "Reporting",
    ],
  },
  {
    id: "ai-dev",
    titleEn: "AI-assisted Development",
    items: ["Python", "Streamlit", "VS Code", "Claude", "Codex", "Rapid prototyping", "Internal tools"],
  },
  {
    id: "research",
    titleEn: "Research & Writing",
    items: [
      "Chinese cultural studies",
      "Psychology",
      "Cultural analysis",
      "Technical documentation",
      "Reports",
      "Presentation",
      "Academic writing",
    ],
  },
];
