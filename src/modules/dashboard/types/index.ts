export interface StatCardData {
  id: string;
  label: string;
  value: string | number;
  iconName: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  badge?: {
    text: string;
    variant?: 'error' | 'primary';
  };
  isPulse?: boolean;
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

export interface PerformanceData {
  title: string;
  legend: Array<{ label: string; color: string }>;
  yAxis: string[];
  xAxis: string[];
  bars: Array<{ primary: number; secondary: number; primaryLabel: string; secondaryLabel: string }>;
}

export interface QuickActionItem {
  id: string;
  label: string;
  iconName: string;
  route: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
}
