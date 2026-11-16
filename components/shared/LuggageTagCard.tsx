import { portfolio, type PortfolioData } from "@/lib/portfolio";
import { Chip } from "@/components/shared/Chip";

type Category = PortfolioData["skills"]["categories"][number];

export function LuggageTagCard({ category, index }: { category: Category; index: number }) {
  const labels = portfolio.skills;

  return (
    <article className="card luggage-tag" aria-labelledby={`${category.tagCode}-title`}>
      <span className="luggage-tag-loop" aria-hidden="true" />
      <header className="luggage-tag-header">
        <span>
          {labels.bagLabel} {String(index + 1).padStart(2, "0")}
        </span>
        <span>
          {category.values.length} {labels.itemsLabel}
        </span>
      </header>
      <div className="luggage-tag-body">
        <p className="luggage-tag-destination">
          {labels.destinationLabel} · {category.destination}
        </p>
        <h3 id={`${category.tagCode}-title`}>{category.title}</h3>
        <ul className="luggage-tag-skills">
          {category.values.map((skill) => (
            <li key={skill}>
              <Chip>{skill}</Chip>
            </li>
          ))}
        </ul>
      </div>
      <footer className="luggage-tag-footer">
        <div className="luggage-tag-barcode" aria-hidden="true" />
        <span>{category.tagCode}</span>
      </footer>
    </article>
  );
}
