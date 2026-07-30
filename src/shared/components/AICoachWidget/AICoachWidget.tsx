import { useState } from 'react';
import styles from './AICoachWidget.module.css';

export function AICoachWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.widgetContainer}>
      {/* Floating Action Button */}
      <button 
        className={styles.fab} 
        onClick={togglePanel}
        aria-label="Toggle AI Coach"
      >
        <span className="material-symbols-outlined">smart_toy</span>
      </button>

      {/* Pop-up Panel */}
      {isOpen && (
        <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <div className={styles.headerLeft}>
              <span className="material-symbols-outlined">smart_toy</span>
              <h2 className={styles.panelTitle}>AI Coach</h2>
            </div>
            <span className={styles.badge}>Coming Soon</span>
          </div>

          <div className={styles.panelContent}>
            <p className={styles.disclaimer}>
              This is a static demo. AI features are not yet functional.
            </p>

            <section className={styles.tierSection}>
              <h3 className={styles.tierTitle}>Free</h3>
              <ul className={styles.featureList}>
                <li>Ask Questions</li>
                <li>Basic Training Tips</li>
                <li>Nutrition Advice</li>
                <li>Tournament Suggestions</li>
              </ul>
            </section>

            <section className={styles.tierSection}>
              <h3 className={styles.tierTitle}>
                <span className={`material-symbols-outlined ${styles.premiumIcon}`}>star</span>
                Premium
              </h3>
              <ul className={styles.featureList}>
                <li>Personal AI Coach</li>
                <li>Weekly Training Plan</li>
                <li>Performance Analysis</li>
                <li>Goal Tracking</li>
                <li>Injury Prevention</li>
                <li>Career Guidance</li>
              </ul>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}
