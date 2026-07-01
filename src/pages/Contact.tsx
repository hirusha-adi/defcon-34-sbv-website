import { contactCards } from '../data/contact';
import { PageShell } from '../components/PageShell';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { SectionHeader } from '../components/SectionHeader';

export function Contact() {
  return (
    <PageShell>
      <SectionHeader
        as="h1"
        eyebrow="Contact"
        title="Contact"
        description="Questions, press, sponsors, volunteers, and community collaborators can reach the village team here."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {contactCards.map((card) => (
          <Card key={card.title} interactive>
            <h3 className="text-lg font-bold text-village-text">{card.title}</h3>
            <p className="mt-2 text-sm leading-6 text-village-muted">{card.description}</p>
            <div className="mt-4">
              <Button href={card.href} variant="secondary" className="!text-xs">
                {card.cta}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
