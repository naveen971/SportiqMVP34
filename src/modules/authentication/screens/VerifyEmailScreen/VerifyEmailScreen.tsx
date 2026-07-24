import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ROUTES } from '../../../../routing/routes';
import styles from './VerifyEmailScreen.module.css';

export function VerifyEmailScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || 'player@sportiq.com';

  const handleOpenEmail = () => {
    // MOCK: Simulating verifying via email link
    console.log('Simulating opening email app and verifying...');
    // In a real app this opens the mail client, and the user returns via deep link.
    // We mock the successful verification flow by navigating to LOGIN after a delay.
    setTimeout(() => {
      navigate(ROUTES.LOGIN);
    }, 1000);
  };

  const handleResend = () => {
    // MOCK: Simulating resend action
    console.log(`Simulating resending email to ${email}`);
  };

  return (
    <div className={styles.container}>
      {/* Background Decoration */}
      <div className={styles.backgroundDecorations}>
        <div className={styles.decorCircleTop}></div>
        <div className={styles.decorCircleBottom}></div>
      </div>

      <main className={styles.mainContent}>
        {/* Brand Area */}
        <div className={styles.brandArea}>
          <h1 className={styles.brandTitle}>SportIQ</h1>
        </div>

        {/* Verification Card */}
        <div className={styles.card}>
          {/* Icon with Animation */}
          <div className={styles.iconContainer}>
            <div className={styles.pulseRing}></div>
            <div className={styles.pulseCore}></div>
            <span className={`material-symbols-outlined ${styles.icon}`} style={{ fontVariationSettings: "'FILL' 1" }}>
              mail
            </span>
          </div>

          {/* Typography */}
          <h2 className={styles.title}>Check Your Email</h2>
          <p className={styles.subtitle}>
            We've sent a verification link to <strong className={styles.highlightEmail}>{email}</strong>. Please click it to continue.
          </p>

          {/* Actions */}
          <div className={styles.actionGroup}>
            <button type="button" className={styles.primaryBtn} onClick={handleOpenEmail}>
              Open Email App
            </button>
            <button type="button" className={styles.ghostBtn} onClick={handleResend}>
              Resend Link
            </button>
          </div>

          {/* Contextual Return */}
          <div className={styles.returnGroup}>
            <button 
              type="button" 
              className={styles.returnBtn} 
              onClick={() => navigate(ROUTES.LOGIN)}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_back</span>
              Return to login
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
