"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function IntroAnimation() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const intro = container.current;

      if (!intro) return;

      // Respect accessibility preferences
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(intro, { display: "none" });
        return;
      }

      const tl = gsap.timeline();

      tl.fromTo(
        ".intro-kicker",
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
      )
        .fromTo(
          ".intro-name",
          { y: 45, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65, ease: "power3.out" },
          "-=0.1",
        )
        .fromTo(
          ".intro-line",
          { scaleX: 0 },
          { scaleX: 1, duration: 0.4, ease: "power2.out" },
          "-=0.2",
        )
        .fromTo(
          ".intro-tagline",
          { y: 12, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" },
        )
        // Small pause before revealing the website
        .to({}, { duration: 0.25 })
        // Move the entire intro screen upwards
        .to(intro, {
          yPercent: -100,
          duration: 0.8,
          ease: "power4.inOut",
          onComplete: () => {
            gsap.set(intro, { display: "none" });
          },
        });
    },
    { scope: container },
  );

  return (
    <div ref={container} className="intro-screen">
      <div className="intro-content">
        <p className="intro-kicker">PORTFOLIO · SOFTWARE ENGINEER</p>

        <h1 className="intro-name">
          VIKAS A VASTRAD
        </h1>

        <div className="intro-line" />

        <p className="intro-tagline">WELCOME TO MY DIGITAL SPACE</p>
      </div>

      <div className="intro-footer">
        <span>EST. 2025</span>
        <span>INDIA · AVAILABLE FOR OPPORTUNITIES</span>
      </div>
    </div>
  );
}
