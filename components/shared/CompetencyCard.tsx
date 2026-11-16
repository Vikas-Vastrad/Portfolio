import { Check, CodeXml, UsersRound } from "lucide-react";
import type { PortfolioData } from "@/lib/portfolio";

type Group = PortfolioData["competencies"]["groups"][number];

export function CompetencyCard({ group }: { group: Group }) {
  const Icon = group.kind === "technical" ? CodeXml : UsersRound;

  return (
    <article className="card competency-pass">
      <header className="competency-pass-header">
        <span className="competency-pass-avatar" aria-hidden="true">
          <Icon size={24} />
        </span>
        <div className="competency-pass-title">
          <h3>{group.heading}</h3>
          <p className="eyebrow muted">{group.eyebrow}</p>
        </div>
      </header>
      <div className="competency-pass-body">
        <ul className="competency-pass-skills">
          {group.items.map((item) => (
            <li key={item}>
              <span className="competency-pass-check" aria-hidden="true">
                <Check size={14} strokeWidth={2.5} />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
