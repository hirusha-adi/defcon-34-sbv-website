import { useEffect, useState } from 'react';
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
  { key: 'days', label: 'days' },
  { key: 'hours', label: 'hrs' },
  { key: 'minutes', label: 'min' },
  { key: 'seconds', label: 'sec' },
] as const;

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
    <aside
      className={`border-[3px] border-paper bg-panel p-5 shadow-pix ${className}`}
      aria-live="polite"
      aria-atomic="true"
    >
      {time.live ? (
        <p className="text-center font-display text-sm text-green">We&apos;re live</p>
      ) : (
        <>
          <div className="grid grid-cols-4 gap-2">
            {units.map(({ key, label }) => (
              <div key={key} className="text-center">
                <div className="font-display text-xl leading-8 text-yellow">
                  {String(time[key]).padStart(2, '0')}
                </div>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-paper-dim">
                  {label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center font-mono text-xs text-paper-dim">
            Time until the village opens
          </p>
        </>
      )}
    </aside>
  );
}
