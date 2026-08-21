"use client";

import { useEffect } from "react";

/**
 * Scroll reveal, Compass style: elements lift and fade in as they enter, and
 * repeated items stagger against their siblings so a row of cards arrives in
 * sequence instead of all at once.
 *
 * Deliberately markup-free — it tags targets by selector on mount, so adding a
 * new section needs no wrapper component. Add a selector below and it animates.
 *
 * The hero is excluded. It has its own physics and shouldn't fade.
 */
const BLOCKS = [
  ".band > *", "main > section > *", ".about-grid > *", ".contact-body > *",
  ".index-foot", ".next > *", "figure", ".callout", ".side-card",
];

const GROUPS = [
  ".row", ".note", ".meta > div", ".stats > div", ".challenges > div",
  ".ladder li", ".cv-item", ".trust > *", ".close-grid > *", ".theme-pair .shot",
  ".chip", ".tag", ".chain .stop", "table tbody tr", ".links .btn", ".edge",
];

export function Reveal() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const seen = new Set<Element>();
    const tag = (el: Element | null, delay: number) => {
      if (!el || seen.has(el) || el.closest(".hero, .hero-home, nav")) return;
      seen.add(el);
      el.classList.add("rv");
      if (delay) (el as HTMLElement).style.transitionDelay = `${delay}ms`;
    };

    GROUPS.forEach((sel) => {
      const groups = new Map<Element, Element[]>();
      document.querySelectorAll(sel).forEach((el) => {
        const p = el.parentElement;
        if (!p) return;
        if (!groups.has(p)) groups.set(p, []);
        groups.get(p)!.push(el);
      });
      groups.forEach((items) => items.forEach((el, i) => tag(el, Math.min(i * 60, 360))));
    });
    BLOCKS.forEach((sel) => document.querySelectorAll(sel).forEach((el) => tag(el, 0)));

    let pending = new Set<Element>(document.querySelectorAll(".rv"));
    const show = (el: Element) => { el.classList.add("in"); pending.delete(el); io.unobserve(el); };

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) show(e.target); }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
    );
    pending.forEach((el) => io.observe(el));

    /* Safety net. IntersectionObserver samples rather than firing for every
       intermediate state, so a fast scroll or a jump-to-anchor can skip
       elements — and a missed element would stay invisible forever, which is
       much worse than no animation. This sweep reveals anything at or above the
       fold regardless. One pass per frame, and the pending set shrinks as it
       goes, so it costs almost nothing. */
    let queued = false;
    const sweep = () => {
      queued = false;
      if (!pending.size) { removeEventListener("scroll", onScroll); return; }
      const limit = innerHeight * 0.94;
      [...pending].forEach((el) => { if (el.getBoundingClientRect().top < limit) show(el); });
    };
    const onScroll = () => { if (!queued) { queued = true; requestAnimationFrame(sweep); } };
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll, { passive: true });
    const raf = requestAnimationFrame(sweep);

    // last resort: never leave anything hidden
    const failsafe = setTimeout(() => pending.forEach(show), 8000);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(failsafe);
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
      io.disconnect();
    };
  }, []);

  return null;
}
