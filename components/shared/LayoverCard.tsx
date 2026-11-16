import type { PortfolioData } from "@/lib/portfolio";
import { cn } from "@/lib/cn";
import { ExperienceDetails } from "@/components/shared/ExperienceDetails";

type Entry = PortfolioData["experience"]["entries"][number];

export function LayoverCard({ entry }: { entry: Entry }) {
  const current = "active" in entry && entry.active;

  return (
    <div className={cn("layover-stop", current && "layover-stop-current")}>
      <article className={cn("card layover-card", current && "layover-card-current")}>
        <p className="layover-card-meta">{entry.meta}</p>
        <h3 className="layover-card-title">{entry.title}</h3>
        <p className="layover-card-description">{entry.description}</p>
        <div className="layover-card-details">
          <ExperienceDetails entry={entry} />
        </div>
        <ul className="layover-card-highlights">
          {entry.summary.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </article>
    </div>
  );
}
