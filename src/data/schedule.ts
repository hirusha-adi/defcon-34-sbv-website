export const scheduleDays = [
  {
    day: 'Thursday',
    date: 'August 6',
    status: 'Kickoff / setup awareness TBA',
  },
  {
    day: 'Friday',
    date: 'August 7',
    status: 'Talks, demos, and community sessions TBA',
  },
  {
    day: 'Saturday',
    date: 'August 8',
    status: 'Workshops, panels, and live demos TBA',
  },
  {
    day: 'Sunday',
    date: 'August 9',
    status: 'Wrap-up and community action TBA',
  },
] as const;

export const scheduleFilters = [
  'Talks',
  'Workshops',
  'Live Demos',
  'Panels',
  'Beginner Friendly',
  'Advanced',
] as const;

export const placeholderSlots = [
  { slot: 'slot.pending', speaker: 'speaker.tba', room: 'room.tba' },
  { slot: 'slot.pending', speaker: 'speaker.tba', room: 'room.tba' },
  { slot: 'slot.pending', speaker: 'speaker.tba', room: 'room.tba' },
] as const;
