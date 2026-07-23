# TRSN CLARUS — Portfolio

조민수(Minsoo Cho)의 포트폴리오. **Next.js(App Router) + Motion**으로 리메이크,
GitHub Pages(정적 export)로 배포됩니다.

- 라이브: https://trsnclarus.com/portfolio/
- 스택: Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · Motion
- 배포: `output: 'export'` 정적 빌드 → GitHub Actions(`.github/workflows/deploy.yml`)

## 개발

```bash
npm install
npm run dev      # http://localhost:3000/portfolio
npm run build    # 정적 export → out/
```

## 구조

- `src/app/` — 레이아웃 · 페이지 · 전역 스타일(디자인 토큰)
- `src/components/` — 섹션 컴포넌트(Nav/Hero/About/Work/Skills/Contact/Footer) + `Reveal`(스크롤 애니메이션)
- `src/data/portfolio.ts` — 프로젝트 · 스킬 데이터
- `legacy/` — 리메이크 이전의 단일 파일 정적 사이트 백업(`index.html`)

## 배포 전환

GitHub Pages 소스를 **Deploy from a branch** → **GitHub Actions**로 바꾸면
`main` 푸시 시 자동 빌드·배포됩니다. `basePath`는 `/portfolio`로 설정되어 있습니다.
