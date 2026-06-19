import { forms } from '../data/forms';

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
    <section className="relative py-12 md:py-16">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl border border-village-green/20 bg-village-surface/80 px-6 py-10 text-center shadow-panel sm:px-10 sm:py-12">
          <CornerAccent className="left-5 top-5" />
          <CornerAccent className="bottom-5 right-5 rotate-180" />

          <div className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-village-green/30 bg-village-green/5">
            <MegaphoneIcon />
          </div>

          <h2 className="text-2xl font-black tracking-tight text-village-green md:text-3xl">
            Call for Papers
          </h2>
          <p className="mt-3 text-lg font-bold text-village-text md:text-xl">
            Bring your research, tools, stories, and demos.
          </p>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-village-muted md:text-base">
            We are looking for speakers to present on topics related to scam operations, defense
            mechanisms, OSINT, and reverse engineering. Help educate the community and disrupt fraud.
          </p>

          <a
            href={forms.speakerSubmission}
            className="cfp-submit-btn mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-mono text-sm font-bold text-village-bg transition hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-village-green focus:ring-offset-2 focus:ring-offset-village-surface"
          >
            Open CFP Submission Form
            <ExternalLinkIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
