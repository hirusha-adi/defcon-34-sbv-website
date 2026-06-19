import { forms } from '../data/forms';
import {
  sponsorPreview,
  tier1Slots,
  tier2Slots,
  communityTags,
  sponsorBenefits,
} from '../data/sponsors';

function TierHeader({ label, color }: { label: string; color: string }) {
  return (
    <div className={`mb-4 flex items-center gap-4 font-mono text-[11px] uppercase tracking-widest ${color}`}>
      <span>{label}</span>
      <span className="h-px flex-1 bg-village-border" aria-hidden="true" />
    </div>
  );
}

export function Sponsors() {
  return (
    <div className="relative py-16 md:py-24">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black uppercase tracking-tight text-village-text md:text-5xl">
          Sponsor_Manifest
        </h1>
        <p className="mt-3 font-mono text-sm text-village-green">
          &gt; Analyzing partner infrastructure...
          <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-village-green" aria-hidden="true" />
        </p>

        <section className="mt-12">
          <TierHeader label="Tier 0 // Root Protocol" color="text-village-cyan" />
          {sponsorPreview.map((sponsor) => (
            <div
              key={sponsor.name}
              className="grid gap-6 rounded-xl border border-village-cyan/30 bg-gradient-to-br from-village-cyan/10 via-village-surface to-village-bg p-6 sm:grid-cols-[140px_1fr] sm:p-8"
            >
              <div className="flex aspect-square items-center justify-center rounded-lg border border-village-border bg-village-bg font-mono text-lg text-village-muted">
                {sponsor.name}
              </div>
              <div>
                <p className="font-mono text-[11px] text-village-green">
                  ● Status: Active_connection
                </p>
                <h2 className="mt-2 text-3xl font-black text-village-text">{sponsor.name}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-village-muted">
                  {sponsor.description}
                </p>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-12">
          <TierHeader label="Tier 1 // Kernel Level" color="text-village-warning" />
          <div className="grid gap-4 sm:grid-cols-3">
            {Array.from({ length: tier1Slots }).map((_, i) => (
              <div
                key={i}
                className="flex min-h-[120px] flex-col items-center justify-center rounded-lg border border-village-border bg-village-surface/50 p-6"
              >
                <span className="mb-3 text-2xl text-village-border-strong" aria-hidden="true">
                  ▣
                </span>
                <p className="font-mono text-[11px] text-village-muted">● [AWAITING_DATA]</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <TierHeader label="Tier 2 // User Space" color="text-village-muted" />
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {Array.from({ length: tier2Slots }).map((_, i) => (
              <div
                key={i}
                className="flex min-h-[80px] items-center justify-center rounded-lg border border-village-border bg-village-surface/40 p-4"
              >
                <p className="font-mono text-[10px] text-village-muted">[NODE_UNALLOCATED]</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <TierHeader label="Community & Tooling" color="text-village-cyan" />
          <div className="flex flex-wrap gap-3">
            {communityTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-village-cyan/50 px-4 py-1.5 font-mono text-xs text-village-cyan"
              >
                {tag}
              </span>
            ))}
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="rounded-full border border-dashed border-village-border px-4 py-1.5 font-mono text-xs text-village-muted/50"
              >
                + ADD
              </span>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-8 md:grid-cols-3">
          {sponsorBenefits.map((benefit) => (
            <div key={benefit.title} className="border-l-2 border-village-cyan pl-5">
              <span
                className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded border border-village-cyan/40 bg-village-cyan/10 font-mono text-xs text-village-cyan"
                aria-hidden="true"
              >
                ◆
              </span>
              <h3 className="mt-2 text-lg font-bold text-village-text">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-6 text-village-muted">{benefit.description}</p>
            </div>
          ))}
        </section>

        <div className="mt-12 text-center">
          <a
            href={forms.sponsorInquiry}
            className="inline-flex items-center rounded-xl border border-village-green bg-village-green px-6 py-3 font-mono text-sm font-bold text-village-bg transition hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-village-green"
          >
            Become a Sponsor
          </a>
        </div>
      </div>
    </div>
  );
}
