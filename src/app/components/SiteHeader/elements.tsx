import type { ReactNode } from "react";

export function HeaderShell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`header-shell ${className}`}>{children}</div>;
}

export function HeaderInner({ children }: { children: ReactNode }) {
  return <div className="header-inner">{children}</div>;
}
