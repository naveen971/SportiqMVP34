/*
 * BottomNavBar
 * NOTE: No Stitch screen exists for this component. Built without a Stitch
 * trace per the documented exception precedent established by CreateEventScreen.
 * Reason: the bottom navigation bar is a structural shell component with no
 * equivalent in the SportIQ Stitch project (ID 3941284064310403069).
 */

import { useAuth } from '@core/auth/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { navigationByRole } from '@core/navigation/config';
import type { NavItem } from '@core/navigation/types';
import styles from './BottomNav.module.css';

export function BottomNavBar() {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  if (!user || !user.role) return null;

  const navConfig = navigationByRole[user.role];
  const items: NavItem[] = navConfig.items;

  function isActive(itemPath: string): boolean {
    if (itemPath === '/') return location.pathname === '/';
    return location.pathname === itemPath;
  }

  return (
    <nav className={styles.nav} aria-label="Bottom navigation">
      <div className={styles.navItems}>
        {items.map((item) =>
          item.isFab ? (
            <button
              key={item.label}
              className={styles.navFab}
              onClick={() => navigate(item.path)}
              aria-label={item.label}
            >
              <span className={`material-symbols-outlined ${styles.navFabIcon}`}>
                {item.iconName}
              </span>
            </button>
          ) : (
            <button
              key={item.label}
              className={`${styles.navTab} ${isActive(item.path) ? styles.navTabActive : ''}`}
              onClick={() => navigate(item.path)}
              aria-label={item.label}
              aria-current={isActive(item.path) ? 'page' : undefined}
            >
              <span className={`material-symbols-outlined ${styles.navIcon}`}>
                {item.iconName}
              </span>
              <span className={styles.navLabel}>{item.label}</span>
            </button>
          )
        )}
      </div>
    </nav>
  );
}
