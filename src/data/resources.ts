export interface ResourceCard {
  title: string;
  description: string;
  href: string;
}

export interface ResourceGroup {
  title: string;
  cards: ResourceCard[];
}

export const resourceGroups: ResourceGroup[] = [
  {
    title: 'Learn how scams work',
    cards: [
      {
        title: 'Common scam patterns',
        description: 'Overview of recurring fraud tactics and how they evolve.',
        href: '#',
      },
      {
        title: 'Social engineering red flags',
        description: 'Recognize pressure, urgency, and impersonation before harm occurs.',
        href: '#',
      },
      {
        title: 'Remote-access scam anatomy',
        description: 'How remote-access fraud unfolds and what victims experience.',
        href: '#',
      },
      {
        title: 'AI voice and deepfake scam awareness',
        description: 'Emerging voice-clone and synthetic media threats in fraud.',
        href: '#',
      },
    ],
  },
  {
    title: 'Report scams',
    cards: [
      {
        title: 'Report phone numbers',
        description: 'Channels and practices for reporting abusive phone numbers.',
        href: '#',
      },
      {
        title: 'Report malicious domains',
        description: 'How to flag phishing and fraud domains responsibly.',
        href: '#',
      },
      {
        title: 'Report payment abuse',
        description: 'Document and report fraudulent payment activity.',
        href: '#',
      },
      {
        title: 'Preserve evidence safely',
        description: 'Collect and store scam evidence without putting yourself at risk.',
        href: '#',
      },
    ],
  },
  {
    title: 'Community safety',
    cards: [
      {
        title: 'Scambaiting safety checklist',
        description: 'Boundaries and precautions for responsible anti-scam work.',
        href: '#',
      },
      {
        title: 'OSINT ethics',
        description: 'Ethical frameworks for open-source intelligence in anti-scam research.',
        href: '#',
      },
      {
        title: 'Victim-first communication',
        description: 'How to talk to a potential scam victim with empathy and clarity.',
        href: '#',
      },
      {
        title: 'Legal boundaries',
        description: 'Stay on the right side of law and platform policies.',
        href: '#',
      },
    ],
  },
  {
    title: 'Tools and templates',
    cards: [
      {
        title: 'Scam call notes template',
        description: 'Structured notes for documenting scam interactions.',
        href: '#',
      },
      {
        title: 'Domain/phone report checklist',
        description: 'Step-by-step checklist for reporting abuse indicators.',
        href: '#',
      },
      {
        title: 'Awareness slide deck placeholder',
        description: 'Community education materials — coming soon.',
        href: '#',
      },
      {
        title: 'Community tooling index placeholder',
        description: 'Directory of anti-scam tools — coming soon.',
        href: '#',
      },
    ],
  },
];

export const homeHypeCards = [
  {
    title: 'Talks',
    description: 'Research, field stories, and fraud trend intelligence from the front line.',
    index: '01',
  },
  {
    title: 'Workshops',
    description: 'Hands-on sessions on scam recognition, defense, and community tooling.',
    index: '02',
  },
  {
    title: 'Live Demos',
    description: 'Responsible demonstrations of scam patterns and defensive countermeasures.',
    index: '03',
  },
  {
    title: 'Scam Awareness',
    description: 'Public education on how scams work and how to avoid them.',
    index: '04',
  },
  {
    title: 'Community Tools',
    description: 'Dashboards, automation, reporting pipelines, and shared tooling.',
    index: '05',
  },
  {
    title: 'Victim-Safety Education',
    description: 'Intervention, support, and harm-reduction for real people.',
    index: '06',
  },
] as const;

export const signalBoard = [
  { label: 'CFP', value: 'Opening Soon' },
  { label: 'Schedule', value: 'Coming Soon' },
  { label: 'Sponsors', value: 'AnyDesk + more TBA' },
  { label: 'Village Ops', value: 'August 2026' },
] as const;
