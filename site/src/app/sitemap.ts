import type { MetadataRoute } from "next";

const siteUrl = "https://calqulis.com";

const routes = [
  "/",
  "/platform/",
  "/solutions/sales-opportunities/",
  "/solutions/marketing-effectiveness/",
  "/solutions/strategic-decisions/",
  "/who-we-serve/",
  "/about/",
  "/request-a-demo/",
  "/privacy-policy/",
  "/terms-of-service/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
