import type { Metadata } from "next";
import "./globals.css";
import { MotionProvider } from "@/components/MotionProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://trsnclarus.com"),
  title: "조민수 · TRSN CLARUS — Portfolio",
  description:
    "한중 번역가·통역사이자, 회사의 AI 번역·검토 플랫폼을 직접 만든 개발자. 번역 도구·품질 평가기·운영 콘솔·용어집·브랜드 웹.",
  openGraph: {
    title: "조민수 · TRSN CLARUS — Portfolio",
    description:
      "번역가가 만든 번역 소프트웨어. 한중 번역·통역, AI 번역 시스템 개발.",
    url: "https://trsnclarus.com/portfolio/",
    siteName: "TRSN CLARUS",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Noto+Sans+KR:wght@300;400;500;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Noto+Serif+KR:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
