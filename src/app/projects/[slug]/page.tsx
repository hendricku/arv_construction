import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../components/SiteHeader/SiteHeader";
import SiteFooter from "../../components/SiteFooter/SiteFooter";
import QuoteCta from "../../components/QuoteCta/QuoteCta";
import projects from "../../data/projects";
import type { ProjectDetailPageProps } from "./interface";
import { ProjectDetailMain } from "./elements";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return { title: "Project" };
  return { title: project.title, description: `${project.desc} ${project.address}.` };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <SiteHeader />
      <ProjectDetailMain>
        <section className="project-detail-hero">
          <div className="project-detail-hero-image">
            <Image src={project.img} alt={project.title} fill priority sizes="100vw" />
          </div>
          <div className="site-shell project-detail-hero-copy">
            <span className="micro-label">Project / 0{currentIndex + 1}</span>
            <h1>{project.title}</h1>
            <p>{project.desc}</p>
            <div className="project-detail-meta">
              <span>{project.category}</span>
              <span>{project.service}</span>
              <span>{project.address}</span>
            </div>
          </div>
        </section>

        <section className="site-shell project-overview">
          <span className="micro-label">Overview</span>
          <div>
            <h2>Project<br />overview</h2>
            <p className="project-overview-copy">{project.longDesc}</p>
          </div>
          <div className="project-facts">
            {project.details.map((detail) => (
              <div className="project-fact" key={detail.title}>
                <span>{detail.title}</span>
                <strong>{detail.desc}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="project-gallery">
          {project.images.map((image, index) => (
            <figure key={`${image}-${index}`}>
              <Image src={image} alt={`${project.title}, image ${index + 1}`} fill sizes="(max-width: 840px) 92vw, 65vw" />
            </figure>
          ))}
        </section>

        <section className="project-features">
          <div>
            <span className="micro-label">Scope</span>
            <h2>Key work<br />and inclusions</h2>
          </div>
          <div className="project-feature-list">
            {project.features.map((feature, index) => (
              <div key={feature}>
                <span>0{index + 1}</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="project-next">
          <Link href={`/projects/${next.slug}`} className="site-shell">
            <span className="micro-label">Next project</span>
            <h2>{next.title}</h2>
            <span>â†—</span>
          </Link>
        </section>

        <QuoteCta />
      </ProjectDetailMain>
      <SiteFooter compact />
    </>
  );
}
