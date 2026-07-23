"use client";

import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="nav" data-scrolled={scrolled}>
      <div className="wrap">
        <a className="brand" href="#top">
          TRSN&nbsp;CLARUS <small>조민수</small>
        </a>
        <nav className="links">
          <a href="#about">소개</a>
          <a href="#work">프로젝트</a>
          <a href="#skills">기술</a>
          <a href="#contact">연락</a>
        </nav>
      </div>
    </header>
  );
}
