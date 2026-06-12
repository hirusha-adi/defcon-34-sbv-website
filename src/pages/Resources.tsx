import { resourceGroups } from '../data/resources';
import { Card } from '../components/Card';
import { SectionHeader } from '../components/SectionHeader';
import { Button } from '../components/Button';

export function Resources() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Resources"
          title="Educational resources"
          description="Defensive education and community awareness. No offensive guidance — prevention, reporting, and victim support only."
        />

        <div className="mb-12 rounded-2xl border border-village-warning/30 bg-village-warning/5 p-4">
          <p className="font-mono text-xs text-village-warning">
            Education only. No unauthorized access, malware, doxxing, harassment, or instructions
            that create new harm.
          </p>
        </div>

        <div className="space-y-16">
          {resourceGroups.map((group) => (
            <section key={group.title}>
              <h2 className="mb-6 text-xl font-bold text-village-text">{group.title}</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {group.cards.map((card) => (
                  <Card key={card.title} interactive>
                    <h3 className="text-sm font-bold text-village-text">{card.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-village-muted">{card.description}</p>
                    <Button href={card.href} variant="ghost" className="mt-4 !px-0 !py-0 !text-xs">
                      Coming soon →
                    </Button>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
