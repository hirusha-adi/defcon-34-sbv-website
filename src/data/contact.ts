import { forms } from './forms';

export const contactCards = [
  {
    title: 'Speak at the village',
    description: 'Questions about the CFP, talk formats, or submission process.',
    cta: 'Speaker / CFP questions',
    href: forms.speakerSubmission,
  },
  {
    title: 'Sponsor the village',
    description: 'Learn how your organization can support anti-scam education at DEF CON.',
    cta: 'Sponsor inquiries',
    href: forms.sponsorInquiry,
  },
  {
    title: 'Press / media',
    description: 'Interview requests, press kits, and media coordination.',
    cta: 'Press inquiries',
    href: forms.pressInquiry,
  },
  {
    title: 'Volunteer with ops',
    description: 'Help run village operations, signage, recordings, and community support.',
    cta: 'Volunteer interest',
    href: forms.volunteerInterest,
  },
  {
    title: 'General inquiries',
    description: 'Anything else about ScamBait Village @ DEF CON 34.',
    cta: 'General contact',
    href: forms.generalInquiry,
  },
  {
    title: 'Community collaboration',
    description: 'Partner with the village on education, research, or outreach.',
    cta: 'Collaboration',
    href: forms.generalInquiry,
  },
] as const;
