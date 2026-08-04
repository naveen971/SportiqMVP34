import styles from './GovernmentDashboardScreen.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GOVERNMENT_MOCK_DATA } from '../../constants/mockData';
import { getGovernmentAnalytics, DashboardAnalytics } from '../../services/analyticsService';
import { ROUTES } from '../../../../routing/routes';

export function GovernmentDashboardScreen() {
  const navigate = useNavigate();
  const [analytics, setAnalytics] = useState<DashboardAnalytics | null>(null);

  useEffect(() => {
    getGovernmentAnalytics()
      .then(setAnalytics)
      .catch((err) => {
        console.error('Failed to load government analytics:', err);
      });
  }, []);

  const totalAthletesDisplay = analytics
    ? analytics.totalAthletes.toLocaleString()
    : (GOVERNMENT_MOCK_DATA.stats[0]?.value ?? '1.2M');
  const totalCoachesDisplay = analytics
    ? analytics.totalCoaches.toLocaleString()
    : (GOVERNMENT_MOCK_DATA.stats[1]?.value ?? '45k');
  const totalOrganisersDisplay = analytics
    ? analytics.totalOrganisers.toLocaleString()
    : (GOVERNMENT_MOCK_DATA.stats[2]?.value ?? '12k');
  const totalEventsDisplay = analytics
    ? analytics.totalEvents.toLocaleString()
    : (GOVERNMENT_MOCK_DATA.stats[3]?.value ?? '3.2k');

  const displayDistricts =
    analytics?.athletesByDistrict && analytics.athletesByDistrict.length > 0
      ? analytics.athletesByDistrict.slice(0, 4)
      : [];

  const displaySports =
    analytics?.athletesBySport && analytics.athletesBySport.length > 0
      ? analytics.athletesBySport.slice(0, 3)
      : GOVERNMENT_MOCK_DATA.topSports;

  const maxDistrictCount =
    displayDistricts.length > 0
      ? Math.max(...displayDistricts.map((d) => d.count), 1)
      : 1;

  const maxSportCount =
    displaySports.length > 0
      ? Math.max(
          ...displaySports.map((s) =>
            typeof s.count === 'number' ? s.count : 450000
          ),
          1
        )
      : 1;

  const formatSportCount = (count: number | string): string => {
    if (typeof count === 'number') {
      return `${count.toLocaleString()} Athletes`;
    }
    return count;
  };

  const getSportWidthPercent = (count: number | string, idx: number): number => {
    if (typeof count === 'number') {
      return Math.max(Math.min((count / maxSportCount) * 100, 100), 15);
    }
    if (idx === 0) return 85;
    if (idx === 1) return 60;
    return 40;
  };

  const getSportBarClassName = (idx: number): string => {
    if (idx === 0) return styles.sportBarPrimary ?? '';
    if (idx === 1) return styles.sportBarSecondary ?? '';
    return styles.sportBarTertiary ?? '';
  };

  const getTimelineDotClassName = (idx: number): string => {
    if (idx === 0) return styles.timelineDotPrimary ?? '';
    if (idx === 1) return styles.timelineDotSecondary ?? '';
    return styles.timelineDotNeutral ?? '';
  };

  return (
    <div className={styles.container}>
      {/* Hero Analytics Bento Grid */}
      <section className={styles.statsGrid}>
        {/* Primary Stat Card */}
        <div className={styles.statCardPrimary}>
          <span className={`material-symbols-outlined ${styles.watermarkIcon}`}>
            groups
          </span>
          <div>
            <div className={styles.statLabelPrimary}>
              Total Registered Athletes
            </div>
            <div className={styles.statValueRow}>
              <span className={styles.statValuePrimary}>
                {totalAthletesDisplay}
              </span>
              <span className={styles.trendBadge}>
                <span className="material-symbols-outlined">trending_up</span>
                +5%
              </span>
            </div>
          </div>
          <button
            className={styles.deepDiveBtn}
            onClick={() => navigate(ROUTES.ANALYTICS)}
            type="button"
          >
            View Deep Dive
          </button>
        </div>

        {/* Secondary Stats Column (Right) */}
        <div className={styles.statsColRight}>
          <div className={styles.statCardSecondary}>
            <div>
              <p className={styles.statLabelSmall}>Verified Coaches</p>
              <p className={styles.statValueSmall}>{totalCoachesDisplay}</p>
            </div>
            <div className={styles.statIconSecondary}>
              <span className="material-symbols-outlined">sports</span>
            </div>
          </div>

          <div className={styles.statCardTertiary}>
            <div>
              <p className={styles.statLabelSmall}>Organizations</p>
              <p className={styles.statValueSmall}>{totalOrganisersDisplay}</p>
            </div>
            <div className={styles.statIconTertiary}>
              <span className="material-symbols-outlined">corporate_fare</span>
            </div>
          </div>
        </div>

        {/* Full-Width Stat Card (Bottom) */}
        <div className={styles.statCardFull}>
          <div>
            <p className={styles.statLabelSmall}>Active Events</p>
            <p className={styles.statValueSmall}>{totalEventsDisplay}</p>
          </div>
          <div className={styles.statIconPrimary}>
            <span className="material-symbols-outlined">event</span>
          </div>
        </div>
      </section>

      {/* Quick Actions Glassmorphism Strip */}
      <section className={styles.quickActionsStrip}>
        <button
          className={styles.quickActionBtn}
          onClick={() => navigate(ROUTES.ATHLETE_DIRECTORY)}
          type="button"
        >
          <span className={`material-symbols-outlined ${styles.actionIconSecondary}`}>
            search
          </span>
          Athletes
        </button>
        <button
          className={styles.quickActionBtn}
          onClick={() => navigate(ROUTES.ORGANIZATION_DIRECTORY)}
          type="button"
        >
          <span className={`material-symbols-outlined ${styles.actionIconSecondary}`}>
            search
          </span>
          Organizations
        </button>
        <button
          className={styles.quickActionBtnPrimary}
          onClick={() => navigate(ROUTES.REPORTS)}
          type="button"
        >
          <span className="material-symbols-outlined">description</span>
          Report
        </button>
        <button
          className={styles.quickActionBtn}
          onClick={() => navigate(ROUTES.LEADERBOARDS)}
          type="button"
        >
          <span className={`material-symbols-outlined ${styles.actionIconTertiary}`}>
            emoji_events
          </span>
          Leaderboards
        </button>
      </section>

      {/* Analytics Preview Bento Grid */}
      <section className={styles.analyticsGrid}>
        {/* Left Card: Registration Trend (District Chart) */}
        <div className={styles.analyticsCard}>
          <div className={styles.analyticsCardHeader}>
            <h3 className={styles.analyticsCardTitle}>Registration Trend</h3>
            <button
              className={styles.analyticsActionBtn}
              onClick={() => navigate(ROUTES.ANALYTICS)}
              type="button"
            >
              View Full
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
          <div className={styles.chartBars}>
            {displayDistricts.map((district, idx) => {
              const heightPercent = Math.max(
                (district.count / maxDistrictCount) * 100,
                10
              );
              return (
                <div key={`${district.name}-${idx}`} className={styles.chartBarCol}>
                  <div
                    className={styles.chartBar}
                    style={{ height: `${heightPercent}%` }}
                  />
                  <span className={styles.chartXLabel}>{district.name}</span>
                </div>
              );
            })}
            {displayDistricts.length === 0 && (
              <div className={styles.noDataMsg}>No district data available</div>
            )}
          </div>
        </div>

        {/* Right Card: Top Sports */}
        <div className={styles.analyticsCard}>
          <div className={styles.analyticsCardHeader}>
            <h3 className={styles.analyticsCardTitle}>Top Sports</h3>
            <button
              className={styles.analyticsActionBtn}
              onClick={() => navigate(ROUTES.ANALYTICS)}
              type="button"
            >
              View All
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
          <div className={styles.sportsList}>
            {displaySports.map((sport, idx) => {
              const widthPercent = getSportWidthPercent(sport.count, idx);
              return (
                <div key={`${sport.name}-${idx}`} className={styles.sportRow}>
                  <div className={styles.sportRowHeader}>
                    <span className={styles.sportName}>{sport.name}</span>
                    <span className={styles.sportCount}>
                      {formatSportCount(sport.count)}
                    </span>
                  </div>
                  <div className={styles.sportBarTrack}>
                    <div
                      className={`${styles.sportBarFill} ${getSportBarClassName(idx)}`}
                      style={{ width: `${widthPercent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Activity Timeline Card */}
      <section className={styles.activityCard}>
        <h3 className={styles.activityTitle}>Recent Activity</h3>
        <div className={styles.timelineList}>
          {GOVERNMENT_MOCK_DATA.activities.map((activity, idx) => (
            <div key={activity.id} className={styles.timelineItem}>
              <div className={styles.timelineIconCol}>
                <div
                  className={`${styles.timelineDot} ${getTimelineDotClassName(idx)}`}
                />
                {idx < GOVERNMENT_MOCK_DATA.activities.length - 1 && (
                  <div className={styles.timelineLine} />
                )}
              </div>
              <div className={styles.timelineContent}>
                <h4 className={styles.timelineItemTitle}>{activity.title}</h4>
                <p className={styles.timelineItemDesc}>{activity.description}</p>
                <span className={styles.timelineItemTime}>
                  {activity.timestamp}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
