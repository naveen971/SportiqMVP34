import { UserRole } from '../auth/types';
import type { NavigationConfig } from './types';

export const navigationByRole: Record<UserRole, NavigationConfig> = {
  [UserRole.Athlete]: {
    items: [
      { label: 'Home', path: '/' },
      { label: 'Search', path: '/search' },
      { label: 'Create', path: '/create' },
      { label: 'Messages', path: '/messages' },
      { label: 'Profile', path: '/profile' },
    ],
  },
  [UserRole.Coach]: {
    items: [
      { label: 'Dashboard', path: '/' },
      { label: 'Athletes', path: '/athletes' },
      { label: 'Schedule', path: '/schedule' },
      { label: 'Messages', path: '/messages' },
      { label: 'Profile', path: '/profile' },
    ],
  },
  [UserRole.Organiser]: {
    items: [
      { label: 'Dashboard', path: '/' },
      { label: 'Events', path: '/events' },
      { label: 'Academies', path: '/academies' },
      { label: 'Messages', path: '/messages' },
      { label: 'Profile', path: '/profile' },
    ],
  },
  [UserRole.Government]: {
    items: [
      { label: 'Overview', path: '/' },
      { label: 'Analytics', path: '/analytics' },
      { label: 'Reports', path: '/reports' },
      { label: 'Profile', path: '/profile' },
    ],
  },
};
