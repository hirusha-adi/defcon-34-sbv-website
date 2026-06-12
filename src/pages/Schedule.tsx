import { scheduleDays, scheduleFilters, placeholderSlots } from '../data/schedule';
import { Card } from '../components/Card';
import { SectionHeader } from '../components/SectionHeader';
import { TerminalPanel } from '../components/TerminalPanel';
import { Badge } from '../components/Badge';

const scheduleTerminal = [
  'schedule.build=in_progress',
  'speaker.queue=receiving_submissions',
  'room.assignment=pending',
  'publish.target=before_DEF_CON_34',
];

export function Schedule() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Schedule"
          title="Schedule"
          description="Talks, workshops, panels, and live demos are being assembled. Full village programming will be published once confirmed."
        />

        <TerminalPanel lines={[...scheduleTerminal]} className="mb-12 max-w-2xl" />

        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Schedule filters (coming soon)">
          {scheduleFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              disabled
              className="cursor-not-allowed rounded-full border border-village-border bg-village-soft px-3 py-1 font-mono text-xs text-village-muted opacity-70"
              aria-disabled="true"
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {scheduleDays.map((day) => (
            <Card key={day.day}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-village-text">{day.day}</h3>
                  <p className="font-mono text-sm text-village-muted">{day.date}</p>
                </div>
                <Badge variant="warning">TBA</Badge>
              </div>
              <p className="mt-4 text-sm text-village-muted">{day.status}</p>

              <div className="mt-6 space-y-2 border-t border-village-border pt-4">
                {placeholderSlots.map((slot, i) => (
                  <div
                    key={i}
                    className="flex flex-wrap items-center gap-3 rounded-lg border border-village-border/60 bg-village-bg/50 px-3 py-2 font-mono text-xs"
                  >
                    <span className="text-village-warning">{slot.slot}</span>
                    <span className="text-village-muted">·</span>
                    <span className="text-village-muted">{slot.speaker}</span>
                    <span className="text-village-muted">·</span>
                    <span className="text-village-muted">{slot.room}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
