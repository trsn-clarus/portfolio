export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="wrap">
        <div>
          © {year} 조민수
          <br />
          TRSN CLARUS
        </div>
        <div>
          <div className="colophon-nav">
            <a href="#about">소개</a>
            <a href="#work">프로젝트</a>
            <a href="#skills">기술</a>
            <a href="#contact">연락</a>
          </div>
          <p className="note">
            한중 번역 · 통역 · AI 번역 시스템 개발. 이 사이트는 Next.js와 Motion으로 직접
            만들었습니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
