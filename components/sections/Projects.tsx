import { portfolio } from "@/lib/portfolio";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TicketCard } from "@/components/shared/TicketCard";
export function Projects() {
  const d = portfolio.projects;
  return (
    <section id="projects" className="projects-band">
      <div className="container-shell">
        <SectionHeading eyebrow={d.eyebrow} heading={d.heading} subtitle={d.subtitle} />
        <div className="ticket-list">
          {d.items.map((t) => (
            <TicketCard ticket={t} key={t.flight} />
          ))}
        </div>
      </div>
    </section>
  );
}
