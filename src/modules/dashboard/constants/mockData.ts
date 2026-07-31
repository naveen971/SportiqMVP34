import { StatCardData, ActivityItem, EventItem } from '../types';

export const ATHLETE_MOCK_DATA = {
  impactScore: 94.2,
  districtRank: 12,
  stateRank: 45,
  consistency: 'A+',
  weeklyProgress: 85,
  stats: [
    { id: '1', label: 'Training Sessions', value: 12, iconName: 'fitness_center' },
    { id: '2', label: 'Matches Played', value: 45, iconName: 'sports_soccer' },
    { id: '3', label: 'Win Rate', value: '68%', iconName: 'emoji_events' },
    { id: '4', label: 'Win Streak', value: 5, iconName: 'local_fire_department' },
  ] as StatCardData[],
  upcomingTraining: {
    title: 'Elite Drills',
    coach: 'Sarah J.',
    time: '09:00 AM',
    location: 'Olympic Stadium'
  },
  achievements: [
    { id: '1', title: 'District MVP', date: 'Awarded Oct 2023', iconName: 'workspace_premium' },
    { id: '2', title: 'State Selection', date: 'Qualified Nov 2023', iconName: 'military_tech' }
  ]
};

export const COACH_MOCK_DATA = {
  stats: [
    { id: '1', label: 'Total Athletes', value: 24, iconName: 'groups', trend: { value: '+2 this week', isPositive: true } },
    { id: '2', label: 'Today\'s Sessions', value: 3, iconName: 'event' },
    { id: '3', label: 'Upcoming Events', value: 2, iconName: 'calendar_month' },
    { id: '4', label: 'Pending Reviews', value: 5, iconName: 'assignment_late' }
  ] as StatCardData[],
  schedule: [
    { id: '1', title: 'U-18 Tactical Session', time: '14:00', location: 'Main Pitch', iconName: 'sports_soccer' },
    { id: '2', title: 'Strength & Conditioning', time: '16:00', location: 'Gym B', iconName: 'fitness_center' },
    { id: '3', title: 'Video Analysis', time: '18:30', location: 'Media Room', iconName: 'smart_display' }
  ],
  activities: [
    { id: '1', title: 'Marcus Johnson', description: 'Completed Sprint Drills Level 3 with a new personal best of 4.2s.', timestamp: '10m ago', initials: 'MJ' },
    { id: '2', title: 'Sarah Jenkins', description: 'Uploaded a new video analysis for review: "Form Check - Free Kicks".', timestamp: '1h ago', initials: 'SJ' },
    { id: '3', title: 'Elena Rodriguez', description: 'Logged a recovery session. Readiness score increased to 85%.', timestamp: '3h ago', initials: 'ER' }
  ] as ActivityItem[]
};

export const ORGANISER_MOCK_DATA = {
  stats: [
    { id: '1', label: 'Total Athletes', value: '1,240', iconName: 'groups', trend: { value: '+12% this month', isPositive: true } },
    { id: '2', label: 'Active Teams', value: 42, iconName: 'account_tree' },
    { id: '3', label: 'Upcoming Events', value: 8, iconName: 'event' },
    { id: '4', label: 'Tournaments', value: 3, iconName: 'emoji_events' },
    { id: '5', label: 'Pending Reg', value: 15, iconName: 'assignment_late' }
  ] as StatCardData[],
  upcomingEvents: [
    { id: '1', title: 'Regional Qualifiers', timestamp: 'Oct 24 • 10:00 AM', location: 'Main Stadium', attendees: 4 },
    { id: '2', title: 'Academy Trials', timestamp: 'Oct 26 • 14:30 PM', location: 'Training Pitch B', attendees: 45 }
  ] as EventItem[],
  tournaments: [
    { id: '1', title: 'National Summer League', status: 'Live', description: 'Week 4 of 10', iconName: 'emoji_events' },
    { id: '2', title: 'U-18 Regional Cup', status: 'Scheduled', description: 'Starts in 2 days', iconName: 'sports_soccer' }
  ],
  activities: [
    { id: '1', title: 'New Registration Pending', description: 'John Doe applied for Academy Trials.', timestamp: '10 min ago' },
    { id: '2', title: 'Tournament Result Submitted', description: 'Eagles vs Lions match score updated by Coach Smith.', timestamp: '2 hrs ago' },
    { id: '3', title: 'Announcement Published', description: '"Updated guidelines for summer league" sent to all coaches.', timestamp: 'Yesterday, 14:00' },
    { id: '4', title: 'System Alert', description: 'Venue \'Main Stadium\' booking conflict detected.', timestamp: 'Yesterday, 09:30' }
  ] as ActivityItem[]
};

export const GOVERNMENT_MOCK_DATA = {
  stats: [
    { id: '1', label: 'Total Registered Athletes', value: '1.2M', iconName: 'groups', trend: { value: '+5%', isPositive: true } },
    { id: '2', label: 'Verified Coaches', value: '45k', iconName: 'sports' },
    { id: '3', label: 'Organizations', value: '12k', iconName: 'corporate_fare' },
    { id: '4', label: 'Active Events', value: '3.2k', iconName: 'event' }
  ] as StatCardData[],
  topSports: [
    { id: '1', name: 'Football', count: '450k' },
    { id: '2', name: 'Athletics', count: '320k' },
    { id: '3', name: 'Basketball', count: '210k' }
  ],
  activities: [
    { id: '1', title: 'National Championship Scheduled', description: 'Athletics Federation finalized dates for Q3 events.', timestamp: '2 hours ago' },
    { id: '2', title: 'New Coaching Certification Batch', description: '500 new coaches certified in District 4.', timestamp: '5 hours ago' },
    { id: '3', title: 'System Maintenance', description: 'Database optimized for regional search queries.', timestamp: '1 day ago' }
  ] as ActivityItem[]
};
