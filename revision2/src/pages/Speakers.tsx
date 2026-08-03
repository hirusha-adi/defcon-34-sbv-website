import { forms } from '../data/forms';
import { submissionTypes, cfpTopics, cfpNotAFit, expectedFormFields } from '../data/speakers';
import { PageShell } from '../components/PageShell';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { SectionHeader } from '../components/SectionHeader';
import { SubsectionHeader } from '../components/SubsectionHeader';
import { WarningPanel } from '../components/WarningPanel';

export function Speakers() {
  return (
    <PageShell>
      <SectionHeader
        as="h1"
        eyebrow="CFP"
        title="Call for Presentations"
        description="Bring your scam research, field stories, tooling, workshops, and hard-earned lessons to ScamBait Village."
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
