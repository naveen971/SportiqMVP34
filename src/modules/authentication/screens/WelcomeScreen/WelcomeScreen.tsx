import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../../routing/routes';
import styles from './WelcomeScreen.module.css';

export function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <main className={styles.mainContent}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroBackground}>
            <img 
              className={styles.heroImage} 
              alt="A striking, high-contrast, professional sports image showing an elite athlete's cleats mid-stride on a perfectly manicured pitch, illuminated by bright stadium lights." 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaz6AaGIX2sE0xn7Ryi7_4bd_QrDBWF5gJ3_A_mOfHLFLbDJLjwcxzQ1ih7CZ6NJDZBiGG0Typ2Pb6suhr27KaFMz31VOtaxBxA19cUV4_kw4Yyt14xNJxVOjn0VsTp95FjEqPuav2IMnfp4E4YShIFK85daZq42R8Dcq9UdwzsymxQmhNS5O2S88BtOim0CQW08MtcprE5aJ61d662mTHtBAjYxW2-8Nsy9SRL_Ql8rI73cMcuNWCgBS8dInQiiRqF4GHeZNpy3g" 
            />
            {/* Gradient Overlay for smooth transition to content */}
            <div className={styles.gradientOverlay}></div>
          </div>
        </section>

        {/* Content Section */}
        <section className={styles.contentSection}>
          <div className={styles.contentWrapper}>
            {/* Logo & Tagline */}
            <div className={styles.header}>
              <img 
                alt="SportIQ Logo" 
                className={styles.logo} 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUa4Z3rL-97NHfHaL4jD1PLi96IC1obZJgajDwrh6Gs14WwDzgWXQBa7R7HhNFMp0rwJSykded-IB870wUZPaoeEqbEKW3bdB0NLRI9evFnJY_pSE7yh9hVjBoQRS6j2_J79QC4ZGBYPIYB3WVGt3RIJ_w6pkKb6jg2w2OhSgKJ0tX5W-_3Zu5_7WNU412cY81ynFjXVNzMokS1rUyy8VBTMSAWPg6PfK3qDS0nUmUykO7OgYw19DustUDzK7P8HiewaJliBczwUQ" 
              />
              <h1 className={styles.title}>SportIQ</h1>
              <p className={styles.subtitle}>Prove Your Standard</p>
            </div>

            {/* Actions */}
            <div className={styles.actions}>
              <button 
                type="button" 
                className={styles.primaryBtn}
                onClick={() => navigate(ROUTES.SIGNUP)}
              >
                Get Started
              </button>
              
              <button 
                type="button" 
                className={styles.secondaryBtn}
                onClick={() => navigate(ROUTES.LOGIN)}
              >
                Sign In
              </button>
              
              <button 
                type="button" 
                className={styles.ghostBtn}
                onClick={() => navigate(ROUTES.HOME)}
              >
                Explore as Guest
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
