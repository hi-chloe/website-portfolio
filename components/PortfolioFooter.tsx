export function PortfolioFooter({ label }: { label: string }) {
  return (
    <footer className="portfolio-footer">
      <span>{label} · Chloe Polk</span>
      <div className="footer-links">
        <a href="/#work">All work</a>
        <a href="/chloe-polk-resume.pdf" target="_blank" rel="noopener noreferrer">Résumé (PDF)</a>
        <a href="/#contact">Contact</a>
      </div>
      <span>hichloe.me · © 2026</span>
    </footer>
  );
}
