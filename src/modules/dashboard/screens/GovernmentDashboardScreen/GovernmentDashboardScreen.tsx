import styles from './GovernmentDashboardScreen.module.css';
import { GOVERNMENT_MOCK_DATA } from '../../constants/mockData';
import { useNavigate } from 'react-router-dom';
import { DashboardSectionHeader } from '../../components/DashboardSectionHeader/DashboardSectionHeader';
import { DashboardStatCard } from '../../components/DashboardStatCard/DashboardStatCard';
import { DashboardQuickActionButton } from '../../components/DashboardQuickActionButton/DashboardQuickActionButton';
import { ROUTES } from '../../../../routing/routes';

export function GovernmentDashboardScreen() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.greeting}>Director General</h1>
        <p className={styles.description}>Sports Authority • Jurisdiction: National</p>
      </header>

      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {GOVERNMENT_MOCK_DATA.stats.map(stat => (
            <DashboardStatCard key={stat.id} data={stat} />
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section className={styles.quickActionsSection}>
        <div className={styles.quickActionsGrid}>
          <DashboardQuickActionButton iconName="search" label="Athletes" onClick={() => navigate(ROUTES.ATHLETE_DIRECTORY)} />
          <DashboardQuickActionButton iconName="search" label="Organizations" onClick={() => navigate(ROUTES.ORGANIZATION_DIRECTORY)} />
          <DashboardQuickActionButton iconName="description" label="Report" onClick={() => navigate(ROUTES.REPORTS)} />
          <DashboardQuickActionButton iconName="emoji_events" label="Leaderboards" onClick={() => navigate(ROUTES.LEADERBOARDS)} />
        </div>
      </section>

      <section className={styles.section}>
        <DashboardSectionHeader title="Registration Trend" actionText="View Full" />
        <div className={styles.chartCard}>
          {/* Static CSS-based Bar Chart for Registration Trend */}
          <div className={styles.chartContainer}>
            <div className={styles.chartBars}>
              <div className={styles.chartBarCol}>
                <div className={styles.chartBar} style={{ height: '30%' }}></div>
                <span className={styles.chartXLabel}>Q1</span>
              </div>
              <div className={styles.chartBarCol}>
                <div className={styles.chartBar} style={{ height: '50%' }}></div>
                <span className={styles.chartXLabel}>Q2</span>
              </div>
              <div className={styles.chartBarCol}>
                <div className={styles.chartBar} style={{ height: '70%' }}></div>
                <span className={styles.chartXLabel}>Q3</span>
              </div>
              <div className={styles.chartBarCol}>
                <div className={styles.chartBar} style={{ height: '95%' }}></div>
                <span className={styles.chartXLabel}>Q4</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <DashboardSectionHeader title="Top Sports" actionText="View All" />
        <div className={styles.sportsList}>
          {GOVERNMENT_MOCK_DATA.topSports.map((sport, index) => (
            <div key={sport.id} className={styles.sportItem}>
              <div className={styles.sportRank}>{index + 1}</div>
              <div className={styles.sportContent}>
                <span className={styles.sportName}>{sport.name}</span>
                <span className={styles.sportCount}>{sport.count} Athletes</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <DashboardSectionHeader title="Recent Activity" />
        <div className={styles.activityList}>
          {GOVERNMENT_MOCK_DATA.activities.map(activity => (
            <div key={activity.id} className={styles.activityItem}>
              <div className={styles.activityContent}>
                <div className={styles.activityHeader}>
                  <span className={styles.activityTitle}>{activity.title}</span>
                  <span className={styles.activityTime}>{activity.timestamp}</span>
                </div>
                <p className={styles.activityDesc}>{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.safeBottom}></div>
    </div>
  );
}
