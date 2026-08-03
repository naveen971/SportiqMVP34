import { UserRole } from '../auth/types';
import type { NavigationConfig } from './types';
import { ROUTES } from '../../routing/routes';

export const navigationByRole: Record<UserRole, NavigationConfig> = {
  [UserRole.Athlete]: {
    items: [
      { label: 'Home',        path: '/',                  iconName: 'home' },
      { label: 'Tournaments', path: ROUTES.TOURNAMENTS,   iconName: 'emoji_events' },
      { label: 'Create',      path: ROUTES.CREATE,        iconName: 'add', isFab: true },
      { label: 'Network',     path: ROUTES.NETWORK,       iconName: 'group' },
      { label: 'Messages',    path: ROUTES.MESSAGES,      iconName: 'chat' },
    ],
  },
  [UserRole.Coach]: {
    items: [
      { label: 'Dashboard', path: '/',          iconName: 'home'           },
      { label: 'Athletes',  path: '/athletes',  iconName: 'group'          },
      { label: 'Schedule',  path: '/schedule',  iconName: 'calendar_today' },
      { label: 'Messages',  path: '/messages',  iconName: 'chat'           },
      { label: 'Profile',   path: '/profile',   iconName: 'person'         },
    ],
  },
  [UserRole.Organiser]: {
    items: [
      { label: 'Dashboard',   path: '/',            iconName: 'home'         },
      { label: 'Events',      path: '/events',      iconName: 'event'        },
      { label: 'Tournaments', path: '/tournaments', iconName: 'emoji_events' },
      { label: 'Messages',    path: '/messages',    iconName: 'chat'         },
      { label: 'Profile',     path: '/profile',     iconName: 'person'       },
    ],
  },
  [UserRole.Government]: {
    items: [
      { label: 'Dashboard',           path: '/',                    iconName: 'dashboard' },
      { label: 'Athletes',            path: ROUTES.ATHLETE_DIRECTORY, iconName: 'group'     },
      { label: 'Reports & Analytics', path: ROUTES.ANALYTICS,       iconName: 'bar_chart' },
      { label: 'Profile',             path: '/profile',             iconName: 'person'    },
      { label: 'Announcement',        path: ROUTES.ANNOUNCEMENTS,   iconName: 'campaign'  },
    ],
  },
};
