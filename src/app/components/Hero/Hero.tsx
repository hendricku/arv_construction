"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { HeroProps } from "./interface";
import { HeroFrame } from "./elements";

export default function Hero({ image = "/arvcovertwo.png" }: HeroProps) {
  const reduceMotion = useReducedMotion();
  const enter = reduceMotion ? {} : { opacity: 1, y: 0 };
  return (
    <HeroFrame>
      <div className="hero-image-wrap">
        <motion.div className="hero-image-mask" initial={reduceMotion ? false : { clipPath: "inset(0 0 0 100%)" }} animate={{ clipPath: "inset(0 0 0 0%)" }} transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}>
          <Image src={image} alt="ARV architectural and construction work" fill priority sizes="(max-width: 840px) 100vw, 62vw" className="hero-image" />
        </motion.div>
        <div className="hero-image-index">ARV / 2026</div>
      </div>

      <div className="hero-copy site-shell">
        <motion.div className="hero-kicker" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={enter} transition={{ duration: 0.6, delay: 0.18 }}>
          <span>Design and Build</span><span>San Fernando City, La Union</span>
        </motion.div>
        <motion.h1 initial={reduceMotion ? false : { opacity: 0, y: 44 }} animate={enter} transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}>
          Transforming<br /><span>blueprints</span><br />into reality.
        </motion.h1>
        <motion.div className="hero-actions" initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={enter} transition={{ duration: 0.7, delay: 0.55 }}>
          <Link href="/projects" className="button button-primary">View projects <span>â†—</span></Link>
          <Link href="/request-quote" className="button button-ghost">Start a project <span>â†’</span></Link>
        </motion.div>
      </div>
      <div className="hero-yellow-rail" aria-hidden="true"><span>DESIGN</span><span>BUILD</span><span>FABRICATE</span><span>MOVE</span></div>
    </HeroFrame>
  );
}
