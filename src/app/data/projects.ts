export type ProjectDetail = { title: string; desc: string };

export type Project = {
  slug: string;
  title: string;
  img: string;
  address: string;
  desc: string;
  images: string[];
  details: ProjectDetail[];
  longDesc: string;
  features: string[];
  category: "Institutional" | "Renovation" | "Community" | "Residential Care" | "Academic";
  service: string;
};

const projects: Project[] = [
  {
    slug: "new-regional-rehabilitation-center-for-youth",
    title: "New Regional Rehabilitation Center for Youth",
    img: "/NewRegional.jpg",
    address: "Urayong, Bauang, La Union",
    desc: "A modern intensive intervention and support facility for youth rehabilitation.",
    images: ["/NewRegional.jpg", "/NewRegional2.jpg", "/NewRegional3.jpg", "/NewRegional4.jpg"],
    details: [
      { title: "Facility Type", desc: "Intensive Intervention and Support Facility" },
      { title: "Governing Body", desc: "Department of Social Welfare and Development (DSWD)" },
      { title: "Project Focus", desc: "Rehabilitative environment for children in conflict with the law" },
    ],
    longDesc: "This project involves the construction of a new Intensive Intervention and Support Facility under Lot No. 2 of the Regional Rehabilitation Center for Youth development. The facility is designed to provide a structured, secure, and rehabilitative environment for children in conflict with the law, with specialized spaces supporting counseling, education, skills training, and psychosocial services.",
    features: ["Counseling rooms", "Classrooms and training areas", "Safe and secure spaces", "Sleeping quarters", "Play and outdoor areas", "Energy-conscious planning"],
    category: "Institutional",
    service: "Construction",
  },
  {
    slug: "convention-hall-of-bsp-la-union-branch-office",
    title: "Convention Hall of BSP La Union Branch Office",
    img: "/ConventionHall.jpg",
    address: "BSP La Union Branch, San Fernando City",
    desc: "Interior repainting and repair works for an existing convention hall.",
    images: ["/ConventionHall.jpg", "/ConventionHall2.jpg", "/ConventionHall3.jpg", "/ConventionHall4.jpg"],
    details: [
      { title: "Project Type", desc: "Renovation and Maintenance" },
      { title: "Location", desc: "BSP La Union Branch Office" },
      { title: "Focus", desc: "Appearance, function, and condition improvements" },
    ],
    longDesc: "The work covers repainting of interior spaces and repair works at the Convention Hall of the BSP La Union Branch Office. The improvements focus on the hall's appearance, functionality, and overall condition for official functions and community use.",
    features: ["Interior repainting", "Repair works", "Aesthetic upgrades", "Functional improvements"],
    category: "Renovation",
    service: "Repair & Renovation",
  },
  {
    slug: "construction-of-covered-court",
    title: "Construction of Covered Court",
    img: "/court.jpg",
    address: "San Fernando, La Union",
    desc: "A weather-protected multi-purpose court for sports and community use.",
    images: ["/court.jpg", "/court2.jpg", "/court3.jpg", "/court.jpg"],
    details: [
      { title: "Facility", desc: "Multi-Purpose Covered Court" },
      { title: "Use", desc: "Sports, community events, and gatherings" },
      { title: "Structure", desc: "Steel frame with durable roofing" },
    ],
    longDesc: "This project focuses on the construction of a durable and versatile covered court, providing the community with a weather-protected space for sports activities, social events, and other public gatherings. The design prioritizes safety, accessibility, and long-term usability.",
    features: ["All-weather protection", "Sports use", "Community gathering space", "Event lighting"],
    category: "Community",
    service: "Construction",
  },
  {
    slug: "completion-of-residential-care-facility",
    title: "Completion of Residential Care Facility",
    img: "/ResidentialCare.jpg",
    address: "San Fernando, La Union",
    desc: "Completion works for a safe and supportive residential care facility.",
    images: ["/ResidentialCare.jpg", "/ResidentialCare2.jpg", "/ResidentialCare3.jpg"],
    details: [
      { title: "Project Stage", desc: "Completion Phase" },
      { title: "Purpose", desc: "Safe and supportive housing" },
      { title: "Occupancy", desc: "Residential care" },
    ],
    longDesc: "This project covers the completion phase of a residential care facility designed to provide a safe, comfortable, and supportive living environment. Work includes finishing interior and exterior structures, essential utilities, and external improvements.",
    features: ["Living quarters", "Common areas", "Kitchen and dining", "Accessible planning"],
    category: "Residential Care",
    service: "Construction Completion",
  },
  {
    slug: "construction-of-criminology-building",
    title: "Construction of Criminology Building",
    img: "/criminology.jpg",
    address: "DMMMSU-ELUC, Naguilian, La Union",
    desc: "An academic facility supporting criminology education and learning spaces.",
    images: ["/criminology.jpg", "/criminology2.jpg", "/criminology3.jpg", "/criminology4.jpg"],
    details: [
      { title: "Building Type", desc: "Academic Facility" },
      { title: "Institution", desc: "DMMMSU-ELUC" },
      { title: "Location", desc: "Naguilian, La Union" },
    ],
    longDesc: "This project covers the construction of a criminology building at DMMMSU-ELUC, providing dedicated spaces for teaching, faculty work, and student use in support of the institution's criminology program.",
    features: ["Lecture spaces", "Laboratory spaces", "Faculty offices", "Student areas", "Security planning", "Efficient building layout"],
    category: "Academic",
    service: "Construction",
  },
];

export default projects;
