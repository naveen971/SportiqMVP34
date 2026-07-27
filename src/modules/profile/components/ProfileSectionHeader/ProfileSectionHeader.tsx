import styles from './ProfileSectionHeader.module.css';

interface ProfileSectionHeaderProps {
  title: string;
  actionText?: string;
  onActionClick?: () => void;
}

export function ProfileSectionHeader({ title, actionText, onActionClick }: ProfileSectionHeaderProps) {
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
