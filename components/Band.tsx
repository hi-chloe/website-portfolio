import type { ReactNode } from "react";

export function Band({ id, eyebrow, children, className }: {
  id?: string; eyebrow?: string; children: ReactNode; className?: string;
}) {
  return (
    <section className={`band${className ? " " + className : ""}`} id={id}>
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      {children}
    </section>
  );
}

export function Notes({ items }: { items: string[] }) {
  return (
    <div className="notes">
      {items.map((t, i) => (
        <div className="note" key={i}>
          <span className="n">{i + 1}</span>
          <p>{t}</p>
        </div>
      ))}
    </div>
  );
}

export function Meta({ items }: { items: { term: string; detail: ReactNode }[] }) {
  return (
    <dl className="meta">
      {items.map((it) => (
        <div key={it.term}>
          <dt>{it.term}</dt>
          <dd>{it.detail}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Stats({ items }: { items: { term: string; fig: string; cap?: string }[] }) {
  return (
    <dl className="stats">
      {items.map((it) => (
        <div key={it.term}>
          <dt>{it.term}</dt>
          <div className="fig">{it.fig}</div>
          {it.cap ? <div className="cap">{it.cap}</div> : null}
        </div>
      ))}
    </dl>
  );
}

export function Callout({ who, children }: { who: string; children: ReactNode }) {
  return (
    <div className="callout">
      <p>{children}</p>
      <span className="who">{who}</span>
    </div>
  );
}
