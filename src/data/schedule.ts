export const scheduleDays = [
  { day: 'Thursday', date: 'August 6', shortDate: 'AUG 06', status: 'Kickoff / setup awareness TBA' },
  { day: 'Friday', date: 'August 7', shortDate: 'AUG 07', status: 'Talks, demos, and community sessions TBA' },
  { day: 'Saturday', date: 'August 8', shortDate: 'AUG 08', status: 'Workshops, panels, and live demos TBA' },
  { day: 'Sunday', date: 'August 9', shortDate: 'AUG 09', status: 'Wrap-up and community action TBA' },
] as const;

export const timelineFilters = [
  'ALL_SESSIONS',
  'TALKS',
  'WORKSHOPS',
  'LIVE_DEMOS',
] as const;

export const placeholderSessions = [
  {
    time: '10:00 AM',
    type: 'TALK' as const,
    title: 'Inside Modern Tech Support Scams',
    description:
      'An analysis of the infrastructure, social engineering scripts, and remote-access tools used in modern tech support fraud.',
    speaker: 'TBD // CFP_OPEN',
  },
  {
    time: '01:30 PM',
    type: 'WORKSHOP' as const,
    title: 'Building a Scam Reporting Pipeline',
    description:
      'Hands-on session covering data collection, normalization, and responsible reporting workflows for fraud indicators.',
    speaker: 'TBD // CFP_OPEN',
  },
] as const;

export const placeholderSlots = [
  { slot: 'slot.pending', speaker: 'speaker.tba', room: 'room.tba' },
  { slot: 'slot.pending', speaker: 'speaker.tba', room: 'room.tba' },
  { slot: 'slot.pending', speaker: 'speaker.tba', room: 'room.tba' },
] as const;

export const scheduleFilters = [
  'Talks',
  'Workshops',
  'Live Demos',
  'Panels',
  'Beginner Friendly',
  'Advanced',
] as const;
