import { IntroAnimation } from "@/components/shared/IntroAnimation";
import { ScrollAnimations } from "@/components/shared/ScrollAnimations";

import { Navbar } from "@/components/shared/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Competencies } from "@/components/sections/Competencies";
import { Certifications } from "@/components/sections/Certifications";
import { PortfolioFooter } from "@/components/sections/PortfolioFooter";

export default function Home() {
  return (
    <>
      {/* Website welcome animation */}
      <IntroAnimation />

      {/* Website content and scroll animations */}
      <ScrollAnimations>
        <Navbar />

        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Competencies />
          <Certifications />
        </main>

        <PortfolioFooter />
      </ScrollAnimations>
    </>
  );
}
