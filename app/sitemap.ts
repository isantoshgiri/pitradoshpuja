import type { MetadataRoute } from "next";

const SITE_URL = "https://pitradoshpuja.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/privacy-policy", "/terms", "/refund-policy"];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.4
  }));
}
