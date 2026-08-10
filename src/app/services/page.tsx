import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import PageIntro from "../components/PageIntro/PageIntro";
import QuoteCta from "../components/QuoteCta/QuoteCta";
import services from "../data/services";
import { ServicesMain } from "./elements";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore ARV design and build, architectural planning, renovation, signage fabrication, and truck rental services.",
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <ServicesMain>
        <PageIntro
          dark
          index="02"
          kicker="Services"
          title="Build. Draw. Renew. Make. Move."
          description="Construction stays at the center of ARV, supported by architecture, renovation, signage fabrication, and hauling services for real project needs."
        />

        <section className="services-matrix-list" aria-label="ARV services">
          {services.map((service) => (
            <Link className="services-matrix-row" href={`/services/${service.slug}`} key={service.slug}>
              <span className="services-matrix-number">{service.number}</span>
              <h2>{service.title}</h2>
              <div className="services-matrix-info">
                <p>{service.summary}</p>
                <span className="services-matrix-view">View service ↗</span>
              </div>
            </Link>
          ))}
        </section>

        <QuoteCta title="Not sure which service your requirement falls under? Send the brief first." />
      </ServicesMain>
      <SiteFooter compact />
    </>
  );
}
