import { Link } from 'react-router-dom';
import { navItems } from '../data/nav';
import { forms } from '../data/forms';
import { event } from '../data/event';
import { Button } from './Button';

export function Footer() {
  return (
    <footer className="border-t border-village-border bg-village-soft">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-mono text-sm font-bold text-village-green">[SBV]</p>
            <h2 className="mt-2 text-xl font-black text-village-text">{event.shortName}</h2>
            <p className="mt-3 text-sm leading-6 text-village-muted">{event.description}</p>
            <p className="mt-4 font-mono text-xs text-village-muted">
              {event.dates} · {event.locationShort}
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-village-muted">Navigate</h3>
            <ul className="mt-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-village-muted transition hover:text-village-green focus:outline-none focus:ring-2 focus:ring-village-green focus:ring-offset-2 focus:ring-offset-village-soft"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-village-muted">Get involved</h3>
            <div className="mt-4 flex flex-col gap-3">
              <Button href={forms.speakerSubmission} variant="primary" className="!text-xs">
                Submit a Talk
              </Button>
              <Button href={forms.sponsorInquiry} variant="secondary" className="!text-xs">
                Become a Sponsor
              </Button>
              <Button href={forms.updates} variant="secondary" className="!text-xs">
                Get Updates
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-village-border pt-8">
          <p className="text-xs leading-5 text-village-muted">
            DEF CON and sponsor names/logos are trademarks of their respective owners. Use official
            marks only with permission. Replace this note with approved legal copy before launch.
          </p>
          <p className="mt-4 font-mono text-xs text-village-muted">
            © {new Date().getFullYear()} {event.shortName} · {event.conference}
          </p>
        </div>
      </div>
    </footer>
  );
}
