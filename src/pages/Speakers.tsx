import { forms } from '../data/forms';
import {
  confirmedSpeakers,
  submissionTypes,
  cfpTopics,
  cfpNotAFit,
  expectedFormFields,
} from '../data/speakers';
import { PageShell } from '../components/PageShell';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { SectionHeader } from '../components/SectionHeader';
import { SubsectionHeader } from '../components/SubsectionHeader';
import { WarningPanel } from '../components/WarningPanel';

export function Speakers() {
  return (
    <PageShell>
      <SectionHeader
        as="h1"
        eyebrow="Speakers"
        title="Speakers"
        description="Two confirmed sessions Saturday at the village, plus an open call for future line-ups."
      />

      <section className="mb-16">
        <SubsectionHeader title="Confirmed for DEF CON 34" description="Saturday, August 8 at the village." />
        <div className="grid gap-4 sm:grid-cols-2">
          {confirmedSpeakers.map((speaker) => (
            <Card key={speaker.name} className="flex flex-col">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold text-paper">{speaker.name}</h3>
                  <p className="font-mono text-xs text-paper-dim">
                    {speaker.pronouns} · {speaker.role}
                  </p>
                </div>
                <Badge tone="green">Confirmed</Badge>
              </div>
              <p className="mt-4 font-mono text-xs text-yellow">{speaker.talkTitle}</p>
              <p className="font-mono text-[11px] text-paper-dim">{speaker.time}</p>
              <p className="mt-2 flex-1 text-sm leading-6 text-paper-dim">{speaker.description}</p>
              {speaker.links.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {speaker.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-green hover:underline focus:outline-none"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
        <div className="mt-6">
          <Button href="/schedule" variant="secondary" className="!text-xs">
            View full schedule
          </Button>
        </div>
      </section>

      <SectionHeader
        eyebrow="CFP"
        title="Call for Presentations"
        description="Bring your scam research, field stories, tooling, workshops, and hard-earned lessons to a future village."
      />

      <div className="mb-12">
        <Button href={forms.speakerSubmission}>Submit via Microsoft Forms</Button>
      </div>

      <section className="mb-16">
        <SubsectionHeader title="Submission types" />
        <div className="grid gap-4 sm:grid-cols-2">
          {submissionTypes.map((type, i) => (
            <Card
              key={type.name}
              interactive
              className={i === submissionTypes.length - 1 ? 'sm:col-span-2' : ''}
            >
              <h3 className="font-mono text-sm font-bold text-green">{type.name}</h3>
              <p className="mt-2 text-sm leading-6 text-paper-dim">{type.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <SubsectionHeader title="Topics we want" />
        <div className="grid gap-4 sm:grid-cols-2">
          {cfpTopics.map((topic) => (
            <Card key={topic}>
              <p className="text-sm leading-6 text-paper">{topic}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <WarningPanel title="Not a fit">
          <ul className="space-y-2">
            {cfpNotAFit.map((item) => (
              <li key={item} className="flex gap-2 text-sm leading-6 text-paper-dim">
                <span className="text-coral" aria-hidden="true">
                  ✕
                </span>
                {item}
              </li>
            ))}
          </ul>
        </WarningPanel>
      </section>

      <section>
        <SubsectionHeader
          title="Expected form fields"
          description="Prepare the following for your Microsoft Forms submission:"
        />
        <Card>
          <ul className="grid gap-2 sm:grid-cols-2">
            {expectedFormFields.map((field) => (
              <li key={field} className="flex gap-2 font-mono text-xs text-paper-dim">
                <span className="text-green">›</span>
                {field}
              </li>
            ))}
          </ul>
        </Card>
        <div className="mt-8">
          <Button href={forms.speakerSubmission}>Submit via Microsoft Forms</Button>
        </div>
      </section>
    </PageShell>
  );
}
