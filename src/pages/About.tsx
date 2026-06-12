import { Card } from '../components/Card';
import { SectionHeader } from '../components/SectionHeader';
import { EthicsPanel } from '../components/EthicsPanel';

const values = [
  'Protect victims first',
  'Teach, do not sensationalize',
  'Share defensive knowledge',
  'Respect consent and legality',
  'Build tools responsibly',
  'Make anti-scam work accessible',
];

export function About() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="About"
          title="ScamBait Village"
          description="Where scam awareness, community scambaiting, anti-fraud research, and hacker culture collide."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-village-text">What is ScamBait Village?</h2>
              <p className="mt-4 text-base leading-7 text-village-muted">
                ScamBait Village is a community space for people studying, documenting, disrupting,
                and educating others about scams. The village brings together scambaiters, security
                researchers, OSINT practitioners, telecom defenders, trust &amp; safety teams, and
                educators to share practical lessons from the fight against fraud.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-village-text">Why it matters</h2>
              <p className="mt-4 text-base leading-7 text-village-muted">
                Scams cause real financial and emotional harm. Fraud ecosystems involve phone
                numbers, domains, remote-access tools, payment rails, social engineering scripts, mule
                networks, and platform abuse. Education helps people recognize scams before money or
                credentials are lost.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-village-muted">
                <li className="flex gap-2">
                  <span className="text-village-green" aria-hidden="true">▸</span>
                  Financial and emotional harm to victims worldwide
                </li>
                <li className="flex gap-2">
                  <span className="text-village-green" aria-hidden="true">▸</span>
                  Complex ecosystems spanning telecom, platforms, and payments
                </li>
                <li className="flex gap-2">
                  <span className="text-village-green" aria-hidden="true">▸</span>
                  Education as the first line of defense
                </li>
              </ul>
            </section>
          </div>

          <div className="space-y-8">
            <Card>
              <p className="font-mono text-xs uppercase tracking-widest text-village-cyan">
                GCAS Labs
              </p>
              <p className="mt-4 text-base leading-7 text-village-muted">
                GCAS Labs supports community-led anti-scam research, education, and responsible
                disruption work by connecting scambaiters, security researchers, technologists, and
                victim-support advocates.
              </p>
              <p className="mt-4 font-mono text-xs text-village-warning">
                Replace this with approved GCAS Labs mission copy before production launch.
              </p>
            </Card>

            <EthicsPanel />
          </div>
        </div>

        <section className="mt-16">
          <SectionHeader eyebrow="Values" title="Community principles" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <Card key={value} interactive>
                <p className="font-mono text-sm text-village-green">✓</p>
                <p className="mt-2 font-bold text-village-text">{value}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <Card className="border-village-border-strong">
            <p className="text-base leading-7 text-village-muted">
              Scambaiting should be framed as education, research, awareness, and responsible
              disruption. We emphasize protecting victims, reducing harm, and sharing knowledge — not
              glorifying harassment, vigilantism, illegal access, malware, doxxing, or revenge
              hacking.
            </p>
          </Card>
        </section>
      </div>
    </div>
  );
}
