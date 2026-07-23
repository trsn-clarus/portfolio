export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="wrap">
        <div>© {year} 조민수 · TRSN CLARUS</div>
        <div>한중 번역 · 통역 · AI 번역 시스템 개발</div>
      </div>
    </footer>
  );
}
