export const scheduleFilters = ['All', 'Talk', 'Panel', 'Workshop', 'Live Demo', 'Game', 'Meetup'] as const;

export type SessionType = (typeof scheduleFilters)[number];

export interface ScheduleSession {
  time: string;
  title: string;
  type: Exclude<SessionType, 'All'>;
  speaker?: string;
  description: string;
}

export interface ScheduleDay {
  day: string;
  date: string;
  hours: string;
  sessions: ScheduleSession[];
}

export const ongoingSessions = [
  {
    title: 'Open Q&A',
    description: 'Village volunteers are on hand at the booth all weekend for drop-in questions.',
  },
  {
    title: 'KSCM Scambait Radio',
    description: 'Prerecorded scambait calls loop in a Discord voice channel across all three days — bring earbuds.',
  },
] as const;

export const scheduleDays: ScheduleDay[] = [
  {
    day: 'Friday',
    date: 'August 7',
    hours: '10:00 – 18:00',
    sessions: [
      {
        time: '11:30 – 14:00',
        title: 'Live Calls Workshop',
        type: 'Workshop',
        description: 'An interactive session running live scam calls with the crowd at the booth.',
      },
      {
        time: '14:00 – 18:00',
        title: 'Live Call Listening',
        type: 'Live Demo',
        description: 'Drop in and listen to live scam calls together over Discord voice.',
      },
    ],
  },
  {
    day: 'Saturday',
    date: 'August 8',
    hours: '10:00 – 18:00',
    sessions: [
      {
        time: '12:30 – 14:00',
        title: "Scammers Don't Discriminate",
        type: 'Talk',
        speaker: 'DolphinVG (she/her)',
        description:
          'How scammers target younger audiences through gaming, crypto, romance, and job scams, with real cases and ways to build resilience.',
      },
      {
        time: '14:00 – 15:30',
        title: 'Creator Talk with RinoaPoison & VanHelen',
        type: 'Panel',
        speaker: 'RinoaPoison & VanHelen',
        description:
          'Two scambaiting streamers on live-call craft, character work, and building a content practice around the community.',
      },
      {
        time: '15:30 – 17:00',
        title: 'Creator Drop-In',
        type: 'Meetup',
        description: 'An open window for scambait creators to stop by the booth and meet attendees.',
      },
    ],
  },
  {
    day: 'Sunday',
    date: 'August 9',
    hours: '10:00 – 16:00',
    sessions: [
      {
        time: '10:00 – 14:00',
        title: 'Scambait Bingo',
        type: 'Game',
        description:
          'Mark off scam tactics as they come up in real recorded calls, played live over Discord voice. Prize-free by design — bragging-rights certificates only.',
      },
    ],
  },
];
