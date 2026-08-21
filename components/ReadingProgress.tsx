"use client";

import { useEffect, useRef } from "react";

/** Hairline scroll indicator, plus the nav's border-on-scroll. */
export function ReadingProgress() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const nav = document.querySelector("nav");
      nav?.classList.toggle("scrolled", scrollY > 12);
      const h = document.documentElement.scrollHeight - innerHeight;
      if (bar.current) bar.current.style.width = `${h > 0 ? (scrollY / h) * 100 : 0}%`;
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return <div className="progress" ref={bar} aria-hidden />;
}
