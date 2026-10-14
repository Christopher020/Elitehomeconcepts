import type { MetadataRoute } from "next";

import { collections } from "@/content/collections";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const pages = ["", "/collections", "/interiors", "/about", "/contact"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
  const collectionPages = collections.map((c) => ({
    url: `${site.url}/collections/${c.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [...pages, ...collectionPages];
}
