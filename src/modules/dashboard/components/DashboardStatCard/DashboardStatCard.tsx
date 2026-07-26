import styles from './DashboardStatCard.module.css';
import { StatCardData } from '../../types';

interface DashboardStatCardProps {
  data: StatCardData;
}

export function DashboardStatCard({ data }: DashboardStatCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>
        <span className="material-symbols-outlined">{data.iconName}</span>
      </div>
      <div className={styles.content}>
        <div className={styles.value}>{data.value}</div>
        <div className={styles.label}>{data.label}</div>
        {data.trend && (
          <div className={`${styles.trend} ${data.trend.isPositive ? styles.trendPositive : styles.trendNegative}`}>
            <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>
              {data.trend.isPositive ? 'trending_up' : 'trending_down'}
            </span>
            <span>{data.trend.value}</span>
          </div>
        )}
      </div>
    </div>
  );
}
