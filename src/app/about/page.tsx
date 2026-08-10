import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import AboutHero from "../components/AboutHero/AboutHero";
import ProcessSection from "../components/ProcessSection/ProcessSection";
import QuoteCta from "../components/QuoteCta/QuoteCta";
import { company } from "../data/company";
import { AboutMain } from "./elements";

export const metadata: Metadata = {
  title: "About",
  description: "About ARV Construction & Supplies, a design and build company based in San Fernando City, La Union.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader inverted />
      <AboutMain>
        <AboutHero />

        <section className="about-story">
          <div className="site-shell about-story-grid">
            <span className="micro-label">Company profile</span>
            <div className="about-story-copy">
              <h2>Designed with<br />the build in mind.</h2>
              <p>ARV is a Design and Build construction company. Its current service material covers architectural and structural consultation, design and rendering, building plans, bills of materials, as-built plans, repair and renovation, and permit or occupancy assistance.</p>
              <p>The same business also promotes signage fabrication and truck rental, giving ARV a broader practical service range around construction and local project needs.</p>
            </div>
            <div className="about-image">
              <Image src="/arvcover.jpg" alt="ARV architectural and construction presentation" fill sizes="(max-width: 840px) 92vw, 30vw" />
            </div>
          </div>
        </section>

        <section className="about-facts">
          <div className="site-shell about-facts-grid">
            <div className="about-fact"><span>Company</span><strong>{company.shortName}</strong></div>
            <div className="about-fact"><span>Practice</span><strong>{company.descriptor}</strong></div>
            <div className="about-fact"><span>Base</span><strong>San Fernando<br />City, La Union</strong></div>
            <div className="about-fact"><span>Contact</span><strong>{company.phoneDisplay}</strong></div>
          </div>
        </section>

        <ProcessSection title="A connected route from requirement to completion." />
        <QuoteCta />
      </AboutMain>
      <SiteFooter compact />
    </>
  );
}
