import { resourceGroups } from '../data/resources';
import { PageShell } from '../components/PageShell';
import { Card } from '../components/Card';
import { SectionHeader } from '../components/SectionHeader';
import { SubsectionHeader } from '../components/SubsectionHeader';
import { Button } from '../components/Button';
import { WarningPanel } from '../components/WarningPanel';

export function Resources() {
  return (
    <PageShell>
      <SectionHeader
        as="h1"
        eyebrow="Resources"
        title="Educational resources"
        description="Defensive education and community awareness. No offensive guidance — prevention, reporting, and victim support only."
      />

      <WarningPanel variant="warning" className="mb-12">
        <p className="font-mono text-xs text-village-warning">
          Education only. No unauthorized access, malware, doxxing, harassment, or instructions
          that create new harm.
        </p>
      </WarningPanel>

      <div className="space-y-16">
        {resourceGroups.map((group) => (
          <section key={group.title}>
            <SubsectionHeader title={group.title} />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {group.cards.map((card) => (
                <Card key={card.title} interactive>
                  <h3 className="text-sm font-bold text-village-text">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-village-muted">{card.description}</p>
                  <Button href={card.href} variant="ghost" className="mt-4 !px-0 !py-0 !text-xs">
                    Coming soon →
                  </Button>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
