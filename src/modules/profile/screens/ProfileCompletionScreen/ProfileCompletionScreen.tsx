import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../core/auth/AuthProvider';
import { ROUTES } from '../../../../routing/routes';
import { completeOnboarding } from '../../services/profileService';
import styles from './ProfileCompletionScreen.module.css';

type ScreenState = 'loading' | 'success' | 'error';

const CONFETTI_COLORS = ['#00B87A', '#4CDF9D', '#006C46'];
const CONFETTI_COUNT = 30;

export function ProfileCompletionScreen() {
  const navigate = useNavigate();
  const { user, refreshProfile } = useAuth();
  const [screenState, setScreenState] = useState<ScreenState>('loading');
  const [errorMessage, setErrorMessage] = useState('');
  const [progressWidth, setProgressWidth] = useState('0%');
  const hasRun = useRef(false);

  useEffect(() => {
    if (!user) {
      navigate(ROUTES.LOGIN);
      return;
    }
    // Guard against StrictMode double-invoke
    if (hasRun.current) return;
    hasRun.current = true;

    (async () => {
      try {
        await completeOnboarding(user.id);
        await refreshProfile();
        setScreenState('success');
        // Animate progress bar to 100% after success renders
        setTimeout(() => setProgressWidth('100%'), 300);
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : 'An unexpected error occurred.';
        setErrorMessage(msg);
        setScreenState('error');
      }
    })();
  }, [user, navigate]);

  const handleRetry = () => {
    hasRun.current = false;
    setScreenState('loading');
    setErrorMessage('');
    setProgressWidth('0%');
    // Re-trigger by toggling — simplest approach is re-mount via navigation
    navigate(ROUTES.PROFILE_COMPLETION, { replace: true });
  };

  // ── Loading state ──────────────────────────────────────────────────────────
  if (screenState === 'loading') {
    return (
      <div className={styles.container}>
        <div className={styles.loadingState}>
          <div className={styles.spinner}></div>
          <p className={styles.loadingText}>Saving your profile…</p>
        </div>
      </div>
    );
  }

  // ── Error state ────────────────────────────────────────────────────────────
  if (screenState === 'error') {
    return (
      <div className={styles.container}>
        <div className={styles.errorState}>
          <div className={styles.errorCard}>
            <span className={`material-symbols-outlined ${styles.errorIcon}`}>error</span>
            <h1 className={styles.errorTitle}>Could Not Save Profile</h1>
            <p className={styles.errorMessage}>
              {errorMessage}
              {errorMessage.includes('column') && (
                <><br /><br />The database migration (005_add_personal_and_playing_info.sql) may not yet be applied. Please contact the operator.</>
              )}
            </p>
          </div>
          <button className={styles.retryBtn} onClick={handleRetry} type="button">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // ── Success state ──────────────────────────────────────────────────────────
  return (
    <div className={styles.container}>
      {/* Confetti layer — purely decorative, aria-hidden */}
      <div className={styles.confettiLayer} aria-hidden="true">
        {Array.from({ length: CONFETTI_COUNT }).map((_, i) => (
          <div
            key={i}
            className={styles.confettiPiece}
            style={{
              left: `${Math.random() * 100}vw`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              backgroundColor: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      <main className={styles.main}>
        {/* Brand */}
        <h1 className={styles.brand}>SportIQ</h1>

        {/* Progress indicator */}
        <div className={styles.progressSection}>
          <div className={styles.progressLabels}>
            <span className={styles.setupLabel}>Setup Complete</span>
            <span className={styles.percentLabel}>100%</span>
          </div>
          <div className={styles.progressBarTrack}>
            <div className={styles.progressBarFill} style={{ width: progressWidth }} />
          </div>
        </div>

        {/* Success card */}
        <div className={styles.successCard}>
          <div className={styles.cardGlow} />

          <div className={styles.badgeWrapper}>
            <div className={styles.pulseRing} />
            <div className={styles.pulseRingInner} />
            <div className={styles.badge}>
              {/* font-variation-settings applied inline — only use for Material Symbols FILL axis, no CSS token equivalent */}
              <span
                className={`material-symbols-outlined ${styles.badgeIcon}`}
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
            </div>
          </div>

          <h2 className={styles.successTitle}>Your Professional Profile is Ready</h2>
          <p className={styles.successBody}>
            You are now equipped with the tools to manage stats, track progress, and build your network on SportIQ.
          </p>
        </div>

        {/* Actions */}
        <div className={styles.actions}>
          {/* "Preview Profile" → own profile, not the HELD Profile Preview screen */}
          <button
            type="button"
            className={styles.primaryBtn}
            onClick={() => navigate(ROUTES.PROFILE)}
          >
            Preview Profile
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
          <button
            type="button"
            className={styles.secondaryBtn}
            onClick={() => navigate(ROUTES.HOME)}
          >
            Go to Dashboard
          </button>
        </div>
      </main>
    </div>
  );
}
