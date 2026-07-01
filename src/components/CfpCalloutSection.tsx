import { forms } from '../data/forms';
import { ContentSection } from './ContentSection';
import { Button } from './Button';

function MegaphoneIcon() {
  return (
    <svg className="h-5 w-5 text-village-green" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 10v4h4l5 4V6L8 10H4zM16 8.82a4 4 0 010 6.36M18 6a7 7 0 010 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14 5h5v5M10 14L19 5M15 5h4v4M5 10v9h9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CornerAccent({ className }: { className: string }) {
  return (
    <div className={`pointer-events-none absolute ${className}`} aria-hidden="true">
      <span className="absolute left-0 top-0 h-8 w-px bg-village-green/40" />
      <span className="absolute left-0 top-0 h-px w-8 bg-village-green/40" />
    </div>
  );
}

export function CfpCalloutSection() {
  return (
    <ContentSection variant="soft">
      <div className="relative">
        <div className="relative rounded-2xl border border-village-green/20 bg-village-surface/80 px-6 py-10 text-center shadow-panel sm:px-10 sm:py-12">
          <CornerAccent className="left-5 top-5" />
          <CornerAccent className="bottom-5 right-5 rotate-180" />

          <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-village-green/30 bg-village-green/5">
            <MegaphoneIcon />
          </div>

          <h2 className="text-3xl font-black tracking-[-0.02em] text-village-green md:text-4xl">
            Call for Papers
          </h2>
          <p className="mt-3 text-base font-bold leading-7 text-village-text md:text-lg">
            Bring your research, tools, stories, and demos.
          </p>
          <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-village-muted">
            We are looking for speakers to present on topics related to scam operations, defense
            mechanisms, OSINT, and reverse engineering. Help educate the community and disrupt fraud.
          </p>

          <Button href={forms.speakerSubmission} className="cfp-submit-btn mt-8 gap-2 !text-village-bg">
            Open CFP Submission Form
            <ExternalLinkIcon />
          </Button>
        </div>
      </div>
    </ContentSection>
  );
}
