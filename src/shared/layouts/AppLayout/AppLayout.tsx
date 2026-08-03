import type { ReactNode } from 'react';
import { useAuth } from '@core/auth/AuthProvider';
import { UserRole } from '@core/auth/types';
import { BottomNavBar } from '@shared/navigation/BottomNav';
import { AICoachWidget } from '@shared/components/AICoachWidget';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@routing/routes';
import styles from './AppLayout.module.css';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const { user } = useAuth();
  const isAthlete = user?.role === UserRole.Athlete;
  const navigate = useNavigate();

  return (
    <div className={styles.layout}>
      {isAthlete && (
        <button 
          className={styles.athleteProfileIcon} 
          onClick={() => navigate(ROUTES.PROFILE)}
          aria-label="Profile"
        >
          <span className="material-symbols-outlined">person</span>
        </button>
      )}
      {children}
      <BottomNavBar />
      {isAthlete && <AICoachWidget />}
    </div>
  );
}
