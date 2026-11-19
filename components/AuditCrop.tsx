/** A CSS crop of the unchanged Evidence C capture. The outline is an annotation. */
export function AuditCrop() {
  return (
    <figure className="audit-crop">
      <div className="shot audit-crop-window">
        <img src="/assets/fable-audit-mobile-navigation.webp" width={1206} height={2622}
          alt="Detail of the open Fable mobile menu: the Want 10% off prompt covers part of Our Story. A violet outline marks the obstruction." />
        <span className="audit-crop-outline" aria-hidden="true"><span>1</span></span>
      </div>
      <figcaption><b>1 · FBL-009.</b> The promotion covers part of “Our Story” in the open menu.
        Detail from Evidence C, report page 4. Cropped for inspection; outline added.
        <a href="/assets/fable-audit-mobile-navigation.webp" target="_blank" rel="noopener noreferrer">Open the uncropped mobile navigation evidence (new tab) ↗</a>
      </figcaption>
    </figure>
  );
}
