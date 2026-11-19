import { createElement as h } from "react";
import { ImageResponse } from "next/og.js";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Same code-based rendering and brand fonts as gen-og.mjs. No extra dependency.
const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const css = readFileSync(join(ROOT, "app/globals.css"), "utf8");
const token = (name) => {
  const value = css.match(new RegExp(`--${name}:([^;]+);`))?.[1].trim();
  if (!value) throw new Error(`Missing brand token: ${name}`);
  return value;
};
const colors = { paper: token("paper"), surface: token("paper-2"), ink: token("ink"),
  secondary: token("ink-70"), violet: token("accent"), lavender: token("accent-soft"), rule: token("rule") };
async function loadFont(name, weight) {
  const response = await fetch(`https://cdn.jsdelivr.net/fontsource/fonts/${name}@latest/latin-${weight}-normal.ttf`);
  if (!response.ok) throw new Error(`Font request failed: ${response.status}`);
  return response.arrayBuffer();
}
const [display, body] = await Promise.all([loadFont("unbounded", 600), loadFont("schibsted-grotesk", 400)]);
const div = (style, ...children) => h("div", { style: { display: "flex", ...style } }, ...children);
const configs = [
  { file: "og-fable-audit.png", eyebrow: "INDEPENDENT CASE STUDY", lines: ["Fable Pets"],
    sub: ["Independent ecommerce", "UX & quality audit"],
    foot: "Independent, unsolicited research. No affiliation.", kind: "evidence" },
  { file: "og-ecommerce-audits.png", eyebrow: "INDEPENDENT ECOMMERCE AUDITS", lines: ["Storefront", "Health Check"],
    sub: ["Desktop + mobile observations.", "Evidence and practical recommendations."],
    foot: "Introductory pilot. Scope and timing agreed before work.", kind: "offer" },
];
for (const config of configs) {
  const aside = config.kind === "offer"
    ? div({ flexDirection: "column", width: 260, height: 280, background: colors.lavender,
        borderRadius: 16, padding: 28, justifyContent: "center", gap: 14 },
        div({ fontSize: 16, color: colors.secondary }, "PILOT · STARTING AT"),
        div({ fontFamily: "Unbounded", fontSize: 58, color: colors.violet }, "$349"),
        div({ fontSize: 25, color: colors.ink }, "USD"))
    : div({ width: 260, height: 280, background: colors.lavender, borderRadius: 16,
        padding: 25, alignItems: "center", justifyContent: "center" },
        div({ width: 208, height: 218, border: `1px solid ${colors.rule}`, borderRadius: 9,
          background: colors.paper, flexDirection: "column", padding: 22, gap: 20 },
          div({ width: 80, height: 12, background: colors.ink, borderRadius: 3 }),
          ...[140, 115, 130].map(width => div({ alignItems: "center", gap: 12 },
            div({ width: 12, height: 12, background: colors.violet, borderRadius: 3 }),
            div({ width: width - 24, height: 7, background: colors.rule, borderRadius: 3 }))),
          div({ width: 120, height: 5, background: colors.secondary, marginTop: 3 })));
  const response = new ImageResponse(
    div({ width: "100%", height: "100%", padding: "44px 60px", background: colors.paper,
      color: colors.ink, fontFamily: "Schibsted Grotesk", flexDirection: "column", justifyContent: "space-between" },
      div({ justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${colors.rule}`, paddingBottom: 22 },
        div({ fontFamily: "Unbounded", fontSize: 24 }, "chloe polk", h("span", { style: { color: colors.violet } }, ".")),
        div({ fontSize: 21, color: colors.secondary }, "hichloe.me")),
      div({ alignItems: "center", justifyContent: "space-between", gap: 36 },
        div({ width: 760, flexDirection: "column", gap: 22 },
          div({ fontSize: 16, letterSpacing: "0.09em", color: colors.violet }, config.eyebrow),
          div({ flexDirection: "column", fontFamily: "Unbounded", fontSize: 62, lineHeight: 1.15,
            letterSpacing: "-0.025em" }, ...config.lines.map(line => div({}, line))),
          div({ flexDirection: "column", fontSize: 28, lineHeight: 1.4, color: colors.secondary },
            ...config.sub.map(line => div({}, line)))), aside),
      div({ borderTop: `1px solid ${colors.rule}`, paddingTop: 18, fontSize: 20, color: colors.secondary }, config.foot)),
    { width: 1200, height: 630, fonts: [
      { name: "Unbounded", data: display, weight: 600, style: "normal" },
      { name: "Schibsted Grotesk", data: body, weight: 400, style: "normal" },
    ] });
  const bytes = Buffer.from(await response.arrayBuffer());
  writeFileSync(join(ROOT, "public", config.file), bytes);
  console.log(`${config.file}: ${bytes.length} bytes`);
}
