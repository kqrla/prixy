import { Link, Outlet } from "@tanstack/react-router";
import { CircleDotDashed } from "lucide-react";

const navigationItems = [
  { label: "about", to: "/about" },
  { label: "features", to: "/features" },
  { label: "philosophy", to: "/philosophy" },
  { label: "roadmap", to: "/roadmap" },
] as const;

export function SiteShell() {
  return (
    <div className="site-canvas">
      <aside className="binding-title" aria-hidden="true">personal presence proxy</aside>
      <div className="document-sheet">
        <header className="site-header">
          <div className="approval-cell">
            <span>approval</span>
            <CircleDotDashed size={30} strokeWidth={1.4} aria-hidden="true" />
          </div>
          <div className="issue-cell"><span>issue no.</span><strong>001</strong></div>
          <div className="length-cell"><span>length</span><strong>5 pages</strong></div>
          <Link to="/" className="wordmark" aria-label="prixy home">prixy</Link>
          <p className="header-brief">a personal presence proxy for the things you do not need to personally attend. prixy goes, listens, asks, and brings back the specific thing you needed.</p>
          <nav className="site-navigation" aria-label="primary navigation">
            <Link to="/" className="navigation-link" activeProps={{ className: "navigation-link navigation-link-active" }}>index</Link>
            {navigationItems.map((item, itemIndex) => (
              <Link key={item.to} to={item.to} className="navigation-link" activeProps={{ className: "navigation-link navigation-link-active" }}>
                {String(itemIndex + 2).padStart(2, "0")} / {item.label}
              </Link>
            ))}
          </nav>
        </header>
        <main className="site-main"><Outlet /></main>
        <footer className="site-footer">
          <div><span>issued by</span><strong>prixy systems</strong></div>
          <p>quietly present where you aren't.</p>
          <Link to="/philosophy" className="footer-link">field guide / 001</Link>
        </footer>
      </div>
    </div>
  );
}