import { ATHLETE_MOCK_DATA } from '../../constants/mockData';
import styles from './AthleteDashboardScreen.module.css';

export function AthleteDashboardScreen() {
  return (
    <main className={styles.container}>
      {/* Header Section */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <h1 className={styles.greeting}>Good Morning, Arjun</h1>
          <span className={styles.sportBadge}>FOOTBALL</span>
        </div>
        <div className={styles.headerRight}>
          <button className={styles.iconButton} aria-label="Notifications">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className={styles.iconButton} aria-label="Settings">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </header>

      {/* Impact Score Section */}
      <section className={styles.impactCard}>
        <div className={styles.impactHeader}>
          <span className={styles.impactLabel}>Impact Score</span>
          <div className={styles.impactTrend}>
            <span className={`material-symbols-outlined ${styles.trendIcon}`}>trending_up</span>
            <span className={styles.trendValue}>+8%</span>
          </div>
        </div>
        
        <div className={styles.impactMain}>
          <span className={styles.impactScoreValue}>{ATHLETE_MOCK_DATA.impactScore}</span>
        </div>

        <div className={styles.impactRanksGrid}>
          <div className={styles.rankItem}>
            <span className={styles.rankLabel}>District Rank</span>
            <span className={styles.rankValue}>#{ATHLETE_MOCK_DATA.districtRank}</span>
          </div>
          <div className={styles.rankItem}>
            <span className={styles.rankLabel}>State Rank</span>
            <span className={styles.rankValue}>#{ATHLETE_MOCK_DATA.stateRank}</span>
          </div>
          <div className={styles.rankItem}>
            <span className={styles.rankLabel}>Consistency</span>
            <span className={styles.rankValue}>{ATHLETE_MOCK_DATA.consistency}</span>
          </div>
        </div>

        <div className={styles.progressSection}>
          <div className={styles.progressHeader}>
            <span className={styles.progressLabel}>Weekly Progress</span>
            <span className={styles.progressValue}>{ATHLETE_MOCK_DATA.weeklyProgress}%</span>
          </div>
          <div className={styles.progressBarBg}>
            <div 
              className={styles.progressBarFill} 
              style={{ width: `${ATHLETE_MOCK_DATA.weeklyProgress}%` }}
            />
          </div>
        </div>
      </section>

      {/* KPI Grid Section */}
      <section className={styles.kpiGrid}>
        {ATHLETE_MOCK_DATA.stats.map(stat => (
          <div key={stat.id} className={styles.kpiCard}>
            <span className={`material-symbols-outlined ${styles.kpiIcon}`}>{stat.iconName}</span>
            <span className={styles.kpiValue}>{stat.value}</span>
            <span className={styles.kpiLabel}>{stat.label}</span>
          </div>
        ))}
      </section>

      {/* Upcoming Training Section */}
      <section className={styles.upcomingSection}>
        <h2 className={styles.sectionTitle}>Upcoming Training</h2>
        <div className={styles.upcomingCard}>
          <div className={styles.upcomingHeader}>
            <h3 className={styles.upcomingTitle}>{ATHLETE_MOCK_DATA.upcomingTraining.title}</h3>
            <div className={styles.coachInfo}>
              <span className={`material-symbols-outlined ${styles.coachIcon}`}>person</span>
              <span className={styles.coachName}>Coach: {ATHLETE_MOCK_DATA.upcomingTraining.coach}</span>
            </div>
          </div>
          <div className={styles.upcomingDetails}>
            <div className={styles.detailItem}>
              <span className={`material-symbols-outlined ${styles.detailIcon}`}>schedule</span>
              <span>{ATHLETE_MOCK_DATA.upcomingTraining.time}</span>
            </div>
            <div className={styles.detailItem}>
              <span className={`material-symbols-outlined ${styles.detailIcon}`}>location_on</span>
              <span>{ATHLETE_MOCK_DATA.upcomingTraining.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Achievements Section */}
      <section className={styles.achievementsSection}>
        <h2 className={styles.sectionTitle}>Recent Achievements</h2>
        <div className={styles.achievementsCard}>
          {ATHLETE_MOCK_DATA.achievements.map(ach => (
            <div key={ach.id} className={styles.achievementItem}>
              <div className={styles.achievementIconWrapper}>
                <span className={`material-symbols-outlined ${styles.achievementIcon}`}>{ach.iconName}</span>
              </div>
              <div className={styles.achievementText}>
                <span className={styles.achievementTitle}>{ach.title}</span>
                <span className={styles.achievementDate}>{ach.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Performance Assessment Promo */}
      <section className={styles.aiPromoCard}>
        <div className={styles.aiPromoContent}>
          <div className={styles.aiPromoHeader}>
            <span className={`material-symbols-outlined ${styles.aiIcon}`}>psychology</span>
            <h3 className={styles.aiPromoTitle}>AI Performance Assessment</h3>
          </div>
          <p className={styles.aiPromoDesc}>
            Upload recent match footage for advanced biomechanical analysis.
          </p>
        </div>
        <div className={styles.comingSoonBadge}>Coming Soon</div>
      </section>
    </main>
  );
}
