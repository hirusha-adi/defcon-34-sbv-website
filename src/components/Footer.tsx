import { Link } from 'react-router-dom';
import { navItems } from '../data/nav';
import { forms } from '../data/forms';
import { event } from '../data/event';
import { Button } from './Button';

export function Footer() {
  return (
    <footer className="border-t-[3px] border-panel-2 bg-panel/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_0.8fr_1fr]">
          <div>
            <p className="inline-block border-2 border-green px-1.5 py-1 font-display text-xs font-bold text-green">
              SBV
            </p>
            <h2 className="mt-3 text-xl font-extrabold tracking-tight text-paper">{event.shortName}</h2>
            <p className="mt-3 max-w-sm text-sm leading-6 text-paper-dim">{event.description}</p>
            <p className="mt-4 font-mono text-xs text-paper-dim">
              {event.dates} · {event.locationShort}
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-paper-dim">Navigate</h3>
            <ul className="mt-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-paper-dim transition hover:text-yellow focus:outline-none"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-paper-dim">Get involved</h3>
            <div className="mt-4 flex flex-col items-start gap-3">
              <Button href={forms.speakerSubmission} variant="primary" className="!text-[11px]">
                Submit a Talk
              </Button>
              <Button href={event.discordUrl} variant="secondary" className="!text-[11px]">
                Join Discord
              </Button>
              <Button href={forms.sponsorInquiry} variant="secondary" className="!text-[11px]">
                Become a Sponsor
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t-[3px] border-panel-2 pt-8">
          <p className="text-xs leading-5 text-paper-dim">
            DEF CON and sponsor names/logos are trademarks of their respective owners. Use official
            marks only with permission. Replace this note with approved legal copy before launch.
          </p>
          <p className="mt-4 font-mono text-xs text-paper-dim">
            © {new Date().getFullYear()} {event.shortName} · {event.conference}
          </p>
        </div>
      </div>
    </footer>
  );
}
