import { Chip } from "@/components/shared/Chip";
import { ArrowRight } from "lucide-react";
import { portfolio, type PortfolioData } from "@/lib/portfolio";

type Ticket = PortfolioData["projects"]["items"][number];

export function TicketCard({ ticket }: { ticket: Ticket }) {
  const labels = portfolio.projects.cardLabels;
  const action = (
    <>
      {ticket.linkLabel}
      <ArrowRight size={13} aria-hidden="true" />
    </>
  );

  return (
    <article className="card project-ticket">
      <div className="project-ticket-route">
        <p className="project-ticket-label project-ticket-brand">{labels.heading}</p>
        <div className="project-ticket-codes">
          <strong>{ticket.originCode}</strong>
          <svg viewBox="0 0 80 40" fill="none" aria-hidden="true">
            <path
              d="M2 28 Q32 4 65 19"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="2 5"
            />
            <path d="m62 13 15 7-15 6 4-6Z" fill="var(--signal)" />
          </svg>
          <strong>{ticket.destinationCode}</strong>
        </div>
        <div className="project-ticket-locations">
          <div>
            <span>{labels.from}</span>
            <p>{ticket.origin}</p>
          </div>
          <div>
            <span>{labels.to}</span>
            <p>{ticket.destination}</p>
          </div>
        </div>
        <div className="project-ticket-class">
          <span className="project-ticket-label">{labels.class}</span>
          <p>{ticket.travelClass}</p>
        </div>
      </div>
      <div className="project-ticket-main">
        <p className="project-ticket-label">{ticket.flightNumber}</p>
        <h3>{ticket.title}</h3>
        <p className="project-ticket-description">{ticket.description}</p>
        <div className="project-ticket-stack">
          <span className="project-ticket-label">{labels.stack}</span>
          {ticket.tags.map((tag) => (
            <Chip key={tag}>{tag}</Chip>
          ))}
        </div>
      </div>
      <div className="project-ticket-stub">
        <dl className="project-ticket-seat">
          <div>
            <dt>{labels.gate}</dt>
            <dd>{ticket.gate}</dd>
          </div>
          <div>
            <dt>{labels.seat}</dt>
            <dd>{ticket.seat}</dd>
          </div>
        </dl>
        <div className="project-ticket-barcode" aria-hidden="true" />
        {ticket.link.trim() ? (
          <a
            className="btn project-ticket-action"
            href={ticket.link.trim()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ticket.linkLabel + ": " + ticket.title + " (opens in a new tab)"}
          >
            {action}
          </a>
        ) : (
          <button
            className="btn project-ticket-action"
            type="button"
            disabled
            title={labels.unavailable}
          >
            {action}
          </button>
        )}
      </div>
    </article>
  );
}
