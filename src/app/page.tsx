import Image from "next/image";
import Link from "next/link";
import SiteHeader from "./components/SiteHeader/SiteHeader";
import SiteFooter from "./components/SiteFooter/SiteFooter";
import Hero from "./components/Hero/Hero";
import ServiceIndex from "./components/ServiceIndex/ServiceIndex";
import ProjectShowcase from "./components/ProjectShowcase/ProjectShowcase";
import ProcessSection from "./components/ProcessSection/ProcessSection";
import QuoteCta from "./components/QuoteCta/QuoteCta";
import { HomeMain } from "./elements";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <HomeMain>
        <Hero />

        <section className="about-story">
          <div className="site-shell about-story-grid">
            <span className="micro-label">01 / ARV</span>
            <div className="about-story-copy">
              <h2>Design it.<br />Plan it.<br />Build it.</h2>
              <p>ARV Construction & Supplies is a San Fernando City, La Union based design-and-build company working across architectural planning, construction, repair, fabrication, and transport support.</p>
              <p>The website now puts the work first: real project imagery, clear service scopes, and direct ways to start an inquiry.</p>
              <Link href="/about" className="text-link">About ARV <span aria-hidden="true">{"\u2197"}</span></Link>
            </div>
            <div className="about-image"><Image src="/arvcover.jpg" alt="ARV design and construction visual" fill sizes="(max-width: 840px) 92vw, 30vw" /></div>
          </div>
        </section>

        <ServiceIndex />
        <ProjectShowcase />

        <section className="about-facts">
          <div className="site-shell about-facts-grid">
            <div className="about-fact"><span>Core practice</span><strong>Design<br />& Build</strong></div>
            <div className="about-fact"><span>Location</span><strong>San Fernando<br />La Union</strong></div>
            <div className="about-fact"><span>Project range</span><strong>Residential<br />to Institutional</strong></div>
            <div className="about-fact"><span>Specialized support</span><strong>Signage<br />& Hauling</strong></div>
          </div>
        </section>

        <ProcessSection />
        <QuoteCta />
      </HomeMain>
      <SiteFooter />
    </>
  );
}
