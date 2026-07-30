// STATIC DEMO — Social module not yet built, this is a demo feed for pitch purposes.
import styles from './AthleteDashboardScreen.module.css';

export function AthleteDashboardScreen() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <h1 className={styles.greeting}>SportIQ</h1>
        </div>
      </header>

      <section className={styles.feedSection}>
        {/* Feed Card: Match Result */}
        <article className={styles.feedCard}>
          <div className={styles.cardHeader}>
            <div className={styles.authorInfo}>
              <div className={styles.avatar}>
                <span className="material-symbols-outlined">person</span>
              </div>
              <div className={styles.authorMeta}>
                <h3 className={styles.authorName}>Marcus Vance</h3>
                <p className={styles.authorSubtitle}>Pro Footballer • 2 hrs ago</p>
              </div>
            </div>
            <span className={styles.sportBadge}>
              <span className="material-symbols-outlined">sports_soccer</span> Football
            </span>
          </div>

          <div className={styles.cardContent}>
            <p className={styles.postText}>
              Solid team performance tonight to secure the 3 points away from home. Happy to contribute with a goal and an assist. Onto the next one! ⚽️🔥
            </p>
            <div className={styles.scoreboard}>
              <div className={styles.team}>
                <div className={styles.teamLogo}>AWY</div>
                <span style={{fontSize: 'var(--font-size-xs)'}}>Away FC</span>
              </div>
              <div className={styles.score}>
                <div className={styles.scoreValue}>2 - 1</div>
                <span className={styles.scoreStatus}>FT</span>
              </div>
              <div className={styles.team}>
                <div className={styles.teamLogo}>HME</div>
                <span style={{fontSize: 'var(--font-size-xs)'}}>Home Utd</span>
              </div>
            </div>
            <div className={styles.statsGrid}>
              <div className={styles.statBox}>
                <span className={styles.statValue}>1</span>
                <span className={styles.statLabel}>Goals</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statValue}>1</span>
                <span className={styles.statLabel}>Assists</span>
              </div>
              <div className={styles.statBox}>
                <span className={styles.statValue}>8.4</span>
                <span className={styles.statLabel}>Rating</span>
              </div>
            </div>
          </div>

          <div className={styles.cardActions}>
            <div className={styles.actionGroup}>
              <button className={styles.actionButton}>
                <span className="material-symbols-outlined">thumb_up</span>
                <span>2.4k</span>
              </button>
              <button className={styles.actionButton}>
                <span className="material-symbols-outlined">chat_bubble_outline</span>
                <span>142</span>
              </button>
              <button className={styles.actionButton}>
                <span className="material-symbols-outlined">share</span>
              </button>
            </div>
            <button className={styles.actionButton}>
              <span className="material-symbols-outlined">bookmark_border</span>
            </button>
          </div>
        </article>

        {/* Feed Card: Achievement */}
        <article className={styles.feedCard}>
          <div className={styles.cardHeader}>
            <div className={styles.authorInfo}>
              <div className={styles.avatar}>
                <span className="material-symbols-outlined">person</span>
              </div>
              <div className={styles.authorMeta}>
                <h3 className={styles.authorName}>Sarah Jenkins</h3>
                <p className={styles.authorSubtitle}>Elite Sprint Coach • 5 hrs ago</p>
              </div>
            </div>
          </div>

          <div className={styles.cardContent}>
            <p className={styles.postText}>
              Incredibly honored to receive the National Coaching Excellence Award for 2024. This belongs to all the dedicated athletes I work with every single day. The grind continues!
            </p>
            <div className={styles.achievementVisual}>
              <div className={styles.achievementBadge}>
                <span className="material-symbols-outlined" style={{ fontSize: '32px', color: 'var(--color-primary-500)' }}>workspace_premium</span>
              </div>
              <h4 className={styles.achievementTitle}>Coaching Excellence 2024</h4>
              <p className={styles.achievementSubtitle}>National Athletics Federation</p>
            </div>
          </div>

          <div className={styles.cardActions}>
            <div className={styles.actionGroup}>
              <button className={`${styles.actionButton} ${styles.actionActive}`}>
                <span className="material-symbols-outlined">thumb_up</span>
                <span>892</span>
              </button>
              <button className={styles.actionButton}>
                <span className="material-symbols-outlined">chat_bubble_outline</span>
                <span>56</span>
              </button>
              <button className={styles.actionButton}>
                <span className="material-symbols-outlined">share</span>
              </button>
            </div>
            <button className={styles.actionButton}>
              <span className="material-symbols-outlined">bookmark_border</span>
            </button>
          </div>
        </article>
      </section>
    </div>
  );
}
