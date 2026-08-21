import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/meridian", "/typeshelf"].map((p) => ({
    url: `https://hichloe.me${p}`,
    lastModified: new Date("2026-08-21"),
  }));
}
