import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../../components/SiteHeader/SiteHeader";
import SiteFooter from "../../components/SiteFooter/SiteFooter";
import PageIntro from "../../components/PageIntro/PageIntro";
import QuoteCta from "../../components/QuoteCta/QuoteCta";
import { DesignArchiveMain } from "./elements";

export const metadata: Metadata = { title: "Design Archive", description: "Selected architectural, planning, and project visuals from ARV Construction & Supplies." };
const archive = [
  ["/arvcovertwo.png", "Design and build studies"], ["/arvcover.jpg", "Architectural presentation"], ["/NewRegional2.jpg", "Institutional project visual"], ["/ResidentialCare2.jpg", "Residential care project visual"], ["/criminology2.jpg", "Academic project visual"],
];

export default function DesignArchivePage() {
  return <><SiteHeader inverted /><DesignArchiveMain><PageIntro index="01A" kicker="Design archive" title="Ideas, plans, and built-work visuals." description="A visual archive using ARV's current project and presentation assets. Additional design concepts can be added as original high-resolution files are supplied." /><section className="archive-grid">{archive.map(([src, label], index) => <figure className="archive-item" key={src}><Image src={src} alt={label} fill sizes="(max-width: 820px) 92vw, 55vw" /><figcaption className="archive-caption"><span>Archive / 0{index + 1}</span><span>{label}</span></figcaption></figure>)}</section><QuoteCta title="Need the design before the build? Start with your brief." /></DesignArchiveMain><SiteFooter compact /></>;
}
