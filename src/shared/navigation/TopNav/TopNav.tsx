import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../routing/routes';
import styles from './TopNav.module.css';

interface NavItem {
  label: string;
  path: string;
  iconName: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: ROUTES.HOME, iconName: 'home' },
  { label: 'Tournaments', path: ROUTES.TOURNAMENTS, iconName: 'emoji_events' },
  { label: 'Posts', path: ROUTES.POSTS, iconName: 'dynamic_feed' },
  { label: 'Network', path: ROUTES.NETWORK, iconName: 'group' },
  { label: 'Notifications', path: ROUTES.NOTIFICATIONS, iconName: 'notifications' },
];

export function TopNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  function isActive(itemPath: string): boolean {
    if (itemPath === '/') return location.pathname === '/';
    return location.pathname === itemPath;
  }

  return (
    <header className={styles.topNav}>
      <div className={styles.navContainer}>
        {/* Left: Logo */}
        <div className={styles.logoArea} onClick={() => navigate(ROUTES.HOME)}>
          <h1 className={styles.logoText}>SportIQ</h1>
        </div>

        {/* Center: Search (Visual Only) */}
        <div className={styles.searchContainer}>
          <span className={`material-symbols-outlined ${styles.searchIcon}`}>search</span>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search Players, Coaches, Academies, Tournaments..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Right: Nav Items & Profile */}
        <nav className={styles.navItems} aria-label="Top navigation">
          {NAV_ITEMS.map((item) => (
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

          {/* Profile Divider */}
          <div className={styles.divider} />

          {/* Profile Icon */}
          <button
            className={`${styles.navTab} ${isActive(ROUTES.PROFILE) ? styles.navTabActive : ''}`}
            onClick={() => navigate(ROUTES.PROFILE)}
            aria-label="Profile"
          >
            <span className={`material-symbols-outlined ${styles.navIcon}`}>
              person
            </span>
            <span className={styles.navLabel}>Me</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
