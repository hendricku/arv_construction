import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import PageIntro from "../components/PageIntro/PageIntro";
import QuoteCta from "../components/QuoteCta/QuoteCta";
import projects from "../data/projects";
import { ProjectsMain } from "./elements";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected construction, renovation, community, care, and academic project work by ARV Construction & Supplies.",
};

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader inverted />
      <ProjectsMain>
        <PageIntro
          index="01"
          kicker="Projects"
          title="Work that carries the idea into the real world."
          description="A selected archive of ARV construction, renovation, institutional, community, and academic work across La Union."
        />

        <div className="projects-filter" aria-label="Project categories">
          <span>All work</span>
          <span>Institutional</span>
          <span>Renovation</span>
          <span>Community</span>
          <span>Academic</span>
          <Link href="/projects/design-concepts" className="text-link">Design archive ↗</Link>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <article key={project.slug}>
              <Link href={`/projects/${project.slug}`} className="projects-list-link" aria-label={`View ${project.title}`}>
                <div className="projects-list-image">
                  <Image src={project.img} alt={project.title} fill sizes="(max-width: 820px) 92vw, 50vw" />
                  <span className="projects-list-view-on-image">View project ↗</span>
                </div>
                <div className="projects-list-copy">
                  <span className="projects-list-index">0{index + 1}</span>
                  <div className="projects-list-content">
                    <div className="projects-list-kicker"><span>{project.category}</span><span>{project.service}</span></div>
                    <h2>{project.title}</h2>
                    <p className="projects-list-address">{project.address}</p>
                    <p className="projects-list-description">{project.desc}</p>
                    <span className="projects-list-view">View project ↗</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <QuoteCta title="Have a project that should be the next one in this archive?" />
      </ProjectsMain>
      <SiteFooter compact />
    </>
  );
}
