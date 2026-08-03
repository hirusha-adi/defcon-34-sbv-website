export const scheduleDays = [
  { day: 'Thursday', date: 'August 6', shortDate: 'AUG 06', status: 'Kickoff / setup awareness TBA' },
  { day: 'Friday', date: 'August 7', shortDate: 'AUG 07', status: 'Talks, demos, and community sessions TBA' },
  { day: 'Saturday', date: 'August 8', shortDate: 'AUG 08', status: 'Workshops, panels, and live demos TBA' },
  { day: 'Sunday', date: 'August 9', shortDate: 'AUG 09', status: 'Wrap-up and community action TBA' },
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
