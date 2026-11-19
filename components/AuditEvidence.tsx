import { Figure } from "@/components/Figure";

const evidence = {
  overlap: { label: "Evidence A: desktop hover overlap", file: "hover-overlap", width: 1182, height: 1394 },
  gallery: { label: "Evidence B: mobile gallery", file: "mobile-gallery", width: 706, height: 1536 },
  navigation: { label: "Evidence C: mobile navigation", file: "mobile-navigation", width: 1206, height: 2622 },
  cards: { label: "Evidence D: product cards", file: "product-cards", width: 1206, height: 2622 },
  cart: { label: "Evidence E: cart and discount", file: "cart", width: 1206, height: 2622 },
} as const;

/** Original captures extracted from the supplied report, without cropping. */
export function AuditEvidence({ image, alt, caption }: {
  image: keyof typeof evidence; alt: string; caption: string;
}) {
  const item = evidence[image];
  const src = `/assets/fable-audit-${item.file}.webp`;
  return (
    <div className={`audit-evidence${image === "overlap" ? " audit-evidence-desktop" : ""}`}>
      <Figure src={src} alt={alt} width={item.width} height={item.height}
        caption={<>{caption} <a href={src} target="_blank" rel="noopener noreferrer">Open {item.label} at full size (new tab) ↗</a></>} />
    </div>
  );
}
