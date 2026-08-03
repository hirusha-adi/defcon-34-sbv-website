export const villagePillars = [
  {
    title: 'Ethical Research',
    description:
      'Systemic disruption through responsible analysis, documentation, and field intelligence.',
    accent: 'paper' as const,
    icon: 'shield',
  },
  {
    title: 'Victim-First',
    description:
      'Prioritizing recovery, education, and harm reduction for real people over spectacle.',
    accent: 'coral' as const,
    icon: 'heart',
  },
  {
    title: 'Practical Tooling',
    description:
      'Open-source solutions and shared infrastructure for the anti-scam community.',
    accent: 'green' as const,
    icon: 'tools',
  },
  {
    title: 'Community Action',
    description:
      'A united front in infosec, bringing together researchers, defenders, and educators.',
    accent: 'yellow' as const,
    icon: 'people',
  },
] as const;

export const activityLog = [
  {
    title: 'Talks & Presentations',
    description: 'Deep dives into fraud trends, OSINT, and defensive countermeasures.',
    accent: 'paper' as const,
    icon: 'mic',
  },
  {
    title: 'Hands-on Workshops',
    description: 'Interactive sessions on scam recognition, tooling, and safety workflows.',
    accent: 'coral' as const,
    icon: 'laptop',
  },
  {
    title: 'Live Demonstrations',
    description: 'Responsible demos of scam patterns and community-built defenses.',
    accent: 'green' as const,
    icon: 'broadcast',
  },
] as const;

export const missionDirective = {
  label: 'Mission Directive',
  body: 'GCAS Labs supports community-led anti-scam research, education, and responsible disruption work by connecting scambaiters, security researchers, technologists, and victim-support advocates.',
};

export const values = [
  'Protect victims first',
  'Teach, do not sensationalize',
  'Share defensive knowledge',
  'Respect consent and legality',
  'Build tools responsibly',
  'Make anti-scam work accessible',
] as const;
