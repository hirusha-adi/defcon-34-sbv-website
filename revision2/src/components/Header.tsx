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
    <header className="sticky top-0 z-[100] border-b-[3px] border-panel-2 bg-bg/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="group flex items-center gap-2 font-display text-xs font-bold text-paper focus:outline-none"
          onClick={closeMenu}
        >
          <span className="border-2 border-green px-1.5 py-1 text-green">SBV</span>
          <span className="hidden font-mono text-xs font-medium normal-case tracking-normal text-paper-dim sm:inline">
            {event.shortName}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`px-3 py-2 font-mono text-xs font-medium uppercase tracking-wide transition focus:outline-none focus-visible:bg-panel-2 ${
                location.pathname === item.href
                  ? 'text-yellow'
                  : 'text-paper-dim hover:text-paper'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button href={forms.speakerSubmission} variant="primary" className="ml-2 !px-4 !py-2 !text-[11px]">
            Submit a Talk
          </Button>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center border-[3px] border-paper text-paper lg:hidden focus:outline-none"
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
          className="border-t-[3px] border-panel-2 bg-bg px-4 py-4 lg:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={`block px-4 py-3 font-mono text-sm uppercase tracking-wide focus:outline-none ${
                    location.pathname === item.href
                      ? 'bg-panel-2 text-yellow'
                      : 'text-paper-dim hover:bg-panel-2 hover:text-paper'
                  }`}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button href={forms.speakerSubmission} variant="primary" className="w-full">
                Submit a Talk
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
