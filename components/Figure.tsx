import type { ReactNode } from "react";

/**
 * Typeshelf stills are opaque, so `.shot` supplies radius and shadow.
 * Meridian 2x PNGs already carry both in the alpha: pass `ownFrame` so the
 * CSS clip does not shave the chrome or double the shadow.
 */
export function Figure({
  src, alt, width, height, caption, narrow, priority, ownFrame,
}: {
  src: string; alt: string; width: number; height: number;
  caption?: ReactNode; narrow?: boolean; priority?: boolean; ownFrame?: boolean;
}) {
  const shot = ["shot", ownFrame ? "own-frame" : "", narrow ? "narrow" : ""]
    .filter(Boolean).join(" ");
  return (
    <figure>
      <div className={shot}>
        {/* plain <img>: these are pre-sized WebP, and next/image buys nothing on a static export */}
        <img src={src} alt={alt} width={width} height={height}
             loading={priority ? "eager" : "lazy"} />
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
