import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import SiteHeader from "../../components/SiteHeader/SiteHeader";
import SiteFooter from "../../components/SiteFooter/SiteFooter";
import QuoteCta from "../../components/QuoteCta/QuoteCta";
import services from "../../data/services";
import type { ServiceDetailPageProps } from "./interface";
import { ServiceDetailMain } from "./elements";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  return service
    ? { title: service.title, description: service.summary }
    : { title: "Service" };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) notFound();

  return (
    <>
      <SiteHeader />
      <ServiceDetailMain>
        <section className="service-detail-hero">
          <div className="service-detail-copy">
            <span className="micro-label">Service / {service.number}</span>
            <h1>{service.title}</h1>
            <p>{service.summary}</p>
          </div>
          <div className="service-detail-media">
            <Image src={service.image} alt={service.title} fill priority sizes="(max-width: 820px) 100vw, 55vw" />
            <span className="service-detail-word">{service.themeWord}</span>
          </div>
        </section>

        <section className="service-detail-content site-shell">
          <div className="service-intro-grid">
            <span className="micro-label">What ARV does</span>
            <div>
              <h2>{service.shortTitle}</h2>
              <p>{service.intro}</p>
            </div>
            <div className="capability-list">
              {service.capabilities.map((capability, index) => (
                <div key={capability}>
                  <span>0{index + 1}</span>
                  <span>{capability}</span>
                </div>
              ))}
            </div>
          </div>

          {service.gallery && (
            <div className="service-gallery">
              {service.gallery.map((image, index) => (
                <figure key={index}>
                  <Image src={image} alt={`${service.title} example ${index + 1}`} fill sizes="(max-width: 820px) 92vw, 60vw" />
                </figure>
              ))}
            </div>
          )}

          <div className="service-process">
            <div>
              <span className="micro-label">Service flow</span>
              <h2>How the requirement moves forward.</h2>
            </div>
            <div className="service-process-list">
              {service.process.map((step) => <div key={step}>{step}</div>)}
            </div>
          </div>
        </section>

        <QuoteCta title={`Need ${service.shortTitle.toLowerCase()} support? Start with the details.`} />
      </ServiceDetailMain>
      <SiteFooter compact />
    </>
  );
}
