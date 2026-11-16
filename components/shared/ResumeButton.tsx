"use client";
import { portfolio } from "@/lib/portfolio";
import { cn } from "@/lib/cn";
export function ResumeButton({
  accent = false,
  className = "",
}: {
  accent?: boolean;
  className?: string;
}) {
  const site = portfolio.site;
  const classes = cn("btn resume-btn", accent && "resume-accent", className);

  if (site.resumePath) {
    return (
      <a href={site.resumePath} download className={classes} title={site.resumeLabel}>
        {site.resumeLabel}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      onClick={() => window.print()}
      title={site.resumeFallback}
    >
      {site.resumeLabel}
    </button>
  );
}
