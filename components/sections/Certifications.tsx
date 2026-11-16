"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { portfolio } from "@/lib/portfolio";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function Certifications() {
  const d = portfolio.certifications;
  const trackRef = useRef<HTMLDivElement>(null);
  const currentRef = useRef(0);
  const [active, setActive] = useState(0);

  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const next = (index + d.items.length) % d.items.length;
    track.scrollTo({
      left: next * track.clientWidth,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const observer = new ResizeObserver(() => {
      track.scrollTo({ left: currentRef.current * track.clientWidth, behavior: "instant" });
    });
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stamps-band" id="certifications">
      <div className="container-shell">
        <SectionHeading eyebrow={d.eyebrow} heading={d.heading} subtitle={d.subtitle} />
        <div
          className="certificate-carousel-shell"
          role="region"
          aria-roledescription="carousel"
          aria-label={d.subtitle}
        >
          <button
            type="button"
            className="btn btn-circle certificate-arrow certificate-previous"
            aria-label={d.previousLabel}
            aria-controls="certificate-slides"
            onClick={() => goTo(active - 1)}
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <div
            ref={trackRef}
            id="certificate-slides"
            className="carousel certificate-carousel"
            tabIndex={0}
            aria-label={d.subtitle}
            onScroll={(event) => {
              const track = event.currentTarget;
              const next = Math.min(
                d.items.length - 1,
                Math.max(0, Math.round(track.scrollLeft / track.clientWidth)),
              );
              currentRef.current = next;
              setActive(next);
            }}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
                event.preventDefault();
                goTo(active + (event.key === "ArrowLeft" ? -1 : 1));
              }
            }}
          >
            {d.items.map((certificate, index) => (
              <div
                key={certificate.id}
                className="carousel-item certificate-slide"
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} / ${d.items.length}: ${certificate.title}`}
              >
                <article
                  className="card certificate-card"
                  aria-labelledby={`${certificate.id}-title`}
                >
                  <a
                    className="certificate-image"
                    href={certificate.document}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${d.viewLabel}: ${certificate.title} (opens in a new tab)`}
                  >
                    <Image
                      src={certificate.image}
                      alt={certificate.imageAlt}
                      width={1200}
                      height={900}
                      sizes="(max-width: 640px) 90vw, (max-width: 1100px) 36vw, 400px"
                    />
                  </a>
                  <div className="card-body certificate-content">
                    <p className="eyebrow accent">{certificate.issuer}</p>
                    <h3 id={`${certificate.id}-title`}>{certificate.title}</h3>
                    <div>
                      <h4>{d.purposeLabel}</h4>
                      <p>{certificate.purpose}</p>
                    </div>
                    <div>
                      <h4>{d.skillsLabel}</h4>
                      <div className="certificate-skills">
                        {certificate.skills.map((skill) => (
                          <span key={skill} className="badge badge-outline">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="certificate-card-bottom">
                      <div>
                        <h4>{d.dateLabel}</h4>
                        <time dateTime={certificate.obtainedOn}>{certificate.obtainedLabel}</time>
                      </div>
                      <a
                        href={certificate.document}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="certificate-view"
                        aria-label={`${d.viewLabel}: ${certificate.title} (opens in a new tab)`}
                      >
                        {d.viewLabel}
                        <ExternalLink size={13} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="btn btn-circle certificate-arrow certificate-next"
            aria-label={d.nextLabel}
            aria-controls="certificate-slides"
            onClick={() => goTo(active + 1)}
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>
          <div className="certificate-pagination">
            {d.items.map((certificate, index) => (
              <button
                type="button"
                key={certificate.id}
                className="certificate-dot"
                aria-label={`${d.slideLabel} ${index + 1}: ${certificate.title}`}
                aria-current={active === index ? "true" : undefined}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
          <p className="certificate-counter" aria-live="polite" aria-atomic="true">
            {d.slideLabel} {active + 1} / {d.items.length}
          </p>
        </div>
      </div>
    </section>
  );
}
