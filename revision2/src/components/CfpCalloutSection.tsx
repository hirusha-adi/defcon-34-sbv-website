import { forms } from '../data/forms';
import { ContentSection } from './ContentSection';
import { Button } from './Button';

export function CfpCalloutSection() {
  return (
    <ContentSection variant="soft">
      <div className="border-[3px] border-yellow bg-panel px-6 py-10 text-center shadow-[8px_8px_0_0_var(--color-yellow)] sm:px-10 sm:py-12">
        <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-yellow">
          <span className="h-2 w-2 bg-yellow" aria-hidden="true" />
          Call for Papers
        </span>

        <h2 className="mt-4 font-display text-2xl leading-relaxed text-paper md:text-3xl">
          Bring your research, tools, stories, and demos.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-paper-dim">
          We are looking for speakers to present on topics related to scam operations, defense
          mechanisms, OSINT, and reverse engineering. Help educate the community and disrupt fraud.
        </p>

        <Button href={forms.speakerSubmission} className="mt-8">
          Open CFP Submission Form →
        </Button>
      </div>
    </ContentSection>
  );
}
