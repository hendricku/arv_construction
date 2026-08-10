import Image from "next/image";
import type { AboutHeroProps } from "./interface";
import { AboutHeroShell } from "./elements";

export default function AboutHero({ imageSrc = "/NewRegional3.jpg" }: AboutHeroProps) {
  return (
    <AboutHeroShell>
      <div className="site-shell about-hero-grid">
        <div className="about-hero-copy">
          <span className="micro-label">03 / About ARV</span>
          <h1>From blueprint<br />to site.</h1>
          <p>ARV Construction & Supplies connects design, planning, construction, renovation, fabrication, and project support from San Fernando City, La Union.</p>
          <div className="about-hero-rail" aria-label="ARV core capabilities">
            <span>Design</span>
            <span>Planning</span>
            <span>Construction</span>
            <span>Renovation</span>
          </div>
        </div>

        <div className="about-hero-media">
          <Image src={imageSrc} alt="ARV construction project" fill priority sizes="(max-width: 820px) 100vw, 48vw" />
          <span className="about-hero-marker">ARV / BUILT WORK</span>
        </div>
      </div>
    </AboutHeroShell>
  );
}
