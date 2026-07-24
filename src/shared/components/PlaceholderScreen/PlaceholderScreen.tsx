import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../routing/routes';
import styles from './PlaceholderScreen.module.css';

interface PlaceholderScreenProps {
  title: string;
  description?: string;
}

export function PlaceholderScreen({ title, description }: PlaceholderScreenProps) {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {description && <p className={styles.description}>{description}</p>}
        <span className={styles.badge}>Coming Soon</span>
      </div>
    </div>
  );
}
