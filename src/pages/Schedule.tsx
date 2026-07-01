import { useState } from 'react';
import { forms } from '../data/forms';
import { scheduleDays, scheduleFilters, placeholderSlots } from '../data/schedule';
import { PageShell } from '../components/PageShell';
import { SectionHeader } from '../components/SectionHeader';
import { SubsectionHeader } from '../components/SubsectionHeader';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { FilterChip } from '../components/FilterChip';
import { TerminalPanel } from '../components/TerminalPanel';

const scheduleTerminalLines = [
  'scambait-village@defcon34:~$ ./compile_schedule',
  'schedule.build=in_progress',
  'speaker.queue=receiving_submissions',
  'room.assignment=pending',
  'publish.target=before_DEF_CON_34',
];

export function Schedule() {
  const [activeFilter, setActiveFilter] = useState(0);

  return (
    <PageShell grid>
      <SectionHeader
        as="h1"
        eyebrow="Schedule"
        title="Schedule"
        description="Talks, workshops, panels, and live demos are being assembled. Full village programming will be published once confirmed."
      />

      <TerminalPanel lines={scheduleTerminalLines} className="mb-16" />

      <section className="mb-16">
        <SubsectionHeader title="Filter by type" description="Filters will be enabled once the schedule is published." />
        <div className="flex flex-wrap gap-2" role="group" aria-label="Session filters">
          {scheduleFilters.map((filter, i) => (
            <FilterChip
              key={filter}
              label={filter}
              active={activeFilter === i}
              onClick={() => setActiveFilter(i)}
            />
          ))}
        </div>
      </section>

      <section>
        <SubsectionHeader title="Village days" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {scheduleDays.map((day) => (
            <Card key={day.day}>
              <Badge variant="warning" className="mb-3">
                TBA
              </Badge>
              <h3 className="font-mono text-sm text-village-green">{day.day}</h3>
              <p className="font-mono text-xs text-village-muted">{day.date}</p>
              <p className="mt-3 text-sm leading-6 text-village-muted">{day.status}</p>
              <ul className="mt-4 space-y-2 border-t border-village-border pt-4">
                {placeholderSlots.map((slot, i) => (
                  <li key={i} className="font-mono text-[11px] text-village-muted/80">
                    {slot.slot} · {slot.speaker}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <div className="mt-12 flex flex-wrap gap-4">
        <Button href={forms.speakerSubmission}>Submit a Talk</Button>
        <Button href="/speakers" variant="secondary">
          CFP details
        </Button>
      </div>
    </PageShell>
  );
}
