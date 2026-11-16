import { portfolio } from "@/lib/portfolio";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { LuggageTagCard } from "@/components/shared/LuggageTagCard";
export function Skills() {
  const d = portfolio.skills;
  const itemCount = d.categories.reduce((total, category) => total + category.values.length, 0);
  return (
    <section id="skills" className="content-section baggage-section container-shell">
      <div>
        <SectionHeading eyebrow={d.eyebrow} heading={d.heading} subtitle={d.subtitle} />
        {/* <p className="baggage-description">{d.description}</p> */}
        <p className="baggage-summary">
          {d.categories.length} {d.bagsLabel} · {itemCount} {d.checkedInLabel}
        </p>
      </div>
      <div className="luggage-tag-grid">
        {d.categories.map((category, index) => (
          <LuggageTagCard category={category} index={index} key={category.title} />
        ))}
      </div>
    </section>
  );
}
