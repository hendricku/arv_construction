import signageOne from "../assets/signage-works-a.png";
import signageTwo from "../assets/signage-works-b.png";
import truckRental from "../assets/truck-rental.png";
import type { StaticImageData } from "next/image";

export type Service = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  summary: string;
  intro: string;
  capabilities: string[];
  process: string[];
  image: string | StaticImageData;
  gallery?: Array<string | StaticImageData>;
  themeWord: string;
};

const services: Service[] = [
  {
    slug: "design-build",
    number: "01",
    title: "Design & Build",
    shortTitle: "Design & Build",
    summary: "A coordinated path from project concept to construction and completion.",
    intro: "ARV brings planning, design coordination, documentation, and construction into one connected workflow so clients can move from an initial idea toward an executable project with clearer continuity.",
    capabilities: ["Project consultation", "Design development", "Construction coordination", "Residential and institutional project work", "Repair and completion works"],
    process: ["Consult", "Define the scope", "Develop the design", "Prepare requirements", "Build", "Turn over"],
    image: "/arvcovertwo.png",
    gallery: ["/arvcover.jpg", "/NewRegional.jpg", "/criminology.jpg"],
    themeWord: "BUILD",
  },
  {
    slug: "architecture-planning",
    number: "02",
    title: "Architecture, Planning & Documentation",
    shortTitle: "Architecture & Planning",
    summary: "Consultation, design, rendering, plans, bills of materials, and permit support.",
    intro: "For clients who need the technical and visual groundwork before construction, ARV provides architectural and structural consultation together with the documentation needed to define and communicate the project.",
    capabilities: ["Structural & architectural consultation", "Exterior & interior design with rendering", "Full set of signed and sealed building plans", "Signed bill of materials", "As-built plans", "Permit & occupancy assistance"],
    process: ["Project brief", "Site and requirements review", "Design direction", "Documentation", "Review and coordination", "Submission support"],
    image: "/arvcover.jpg",
    gallery: ["/arvcovertwo.png", "/NewRegional2.jpg", "/ResidentialCare2.jpg"],
    themeWord: "DRAW",
  },
  {
    slug: "repair-renovation",
    number: "03",
    title: "Repair & Renovation",
    shortTitle: "Repair & Renovation",
    summary: "Focused improvement works for existing spaces, facilities, and structures.",
    intro: "ARV handles repair and renovation scopes that improve the condition, function, and presentation of existing spaces, from targeted maintenance work to broader facility upgrades.",
    capabilities: ["Interior repainting", "Repair works", "Aesthetic improvements", "Functional upgrades", "Completion works"],
    process: ["Inspect", "Define repair scope", "Plan materials and sequence", "Execute", "Review", "Complete"],
    image: "/ConventionHall.jpg",
    gallery: ["/ConventionHall2.jpg", "/ConventionHall3.jpg", "/ResidentialCare3.jpg"],
    themeWord: "RENEW",
  },
  {
    slug: "signage-fabrication",
    number: "04",
    title: "Logo & Signage Fabrication",
    shortTitle: "Signage & Fabrication",
    summary: "Lightbox, storefront, acrylic, metal, and dimensional signage fabrication.",
    intro: "ARV's fabrication work extends the brand from a drawing into a physical sign, with options for illuminated, storefront, dimensional acrylic, and metal lettering applications.",
    capabilities: ["Lightbox signs", "Storefront signs", "3D lettering", "Acrylic lettering", "Metal lettering", "Logo sign fabrication"],
    process: ["Reference or logo review", "Size and placement check", "Material recommendation", "Fabrication", "Finishing", "Installation coordination"],
    image: signageOne,
    gallery: [signageOne, signageTwo],
    themeWord: "MAKE",
  },
  {
    slug: "truck-rental",
    number: "05",
    title: "Truck Rental & Hauling",
    shortTitle: "Truck Rental",
    summary: "Transport support for materials, debris, household items, and agricultural products.",
    intro: "ARV provides truck rental and hauling support for practical transport needs related to construction, household moves, fill materials, debris, and agricultural products.",
    capabilities: ["Household items", "Fill material", "Construction materials", "Construction debris", "Agricultural products", "Other transport requirements subject to confirmation"],
    process: ["Share pickup and destination", "Describe the load", "Confirm schedule", "Coordinate loading", "Transport", "Complete delivery"],
    image: truckRental,
    gallery: [truckRental],
    themeWord: "MOVE",
  },
];

export default services;
