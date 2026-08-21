"use client";

import { useEffect, useRef } from "react";

/**
 * The cursor is a system, not an ornament. It carries a contextual label —
 * View, Copy, Open, Back — taken from `data-cursor` on whatever you're over.
 *
 * Hidden entirely on touch and under prefers-reduced-motion, where a lagging
 * custom cursor is at best pointless and at worst disorienting.
 */
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = matchMedia("(pointer: fine)").matches;
    if (!fine || reduce) return;

    document.body.classList.add("fine");
    const el = dot.current;
    const lab = label.current;
    if (!el || !lab) return;

    let px = innerWidth / 2, py = innerHeight / 2, mx = px, my = py, raf = 0;
    const move = (e: PointerEvent) => { px = e.clientX; py = e.clientY; };
    addEventListener("pointermove", move, { passive: true });

    const tick = () => {
      mx += (px - mx) * 0.22;
      my += (py - my) * 0.22;
      el.style.transform = `translate3d(${mx}px,${my}px,0) translate(-50%,-50%)`;
      const hit = document.elementFromPoint(px, py);
      const onDark = !!hit?.closest(".contact") && !hit.closest(".mailto");
      el.classList.toggle("on-dark", onDark);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const enter = (e: Event) => {
      const t = (e.target as HTMLElement).closest<HTMLElement>("[data-cursor]");
      if (!t) return;
      el.classList.add("is-label");
      lab.textContent = t.dataset.cursor ?? "";
    };
    const leave = (e: Event) => {
      const t = (e.target as HTMLElement).closest<HTMLElement>("[data-cursor]");
      if (!t) return;
      el.classList.remove("is-label");
      lab.textContent = "";
    };
    // delegated, so links added later still get labels
    document.addEventListener("pointerover", enter);
    document.addEventListener("pointerout", leave);

    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", enter);
      document.removeEventListener("pointerout", leave);
      document.body.classList.remove("fine");
    };
  }, []);

  return (
    <div className="cursor" ref={dot} aria-hidden>
      <span ref={label} />
    </div>
  );
}
