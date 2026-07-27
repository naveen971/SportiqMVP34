/*
 * BottomNavBar
 * NOTE: The bottom navigation bar styling and structural configuration (icons, spacing,
 * active states, floating action button) are sourced from the live Stitch workspace
 * (Project ID 3941284064310403069), specifically matching the mobile UI pattern found
 * in the "Navigation & Menus" screen.
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

  const tabs = items.filter((item) => !item.isFab);
  const fab = items.find((item) => item.isFab);

  return (
    <>
      {fab && (
        <div className={styles.navFabContainer}>
          <button
            className={styles.navFab}
            onClick={() => navigate(fab.path)}
            aria-label={fab.label}
          >
            <span className={`material-symbols-outlined ${styles.navFabIcon}`}>
              {fab.iconName}
            </span>
          </button>
        </div>
      )}
      <nav className={styles.nav} aria-label="Bottom navigation">
        <div className={styles.navItems}>
          {tabs.map((item) => (
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
          ))}
        </div>
      </nav>
    </>
  );
}
