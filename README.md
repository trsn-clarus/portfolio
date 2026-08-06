# TRSN CLARUS — Portfolio

조민수(Minsoo Cho)의 포트폴리오. **Personal Ambient Archive** — SOOM과 시각 언어를
공유하되, 경력의 방향성(언어 → 운영 → 데이터 → AI 시스템)을 정보 중심으로 보여주는
Next.js(App Router) + Motion 사이트. GitHub Pages(정적 export)로 배포됩니다.

- 라이브: https://trsnclarus.com/portfolio/
- 스택: Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · Motion
- 배포: `output: 'export'` 정적 빌드 → GitHub Actions(`.github/workflows/deploy.yml`)

## 개발

```bash
npm install
npm run dev      # http://localhost:3000/portfolio
npm run build    # 정적 export → out/
npm run lint     # eslint . (flat config, eslint-config-next)
npx tsc --noEmit
```

## 구조

- `src/app/` — 레이아웃 · 페이지 · 전역 스타일(디자인 토큰) · self-hosted 폰트(`src/app/fonts/`)
- `src/components/ambient/` — Ambient Field(Canvas 2D + CSS fallback), 섹션별 환경 상태
- `src/components/layout/` — Nav · Footer · Section · SectionHead
- `src/components/sections/` — Hero · Trajectory · SelectedWork · Experience · Capabilities · Education · BeyondWork · Contact
- `src/components/project/` — 프로젝트 챕터(Situation/Problem/Action/Evidence/Outcome)
- `src/components/motion/` — Reveal · FocusText (스크롤 리빌 / 텍스트 포커스 모션)
- `src/data/` — `profile` · `trajectory` · `projects` · `experience` · `capabilities` · `education` · `activities` · `links` (역할별 타입 분리)
- `legacy/` — 리메이크 이전의 단일 파일 정적 사이트 백업(`index.html`)

## 폰트

Pretendard Variable · Instrument Sans · IBM Plex Mono, 모두 self-hosted(OFL, `src/app/fonts/*/LICENSE.txt`),
`next/font/local`로 로드됩니다. Pretendard는 이 저장소의 실제 한글 카피에 맞춘 서브셋입니다.
카피를 수정한 뒤에는 서브셋을 다시 빌드하세요.

```bash
# fonttools, brotli 필요: pip install fonttools brotli
PRETENDARD_SRC=/path/to/PretendardVariable.woff2 python tools/build-fonts.py
```

## 배포 전환

GitHub Pages 소스를 **Deploy from a branch** → **GitHub Actions**로 바꾸면
`main` 푸시 시 자동 빌드·배포됩니다. `basePath`는 `/portfolio`로 설정되어 있습니다.
