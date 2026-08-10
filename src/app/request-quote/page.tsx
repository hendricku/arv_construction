import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader/SiteHeader";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import PageIntro from "../components/PageIntro/PageIntro";
import InquiryForm from "../components/InquiryForm/InquiryForm";
import { company } from "../data/company";
import { QuoteMain } from "./elements";

export const metadata: Metadata = { title: "Request a Quote", description: "Prepare a project, signage, renovation, design, or truck rental inquiry for ARV Construction & Supplies." };
export default function RequestQuotePage() { return <><SiteHeader inverted /><QuoteMain><PageIntro index="05" kicker="Request a quote" title="Give us the requirement, not a perfect brief." description="Choose the service, add the location and details you already know, and the inquiry will be prepared for ARV by email." /><section className="contact-layout"><div className="site-shell contact-grid"><aside className="contact-aside"><span className="micro-label">Before sending</span><h2>Useful details make the first conversation faster.</h2><div className="contact-detail-list"><div className="contact-detail"><span>Project</span><strong>Type of work or service needed</strong></div><div className="contact-detail"><span>Location</span><strong>Project site, pickup, or installation area</strong></div><div className="contact-detail"><span>Timing</span><strong>Preferred date or target schedule</strong></div><div className="contact-detail"><span>ARV</span><a href={`tel:${company.phoneHref}`}>{company.phoneDisplay}</a></div></div></aside><InquiryForm mode="quote" /></div></section></QuoteMain><SiteFooter compact /></>; }
