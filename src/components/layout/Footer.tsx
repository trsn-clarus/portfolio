import { links } from "@/data/links";

const COLOPHON_NAV = [
  { href: "#trajectory", label: "Trajectory" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#education", label: "Education" },
  { href: "#beyond", label: "Beyond" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="wrap footer-grid">
        <div className="footer-mark">
          <span>© {year} 조민수 · Minsoo Cho</span>
          <span>TRSN CLARUS</span>
        </div>
        <div>
          <nav className="footer-nav" aria-label="바닥글 메뉴">
            {COLOPHON_NAV.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <ul className="footer-links">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={l.href}
                  {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="footer-note">
            AI Translation Systems · Global Communication · Product Operations. Next.js와
            self-hosted 타이포그래피로 직접 만들었습니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
