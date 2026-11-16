import { Contact } from "@/components/sections/Contact";
import { portfolio } from "@/lib/portfolio";

export function PortfolioFooter() {
  const { boardingPass: pass } = portfolio.footer;

  return (
    <footer id="contact" className="portfolio-footer">
      <div className="container-shell portfolio-footer-grid">
        <div className="hover-3d boarding-pass-hover">
          <article className="boarding-pass" aria-label={pass.heading}>
            <div className="boarding-pass-main">
              <header className="boarding-pass-header">
                <span>{pass.heading}</span>
              </header>
              <div className="boarding-pass-body">
                <p className="pass-label">{pass.passengerLabel}</p>
                <h2>{pass.name}</h2>
                <p className="pass-role">{pass.role}</p>
                <div className="pass-contact">
                  <div>
                    <p className="pass-label">{pass.emailLabel}</p>
                    <p>{pass.email}</p>
                  </div>
                  <div>
                    <p className="pass-label">{pass.phoneLabel}</p>
                    <p>{pass.phone}</p>
                  </div>
                </div>
                <div className="pass-route">
                  <div>
                    <p className="pass-label">{pass.fromLabel}</p>
                    <p>{pass.from}</p>
                  </div>
                  <div>
                    <p className="pass-label">{pass.toLabel}</p>
                    <p>{pass.to}</p>
                  </div>
                </div>
              </div>
            </div>
            <aside className="boarding-pass-stub">
              <div>
                <p className="pass-label">{pass.flightLabel}</p>
                <strong className="pass-flight">{pass.flight}</strong>
              </div>
              <div className="pass-seat-row">
                <div>
                  <p className="pass-label">{pass.gateLabel}</p>
                  <strong>{pass.gate}</strong>
                </div>
                <div>
                  <p className="pass-label">{pass.seatLabel}</p>
                  <strong>{pass.seat}</strong>
                </div>
              </div>
              <div className="pass-barcode" aria-hidden="true" />
              <p className="pass-stub-name">{pass.name}</p>
              <p className="pass-stub-location">{pass.location}</p>
            </aside>
          </article>
          {Array.from({ length: 8 }, (_, index) => (
            <div key={index} aria-hidden="true" />
          ))}
        </div>
        <Contact />
      </div>
      <div className="container-shell footer-copyright">
        <p>
          © {new Date().getFullYear()} {pass.name}. {portfolio.footer.copyrightNotice}
        </p>
      </div>
    </footer>
  );
}
