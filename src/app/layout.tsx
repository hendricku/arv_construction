import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://arv-construction.netlify.app"),
  title: {
    default: "ARV Construction & Supplies | Design & Build in La Union",
    template: "%s | ARV Construction & Supplies",
  },
  description: "ARV Construction & Supplies provides design and build, architectural planning, repair and renovation, signage fabrication, and truck rental services from San Fernando City, La Union.",
  keywords: ["ARV Construction", "construction La Union", "design and build La Union", "architectural design San Fernando La Union", "signage fabrication La Union", "truck rental La Union"],
  openGraph: {
    title: "ARV Construction & Supplies",
    description: "Transforming blueprints into reality. Design, build, renovation, signage, and hauling services in La Union.",
    type: "website",
    locale: "en_PH",
    images: [{ url: "/arvcovertwo.png", width: 1200, height: 630, alt: "ARV Construction & Supplies" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
