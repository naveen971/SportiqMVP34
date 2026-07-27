import React from 'react';
import styles from './DashboardQuickActionButton.module.css';

interface DashboardQuickActionButtonProps {
  iconName: string;
  label: string;
  onClick: () => void;
}

export function DashboardQuickActionButton({ iconName, label, onClick }: DashboardQuickActionButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      <div className={styles.iconContainer}>
        <span className="material-symbols-outlined">{iconName}</span>
      </div>
      <span className={styles.label}>{label}</span>
    </button>
  );
}
