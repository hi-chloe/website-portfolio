const artwork = {
  audit: "audit-process-grain",
  classification: "typeshelf-classification-grain",
  lessons: "meridian-lessons-grain",
} as const;

/** Decorative conceptual art. These images are separate from project evidence. */
export function EditorialArt({ kind }: { kind: keyof typeof artwork }) {
  const file = artwork[kind];
  return (
    <div className="editorial-art" aria-hidden="true">
      <img src={`/assets/${file}.webp`}
        srcSet={`/assets/${file}-640.webp 640w, /assets/${file}.webp 1254w`}
        sizes="(max-width: 860px) min(100vw - 40px, 360px), (min-width: 1440px) 520px, 38vw"
        width={1254} height={1254} alt="" loading="lazy" decoding="async" />
    </div>
  );
}
