import { useState } from 'react';
import { event } from '../data/event';
import { forms } from '../data/forms';
import { scheduleDays, timelineFilters, placeholderSessions } from '../data/schedule';

export function Schedule() {
  const [activeDay, setActiveDay] = useState(0);
  const [activeFilter, setActiveFilter] = useState(0);

  return (
    <div className="relative py-16 md:py-24">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
          <div>
            <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-village-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-village-green" aria-hidden="true" />
              Status: Active
            </p>
            <h1 className="mt-3 text-4xl font-black uppercase tracking-tight text-village-text md:text-5xl">
              Operational Timeline
            </h1>
            <p className="mt-2 font-mono text-xs text-village-muted">
              &gt; {event.dates.toUpperCase()} // LAS VEGAS // DARK_MODE ENABLED
            </p>

            <div className="mt-8">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-village-muted">
                System_filters:
              </p>
              <div className="flex flex-wrap gap-2" role="group" aria-label="Session filters">
                {timelineFilters.map((filter, i) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(i)}
                    className={`rounded-lg border px-3 py-1.5 font-mono text-xs transition focus:outline-none focus:ring-2 focus:ring-village-green ${
                      activeFilter === i
                        ? 'border-village-text text-village-text'
                        : 'border-village-border text-village-muted hover:border-village-border-strong'
                    }`}
                  >
                    [{filter}]
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex overflow-hidden rounded-xl border border-village-border" role="tablist">
              {scheduleDays.map((day, i) => (
                <button
                  key={day.day}
                  type="button"
                  role="tab"
                  aria-selected={activeDay === i}
                  onClick={() => setActiveDay(i)}
                  className={`min-w-[5rem] flex-1 border-b-2 px-3 py-3 text-left transition first:rounded-tl-xl last:rounded-tr-xl focus:outline-none focus:ring-2 focus:ring-village-green ${
                    activeDay === i
                      ? 'border-b-village-text text-village-text'
                      : 'border-b-transparent text-village-muted hover:text-village-text'
                  }`}
                >
                  <span className="block font-mono text-xs font-bold">DAY_0{i + 1}</span>
                  <span className="mt-0.5 block font-mono text-[10px] opacity-70">{day.shortDate}</span>
                </button>
              ))}
            </div>

            <div className="mt-6 space-y-4" role="tabpanel">
              {placeholderSessions.map((session) => (
                <article
                  key={session.title}
                  className="grid gap-4 rounded-2xl border border-village-border bg-village-surface/60 p-5 shadow-panel sm:grid-cols-[7rem_1fr]"
                >
                  <div>
                    <p className="font-mono text-sm font-bold text-village-text">{session.time}</p>
                    <span className="mt-2 inline-block rounded-md border border-village-border px-2 py-0.5 font-mono text-[10px] text-village-muted">
                      {session.type}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-village-text">{session.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-village-muted">{session.description}</p>
                    <p className="mt-3 flex items-center gap-2 font-mono text-[11px] text-village-danger">
                      <span aria-hidden="true">◎</span>
                      {session.speaker}
                    </p>
                  </div>
                </article>
              ))}

              <article className="relative overflow-hidden rounded-2xl border border-village-border bg-village-surface/40 p-5 shadow-panel">
                <div className="pointer-events-none select-none blur-[2px] opacity-40">
                  <div className="grid gap-4 sm:grid-cols-[7rem_1fr]">
                    <div>
                      <p className="font-mono text-sm text-village-muted">--:--</p>
                      <span className="mt-2 inline-block rounded-md border border-village-border px-2 py-0.5 font-mono text-[10px] text-village-muted">
                        TBA
                      </span>
                    </div>
                    <div>
                      <div className="h-5 w-2/3 rounded bg-village-border/40" />
                      <div className="mt-3 h-3 w-full rounded bg-village-border/25" />
                      <div className="mt-2 h-3 w-4/5 rounded bg-village-border/25" />
                    </div>
                  </div>
                </div>
                <p className="absolute inset-0 flex items-center justify-center font-mono text-sm text-village-muted">
                  [AWAITING_DATA]
                </p>
              </article>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-village-border bg-village-surface/80 p-5 shadow-panel">
              <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-village-muted">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 10v4h4l5 4V6L8 10H4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
                System_alert
              </p>
              <h2 className="mt-4 text-xl font-black uppercase leading-tight text-village-text">
                Call for Papers is open
              </h2>
              <p className="mt-3 text-sm leading-6 text-village-muted">
                Submit your research, tooling, workshops, and field stories. Village programming is
                still being assembled.
              </p>
              <div className="mt-4 space-y-1 font-mono text-[11px] text-village-muted">
                <p>&gt; Deadline: TBA</p>
                <p>&gt; Slots: 45m Talks / 2h Workshops</p>
              </div>
              <a
                href={forms.speakerSubmission}
                className="mt-5 block w-full rounded-xl border border-village-text bg-village-text py-2.5 text-center font-mono text-xs font-bold uppercase text-village-bg transition hover:border-village-green hover:bg-village-green focus:outline-none focus:ring-2 focus:ring-village-green"
              >
                Submit proposal -&gt;
              </a>
            </div>

            <div className="flex min-h-[140px] items-center justify-center rounded-2xl border border-dashed border-village-border p-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-village-muted">
                [Advert_space_unallocated]
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
