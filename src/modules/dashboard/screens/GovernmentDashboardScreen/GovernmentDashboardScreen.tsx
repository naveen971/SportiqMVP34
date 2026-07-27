import styles from './GovernmentDashboardScreen.module.css';
import { GOVERNMENT_MOCK_DATA } from '../../constants/mockData';
import { useNavigate } from 'react-router-dom';
import { DashboardSectionHeader } from '../../components/DashboardSectionHeader/DashboardSectionHeader';
import { DashboardStatCard } from '../../components/DashboardStatCard/DashboardStatCard';
import { DashboardQuickActionButton } from '../../components/DashboardQuickActionButton/DashboardQuickActionButton';
import { ROUTES } from '../../../../routing/routes';
import { useState, useEffect } from 'react';
import { getGovernmentAnalytics, DashboardAnalytics } from '../../services/analyticsService';

export function GovernmentDashboardScreen() {
  const navigate = useNavigate();
  const [analytics, setAnalytics] = useState<DashboardAnalytics | null>(null);

  useEffect(() => {
    getGovernmentAnalytics().then(setAnalytics).catch(console.error);
  }, []);

  const stats = [
    { id: '1', label: 'Total Registered Athletes', value: analytics ? analytics.totalAthletes.toString() : '-', iconName: 'groups' },
    { id: '2', label: 'Verified Coaches', value: analytics ? analytics.totalCoaches.toString() : '-', iconName: 'sports' },
    { id: '3', label: 'Organizations', value: analytics ? analytics.totalOrganisers.toString() : '-', iconName: 'corporate_fare' },
    { id: '4', label: 'Active Events', value: analytics ? analytics.totalEvents.toString() : '-', iconName: 'event' }
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.greeting}>Director General</h1>
        <p className={styles.description}>Sports Authority • Jurisdiction: National</p>
      </header>

      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {stats.map(stat => (
            <DashboardStatCard key={stat.id} data={stat as any} />
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
        <DashboardSectionHeader title="Athletes by District" actionText="View Full" />
        <div className={styles.chartCard}>
          <div className={styles.chartContainer}>
            <div className={styles.chartBars}>
              {analytics?.athletesByDistrict.slice(0, 4).map((district, idx) => {
                const maxCount = Math.max(...analytics.athletesByDistrict.map(d => d.count), 1);
                const heightPercent = Math.max((district.count / maxCount) * 100, 10);
                return (
                  <div key={idx} className={styles.chartBarCol}>
                    <div className={styles.chartBar} style={{ height: `${heightPercent}%` }}></div>
                    <span className={styles.chartXLabel}>{district.name}</span>
                  </div>
                );
              })}
              {(!analytics || analytics.athletesByDistrict.length === 0) && (
                <div style={{ alignSelf: 'center', color: 'var(--color-neutral-500)', fontSize: '14px', width: '100%', textAlign: 'center' }}>
                  No district data available
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <DashboardSectionHeader title="Top Sports" actionText="View All" />
        <div className={styles.sportsList}>
          {analytics?.athletesBySport.map((sport, index) => (
            <div key={sport.name} className={styles.sportItem}>
              <div className={styles.sportRank}>{index + 1}</div>
              <div className={styles.sportContent}>
                <span className={styles.sportName}>{sport.name}</span>
                <span className={styles.sportCount}>{sport.count} Athletes</span>
              </div>
            </div>
          ))}
          {(!analytics || analytics.athletesBySport.length === 0) && (
            <div style={{ padding: 'var(--spacing-4)', color: 'var(--color-neutral-500)', textAlign: 'center', fontSize: '14px' }}>
              No sports data available
            </div>
          )}
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
