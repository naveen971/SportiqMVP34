import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@routing/routes';
import styles from './AthleteTopBar.module.css';

export function AthleteTopBar() {
  const navigate = useNavigate();

  return (
    <header className={styles.topBar}>
      <div className={styles.left}>
        <span className={styles.wordmark}>SportIQ</span>
      </div>
      <div className={styles.right}>
        <button className={styles.iconButton} aria-label="Search" type="button">
          <span className="material-symbols-outlined">search</span>
        </button>
        <button 
          className={styles.iconButton} 
          onClick={() => navigate(ROUTES.PROFILE)} 
          aria-label="Profile"
          type="button"
        >
          <span className="material-symbols-outlined">person</span>
        </button>
      </div>
    </header>
  );
}
