import { forms } from '../data/forms';
import {
  submissionTypes,
  cfpTopics,
  cfpNotAFit,
  expectedFormFields,
} from '../data/speakers';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { SectionHeader } from '../components/SectionHeader';

export function Speakers() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="CFP"
          title="Call for Presentations"
          description="Bring your scam research, field stories, tooling, workshops, and hard-earned lessons to ScamBait Village."
        />

        <div className="mb-12">
          <Button href={forms.speakerSubmission}>Submit via Microsoft Forms</Button>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-village-text">Submission types</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {submissionTypes.map((type) => (
              <Card key={type.name} interactive>
                <h3 className="font-mono text-sm font-bold text-village-green">{type.name}</h3>
                <p className="mt-2 text-sm leading-6 text-village-muted">{type.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-village-text">Topics we want</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {cfpTopics.map((topic) => (
              <Card key={topic}>
                <p className="text-sm text-village-text">{topic}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="rounded-2xl border border-village-danger/30 bg-village-danger/5 p-6">
            <h2 className="font-mono text-sm uppercase tracking-widest text-village-danger">
              Not a fit
            </h2>
            <ul className="mt-4 space-y-2">
              {cfpNotAFit.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-village-muted">
                  <span className="text-village-danger" aria-hidden="true">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-village-text">Expected form fields</h2>
          <p className="mt-2 text-sm text-village-muted">
            Prepare the following for your Microsoft Forms submission:
          </p>
          <Card className="mt-6">
            <ul className="grid gap-2 sm:grid-cols-2">
              {expectedFormFields.map((field) => (
                <li key={field} className="flex gap-2 font-mono text-xs text-village-muted">
                  <span className="text-village-green">›</span>
                  {field}
                </li>
              ))}
            </ul>
          </Card>
          <div className="mt-8">
            <Button href={forms.speakerSubmission}>Submit via Microsoft Forms</Button>
          </div>
        </section>
      </div>
    </div>
  );
}
