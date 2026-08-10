import type { ContactHeroProps } from "./interface";
import { ContactHeroShell } from "./elements";

export default function ContactHero({ phoneDisplay, phoneHref, email, facebook }: ContactHeroProps) {
  return (
    <ContactHeroShell>
      <div className="site-shell contact-hero-grid">
        <div className="contact-hero-copy">
          <span className="micro-label">04 / Contact</span>
          <h1>Let&apos;s talk<br />about your<br />project.</h1>
          <div className="contact-hero-services" aria-label="Services you can inquire about">
            <span>Construction</span>
            <span>Architecture</span>
            <span>Renovation</span>
            <span>Signage</span>
            <span>Truck rental</span>
          </div>
        </div>

        <div className="contact-hero-direct">
          <div>
            <span>Call</span>
            <a href={`tel:${phoneHref}`}>{phoneDisplay} ↗</a>
          </div>
          <div>
            <span>Email</span>
            <a href={`mailto:${email}`}>{email} ↗</a>
          </div>
          <div>
            <span>Facebook</span>
            <a href={facebook} target="_blank" rel="noreferrer">ARV Construction ↗</a>
          </div>
          <p>For a more detailed requirement, continue below and prepare a project inquiry.</p>
        </div>
      </div>
    </ContactHeroShell>
  );
}
