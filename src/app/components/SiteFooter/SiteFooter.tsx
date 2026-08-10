import Link from "next/link";
import { company } from "../../data/company";
import type { SiteFooterProps } from "./interface";
import { FooterShell } from "./elements";

export default function SiteFooter({ compact = false }: SiteFooterProps) {
  return (
    <FooterShell>
      <div className="footer-grid site-shell">
        <div className="footer-statement">
          <span className="micro-label">ARV Construction & Supplies</span>
          <p className={compact ? "compact" : ""}>Transforming<br />blueprints<br /><em>into reality.</em></p>
        </div>
        <div className="footer-links">
          <div><span className="footer-label">Navigate</span><Link href="/projects">Projects</Link><Link href="/services">Services</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div>
          <div><span className="footer-label">Start</span><Link href="/request-quote">Request a Quote</Link><a href={`tel:${company.phoneHref}`}>Call ARV</a><a href={company.facebook} target="_blank" rel="noreferrer">Facebook ↗</a></div>
          <div><span className="footer-label">Studio</span><span>{company.address}</span><a href={`mailto:${company.email}`}>{company.email}</a><a href={`tel:${company.phoneHref}`}>{company.phoneDisplay}</a></div>
        </div>
      </div>
      <div className="footer-bottom site-shell"><span>© {new Date().getFullYear()} ARV Construction & Supplies</span><span>San Fernando City, La Union</span></div>
    </FooterShell>
  );
}
