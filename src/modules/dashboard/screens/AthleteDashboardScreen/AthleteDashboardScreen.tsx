import styles from './AthleteDashboardScreen.module.css';
import { ATHLETE_MOCK_DATA } from '../../constants/mockData';
import { DashboardSectionHeader } from '../../components/DashboardSectionHeader/DashboardSectionHeader';
import { DashboardStatCard } from '../../components/DashboardStatCard/DashboardStatCard';

export function AthleteDashboardScreen() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.greeting}>Good Morning, Arjun</h1>
        <p className={styles.subtitle}>FOOTBALL</p>
      </header>

      <div className={styles.impactCard}>
        <div className={styles.impactHeader}>
          <span className={styles.impactTitle}>Impact Score</span>
          <span className={styles.impactValue}>{ATHLETE_MOCK_DATA.impactScore}</span>
        </div>
        <div className={styles.rankGrid}>
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
      </div>

      <div className={styles.kpiGrid}>
        {ATHLETE_MOCK_DATA.stats.map(stat => (
          <DashboardStatCard key={stat.id} data={stat} />
        ))}
      </div>

      <section className={styles.section}>
        <DashboardSectionHeader title="Upcoming Training" />
        <div className={styles.trainingCard}>
          <div className={styles.trainingHeader}>
            <h3 className={styles.trainingTitle}>{ATHLETE_MOCK_DATA.upcomingTraining.title}</h3>
            <span className={styles.trainingCoach}>Coach: {ATHLETE_MOCK_DATA.upcomingTraining.coach}</span>
          </div>
          <div className={styles.trainingDetails}>
            <div className={styles.trainingDetail}>
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>schedule</span>
              <span>{ATHLETE_MOCK_DATA.upcomingTraining.time}</span>
            </div>
            <div className={styles.trainingDetail}>
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>location_on</span>
              <span>{ATHLETE_MOCK_DATA.upcomingTraining.location}</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <DashboardSectionHeader title="Recent Achievements" actionText="View All" />
        <div className={styles.achievementsList}>
          {ATHLETE_MOCK_DATA.achievements.map(ach => (
            <div key={ach.id} className={styles.achievementItem}>
              <div className={styles.achievementIcon}>
                <span className="material-symbols-outlined">{ach.iconName}</span>
              </div>
              <div className={styles.achievementContent}>
                <span className={styles.achievementTitle}>{ach.title}</span>
                <span className={styles.achievementDate}>{ach.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.safeBottom}></div>
    </div>
  );
}
