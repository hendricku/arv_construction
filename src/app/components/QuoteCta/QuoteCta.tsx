import Link from "next/link";
import type { QuoteCtaProps } from "./interface";
import { QuoteCtaShell } from "./elements";

export default function QuoteCta({ eyebrow = "Have something to build, fabricate, repair, or move?", title = "Start with the requirement. We’ll help define the next step." }: QuoteCtaProps) {
  return (
    <QuoteCtaShell>
      <div className="site-shell quote-cta-grid"><span className="micro-label">05 / Start a project</span><h2>{title}</h2><div><p>{eyebrow}</p><Link href="/request-quote" className="button button-dark">Request a quote <span>↗</span></Link></div></div>
    </QuoteCtaShell>
  );
}
