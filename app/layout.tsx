import type { Metadata, Viewport } from "next";
import { Cursor } from "@/components/Cursor";
import { Reveal } from "@/components/Reveal";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hichloe.me"),
  title: "Chloe Polk · Technical Product Manager & Product Designer",
  description: "Technical product manager and product designer connecting hands-on Shopify and TikTok Shop merchant operations with usable enterprise AI products.",
  openGraph: {
    type: "website",
    url: "https://hichloe.me",
    siteName: "hichloe.me",
    title: "Chloe Polk · Technical Product Manager & Product Designer",
    description: "Technical product manager and product designer connecting hands-on Shopify and TikTok Shop merchant operations with usable enterprise AI products.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "hi, i'm chloe" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chloe Polk · Technical Product Manager & Product Designer",
    description: "Technical product manager and product designer connecting hands-on Shopify and TikTok Shop merchant operations with usable enterprise AI products.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

/**
 * Fonts load from Google. Unbounded is display and the name mark, Schibsted
 * Grotesk is body — both from the CP type scale. Inter is here only for the
 * live Meridian components in the case study, which use Meridian's own face so
 * they match the screenshots sitting next to them.
 */
const FONTS =
  "https://fonts.googleapis.com/css2" +
  "?family=Unbounded:wght@200..900" +
  "&family=Schibsted+Grotesk:wght@400..900" +
  "&family=Inter:wght@400;500;600" +
  "&family=JetBrains+Mono:wght@400;500&display=swap";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href={FONTS} />
      </head>
      <body>
        <Cursor />
        <Reveal />
        {children}
      </body>
    </html>
  );
}
