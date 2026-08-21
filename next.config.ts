import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * No `output: "export"` here, on purpose.
   *
   * Static export builds plain files with no server, which means nothing can
   * receive the contact form POST. Dropping it lets `app/api/contact/route.ts`
   * run as a serverless function on Vercel. Every page is still statically
   * prerendered, so the only thing that runs on a server is the form endpoint.
   */
  images: { unoptimized: true },
};

export default nextConfig;
