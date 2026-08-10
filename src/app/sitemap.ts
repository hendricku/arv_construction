import type { MetadataRoute } from "next";
import projects from "./data/projects";
import services from "./data/services";
const base = "https://arv-construction.netlify.app";
export default function sitemap(): MetadataRoute.Sitemap { const staticRoutes = ["", "/projects", "/projects/design-concepts", "/services", "/about", "/contact", "/request-quote"]; return [...staticRoutes.map((route) => ({ url: `${base}${route}`, changeFrequency: "monthly" as const, priority: route === "" ? 1 : .8 })), ...projects.map((project) => ({ url: `${base}/projects/${project.slug}`, changeFrequency: "monthly" as const, priority: .7 })), ...services.map((service) => ({ url: `${base}/services/${service.slug}`, changeFrequency: "monthly" as const, priority: .7 }))]; }
// c