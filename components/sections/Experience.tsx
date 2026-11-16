import { portfolio } from "@/lib/portfolio";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { LayoverCard } from "@/components/shared/LayoverCard";
export function Experience() {
  const d = portfolio.experience;
  return (
    <section id="experience" className="content-section experience-section container-shell">
      <SectionHeading eyebrow={d.eyebrow} heading={d.heading} subtitle={d.subtitle} />
      <div className="layovers-grid">
        {d.entries.map((e) => (
          <LayoverCard entry={e} key={e.title} />
        ))}
      </div>
    </section>
  );
}
