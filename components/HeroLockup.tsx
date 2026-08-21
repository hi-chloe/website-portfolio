"use client";

import { useEffect, useRef } from "react";

/**
 * The name lockup.
 *
 * Locked settings, chosen from the motion studies — don't re-tune without a reason:
 *   mode      proximity   (tint by distance to cursor, not by how hard it's moving)
 *   accent    #5B4BE8     violet
 *   intensity 0.60        peak tint reads 9.60:1 on paper, clears AA at both thresholds
 *   bounce    0.09        low. It should feel alive, not springy
 *
 * Two things worth knowing before editing:
 *
 * 1. Font size is measured, not declared. Unbounded is a wide face and a hardcoded
 *    clamp() overflowed on real viewports, so `fit()` renders at a probe size, reads
 *    the widest line, and scales to fill the column. Swap the display face and this
 *    still works.
 * 2. prefers-reduced-motion gets a *composed* still — letters at varied rotations with
 *    a static tint. A frozen hero is a dead hero.
 */
const CFG = {
  accent: [91, 75, 232] as const,
  intensity: 0.6,
  bounce: 0.09,
  radius: 300,   // tint falloff
  impulseR: 145, // how close before a letter gets shoved
};
const INK = [17, 17, 20] as const;

const lerp = (a: number, b: number, n: number) => a + (b - a) * n;
const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
const mix = (c1: readonly number[], c2: readonly number[], n: number) =>
  `rgb(${Math.round(lerp(c1[0], c2[0], n))},${Math.round(lerp(c1[1], c2[1], n))},${Math.round(lerp(c1[2], c2[2], n))})`;

export function HeroLockup({ lines }: { lines: string[] }) {
  const stage = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = stage.current;
    if (!el) return;

    const lineEls = [...el.querySelectorAll<HTMLElement>(".line")];
    const glyphs = [...el.querySelectorAll<HTMLElement>(".glyph")];
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = matchMedia("(pointer: fine)").matches;

    /**
     * Scale the lockup so its widest line fills its column.
     * Measures the immediate parent, not the hero — the lockup shares the hero
     * row with the portrait, so measuring the full hero would overflow.
     * After scaling, the portrait becomes a square of the lockup's height.
     */
    let fitting = false;
    const fit = () => {
      if (fitting) return;
      fitting = true;
      const col = el.parentElement;
      if (!col) { fitting = false; return; }
      const cs = getComputedStyle(col);
      const avail = col.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      const maxPx = parseFloat(getComputedStyle(document.documentElement)
        .getPropertyValue("--lockup-max")) || 132;
      const PROBE = 100;
      el.style.fontSize = `${PROBE}px`;
      const widest = lineEls.reduce((w, l) => Math.max(w, l.getBoundingClientRect().width), 0);
      if (!widest) { fitting = false; return; }
      el.style.fontSize = `${clamp((avail / widest) * PROBE, 34, maxPx)}px`;

      const portrait = el.closest(".hero-home")?.querySelector(".portrait") as HTMLElement | null;
      if (portrait) {
        if (matchMedia("(max-width: 820px)").matches) {
          portrait.style.width = "";
          portrait.style.height = "";
        } else {
          const h = el.getBoundingClientRect().height;
          portrait.style.width = `${h}px`;
          portrait.style.height = `${h}px`;
        }
      }
      fitting = false;
    };

    if (reduce) {
      fit();
      const pose = [-1.4, 0.9, -0.6, 1.6, -1.1, 0.5, 1.2, -0.8, 0.7, -1.5, 1.0, -0.4];
      glyphs.forEach((g, i) => {
        const p = pose[i % pose.length];
        g.style.transform = `translateY(${(p * 2.2).toFixed(1)}px) rotate(${p.toFixed(2)}deg)`;
        g.style.color = mix(INK, CFG.accent, 0.22 + (i % 4) * 0.07);
      });
      fit();
      document.fonts?.ready.then(fit);
      addEventListener("resize", fit);
      const wrap = el.parentElement;
      const ro = wrap ? new ResizeObserver(fit) : null;
      if (wrap) ro?.observe(wrap);
      return () => {
        removeEventListener("resize", fit);
        ro?.disconnect();
      };
    }

    const P = glyphs.map((_, i) => ({ x: 0, y: 0, r: 0, vx: 0, vy: 0, vr: 0, ph: i * 0.7 }));
    let rects: { x: number; y: number }[] = [];
    const measure = () => {
      glyphs.forEach((g) => { g.style.transform = "none"; });
      rects = glyphs.map((g) => {
        const r = g.getBoundingClientRect();
        return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
      });
    };

    let px = innerWidth / 2, py = innerHeight * 0.45, cx = px, cy = py, t = 0, raf = 0;
    let visible = true;
    const move = (e: PointerEvent) => { px = e.clientX; py = e.clientY; };
    if (fine) addEventListener("pointermove", move, { passive: true });

    const relayout = () => { fit(); measure(); };
    relayout();
    document.fonts?.ready.then(relayout);
    addEventListener("resize", relayout);
    const wrap = el.parentElement;
    const ro = wrap ? new ResizeObserver(relayout) : null;
    if (wrap) ro?.observe(wrap);
    const io = new IntersectionObserver((e) => { visible = e[0].isIntersecting; }, { threshold: 0 });
    io.observe(el);
    // only re-measure while the hero is actually on screen
    const onScroll = () => { if (visible) measure(); };
    addEventListener("scroll", onScroll, { passive: true });

    const frame = () => {
      t += 0.008;
      // no pointer to follow: drift on its own so the lockup still breathes
      if (!fine) {
        px = innerWidth * (0.5 + 0.3 * Math.sin(t));
        py = innerHeight * (0.42 + 0.09 * Math.sin(t * 1.7));
      }
      cx = lerp(cx, px, 0.1);
      cy = lerp(cy, py, 0.1);

      if (visible) {
        glyphs.forEach((g, i) => {
          const r = rects[i], s = P[i];
          if (!r) return;
          const dx = r.x - cx, dy = r.y - cy, d = Math.hypot(dx, dy);
          if (d < CFG.impulseR) {
            const push = (1 - d / CFG.impulseR) * (0.55 + CFG.bounce * 1.5);
            const nx = dx / (d || 1), ny = dy / (d || 1);
            s.vx += nx * push * 2.1;
            s.vy += ny * push * 2.6;
            s.vr += -nx * push * 1.5;
          }
          s.vx += -s.x * 0.085; s.vx *= 0.865; s.x += s.vx;
          s.vy += -s.y * 0.095; s.vy *= 0.855; s.y += s.vy;
          s.vr += -s.r * 0.105; s.vr *= 0.85;  s.r += s.vr;
          // hard cap so it can never go illegible
          s.x = clamp(s.x, -26, 26); s.y = clamp(s.y, -30, 30); s.r = clamp(s.r, -11, 11);

          const swayY = Math.sin(t * 1.25 + s.ph) * 1.5;
          const swayR = Math.sin(t * 0.9 + s.ph * 1.3) * 0.35;
          g.style.transform =
            `translate3d(${s.x.toFixed(2)}px,${(s.y + swayY).toFixed(2)}px,0) rotate(${(s.r + swayR).toFixed(2)}deg)`;
          g.style.color = mix(INK, CFG.accent, clamp(1 - d / CFG.radius, 0, 1) * CFG.intensity);
        });
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro?.disconnect();
      removeEventListener("pointermove", move);
      removeEventListener("resize", relayout);
      removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <h1 className="stage" ref={stage} aria-label={lines.join(" ")}>
      {lines.map((line, li) => (
        <span className="line" key={li} aria-hidden>
          {[...line].map((ch, ci) => (
            <span className={`glyph${ch === " " ? " space" : ""}`} key={ci}>
              {ch === " " ? " " : ch}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}
