import styles from './DashboardSectionHeader.module.css';

interface DashboardSectionHeaderProps {
  title: string;
  actionText?: string;
  onActionClick?: () => void;
}

export function DashboardSectionHeader({ title, actionText, onActionClick }: DashboardSectionHeaderProps) {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      {actionText && (
        <button className={styles.actionButton} onClick={onActionClick}>
          {actionText}
          <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>chevron_right</span>
        </button>
      )}
    </div>
  );
}
