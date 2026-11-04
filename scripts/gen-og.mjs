import { createElement as h } from "react";
import { ImageResponse } from "next/og.js";
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

async function loadFont(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`font ${res.status}: ${url}`);
  return res.arrayBuffer();
}

const [unbounded, grotesk] = await Promise.all([
  loadFont("https://cdn.jsdelivr.net/fontsource/fonts/unbounded@latest/latin-600-normal.ttf"),
  loadFont("https://cdn.jsdelivr.net/fontsource/fonts/schibsted-grotesk@latest/latin-400-normal.ttf"),
]);

const res = new ImageResponse(
  h(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "#FAFAF8",
        color: "#111114",
        padding: "60px",
      },
    },
    h(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          fontFamily: "Unbounded",
          fontWeight: 600,
          fontSize: 96,
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
        },
      },
      h("div", { style: { display: "flex" } }, "hi, i'm"),
      h(
        "div",
        { style: { display: "flex", alignItems: "flex-end" } },
        "chloe",
        h("div", {
          style: {
            width: 18,
            height: 18,
            borderRadius: 99,
            background: "#5B4BE8",
            marginLeft: 10,
            marginBottom: 22,
          },
        })
      )
    ),
    h(
      "div",
      {
        style: {
          display: "flex",
          marginTop: 28,
          fontFamily: "Schibsted Grotesk",
          fontWeight: 400,
          fontSize: 28,
          letterSpacing: "-0.01em",
          color: "#41414A",
        },
      },
      "Technical Product Manager / Product Designer · hichloe.me"
    )
  ),
  {
    width: 1200,
    height: 630,
    fonts: [
      { name: "Unbounded", data: unbounded, weight: 600, style: "normal" },
      { name: "Schibsted Grotesk", data: grotesk, weight: 400, style: "normal" },
    ],
  }
);

writeFileSync(join(ROOT, "public", "og.png"), Buffer.from(await res.arrayBuffer()));
console.log("wrote public/og.png");
