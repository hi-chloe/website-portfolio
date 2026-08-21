import Link from "next/link";

export function Nav({ back }: { back?: boolean }) {
  return (
    <nav aria-label="Site">
      <Link className="mark" href="/">chloe polk<i>.</i></Link>
      {back ? (
        <Link className="back" href="/#work" data-cursor="Back">← All work</Link>
      ) : (
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </nav>
  );
}
