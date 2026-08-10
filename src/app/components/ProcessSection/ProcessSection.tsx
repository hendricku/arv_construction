"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ProcessSectionProps } from "./interface";
import { ProcessShell } from "./elements";

const steps = [
  ["01", "Consult", "Tell us what you need, where the project is, and what outcome you are working toward."],
  ["02", "Define", "ARV reviews the requirements and clarifies the scope before the project moves forward."],
  ["03", "Design / Plan", "The team develops the design, documentation, materials, or execution approach required by the scope."],
  ["04", "Execute", "Construction, fabrication, repair, or hauling work is coordinated according to the approved requirement."],
  ["05", "Review", "The completed scope is checked with the client and outstanding items are identified."],
  ["06", "Complete", "The project or service is turned over once the agreed scope is completed."],
];

export default function ProcessSection({ title = "From brief to built work." }: ProcessSectionProps) {
  const reduceMotion = useReducedMotion();
  return (
    <ProcessShell>
      <div className="site-shell process-grid">
        <div className="process-title"><span className="micro-label">04 / Process</span><h2>{title}</h2><p>A straightforward workflow keeps design decisions, project requirements, and execution connected.</p></div>
        <div className="process-steps">
          {steps.map(([number, name, copy], index) => (
            <motion.div key={number} className="process-step" initial={reduceMotion ? false : { opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.5, delay: index * 0.04 }}>
              <span>{number}</span><h3>{name}</h3><p>{copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </ProcessShell>
  );
}
