import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { SectionStateProvider } from "@/components/ambient/SectionStateProvider";
import { Hero } from "@/components/sections/Hero";
import { Trajectory } from "@/components/sections/Trajectory";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Experience } from "@/components/sections/Experience";
import { Capabilities } from "@/components/sections/Capabilities";
import { Education } from "@/components/sections/Education";
import { BeyondWork } from "@/components/sections/BeyondWork";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <SectionStateProvider>
      <a className="skip-link" href="#main">
        본문으로 건너뛰기
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Trajectory />
        <SelectedWork />
        <Experience />
        <Capabilities />
        <Education />
        <BeyondWork />
        <Contact />
      </main>
      <Footer />
    </SectionStateProvider>
  );
}
