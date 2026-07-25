import { Navigate } from 'react-router-dom';
import { useAuth } from '../core/auth/AuthProvider';
import { ROUTES } from './routes';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

import styles from './Routing.module.css';

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return <>{children}</>;
}
