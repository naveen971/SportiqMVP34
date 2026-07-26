export interface StatCardData {
  id: string;
  label: string;
  value: string | number;
  iconName: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
}

export interface ActivityItem {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  iconName?: string;
  initials?: string;
}

export interface EventItem {
  id: string;
  title: string;
  location: string;
  timestamp: string;
  status?: string;
  attendees?: number;
}
