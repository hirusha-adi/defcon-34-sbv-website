export const confirmedSpeakers = [
  {
    name: 'DolphinVG',
    pronouns: 'she/her',
    role: 'Speaker',
    talkTitle: "Scammers Don't Discriminate",
    time: 'Saturday, August 8 · 12:30 – 14:00',
    description:
      'A look at how scammers target younger people through gaming, crypto, romance, and job scams, with real cases and practical ways to build resilience.',
    links: [] as { label: string; href: string }[],
  },
  {
    name: 'RinoaPoison',
    pronouns: 'she/her',
    role: 'Twitch streamer & content creator',
    talkTitle: 'Creator Talk with RinoaPoison & VanHelen',
    time: 'Saturday, August 8 · 14:00 – 15:30',
    description:
      'A behind-the-scenes conversation on live scambaiting, character work, and growing an audience across Twitch and YouTube.',
    links: [{ label: 'twitch.tv/rinoapoison', href: 'https://twitch.tv/rinoapoison' }],
  },
  {
    name: 'VanHelen',
    pronouns: 'she/her',
    role: 'Twitch streamer & content creator',
    talkTitle: 'Creator Talk with RinoaPoison & VanHelen',
    time: 'Saturday, August 8 · 14:00 – 15:30',
    description:
      'Joins RinoaPoison to share lessons on running live calls safely while building a content practice around scambaiting.',
    links: [] as { label: string; href: string }[],
  },
] as const;

export const submissionTypes = [
  { name: 'Talk', description: '30–45 minute presentation on research, tooling, or field lessons.' },
  { name: 'Workshop', description: 'Hands-on session with practical exercises and guided discussion.' },
  { name: 'Live Demo', description: 'Responsible demonstration of scam patterns or defensive techniques.' },
  { name: 'Panel', description: 'Multi-speaker discussion on a shared anti-scam topic.' },
  { name: 'Lightning Talk', description: 'Short, punchy presentation on a focused subject.' },
] as const;

export const cfpTopics = [
  'Scam intelligence and fraud trend research',
  'Ethical scambaiting workflows',
  'Victim-safety and intervention stories',
  'OSINT-for-good',
  'Telecom abuse, caller ID spoofing, SMS scams, and robocalls',
  'Remote-access scam education',
  'Social engineering defense',
  'AI-generated scams and AI-assisted defense',
  'Tooling, automation, dashboards, and reporting pipelines',
  'Community operations and volunteer coordination',
  'Legal, ethical, and safety lessons',
] as const;

export const cfpNotAFit = [
  'Illegal hacking walkthroughs',
  'Malware deployment',
  'Doxxing',
  'Revenge content',
  'Vendor pitch disguised as research',
  'Live targeting of real people without consent/legal basis',
] as const;

export const expectedFormFields = [
  'Speaker name / handle',
  'Email',
  'Organization/community affiliation (optional)',
  'Talk title',
  'Talk type: talk, workshop, live demo, panel, lightning talk',
  'Abstract',
  'Audience level',
  'Safety/legal notes',
  'Prior presentation links (optional)',
  'A/V needs',
  'Consent to be contacted',
] as const;
