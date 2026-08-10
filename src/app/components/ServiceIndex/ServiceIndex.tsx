"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import services from "../../data/services";
import type { ServiceIndexProps } from "./interface";
import { ServiceIndexShell } from "./elements";

export default function ServiceIndex({ condensed = false }: ServiceIndexProps) {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const current = services[active];

  return (
    <ServiceIndexShell>
      <div className="site-shell">
        <div className="section-heading split-heading">
          <div><span className="micro-label">02 / Capabilities</span><h2>One team.<br />Multiple ways<br />to get it built.</h2></div>
          <p>ARVâ€™s core work is design and build, supported by planning, renovation, signage fabrication, and practical hauling services.</p>
        </div>

        <div className="service-index-grid">
          <div className="service-list">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`service-row ${active === index ? "active" : ""}`}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
              >
                <span className="service-number">{service.number}</span>
                <span className="service-name">{service.shortTitle}</span>
                <span className="service-arrow">â†—</span>
              </Link>
            ))}
            {!condensed && <Link className="service-all-link" href="/services">Explore all services â†’</Link>}
          </div>
          <div className="service-preview">
            <AnimatePresence mode="wait">
              <motion.div key={current.slug} className="service-preview-image" initial={reduceMotion ? false : { opacity: 0, scale: 1.02 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.28 }}>
                <Image src={current.image} alt={current.title} fill sizes="(max-width: 840px) 100vw, 45vw" />
              </motion.div>
            </AnimatePresence>
            <div className="service-preview-caption"><span>{current.themeWord}</span><p>{current.summary}</p></div>
          </div>
        </div>
      </div>
    </ServiceIndexShell>
  );
}
