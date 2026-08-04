import { forms } from '../data/forms';
import { event } from '../data/event';
import { sponsorPreview, sponsorValueProps } from '../data/sponsors';
import { PageShell } from '../components/PageShell';
import { SectionHeader } from '../components/SectionHeader';
import { SubsectionHeader } from '../components/SubsectionHeader';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';

export function Sponsors() {
  return (
    <PageShell grid>
      <SectionHeader
        as="h1"
        eyebrow="Sponsors"
        title="Sponsors"
        description="The village runs on donated time and money. These are the people who make it possible."
      />

      <section className="mb-16">
        <SubsectionHeader title="Current supporters" />
        <div className="space-y-4">
          {sponsorPreview.map((sponsor) => (
            <Card key={sponsor.name} className="grid gap-6 sm:grid-cols-[140px_1fr]">
              <div className="flex aspect-square items-center justify-center border-[3px] border-panel-2 bg-paper p-4">
                <img src={sponsor.logo} alt={`${sponsor.name} logo`} className="max-h-full max-w-full object-contain" />
              </div>
              <div>
                <Badge tone="yellow" className="mb-3">
                  {sponsor.label}
                </Badge>
                <h2 className="text-2xl font-extrabold text-paper">{sponsor.name}</h2>
                <p className="mt-3 max-w-2xl text-base leading-7 text-paper-dim">{sponsor.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <SubsectionHeader title="Operated by" />
        <Card className="grid gap-6 sm:grid-cols-[140px_1fr] sm:items-center">
          <div className="flex aspect-square items-center justify-center border-[3px] border-panel-2 bg-paper p-4">
            <img src="/partners/gcas-labs-logo.svg" alt="GCAS Labs logo" className="max-h-full max-w-full object-contain" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-paper">{event.orgName}</h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-paper-dim">
              ScamBait Village is organized and run by {event.orgName}, a nonprofit supporting
              community-led anti-scam research, education, and responsible disruption work.
            </p>
            <a
              href={event.orgUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-mono text-xs text-green hover:underline focus:outline-none"
            >
              gcaslabs.org ↗
            </a>
          </div>
        </Card>
      </section>

      <section className="mb-16">
        <SubsectionHeader title="Why sponsor" />
        <div className="grid gap-4 sm:grid-cols-2">
          {sponsorValueProps.map((prop) => (
            <Card key={prop} interactive>
              <p className="text-sm leading-6 text-paper">{prop}</p>
            </Card>
          ))}
        </div>
      </section>

      <div className="text-center">
        <Button href={forms.sponsorInquiry}>Become a Sponsor</Button>
      </div>
    </PageShell>
  );
}
