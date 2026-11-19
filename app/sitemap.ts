import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { path: "", date: "2026-11-19" },
    { path: "/meridian", date: "2026-08-21" },
    { path: "/typeshelf", date: "2026-08-21" },
    { path: "/fable-audit", date: "2026-11-19" },
    { path: "/ecommerce-audits", date: "2026-11-19" },
  ].map(({ path, date }) => ({ url: `https://hichloe.me${path}`, lastModified: new Date(date) }));
}
