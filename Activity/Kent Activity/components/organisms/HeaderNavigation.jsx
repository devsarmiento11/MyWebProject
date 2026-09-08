import Link from 'next/link';
import NavItem from '@/components/molecules/NavItem';

export default function HeaderNavigation() {
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand" href="/" aria-label="Coast & Culture Pangasinan home">
          <span className="brand-mark" aria-hidden="true">P</span>
          <span className="brand-copy">
            <strong>Coast & Culture</strong>
            <small>Pangasinan</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <ul>
            <NavItem href="/">Home</NavItem>
            <NavItem href="/#heritage-sites">Explore</NavItem>
            <NavItem href="/#about">Story</NavItem>
          </ul>
        </nav>

        <details className="mobile-nav">
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            <ul>
              <NavItem href="/">Home</NavItem>
              <NavItem href="/#heritage-sites">Explore</NavItem>
              <NavItem href="/#about">Story</NavItem>
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}

