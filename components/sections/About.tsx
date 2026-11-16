import { portfolio } from "@/lib/portfolio";
import { PassengerDetailsCard } from "@/components/shared/PassengerDetailsCard";
export function About() {
  const d = portfolio.about;
  return (
    <section id="about" className="content-section container-shell about-section">
      <header className="about-section-heading">
        <p className="eyebrow accent">{d.eyebrow}</p>
        <h2>{d.heading}</h2>
      </header>
      <PassengerDetailsCard about={d} />
    </section>
  );
}
