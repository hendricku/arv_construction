import type { ReactNode } from "react";

export function AboutHeroShell({ children }: { children: ReactNode }) {
  return <section className="about-hero">{children}</section>;
}
