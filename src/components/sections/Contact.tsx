import { Reveal } from "@/components/motion/Reveal";
import { ArrowUpRight } from "@/components/icons";
import { links } from "@/data/links";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="sect" data-ambient-section="rest">
      <div className="wrap">
        <Reveal className="contact-block">
          <div className="sec-meta">
            <span className="sec-idx">07</span>
            <span className="sec-kicker">Contact</span>
          </div>
          <div className="contact-body">
            <h2 id="contact-title">연락하기</h2>
            <p>
              AI 번역 시스템, 다국어 커뮤니케이션, 운영이 만나는 자리에서 협업이나 채용을 논의하고
              싶으시면 아래로 연락해 주세요.
            </p>
            <ul className="contact-links">
              {links.map((l) => (
                <li key={l.id}>
                  <span className="contact-link-label">{l.sublabel}</span>
                  <a
                    className="link primary"
                    href={l.href}
                    {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {l.label} <ArrowUpRight />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
