import { Link } from 'react-router-dom';
import { event } from '../data/event';
import { forms } from '../data/forms';
import { scheduleDays } from '../data/schedule';
import { resourceGroups } from '../data/resources';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { ContentSection } from '../components/ContentSection';
import { SectionHeader } from '../components/SectionHeader';
import { VillageAboutSection } from '../components/VillageAboutSection';
import { CfpCalloutSection } from '../components/CfpCalloutSection';
import { Hero } from '../components/Hero';
import { Badge } from '../components/Badge';

export function Home() {
  const previewResources = resourceGroups.flatMap((g) => g.cards).slice(0, 4);

  return (
    <>
      <Hero />

      <VillageAboutSection />

      <CfpCalloutSection />

      <ContentSection variant="soft">
        <SectionHeader
          eyebrow="Schedule"
          title="Programming coming soon"
          description="Full village schedule will be published once confirmed."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {scheduleDays.map((day) => (
            <Card key={day.day}>
              <Badge variant="warning" className="mb-3">
                TBA
              </Badge>
              <h3 className="font-mono text-sm text-village-green">{day.day}</h3>
              <p className="font-mono text-xs text-village-muted">{day.date}</p>
              <p className="mt-3 text-sm leading-6 text-village-muted">{day.status}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href="/schedule" variant="secondary">
            View schedule status
          </Button>
        </div>
      </ContentSection>

      <ContentSection>
        <SectionHeader
          eyebrow="Sponsors"
          title="Thank you to our supporters"
          description="Thank you to AnyDesk for supporting anti-scam education and community-led scam disruption work. More sponsors TBA."
        />
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex h-24 w-48 items-center justify-center rounded-2xl border border-village-border bg-village-surface font-mono text-sm text-village-muted">
            AnyDesk
          </div>
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
              <h3 className="text-sm font-bold text-village-text">{resource.title}</h3>
              <p className="mt-2 text-sm leading-6 text-village-muted">{resource.description}</p>
              <Link
                to="/resources"
                className="mt-4 inline-block font-mono text-xs text-village-green hover:underline focus:outline-none focus:ring-2 focus:ring-village-green"
              >
                View resources →
              </Link>
            </Card>
          ))}
        </div>
      </ContentSection>

      <ContentSection>
        <div className="text-center">
          <SectionHeader
            align="center"
            title={event.tagline}
            description="Come learn how scams work before someone you love gets hit."
          />
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
