"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { PageIntroProps } from "./interface";
import { PageIntroShell } from "./elements";

export default function PageIntro({ index, kicker, title, description, dark = false }: PageIntroProps) {
  const reduceMotion = useReducedMotion();
  return (
    <PageIntroShell dark={dark}>
      <div className="site-shell page-intro-grid">
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}><span className="micro-label">{index} / {kicker}</span></motion.div>
        <motion.h1 initial={reduceMotion ? false : { opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.78, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}>{title}</motion.h1>
        <motion.p initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.18 }}>{description}</motion.p>
      </div>
    </PageIntroShell>
  );
}
