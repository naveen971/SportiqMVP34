import type { ReactNode } from 'react';
import { BottomNavBar } from '@shared/navigation/BottomNav';
import styles from './AppLayout.module.css';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className={styles.layout}>
      {children}
      <BottomNavBar />
    </div>
  );
}
