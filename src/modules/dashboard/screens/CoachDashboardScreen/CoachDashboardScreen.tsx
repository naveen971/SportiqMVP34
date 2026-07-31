import styles from './CoachDashboardScreen.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { COACH_MOCK_DATA } from '../../constants/mockData';
import { DashboardSectionHeader } from '../../components/DashboardSectionHeader/DashboardSectionHeader';
import { DashboardStatCard } from '../../components/DashboardStatCard/DashboardStatCard';
import { DashboardQuickActionButton } from '../../components/DashboardQuickActionButton/DashboardQuickActionButton';
import { ROUTES } from '../../../../routing/routes';
import { getTotalAthletesCount } from '../../services/athleteSearchService';

export function CoachDashboardScreen() {
  const navigate = useNavigate();
  const [totalAthletes, setTotalAthletes] = useState<number | null>(null);

  useEffect(() => {
    getTotalAthletesCount()
      .then(setTotalAthletes)
      .catch(() => {
        // Fallback handled in UI
      });
  }, []);

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <p className={styles.subtitle}>SportIQ Elite Performance Academy</p>
        <h1 className={styles.greeting}>Morning, Coach Anderson</h1>
        <p className={styles.description}>Here is your academy overview for today.</p>
        <button className={styles.newSessionBtn}>
          <span className={`material-symbols-outlined ${styles.btnIcon}`}>add</span>
          New Session
        </button>
      </header>

      {/* KPI Grid */}
      <section className={styles.section}>
        <div className={styles.statsGrid}>
          {COACH_MOCK_DATA.stats.map(stat => {
            if (stat.id === '1') {
              return (
                <DashboardStatCard 
                  key={stat.id} 
                  data={{
                    ...stat,
                    value: totalAthletes !== null ? totalAthletes : '-'
                  }} 
                />
              );
            }
            return <DashboardStatCard key={stat.id} data={stat} />;
          })}
        </div>
      </section>

      {/* Quick Actions */}
      <section className={styles.quickActionsSection}>
        <h3 className={styles.quickActionsTitle}>Quick Actions</h3>
        <div className={styles.quickActionsRow}>
          <DashboardQuickActionButton iconName="fitness_center" label="Assign Training" onClick={() => navigate(ROUTES.ASSIGN_TRAINING)} />
          <DashboardQuickActionButton iconName="group" label="View Athletes" onClick={() => navigate(ROUTES.MY_ATHLETES)} />
          <DashboardQuickActionButton iconName="campaign" label="Announcement" onClick={() => navigate(ROUTES.ANNOUNCEMENTS)} />
          <DashboardQuickActionButton iconName="chat" label="Message" onClick={() => navigate(ROUTES.MESSAGES)} />
        </div>
      </section>

      {/* Schedule */}
      <section className={styles.section}>
        <DashboardSectionHeader title="Today's Schedule" actionText="View All" />
        <div className={styles.scheduleList}>
          {COACH_MOCK_DATA.schedule.map(item => (
            <div key={item.id} className={styles.scheduleItem}>
              <div className={styles.scheduleTime}>{item.time}</div>
              <div className={styles.scheduleLine}>
                <div className={styles.scheduleDot}></div>
                <div className={styles.scheduleTrail}></div>
              </div>
              <div className={styles.scheduleContent}>
                <h3 className={styles.scheduleTitle}>{item.title}</h3>
                <div className={styles.scheduleLocation}>
                  <span className={`material-symbols-outlined ${styles.locationIcon}`}>{item.iconName || 'location_on'}</span>
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Activity */}
      <section className={styles.section}>
        <DashboardSectionHeader title="Recent Activity" />
        <div className={styles.activityList}>
          {COACH_MOCK_DATA.activities.map(activity => (
            <div key={activity.id} className={styles.activityItem}>
              <div className={styles.activityAvatar}>{activity.initials}</div>
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
    </div>
  );
}
