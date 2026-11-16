import { Chip } from "@/components/shared/Chip";
import type { PortfolioData } from "@/lib/portfolio";

export function PassengerDetailsCard({ about }: { about: PortfolioData["about"] }) {
  return (
    <article className="card passenger-details-card">
      <div className="passenger-details-top">
        <div className="passenger-introduction">
          <p className="passenger-label">{about.introLabel}</p>
          <h3>{about.introHeading}</h3>
          <p className="passenger-biography">{about.introduction}</p>
        </div>
        <div className="passenger-details-panel">
          <p className="passenger-label">{about.detailsLabel}</p>
          <dl className="passenger-details-list">
            {about.fields.map((field) => (
              <div key={field.label}>
                <dt>{field.label}</dt>
                <dd>{field.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="passenger-chip-groups">
        {about.chipGroups.map((group) => (
          <div className="passenger-chip-group" key={group.label}>
            <h4 className="passenger-label">{group.label}</h4>
            <ul>
              {group.values.map((value) => (
                <li key={value}>
                  <Chip>{value}</Chip>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="passport-strip">{about.machineReadable}</div>
    </article>
  );
}
