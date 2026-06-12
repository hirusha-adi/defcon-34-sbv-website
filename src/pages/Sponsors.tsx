import { forms } from '../data/forms';
import { sponsorPreview, sponsorTiers, sponsorValueProps } from '../data/sponsors';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { SectionHeader } from '../components/SectionHeader';
import { Badge } from '../components/Badge';

export function Sponsors() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Sponsors"
          title="Sponsors"
          description="Support the village helping people understand, document, and disrupt scams responsibly."
        />

        <section className="mb-16">
          {sponsorPreview.map((sponsor) => (
            <Card key={sponsor.name} className="max-w-2xl">
              <Badge variant="accent" className="mb-4">
                {sponsor.label}
              </Badge>
              <div className="mb-4 flex h-20 w-40 items-center justify-center rounded-xl border border-village-border bg-village-bg font-mono text-sm text-village-muted">
                {sponsor.name}
              </div>
              <p className="text-base leading-7 text-village-text">
                Thank you to {sponsor.name} for supporting anti-scam education and community-led scam
                disruption work.
              </p>
              <p className="mt-2 text-sm text-village-muted">{sponsor.description}</p>
            </Card>
          ))}
          <p className="mt-6 font-mono text-sm text-village-muted">More sponsors TBA.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-village-text">Why sponsor?</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {sponsorValueProps.map((prop) => (
              <Card key={prop} interactive>
                <p className="text-sm leading-6 text-village-muted">{prop}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-village-text">Sponsor tiers</h2>
          <p className="mt-2 text-sm text-village-muted">
            Tier details and pricing coming soon. Contact us to learn more.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sponsorTiers.map((tier) => (
              <Card key={tier.name} interactive>
                <h3 className="font-mono text-sm font-bold text-village-green">{tier.name}</h3>
                <p className="mt-2 text-sm text-village-muted">{tier.description}</p>
                <div className="mt-4">
                  <Button href={forms.sponsorInquiry} variant="secondary" className="!px-3 !py-2 !text-xs">
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
      </div>
    </div>
  );
}
