import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// lastModified reflects the date each route's content was actually last changed,
// not the build time. Update a route's date only when its page content changes.
const routes = [
  { path: "/", lastModified: "2026-07-02" },
  { path: "/platform/", lastModified: "2026-07-02" },
  { path: "/solutions/sales-opportunities/", lastModified: "2026-07-02" },
  { path: "/solutions/marketing-effectiveness/", lastModified: "2026-07-02" },
  { path: "/solutions/strategic-decisions/", lastModified: "2026-07-02" },
  { path: "/who-we-serve/", lastModified: "2026-07-02" },
  { path: "/about/", lastModified: "2026-07-02" },
  { path: "/request-a-demo/", lastModified: "2026-07-02" },
  { path: "/privacy-policy/", lastModified: "2026-07-02" },
  { path: "/terms-of-service/", lastModified: "2026-07-02" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: route.path === "/" ? "weekly" : "monthly",
    priority: route.path === "/" ? 1 : 0.7,
  }));
}
