import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { event } from '../data/event';
import { forms } from '../data/forms';
import { signalBoard } from '../data/resources';
import { Button } from './Button';
import { useHeroParallax } from '../hooks/useHeroParallax';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scroll, mx, my, reduced } = useHeroParallax(sectionRef);

  const sbvTransform = reduced
    ? undefined
    : `translate3d(${mx * 10}px, ${scroll * 0.55 + my * 10}px, 0)`;

  return (
    <section
      ref={sectionRef}
      className="hero-section relative min-h-[72vh] overflow-x-clip border-b border-village-border"
    >
      <div className="hero-noise pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="hero-sbv-layer pointer-events-none absolute inset-0"
        style={{ transform: sbvTransform }}
        aria-hidden="true"
      >
        <span className="hero-sbv-mark">SBV</span>
      </div>

      <div className="relative mx-auto flex min-h-[72vh] max-w-7xl flex-col justify-center px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="relative z-10 grid items-end gap-12 lg:grid-cols-[1fr_340px]">
          <div className="max-w-3xl">
            <p className="font-mono text-[11px] tracking-[0.2em] text-village-muted">
              {event.conference}
              <span className="mx-2 text-village-border-strong">/</span>
              {event.dates}
            </p>

            <h1 className="mt-5 text-[clamp(2.75rem,7vw,5.5rem)] font-black leading-[0.92] tracking-[-0.03em] text-village-text">
              ScamBait
              <br />
              <span className="text-village-muted">Village</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-village-muted md:text-xl">
              {event.tagline}. Scam intel, live demos, and community tooling at hacker summer camp.
            </p>

            <p className="mt-4 font-mono text-xs text-village-muted/80">
              {event.locationShort}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button href={forms.speakerSubmission}>Submit a Talk</Button>
              <Button href={forms.sponsorInquiry} variant="secondary">
                Become a Sponsor
              </Button>
              <Link
                to="/schedule"
                className="px-2 py-3 font-mono text-xs text-village-muted underline-offset-4 transition hover:text-village-text hover:underline focus:outline-none focus:ring-2 focus:ring-village-green focus:ring-offset-2 focus:ring-offset-village-bg"
              >
                Schedule status
              </Link>
            </div>
          </div>

          <aside className="hidden border-l border-village-border pl-8 lg:block">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-village-muted">
              Village status
            </p>
            <dl className="mt-5 space-y-4">
              {signalBoard.map((item) => (
                <div key={item.label} className="flex items-baseline justify-between gap-4">
                  <dt className="font-mono text-xs text-village-muted">{item.label}</dt>
                  <dd className="font-mono text-xs text-village-text">{item.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        <div className="relative z-10 mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-village-border bg-village-border lg:hidden">
          {signalBoard.map((item) => (
            <div key={item.label} className="bg-village-bg px-4 py-3">
              <p className="font-mono text-[10px] text-village-muted">{item.label}</p>
              <p className="mt-1 font-mono text-xs text-village-text">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
