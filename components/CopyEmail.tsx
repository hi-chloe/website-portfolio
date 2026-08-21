"use client";

import { useState } from "react";

/**
 * The contact address. Clicking copies it instead of firing a mailto, since
 * most people would rather paste it somewhere than launch a mail client they
 * may not use. Falls back to mailto if the clipboard API is unavailable.
 */
export function CopyEmail({ address }: { address: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <>
      <a
        className="mailto"
        href={`mailto:${address}`}
        data-cursor="Copy"
        onClick={(e) => {
          if (!navigator.clipboard) return; // let the mailto happen
          e.preventDefault();
          navigator.clipboard.writeText(address).then(
            () => { setCopied(true); setTimeout(() => setCopied(false), 2200); },
            () => { window.location.href = `mailto:${address}`; },
          );
        }}
      >
        {address} <span className="arrow">→</span>
      </a>
      <span className={`copied${copied ? " on" : ""}`} role="status" aria-live="polite">
        {copied ? "Copied to clipboard" : ""}
      </span>
    </>
  );
}
