import type { ReactNode } from "react";

/**
 * The frame lives in CSS, not in the assets. `.shot` supplies the radius and
 * shadow; the exports are opaque RGB and carry no frame of their own. Each
 * Meridian still is padded with 28px of chrome-colored space at the top so the
 * radius clips padding instead of the product logo.
 */
export function Figure({
  src, alt, width, height, caption, narrow, priority,
}: {
  src: string; alt: string; width: number; height: number;
  caption?: ReactNode; narrow?: boolean; priority?: boolean;
}) {
  return (
    <figure>
      <div className={`shot${narrow ? " narrow" : ""}`}>
        {/* plain <img>: these are pre-sized WebP, and next/image buys nothing on a static export */}
        <img src={src} alt={alt} width={width} height={height}
             loading={priority ? "eager" : "lazy"} />
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
