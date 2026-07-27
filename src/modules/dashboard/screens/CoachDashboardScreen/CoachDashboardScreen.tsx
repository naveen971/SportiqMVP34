import styles from './CoachDashboardScreen.module.css';
import { useNavigate } from 'react-router-dom';
import { COACH_MOCK_DATA } from '../../constants/mockData';
import { DashboardSectionHeader } from '../../components/DashboardSectionHeader/DashboardSectionHeader';
import { DashboardStatCard } from '../../components/DashboardStatCard/DashboardStatCard';
import { DashboardQuickActionButton } from '../../components/DashboardQuickActionButton/DashboardQuickActionButton';
import { ROUTES } from '../../../../routing/routes';

export function CoachDashboardScreen() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <p className={styles.subtitle}>SportIQ Elite Performance Academy</p>
        <h1 className={styles.greeting}>Morning, Coach Anderson</h1>
        <p className={styles.description}>Here is your academy overview for today.</p>
      </header>

      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {COACH_MOCK_DATA.stats.map(stat => (
            <DashboardStatCard key={stat.id} data={stat} />
          ))}
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
                  <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>location_on</span>
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <DashboardSectionHeader title="Academy Performance" />
        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <span className={styles.chartTitle}>Completion Rate</span>
            <span className={styles.chartSubtitle}>Growth Metric</span>
          </div>
          {/* Static CSS-based Bar Chart per instructions */}
          <div className={styles.chartContainer}>
            <div className={styles.chartYAxis}>
              <span>100</span>
              <span>50</span>
              <span>0</span>
            </div>
            <div className={styles.chartBars}>
              <div className={styles.chartBarCol}>
                <div className={styles.chartBar} style={{ height: '40%' }}></div>
                <span className={styles.chartXLabel}>Mon</span>
              </div>
              <div className={styles.chartBarCol}>
                <div className={styles.chartBar} style={{ height: '65%' }}></div>
                <span className={styles.chartXLabel}>Tue</span>
              </div>
              <div className={styles.chartBarCol}>
                <div className={styles.chartBar} style={{ height: '85%' }}></div>
                <span className={styles.chartXLabel}>Wed</span>
              </div>
              <div className={styles.chartBarCol}>
                <div className={styles.chartBar} style={{ height: '90%' }}></div>
                <span className={styles.chartXLabel}>Thu</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <div className={styles.safeBottom}></div>
    </div>
  );
}
