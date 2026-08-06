export type LinkItem = {
  id: string;
  label: string;
  sublabel?: string;
  href: string;
  external?: boolean;
};

export const links: LinkItem[] = [
  {
    id: "email",
    label: "trsn_clarus@naver.com",
    sublabel: "Email",
    href: "mailto:trsn_clarus@naver.com",
  },
  {
    id: "github",
    label: "github.com/trsn-clarus",
    sublabel: "GitHub",
    href: "https://github.com/trsn-clarus",
    external: true,
  },
  {
    id: "main",
    label: "trsnclarus.com",
    sublabel: "Main Site",
    href: "https://trsnclarus.com/",
    external: true,
  },
  {
    id: "soom",
    label: "trsnclarus.com/soom",
    sublabel: "SOOM",
    href: "https://trsnclarus.com/soom/",
    external: true,
  },
];

export const portfolioUrl = "https://trsnclarus.com/portfolio/";
