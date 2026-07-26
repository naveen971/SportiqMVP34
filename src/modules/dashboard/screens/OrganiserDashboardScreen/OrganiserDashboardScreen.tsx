import styles from './OrganiserDashboardScreen.module.css';
import { ORGANISER_MOCK_DATA } from '../../constants/mockData';
import { DashboardSectionHeader } from '../../components/DashboardSectionHeader/DashboardSectionHeader';
import { DashboardStatCard } from '../../components/DashboardStatCard/DashboardStatCard';

export function OrganiserDashboardScreen() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.greeting}>SportIQ Operations</h1>
        <p className={styles.description}>Director, Premier Academy</p>
      </header>

      <div className={styles.kpiGrid}>
        {ORGANISER_MOCK_DATA.stats.map(stat => (
          <DashboardStatCard key={stat.id} data={stat} />
        ))}
      </div>

      <section className={styles.section}>
        <DashboardSectionHeader title="Upcoming Events" actionText="View All" />
        <div className={styles.eventList}>
          {ORGANISER_MOCK_DATA.upcomingEvents.map(event => (
            <div key={event.id} className={styles.eventItem}>
              <div className={styles.eventTime}>{event.timestamp}</div>
              <h3 className={styles.eventTitle}>{event.title}</h3>
              <div className={styles.eventLocation}>
                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>location_on</span>
                <span>{event.location}</span>
              </div>
              <div className={styles.eventFooter}>
                <span className={styles.eventAttendees}>{event.attendees} Registered</span>
                <button className={styles.manageButton}>Manage</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <DashboardSectionHeader title="Active Tournaments" />
        <div className={styles.tournamentList}>
          {ORGANISER_MOCK_DATA.tournaments.map(tournament => (
            <div key={tournament.id} className={styles.tournamentItem}>
              <div className={styles.tournamentIcon}>
                <span className="material-symbols-outlined">{tournament.iconName}</span>
              </div>
              <div className={styles.tournamentContent}>
                <h3 className={styles.tournamentTitle}>{tournament.title}</h3>
                <div className={styles.tournamentDetails}>
                  <span className={`${styles.tournamentStatus} ${tournament.status === 'Live' ? styles.statusLive : ''}`}>
                    {tournament.status}
                  </span>
                  <span className={styles.tournamentDesc}>{tournament.description}</span>
                </div>
              </div>
              <span className="material-symbols-outlined">chevron_right</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <DashboardSectionHeader title="Recent Activity" />
        <div className={styles.activityList}>
          {ORGANISER_MOCK_DATA.activities.map(activity => (
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
