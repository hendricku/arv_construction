import type { ReactNode } from "react";
export function PageIntroShell({ children, dark = false }: { children: ReactNode; dark?: boolean }) { return <section className={`page-intro ${dark ? "page-intro-dark" : ""}`}>{children}</section>; }
