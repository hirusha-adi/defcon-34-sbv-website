import { Link } from 'react-router-dom';
import { event } from '../data/event';
import { forms } from '../data/forms';
import { Button } from './Button';
import { HeroCountdown } from './HeroCountdown';

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b-[3px] border-panel-2">
      <div
        className="pointer-events-none absolute inset-0 flex items-start justify-center pt-[6vh]"
        aria-hidden="true"
      >
        <img
          src="/scambait-village-logo.png"
          alt=""
          width={1024}
          height={1024}
          decoding="async"
          className="w-[clamp(20rem,50vw,42rem)] max-w-[90vw] opacity-[0.08] mix-blend-screen"
          style={{ maskImage: 'linear-gradient(180deg, black 0%, transparent 85%)' }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_320px]">
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper-dim">
              {event.conference}
              <span className="mx-2 text-panel-2">/</span>
              {event.dates}
            </p>

            <h1 className="mt-6 font-display text-[clamp(1.9rem,6vw,3.75rem)] leading-[1.6] tracking-tight text-paper">
              <span className="text-green">ScamBait</span>
              <br />
              Village
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper-dim md:text-xl">
              {event.tagline} Scam intel, live demos, and community tooling at hacker summer camp.
            </p>

            <p className="mt-4 font-mono text-xs text-paper-dim/80">{event.locationShort}</p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button href={forms.speakerSubmission}>Submit a Talk</Button>
              <Button href={forms.sponsorInquiry} variant="secondary">
                Become a Sponsor
              </Button>
              <Link
                to="/schedule"
                className="px-2 py-3 font-mono text-xs text-paper-dim underline decoration-dotted underline-offset-4 transition hover:text-yellow focus:outline-none"
              >
                Schedule status
              </Link>
            </div>
          </div>

          <HeroCountdown className="hidden lg:block" />
        </div>

        <HeroCountdown className="relative mt-12 lg:hidden" />
      </div>
    </section>
  );
}
