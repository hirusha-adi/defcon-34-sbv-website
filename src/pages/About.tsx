import { Card } from '../components/Card';
import { PageShell } from '../components/PageShell';
import { SectionHeader } from '../components/SectionHeader';
import { SubsectionHeader } from '../components/SubsectionHeader';
import { EthicsPanel } from '../components/EthicsPanel';
import { values } from '../data/about';
import { event } from '../data/event';

export function About() {
  return (
    <PageShell>
      <SectionHeader
        as="h1"
        eyebrow="About"
        title="ScamBait Village"
        description="Where scam awareness, community scambaiting, anti-fraud research, and hacker culture collide."
      />

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-10">
          <section>
            <SubsectionHeader title="What is ScamBait Village?" />
            <p className="text-base leading-7 text-paper-dim">
              ScamBait Village is a community space for people studying, documenting, disrupting,
              and educating others about scams. The village brings together scambaiters, security
              researchers, OSINT practitioners, telecom defenders, trust &amp; safety teams, and
              educators to share practical lessons from the fight against fraud.
            </p>
          </section>

          <section>
            <SubsectionHeader title="Why it matters" />
            <p className="text-base leading-7 text-paper-dim">
              Scams cause real financial and emotional harm. Fraud ecosystems involve phone
              numbers, domains, remote-access tools, payment rails, social engineering scripts, mule
              networks, and platform abuse. Education helps people recognize scams before money or
              credentials are lost.
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-paper-dim">
              {[
                'Financial and emotional harm to victims worldwide',
                'Complex ecosystems spanning telecom, platforms, and payments',
                'Education as the first line of defense',
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-green" aria-hidden="true">
                    ▸
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="space-y-6">
          <Card>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center border-[3px] border-panel-2 bg-paper p-2">
                <img src="/partners/gcas-labs-logo.svg" alt="GCAS Labs logo" className="max-h-full max-w-full object-contain" />
              </div>
              <p className="font-mono text-xs uppercase tracking-widest text-green">{event.orgName}</p>
            </div>
            <p className="mt-4 text-base leading-7 text-paper-dim">
              ScamBait Village is organized by {event.orgName}, a nonprofit supporting
              community-led anti-scam research, education, and responsible disruption work by
              connecting scambaiters, security researchers, technologists, and victim-support
              advocates.
            </p>
            <a
              href={event.orgUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-mono text-xs text-green hover:underline focus:outline-none"
            >
              gcaslabs.org ↗
            </a>
          </Card>

          <EthicsPanel />
        </div>
      </div>

      <section className="mt-16">
        <SectionHeader eyebrow="Values" title="Community principles" />
        <div className="grid gap-[3px] border-[3px] border-panel-2 bg-panel-2 sm:grid-cols-2">
          {values.map((value, i) => (
            <div key={value} className="flex items-start gap-4 bg-panel p-6 transition hover:bg-panel-2">
              <span className="font-mono text-xs text-green">{String(i + 1).padStart(2, '0')}</span>
              <p className="font-semibold text-paper">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <Card>
          <p className="text-base leading-7 text-paper-dim">
            Scambaiting should be framed as education, research, awareness, and responsible
            disruption. We emphasize protecting victims, reducing harm, and sharing knowledge — not
            glorifying harassment, vigilantism, illegal access, malware, doxxing, or revenge
            hacking.
          </p>
        </Card>
      </section>
    </PageShell>
  );
}
