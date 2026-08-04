import { useState } from 'react';
import { forms } from '../data/forms';
import { event } from '../data/event';
import { scheduleDays, scheduleFilters, ongoingSessions, type SessionType } from '../data/schedule';
import { PageShell } from '../components/PageShell';
import { SectionHeader } from '../components/SectionHeader';
import { SubsectionHeader } from '../components/SubsectionHeader';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { FilterChip } from '../components/FilterChip';
import { TerminalPanel } from '../components/TerminalPanel';

const scheduleTerminalLines = [
  'scambait-village@defcon34:~$ ./schedule --status',
  'schedule.status=confirmed',
  'sessions=2_talks_1_workshop_1_game',
  `hall.hours=${event.hallHours}`,
  'timezone=America/Los_Angeles',
];

export function Schedule() {
  const [activeFilter, setActiveFilter] = useState<SessionType>('All');

  return (
    <PageShell grid>
      <SectionHeader
        as="h1"
        eyebrow="Schedule"
        title="Schedule"
        description={`The line-up is confirmed. Hall hours: ${event.hallHours}.`}
      />

      <TerminalPanel lines={scheduleTerminalLines} className="mb-16" />

      <section className="mb-16">
        <SubsectionHeader title="Running all three days" />
        <div className="grid gap-4 sm:grid-cols-2">
          {ongoingSessions.map((item) => (
            <Card key={item.title}>
              <h3 className="font-mono text-sm font-bold text-green">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-paper-dim">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <SubsectionHeader title="Filter by type" description="Narrow the day cards below to one session type." />
        <div className="flex flex-wrap gap-2" role="group" aria-label="Session filters">
          {scheduleFilters.map((filter) => (
            <FilterChip
              key={filter}
              label={filter}
              active={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            />
          ))}
        </div>
      </section>

      <section>
        <SubsectionHeader title="Village days" />
        <div className="grid gap-4 lg:grid-cols-3">
          {scheduleDays.map((day) => {
            const sessions = day.sessions.filter(
              (s) => activeFilter === 'All' || s.type === activeFilter,
            );
            return (
              <Card key={day.day} className="flex flex-col">
                <Badge tone="green" className="mb-3">
                  Confirmed
                </Badge>
                <h3 className="font-mono text-sm text-green">{day.day}</h3>
                <p className="font-mono text-xs text-paper-dim">
                  {day.date} · {day.hours}
                </p>
                <ul className="mt-4 flex-1 space-y-4 border-t-[3px] border-panel-2 pt-4">
                  {sessions.length === 0 && (
                    <li className="font-mono text-[11px] text-paper-dim/80">
                      No {activeFilter.toLowerCase()} sessions this day.
                    </li>
                  )}
                  {sessions.map((s) => (
                    <li key={s.title}>
                      <p className="font-mono text-[11px] text-paper-dim">{s.time}</p>
                      <p className="mt-1 text-sm font-bold text-paper">{s.title}</p>
                      {s.speaker && (
                        <p className="font-mono text-[11px] text-yellow">{s.speaker}</p>
                      )}
                      <p className="mt-1 text-sm leading-6 text-paper-dim">{s.description}</p>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </section>

      <div className="mt-12 flex flex-wrap gap-4">
        <Button href={forms.speakerSubmission}>Submit a Talk</Button>
        <Button href="/speakers" variant="secondary">
          Meet the speakers
        </Button>
      </div>
    </PageShell>
  );
}
