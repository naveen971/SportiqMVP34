import { UserRole } from '../auth/types';
import type { NavigationConfig } from './types';

export const navigationByRole: Record<UserRole, NavigationConfig> = {
  [UserRole.Athlete]: {
    items: [
      { label: 'Home',     path: '/',          iconName: 'home'       },
      { label: 'Search',   path: '/search',    iconName: 'search'     },
      { label: 'Create',   path: '/create',    iconName: 'add',       isFab: true },
      { label: 'Messages', path: '/messages',  iconName: 'chat'       },
      { label: 'Profile',  path: '/profile',   iconName: 'person'     },
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
      { label: 'Dashboard',     path: '/',              iconName: 'dashboard'     },
      { label: 'Analytics',     path: '/analytics',     iconName: 'bar_chart'     },
      { label: 'Search',        path: '/search',        iconName: 'search'        },
      { label: 'Notifications', path: '/notifications', iconName: 'notifications' },
      { label: 'Profile',       path: '/profile',       iconName: 'person'        },
    ],
  },
};
