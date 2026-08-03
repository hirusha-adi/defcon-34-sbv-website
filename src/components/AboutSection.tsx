import { activityLog, missionDirective, villagePillars } from '../data/about';
import { ContentSection } from './ContentSection';
import { SectionHeader } from './SectionHeader';
import { Card } from './Card';

type Accent = 'paper' | 'coral' | 'green' | 'yellow';

const accentText: Record<Accent, string> = {
  paper: 'text-paper',
  coral: 'text-coral',
  green: 'text-green',
  yellow: 'text-yellow',
};

const accentBorder: Record<Accent, string> = {
  paper: 'border-l-paper',
  coral: 'border-l-coral',
  green: 'border-l-green',
  yellow: 'border-l-yellow',
};

const accentBg: Record<Accent, string> = {
  paper: 'bg-paper',
  coral: 'bg-coral',
  green: 'bg-green',
  yellow: 'bg-yellow',
};

export function AboutSection() {
  return (
    <ContentSection>
      <SectionHeader
        eyebrow="About"
        title="About the Village"
        description="Built for the people fighting scams from the keyboard up."
      />

      <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
        <Card className="flex flex-col lg:p-8">
          <div className="flex items-center gap-2 border-b-[3px] border-panel-2 pb-4">
            <span className="h-2 w-2 shrink-0 bg-coral" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-coral">
              {missionDirective.label}
            </span>
          </div>
          <p className="mt-5 text-base leading-7 text-paper-dim">{missionDirective.body}</p>

          <p className="mt-6 font-mono text-xs text-yellow">
            Replace this with approved GCAS Labs mission copy before production launch.
          </p>
        </Card>

        <div className="flex flex-col gap-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {villagePillars.map((pillar) => (
              <div
                key={pillar.title}
                className={`border-[3px] border-l-[6px] border-panel-2 bg-panel p-5 shadow-pix ${accentBorder[pillar.accent]}`}
              >
                <h3 className={`font-display text-sm leading-relaxed ${accentText[pillar.accent]}`}>
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-paper-dim">{pillar.description}</p>
              </div>
            ))}
          </div>

          <Card>
            <div className="mb-5 flex items-center gap-2 border-b-[3px] border-panel-2 pb-4">
              <span className="h-3 w-3 border-2 border-paper-dim" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-paper-dim">
                Activity log
              </span>
            </div>
            <ul className="space-y-5">
              {activityLog.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className={`mt-1 h-2 w-2 shrink-0 ${accentBg[item.accent]}`} aria-hidden="true" />
                  <div>
                    <p className={`text-sm font-bold ${accentText[item.accent]}`}>{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-paper-dim">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </ContentSection>
  );
}
