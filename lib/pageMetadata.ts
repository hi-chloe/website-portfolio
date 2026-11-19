import type { Metadata } from "next";

/** Each public page owns its canonical URL and complete social preview. */
export function pageMetadata({ title, description, path, type = "website", image: socialImage }: {
  title: string; description: string; path: string; type?: "website" | "article";
  image?: { url: string; alt: string };
}): Metadata {
  const image = { url: socialImage?.url ?? "/og.png", width: 1200, height: 630,
    alt: socialImage?.alt ?? "Chloe Polk, technical product manager and product designer" };
  return {
    title, description, alternates: { canonical: path },
    openGraph: { type, url: path, siteName: "hichloe.me", title, description, images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
