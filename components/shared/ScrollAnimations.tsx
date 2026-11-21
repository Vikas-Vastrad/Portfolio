"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type ScrollAnimationsProps = {
  children: React.ReactNode;
};

export function ScrollAnimations({ children }: ScrollAnimationsProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = container.current;

      if (!root) return;

      // Respect accessibility preferences
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) return;

      // Reusable animation for individual elements
      const revealElements = root.querySelectorAll(
        [
          "section:not(.hero-section) .section-heading",
          ".about-section-heading",
          ".passenger-details-card",
          ".baggage-summary",
          ".certificate-carousel-shell",
          ".footer-contact",
        ].join(","),
      );

      revealElements.forEach((element) => {
        gsap.from(element, {
          autoAlpha: 0,
          y: 35,
          duration: 0.75,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
        });
      });

      // Reusable stagger animation for card groups
      const animateCards = (selector: string, triggerSelector: string, stagger = 0.15) => {
        const cards = root.querySelectorAll(selector);
        const trigger = root.querySelector(triggerSelector);

        if (!cards.length || !trigger) return;

        gsap.from(cards, {
          autoAlpha: 0,
          y: 45,
          duration: 0.7,
          stagger,
          ease: "power2.out",
          scrollTrigger: {
            trigger,
            start: "top 85%",
            once: true,
          },
        });
      };

      // Experience cards
      animateCards(".layovers-grid .layover-card", ".layovers-grid", 0.2);

      // Project boarding-pass cards
      animateCards(".ticket-list .project-ticket", ".ticket-list", 0.2);

      // Skills luggage tags
      animateCards(".luggage-tag-grid .luggage-tag", ".luggage-tag-grid", 0.15);

      // Competency cards
      animateCards(".competency-pass-grid .competency-pass", ".competency-pass-grid", 0.2);
    },
    {
      scope: container,
    },
  );

  return (
    <div ref={container} className="scroll-animation-root">
      {children}
    </div>
  );
}
