import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from './routes';
import { ProtectedRoute } from './ProtectedRoute';
import { useAuth } from '../core/auth/AuthProvider';
import { SplashScreen, LoginScreen, SignUpScreen } from '../modules/authentication/screens';
import { PlaceholderScreen } from '../shared/components/PlaceholderScreen';

// Helper component to redirect authenticated users away from public auth pages
function PublicRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to={ROUTES.HOME} replace /> : <>{children}</>;
}

export function AppRouter() {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect Root to Splash if not authenticated, otherwise Home is loaded */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <ProtectedRoute>
                <PlaceholderScreen title="Home" description="Main feed will be implemented here." />
              </ProtectedRoute>
            ) : (
              <Navigate to={ROUTES.SPLASH} replace />
            )
          }
        />

        {/* Public Auth Routes */}
        <Route
          path={ROUTES.SPLASH}
          element={
            <PublicRoute>
              <SplashScreen />
            </PublicRoute>
          }
        />
        <Route
          path={ROUTES.LOGIN}
          element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>
          }
        />
        <Route
          path={ROUTES.SIGNUP}
          element={
            <PublicRoute>
              <SignUpScreen />
            </PublicRoute>
          }
        />

        {/* Protected App Routes */}
        <Route
          path={ROUTES.PROFILE}
          element={
            <ProtectedRoute>
              <PlaceholderScreen title="Profile" description="User profile will be implemented here." />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.SEARCH}
          element={
            <ProtectedRoute>
              <PlaceholderScreen title="Search" description="Search will be implemented here." />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.MESSAGES}
          element={
            <ProtectedRoute>
              <PlaceholderScreen title="Messages" description="Messaging will be implemented here." />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.NOTIFICATIONS}
          element={
            <ProtectedRoute>
              <PlaceholderScreen title="Notifications" description="Notifications will be implemented here." />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.SETTINGS}
          element={
            <ProtectedRoute>
              <PlaceholderScreen title="Settings" description="Settings will be implemented here." />
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route
          path="*"
          element={<PlaceholderScreen title="Not Found" description="This page does not exist." />}
        />
      </Routes>
    </BrowserRouter>
  );
}

