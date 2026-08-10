"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import projects from "../../data/projects";
import type { ProjectShowcaseProps } from "./interface";
import { ProjectShowcaseShell } from "./elements";

export default function ProjectShowcase({ limit = 4 }: ProjectShowcaseProps) {
  const reduceMotion = useReducedMotion();

  return (
    <ProjectShowcaseShell>
      <div className="site-shell">
        <div className="section-heading project-heading">
          <span className="micro-label">03 / Selected work</span>
          <h2>Built work,<br /><em>not placeholders.</em></h2>
          <Link href="/projects" className="text-link">View all projects <span aria-hidden="true">{"\u2197"}</span></Link>
        </div>

        <div className="project-story-list">
          {projects.slice(0, limit).map((project, index) => (
            <motion.article
              key={project.slug}
              className={`project-story ${index % 2 === 1 ? "project-story-reverse" : ""}`}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65 }}
            >
              <Link href={`/projects/${project.slug}`} className="project-story-image-link" aria-label={`View ${project.title}`}>
                <div className="project-story-image">
                  <Image src={project.img} alt={project.title} fill sizes="(max-width: 840px) 92vw, 58vw" />
                </div>
                <span className="project-open">View project <span aria-hidden="true">{"\u2197"}</span></span>
              </Link>

              <div className="project-story-copy">
                <div className="project-story-eyebrow">
                  <span>0{index + 1} / {project.category}</span>
                  <span>{project.service}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-story-location">{project.address}</p>
                <p className="project-story-description">{project.desc}</p>
                <Link href={`/projects/${project.slug}`} className="project-view-link">View project <span aria-hidden="true">{"\u2197"}</span></Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </ProjectShowcaseShell>
  );
}
