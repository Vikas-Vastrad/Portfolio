import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { portfolio } from "@/lib/portfolio";

export function Contact() {
  const d = portfolio.contact;
  const socialLinks = d.links.filter((link) => link.type === "github" || link.type === "linkedin");

  return (
    <section className="contact-card footer-contact" aria-labelledby="contact-heading">
      <div>
        <p className="eyebrow">{d.eyebrow}</p>
        <div className="contact-heading-row">
          <h2 id="contact-heading">{d.heading}</h2>
          <p className="section-meaning contact-meaning">{d.subtitle}</p>
        </div>
        <div className="contact-links">
          {socialLinks.map((link) => {
            const Icon = link.type === "github" ? Github : Linkedin;
            const icon = <Icon size={24} aria-hidden="true" />;
            return link.href ? (
              <a
                key={link.type}
                className="contact-social-icon"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label + " (opens in a new tab)"}
                title={link.label}
              >
                {icon}
              </a>
            ) : (
              <span
                key={link.type}
                className="contact-social-icon"
                aria-label={link.label}
                aria-disabled="true"
              >
                {icon}
              </span>
            );
          })}
          <details className="dropdown dropdown-end contact-phone">
            <summary className="contact-social-icon" aria-label={d.phoneLabel} title={d.phoneLabel}>
              <Phone size={24} aria-hidden="true" />
            </summary>
            <div className="dropdown-content contact-phone-menu">
              <p>{d.phoneLabel}</p>
              {d.phoneNumber.trim() ? (
                <a href={`tel:${d.phoneNumber.replace(/[^\d+]/g, "")}`}>{d.phoneNumber}</a>
              ) : (
                <span>{d.phoneEmptyLabel}</span>
              )}
            </div>
          </details>
        </div>
      </div>
      <a className="btn resume-btn resume-accent" href={d.emailHref}>
        <Mail size={16} aria-hidden="true" />
        {d.emailLabel}
      </a>
    </section>
  );
}
