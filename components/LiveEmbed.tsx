"use client";

import { useEffect, useRef } from "react";

/**
 * The deployed app, embedded. Vercel allows framing; the fallback is for the
 * browsers that still refuse it. Load starts immediately — a lazy iframe sat
 * below the hero and lost the 6s race, so visitors got the link instead.
 */
export function LiveEmbed({ src, host }: { src: string; host: string }) {
  const box = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const t = setTimeout(() => { if (!loaded.current) el.classList.add("blocked"); }, 6000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="embed" ref={box}>
      <div className="embed-bar">
        <span className="dots"><i /><i /><i /></span>
        <code>{host}</code>
        <a href={src} target="_blank" rel="noopener noreferrer" data-cursor="Open">Open in a tab ↗</a>
      </div>
      <iframe src={src} title="Typeshelf, running live"
              allow="local-fonts" referrerPolicy="no-referrer"
              onLoad={() => { loaded.current = true; }} />
      <div className="fallback">
        <span>
          This browser blocked the embed.<br />
          <a href={src} target="_blank" rel="noopener noreferrer">Open Typeshelf in a new tab →</a>
        </span>
      </div>
    </div>
  );
}
