import { useEffect, useRef, useState } from 'react';
import { event } from '../data/event';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  live: boolean;
}

function getTimeLeft(target: number): TimeLeft {
  const diff = target - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, live: true };
  }
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    live: false,
  };
}

const units = [
  { key: 'days', label: 'd' },
  { key: 'hours', label: 'h' },
  { key: 'minutes', label: 'm' },
  { key: 'seconds', label: 's' },
] as const;

function AnimatedUnit({ value, label }: { value: number; label: string }) {
  const formatted = String(value).padStart(2, '0');
  const [current, setCurrent] = useState(formatted);
  const [previous, setPrevious] = useState<string | null>(null);
  const reducedMotion = useRef(
    typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    if (formatted === current) return;

    if (reducedMotion.current) {
      setCurrent(formatted);
      return;
    }

    setPrevious(current);
    setCurrent(formatted);
    const id = window.setTimeout(() => setPrevious(null), 380);
    return () => window.clearTimeout(id);
  }, [formatted, current]);

  return (
    <div className="text-center">
      <div className="relative h-9 overflow-hidden">
        {previous && (
          <span
            key={`out-${previous}`}
            className="countdown-tick-out absolute inset-0 font-mono text-2xl font-black tabular-nums leading-9 text-village-text"
            aria-hidden="true"
          >
            {previous}
          </span>
        )}
        <span
          key={`in-${current}`}
          className={`absolute inset-0 font-mono text-2xl font-black tabular-nums leading-9 text-village-text ${
            previous ? 'countdown-tick-in' : ''
          }`}
        >
          {current}
        </span>
      </div>
      <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-village-muted">{label}</p>
    </div>
  );
}

interface HeroCountdownProps {
  className?: string;
}

export function HeroCountdown({ className = '' }: HeroCountdownProps) {
  const target = new Date(event.startDate).getTime();
  const [time, setTime] = useState<TimeLeft>(() => getTimeLeft(target));

  useEffect(() => {
    const tick = () => setTime(getTimeLeft(target));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [target]);

  return (
    <aside className={`text-center ${className}`} aria-live="polite" aria-atomic="true">
      {time.live ? (
        <p className="font-mono text-sm text-village-green">We&apos;re live</p>
      ) : (
        <>
          <div className="grid grid-cols-4 gap-2">
            {units.map(({ key, label }) => (
              <AnimatedUnit key={key} value={time[key]} label={label} />
            ))}
          </div>
          <p className="mt-4 font-mono text-xs text-village-muted">Time until the village opens</p>
        </>
      )}
    </aside>
  );
}
