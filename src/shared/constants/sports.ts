export interface Sport {
  id: string;
  name: string;
  icon: string;
}

export const SPORTS_LIST: Sport[] = [
  { id: 'football', name: 'Football', icon: 'sports_soccer' },
  { id: 'basketball', name: 'Basketball', icon: 'sports_basketball' },
  { id: 'tennis', name: 'Tennis', icon: 'sports_tennis' },
  { id: 'athletics', name: 'Athletics', icon: 'sprint' },
  { id: 'swimming', name: 'Swimming', icon: 'pool' },
  { id: 'gymnastics', name: 'Gymnastics', icon: 'sports_gymnastics' },
  { id: 'golf', name: 'Golf', icon: 'sports_golf' },
  { id: 'volleyball', name: 'Volleyball', icon: 'sports_volleyball' },
];
