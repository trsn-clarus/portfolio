"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, Close } from "@/components/icons";

const NAV_ITEMS = [
  { href: "#intro", label: "Introduction" },
  { href: "#trajectory", label: "Trajectory" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#beyond", label: "Beyond" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("#intro");
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const ids = NAV_ITEMS.map((i) => i.href.slice(1));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (els.length === 0) return;

    const ratios = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(`#${entry.target.id}`, entry.isIntersecting ? entry.intersectionRatio : 0);
        }
        let best = current;
        let bestRatio = 0;
        ratios.forEach((ratio, href) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = href;
          }
        });
        if (bestRatio > 0) setCurrent(best);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: "-15% 0px -55% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    firstLinkRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <header className="nav" data-scrolled={scrolled}>
      <div className="wrap nav-row">
        <a className="brand" href="#intro">
          TRSN&nbsp;CLARUS <small>조민수 · Clarus Cho</small>
        </a>

        <nav className="nav-links" aria-label="주요 섹션">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={current === item.href ? "location" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>

      <div id="mobile-menu" className="nav-mobile" data-open={open} hidden={!open}>
        <nav aria-label="모바일 메뉴">
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              ref={i === 0 ? firstLinkRef : undefined}
              aria-current={current === item.href ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
