import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../core/auth/AuthProvider';
import { ROUTES } from '../../../../routing/routes';
import styles from './SplashScreen.module.css';

export function SplashScreen() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isAuthenticated) {
        navigate(ROUTES.HOME);
      } else {
        navigate(ROUTES.WELCOME);
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [isAuthenticated, navigate]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.logoContainer}>
          <div className={styles.glowEffect}></div>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUa4Z3rL-97NHfHaL4jD1PLi96IC1obZJgajDwrh6Gs14WwDzgWXQBa7R7HhNFMp0rwJSykded-IB870wUZPaoeEqbEKW3bdB0NLRI9evFnJY_pSE7yh9hVjBoQRS6j2_J79QC4ZGBYPIYB3WVGt3RIJ_w6pkKb6jg2w2OhSgKJ0tX5W-_3Zu5_7WNU412cY81ynFjXVNzMokS1rUyy8VBTMSAWPg6PfK3qDS0nUmUykO7OgYw19DustUDzK7P8HiewaJliBczwUQ"
            alt="SportIQ Logo"
            className={styles.logo}
          />
        </div>
        <div className={styles.typography}>
          <h1 className={styles.title}>SportIQ</h1>
          <p className={styles.subtitle}>Prove Your Standard</p>
        </div>
        <div className={styles.loadingContainer}>
          <div className={styles.progressBar}>
            <div className={styles.progressFill}></div>
          </div>
        </div>
      </main>
    </div>
  );
}
