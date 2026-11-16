import { portfolio } from "@/lib/portfolio";
import { DepartureBoard } from "@/components/shared/DepartureBoard";
import { SectionHeading } from "@/components/shared/SectionHeading";
export function Hero() {
  const d = portfolio.hero;
  return (
    <section className="hero-section container-shell" id="home">
      <div className="hero-copy">
        <SectionHeading heading={d.heading} subtitle={d.subtitle} />
        <p className="eyebrow accent">{d.eyebrow}</p>
        <h1>
          {d.headingLines.map((line, i) => (
            <span key={i}>{line}</span>
          ))}
        </h1>
        <p className="hero-role">{d.role}</p>
        <p className="hero-description">{d.description}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn action-primary">
            {d.primaryButton}
          </a>
          <a href="#contact" className="btn action-secondary">
            {d.secondaryButton}
          </a>
        </div>
      </div>
      <DepartureBoard />
    </section>
  );
}
