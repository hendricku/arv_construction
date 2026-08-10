import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import ContactHero from "../components/ContactHero/ContactHero";
import InquiryForm from "../components/InquiryForm/InquiryForm";
import { company } from "../data/company";
import { ContactMain } from "./elements";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact ARV Construction & Supplies in San Fernando City, La Union.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader inverted />
      <ContactMain>
        <ContactHero
          phoneDisplay={company.phoneDisplay}
          phoneHref={company.phoneHref}
          email={company.email}
          facebook={company.facebook}
        />

        <section className="contact-layout">
          <div className="site-shell contact-grid">
            <aside className="contact-aside">
              <span className="micro-label">Project inquiry</span>
              <h2>Share the<br />requirement.</h2>
              <div className="contact-detail-list">
                <div className="contact-detail"><span>Phone</span><a href={`tel:${company.phoneHref}`}>{company.phoneDisplay}</a></div>
                <div className="contact-detail"><span>Email</span><a href={`mailto:${company.email}`}>{company.email}</a></div>
                <div className="contact-detail"><span>Address</span><strong>{company.address}</strong></div>
                <div className="contact-detail"><span>Facebook</span><a href={company.facebook} target="_blank" rel="noreferrer">ARV Construction ↗</a></div>
              </div>
            </aside>
            <InquiryForm mode="contact" />
          </div>
        </section>
      </ContactMain>
      <SiteFooter compact />
    </>
  );
}
