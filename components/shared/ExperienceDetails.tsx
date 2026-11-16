"use client";

import { useId, useRef } from "react";
import { portfolio, type PortfolioData } from "@/lib/portfolio";

type Entry = PortfolioData["experience"]["entries"][number];

export function ExperienceDetails({ entry }: { entry: Entry }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const id = useId();
  const details = entry.details;
  const labels = portfolio.experience;

  return (
    <>
      <button
        type="button"
        className="btn btn-xs btn-outline experience-details-button"
        aria-haspopup="dialog"
        aria-controls={id}
        aria-label={`${labels.detailsButton}: ${entry.title}`}
        onClick={() => dialogRef.current?.showModal()}
      >
        {labels.detailsButton}
      </button>
      <dialog ref={dialogRef} id={id} className="modal" aria-labelledby={`${id}-title`}>
        <div className="modal-box experience-modal max-w-2xl">
          <header className="experience-modal-header">
            <h3 id={`${id}-title`}>{details.organization}</h3>
            <p className="experience-modal-role">{details.role}</p>
            <p className="eyebrow accent mt-2">{details.period}</p>
          </header>
          <div
            className="experience-modal-body"
            tabIndex={0}
            role="region"
            aria-labelledby={`${id}-details`}
          >
            <h4 id={`${id}-details`} className="mb-3 font-bold">
              {labels.highlightsHeading}
            </h4>
            <ul className="list-disc space-y-3 pl-5">
              {details.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <h4 className="mt-6 mb-3 font-bold">{labels.technologiesHeading}</h4>
            <div className="flex flex-wrap gap-2">
              {details.technologies.map((technology) => (
                <span key={technology} className="badge badge-outline">
                  {technology}
                </span>
              ))}
            </div>
          </div>
          <footer className="modal-action experience-modal-footer">
            <form method="dialog">
              <button className="btn experience-modal-close">{labels.closeButton}</button>
            </form>
          </footer>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button aria-label={labels.closeButton}>{labels.closeButton}</button>
        </form>
      </dialog>
    </>
  );
}
