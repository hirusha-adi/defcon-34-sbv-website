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
