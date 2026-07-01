import { activityLog, missionDirective, villagePillars } from '../data/villageAbout';
import { ContentSection } from './ContentSection';
import { SectionHeader } from './SectionHeader';
import { Card } from './Card';

const accentTitle: Record<string, string> = {
  cyan: 'text-village-cyan',
  pink: 'text-village-danger',
  green: 'text-village-green',
  amber: 'text-village-warning',
  white: 'text-village-text',
};

const accentBorder: Record<string, string> = {
  cyan: 'border-l-village-cyan',
  pink: 'border-l-village-danger',
  green: 'border-l-village-green',
  amber: 'border-l-village-warning',
};

function MissionIcon() {
  return (
    <svg className="h-4 w-4 text-village-danger" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function PillarWatermark({ icon }: { icon: string }) {
  const cls = 'absolute bottom-3 right-3 h-16 w-16 text-village-text/[0.06]';
  switch (icon) {
    case 'shield':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />
        </svg>
      );
    case 'heart':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 21s-7-4.5-9.5-9C1 8 3 5 6.5 5 9 5 11 6.5 12 8c1-1.5 3-3 5.5-3 3.5 0 5.5 3 3.5 7C19 16.5 12 21 12 21z" />
        </svg>
      );
    case 'tools':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M14.7 6.3a4 4 0 00-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 005.4-5.4l-2.1 2.1-3.3-3.3 2.1-2.1z" />
        </svg>
      );
    default:
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <circle cx="9" cy="8" r="3" />
          <circle cx="17" cy="10" r="2.5" />
          <path d="M2 20c0-3 3.5-5 7-5s7 2 7 5" />
          <path d="M14 20c0-2 2-3.5 4-3.5" opacity="0.6" />
        </svg>
      );
  }
}

function ActivityIcon({ icon }: { icon: string }) {
  const cls = 'h-5 w-5 shrink-0';
  switch (icon) {
    case 'mic':
      return (
        <svg className={`${cls} text-village-text`} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="9" y="3" width="6" height="10" rx="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M5 11a7 7 0 0014 0M12 18v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'laptop':
      return (
        <svg className={`${cls} text-village-danger`} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="4" y="5" width="16" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M2 17h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg className={`${cls} text-village-green`} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <path d="M12 2a10 10 0 000 20M4.5 7.5h15M4.5 16.5h15" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
  }
}

function DashboardPreview() {
  return (
    <div className="mt-6 flex min-h-[200px] flex-1 flex-col overflow-hidden rounded-2xl border border-village-border bg-village-bg/80">
      <div className="grid flex-1 grid-cols-3 gap-2 p-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex flex-col rounded-xl border border-village-border/60 bg-village-soft p-2">
            <div className="mb-2 h-1 w-8 shrink-0 rounded bg-village-border" />
            <div className="flex min-h-[72px] flex-1 items-end gap-0.5">
              {[40, 65, 30, 80, 55, 70, 45, 90].map((h, j) => (
                <div
                  key={j}
                  className="flex-1 rounded-sm bg-village-border-strong/40"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-village-border/60 px-3 py-3">
        <div className="mb-2 flex gap-1">
          {[...Array(32)].map((_, i) => (
            <div
              key={i}
              className="h-8 flex-1 rounded-sm bg-village-border/25"
              style={{ opacity: 0.35 + (i % 7) * 0.08 }}
            />
          ))}
        </div>
        <div className="flex gap-1">
          {[...Array(24)].map((_, i) => (
            <div
              key={i}
              className="h-2 flex-1 rounded-sm bg-village-border/30"
              style={{ opacity: 0.4 + (i % 5) * 0.1 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function VillageAboutSection() {
  return (
    <ContentSection>
      <div className="relative">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="relative">
          <SectionHeader
            eyebrow="About"
            title="About the Village"
            description="Built for the people fighting scams from the keyboard up."
          />

          <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
            <Card className="flex flex-col lg:min-h-full lg:p-8">
              <div className="flex shrink-0 items-center gap-2 border-b border-village-border pb-4">
                <MissionIcon />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-village-danger">
                  {missionDirective.label}
                </span>
              </div>
              <p className="mt-5 shrink-0 text-base leading-7 text-village-muted">
                {missionDirective.body}
              </p>
              <DashboardPreview />
            </Card>

            <div className="flex flex-col gap-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {villagePillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className={`relative overflow-hidden rounded-2xl border border-village-border border-l-4 bg-village-surface/80 p-5 shadow-panel ${accentBorder[pillar.accent]}`}
                  >
                    <PillarWatermark icon={pillar.icon} />
                    <h3
                      className={`relative text-base font-bold ${
                        pillar.title === 'Ethical Research'
                          ? 'text-village-text'
                          : accentTitle[pillar.accent]
                      }`}
                    >
                      {pillar.title}
                    </h3>
                    <p className="relative mt-2 text-sm leading-6 text-village-muted">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>

              <Card>
                <div className="mb-5 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-sm border border-village-text/60" aria-hidden="true" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-village-muted">
                    Activity log
                  </span>
                </div>
                <ul className="space-y-5">
                  {activityLog.map((item) => (
                    <li key={item.title} className="flex gap-4">
                      <ActivityIcon icon={item.icon} />
                      <div>
                        <p className={`text-sm font-semibold ${accentTitle[item.accent]}`}>
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-village-muted">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </ContentSection>
  );
}
