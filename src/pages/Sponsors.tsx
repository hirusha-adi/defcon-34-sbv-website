import { forms } from '../data/forms';
import { sponsorPreview, sponsorTiers, sponsorValueProps } from '../data/sponsors';
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
        description="Support the village helping people understand, document, and disrupt scams responsibly."
      />

      <section className="mb-16">
        <SubsectionHeader title="Current supporters" />
        {sponsorPreview.map((sponsor) => (
          <Card key={sponsor.name} className="grid gap-6 sm:grid-cols-[140px_1fr]">
            <div className="flex aspect-square items-center justify-center border-[3px] border-panel-2 bg-bg font-mono text-lg text-paper-dim">
              {sponsor.name}
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

      <section className="mb-16">
        <SubsectionHeader title="Sponsorship tiers" description="Pricing and package details coming soon." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sponsorTiers.map((tier) => (
            <Card key={tier.name} interactive className="flex flex-col">
              <h3 className="font-mono text-sm font-bold text-green">{tier.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-paper-dim">{tier.description}</p>
              <div className="mt-4">
                <Button href={forms.sponsorInquiry} variant="secondary" className="!text-[11px]">
                  Request sponsor info
                </Button>
              </div>
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
