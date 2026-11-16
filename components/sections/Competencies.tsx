import { portfolio } from "@/lib/portfolio";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CompetencyCard } from "@/components/shared/CompetencyCard";
export function Competencies() {
  const d = portfolio.competencies;
  return (
    <section id="competencies" className="content-section competencies-section container-shell">
      <SectionHeading eyebrow={d.eyebrow} heading={d.heading} subtitle={d.subtitle} />
      <div className="competency-pass-grid">
        {d.groups.map((g) => (
          <CompetencyCard group={g} key={g.heading} />
        ))}
      </div>
    </section>
  );
}
