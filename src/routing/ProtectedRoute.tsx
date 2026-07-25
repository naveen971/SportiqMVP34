import { Navigate } from 'react-router-dom';
import { useAuth } from '../core/auth/AuthProvider';
import { ROUTES } from './routes';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="h-full bg-background flex flex-col items-center justify-center p-4 min-h-[max(884px,100dvh)]">
        <div className="w-8 h-8 rounded-full border-4 border-surface-container-highest border-t-primary animate-spin"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return <>{children}</>;
}
