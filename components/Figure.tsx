import type { ReactNode } from "react";

/**
 * The Meridian exports carry their own rounded frame and drop shadow in the
 * alpha channel, so the container adds no border, background or shadow of its
 * own. Adding any doubles the frame.
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
