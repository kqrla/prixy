import { Link, Outlet } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { FloralMark } from "./floral-mark";

const navigationItems = [
  { label: "about", to: "/about" },
  { label: "features", to: "/features" },
  { label: "philosophy", to: "/philosophy" },
  { label: "roadmap", to: "/roadmap" },
] as const;

export function SiteShell() {
  return (
    <div className="site-canvas">
      <div className="background-ribbon background-ribbon-one" />
      <div className="background-ribbon background-ribbon-two" />
      <FloralMark className="flower flower-one" />
      <FloralMark className="flower flower-two" />
      <FloralMark className="flower flower-three" />
      <header className="site-header">
        <Link to="/" className="wordmark" aria-label="prixy home">
          prixy<span className="wordmark-dot">.</span>
        </Link>
        <nav className="site-navigation" aria-label="primary navigation">
          {navigationItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="navigation-link"
              activeProps={{ className: "navigation-link navigation-link-active" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
      <main className="site-main">
        <Outlet />
      </main>
      <footer className="site-footer">
        <Link to="/" className="footer-mark">prixy</Link>
        <p>quietly present where you aren't.</p>
        <Link to="/philosophy" className="footer-link">
          read the philosophy <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      </footer>
    </div>
  );
}