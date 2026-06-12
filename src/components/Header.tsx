import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from '../data/nav';
import { forms } from '../data/forms';
import { event } from '../data/event';
import { Button } from './Button';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-village-border/60 bg-village-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="group flex items-center gap-2 font-mono text-sm font-bold text-village-text focus:outline-none focus:ring-2 focus:ring-village-green focus:ring-offset-2 focus:ring-offset-village-bg"
          onClick={closeMenu}
        >
          <span className="text-village-green">[SBV]</span>
          <span className="hidden sm:inline">{event.shortName}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`rounded-lg px-3 py-2 font-mono text-xs transition focus:outline-none focus:ring-2 focus:ring-village-green focus:ring-offset-2 focus:ring-offset-village-bg ${
                location.pathname === item.href
                  ? 'text-village-green'
                  : 'text-village-muted hover:text-village-text'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button href={forms.speakerSubmission} variant="primary" className="ml-2 !px-4 !py-2 !text-xs">
            Submit a Talk
          </Button>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-village-border text-village-text lg:hidden focus:outline-none focus:ring-2 focus:ring-village-green focus:ring-offset-2 focus:ring-offset-village-bg"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="sr-only">{menuOpen ? 'Close' : 'Menu'}</span>
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav
          className="border-t border-village-border bg-village-bg px-4 py-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={`block rounded-lg px-4 py-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-village-green ${
                    location.pathname === item.href
                      ? 'bg-village-surface text-village-green'
                      : 'text-village-muted hover:bg-village-surface hover:text-village-text'
                  }`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button
                href={forms.speakerSubmission}
                variant="primary"
                className="w-full"
              >
                Submit a Talk
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
