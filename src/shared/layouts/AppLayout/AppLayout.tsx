import type { ReactNode } from 'react';
import { useAuth } from '@core/auth/AuthProvider';
import { UserRole } from '@core/auth/types';
import { BottomNavBar } from '@shared/navigation/BottomNav';
import { AICoachWidget } from '@shared/components/AICoachWidget';
import { AthleteTopBar } from '@shared/components/AthleteTopBar';
import styles from './AppLayout.module.css';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const { user } = useAuth();
  const isAthlete = user?.role === UserRole.Athlete;

  return (
    <div className={`${styles.layout} ${isAthlete ? styles.layoutTopNav : ''}`}>
      {isAthlete && <AthleteTopBar />}
      {children}
      <BottomNavBar />
      {isAthlete && <AICoachWidget />}
    </div>
  );
}

