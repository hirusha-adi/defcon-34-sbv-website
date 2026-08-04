import { Link } from 'react-router-dom';
import { event } from '../data/event';
import { forms } from '../data/forms';
import { scheduleDays } from '../data/schedule';
import { resourceGroups, homeHypeCards, signalBoard } from '../data/resources';
import { sponsorPreview } from '../data/sponsors';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { ContentSection } from '../components/ContentSection';
import { SectionHeader } from '../components/SectionHeader';
import { AboutSection } from '../components/AboutSection';
import { CfpCalloutSection } from '../components/CfpCalloutSection';
import { Hero } from '../components/Hero';
import { Badge } from '../components/Badge';
import { TerminalPanel } from '../components/TerminalPanel';

const signalLines = [
  'scambait-village@defcon34:~$ status --village',
  ...signalBoard.map((item) => `${item.label}=${item.value}`),
];

export function Home() {
  const previewResources = resourceGroups.flatMap((g) => g.cards).slice(0, 4);

  return (
    <>
      <Hero />

      <ContentSection className="!pt-10 !pb-0">
        <TerminalPanel lines={signalLines} />
      </ContentSection>

      <ContentSection>
        <SectionHeader
          eyebrow="What's on"
          title="Built for the anti-scam frontline"
          description="Every format the village runs, from deep-dive talks to live scam demos."
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {homeHypeCards.map((card, i) => {
            const isWide = i === 0 || i === homeHypeCards.length - 1;
            return (
              <Card
                key={card.title}
                interactive
                className={`relative overflow-hidden ${isWide ? 'sm:col-span-2' : ''}`}
              >
                <span
                  className="pointer-events-none absolute -right-1 -top-2 font-display text-4xl text-paper/[0.06]"
                  aria-hidden="true"
                >
                  {card.index}
                </span>
                <Badge tone={card.color} className="mb-3">
                  {card.title}
                </Badge>
                <p className="relative max-w-sm text-sm leading-6 text-paper-dim">
                  {card.description}
                </p>
              </Card>
            );
          })}
        </div>
      </ContentSection>

      <AboutSection />

      <CfpCalloutSection />

      <ContentSection variant="soft">
        <SectionHeader
          eyebrow="Schedule"
          title="The line-up is confirmed"
          description={`Hall hours: ${event.hallHours}.`}
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {scheduleDays.map((day) => (
            <Card key={day.day}>
              <Badge tone="green" className="mb-3">
                Confirmed
              </Badge>
              <h3 className="font-mono text-sm text-green">{day.day}</h3>
              <p className="font-mono text-xs text-paper-dim">
                {day.date} · {day.hours}
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-paper-dim">
                {day.sessions.map((s) => (
                  <li key={s.title}>{s.title}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href="/schedule" variant="secondary">
            View full schedule
          </Button>
        </div>
      </ContentSection>

      <ContentSection>
        <SectionHeader
          eyebrow="Sponsors"
          title="Thank you to our supporters"
          description={`Malwarebytes and Just Hacking Training keep the village running. Operated by ${event.orgName}.`}
        />
        <div className="flex flex-wrap items-center gap-6">
          {sponsorPreview.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex h-24 w-48 items-center justify-center border-[3px] border-panel-2 bg-paper p-4"
            >
              <img
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
          <div className="flex flex-wrap gap-3">
            <Button href={forms.sponsorInquiry}>Become a Sponsor</Button>
            <Button href="/sponsors" variant="secondary">
              Sponsor Info
            </Button>
          </div>
        </div>
      </ContentSection>

      <ContentSection variant="soft">
        <SectionHeader
          eyebrow="Resources"
          title="Scam awareness & education"
          description="Defensive resources for attendees and the wider community."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {previewResources.map((resource) => (
            <Card key={resource.title} interactive>
              <h3 className="text-sm font-bold text-paper">{resource.title}</h3>
              <p className="mt-2 text-sm leading-6 text-paper-dim">{resource.description}</p>
              <Link
                to="/resources"
                className="mt-4 inline-block font-mono text-xs text-green hover:underline focus:outline-none"
              >
                View resources →
              </Link>
            </Card>
          ))}
        </div>
      </ContentSection>

      <ContentSection>
        <div className="text-center">
          <SectionHeader align="center" title={event.tagline} description="Come learn how scams work before someone you love gets hit." />
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="secondary">
              Contact the village
            </Button>
            <Button href={forms.volunteerInterest} variant="secondary">
              Volunteer
            </Button>
          </div>
        </div>
      </ContentSection>
    </>
  );
}
