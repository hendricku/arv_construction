import type { ReactNode } from "react";

export function ContactHeroShell({ children }: { children: ReactNode }) {
  return <section className="contact-hero">{children}</section>;
}
