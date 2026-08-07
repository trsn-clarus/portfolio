import type { Metadata } from "next";
import "./globals.css";
import { MotionProvider } from "@/components/MotionProvider";
import { portfolioUrl } from "@/data/links";
import { fontVariables } from "./fonts";

const TITLE = "조민수 · Clarus — Language, AI Systems & Global Operations";
const DESCRIPTION =
  "중국어권 문화와 해외 사업 운영 경험을 바탕으로 AI 번역 시스템, 품질평가 도구와 다국어 서비스를 구축해 온 조민수의 포트폴리오입니다.";

export const metadata: Metadata = {
  metadataBase: new URL("https://trsnclarus.com"),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: portfolioUrl,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: portfolioUrl,
    siteName: "TRSN CLARUS",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/portfolio/og-image.png",
        width: 1200,
        height: 630,
        alt: "Clarus Cho — Language · Data · AI Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/portfolio/og-image.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "조민수",
  alternateName: ["Clarus Cho", "Clarus"],
  url: portfolioUrl,
  email: "mailto:trsn_clarus@naver.com",
  sameAs: ["https://github.com/trsn-clarus", "https://trsnclarus.com/"],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Sogang University",
    },
  ],
  knowsLanguage: ["ko", "zh", "en"],
  jobTitle: "AI Translation Systems · Global Communication · Product Operations",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={fontVariables}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
