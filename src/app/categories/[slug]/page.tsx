import { redirect } from "next/navigation";
import type { LegacyCategoryPageProps } from "./interface";
import { projectRoute } from "./elements";

export default async function LegacyCategoryPage({ params }: LegacyCategoryPageProps) {
  const { slug } = await params;
  redirect(projectRoute(slug));
}
