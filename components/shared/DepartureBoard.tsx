import { portfolio } from "@/lib/portfolio";
import { TenureValue } from "@/components/shared/TenureValue";
export function DepartureBoard() {
  const b = portfolio.hero;
  return (
    <aside className="departure-board hero-metrics-card" aria-labelledby="hero-metrics-heading">
      <h2 id="hero-metrics-heading" className="board-top eyebrow">
        {b.metricsHeading}
      </h2>
      <dl className="hero-metrics-list">
        {b.metrics.map((metric) => (
          <div className="hero-metric" key={metric.label}>
            <dt>{metric.label}</dt>
            <dd className="hero-metric-value">
              {metric.type === "tenure" ? (
                <TenureValue since={b.tenureStart} units={b.tenureUnits} />
              ) : (
                metric.value
              )}
            </dd>
            <dd className="hero-metric-detail">{metric.detail}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
