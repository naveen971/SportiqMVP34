import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from './routes';
import { ProtectedRoute } from './ProtectedRoute';
import { useAuth } from '../core/auth/AuthProvider';
import { WelcomeScreen, SplashScreen, LoginScreen, SignUpScreen, VerifyEmailScreen, ForgotPasswordScreen } from '../modules/authentication/screens';
import { SelectSportsScreen, CreateSportsProfileScreen, ProfilePictureUploadScreen, PersonalInformationScreen, PlayingInformationScreen, ProfileCompletionScreen } from '../modules/profile/screens';
import { PlaceholderScreen } from '../shared/components/PlaceholderScreen';
import { UserRole } from '../core/auth/types';
import { 
  AthleteDashboardScreen, 
  CoachDashboardScreen, 
  OrganiserDashboardScreen, 
  GovernmentDashboardScreen,
  CoachAthleteSearchScreen
} from '../modules/dashboard/screens';

import styles from './Routing.module.css';

// Helper component to redirect authenticated users away from public auth pages
function PublicRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

  return isAuthenticated ? <Navigate to={ROUTES.HOME} replace /> : <>{children}</>;
}

export function AppRouter() {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect Root to Splash if not authenticated, otherwise Role-Aware Dashboard is loaded */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <ProtectedRoute>
                <DashboardRouter />
              </ProtectedRoute>
            ) : (
              <Navigate to={ROUTES.SPLASH} replace />
            )
          }
        />

        {/* Public Auth Routes */}
        <Route
          path={ROUTES.WELCOME}
          element={
            <PublicRoute>
              <WelcomeScreen />
            </PublicRoute>
          }
        />
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
        <Route
          path={ROUTES.VERIFY_EMAIL}
          element={
            <PublicRoute>
              <VerifyEmailScreen />
            </PublicRoute>
          }
        />
        <Route
          path={ROUTES.FORGOT_PASSWORD}
          element={
            <PublicRoute>
              <ForgotPasswordScreen />
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
          path={ROUTES.SELECT_SPORTS}
          element={
            <ProtectedRoute>
              <SelectSportsScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.CREATE_SPORTS_PROFILE}
          element={
            <ProtectedRoute>
              <CreateSportsProfileScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.PROFILE_PICTURE_UPLOAD}
          element={
            <ProtectedRoute>
              <ProfilePictureUploadScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.PERSONAL_INFORMATION}
          element={
            <ProtectedRoute>
              <PersonalInformationScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.PLAYING_INFORMATION}
          element={
            <ProtectedRoute>
              <PlayingInformationScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.PROFILE_COMPLETION}
          element={
            <ProtectedRoute>
              <ProfileCompletionScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.OWN_PROFILE}
          element={
            <ProtectedRoute>
              {/* // TODO: replace with real OwnProfileScreen once built */}
              <PlaceholderScreen title="My Profile" description="Own profile view — the next logical build target after the core onboarding wizard." />
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

        {/* Quick Actions Temporary Placeholders */}
        <Route path={ROUTES.ASSIGN_TRAINING} element={<ProtectedRoute><PlaceholderScreen title="Assign Training" description="// TODO: replace with real Assign Training screen" /></ProtectedRoute>} />
        <Route path={ROUTES.MY_ATHLETES} element={<ProtectedRoute><CoachAthleteSearchScreen /></ProtectedRoute>} />
        <Route path={ROUTES.ANNOUNCEMENTS} element={<ProtectedRoute><PlaceholderScreen title="Announcements" description="// TODO: replace with real Announcements screen" /></ProtectedRoute>} />
        <Route path={ROUTES.CREATE_EVENT} element={<ProtectedRoute><PlaceholderScreen title="Create Event" description="// TODO: replace with real Create Event screen" /></ProtectedRoute>} />
        <Route path={ROUTES.CREATE_TOURNAMENT} element={<ProtectedRoute><PlaceholderScreen title="Create Tournament" description="// TODO: replace with real Create Tournament screen" /></ProtectedRoute>} />
        <Route path={ROUTES.APPROVALS} element={<ProtectedRoute><PlaceholderScreen title="Approvals" description="// TODO: replace with real Approvals screen" /></ProtectedRoute>} />
        <Route path={ROUTES.TEAM_MANAGEMENT} element={<ProtectedRoute><PlaceholderScreen title="Team Management" description="// TODO: replace with real Team Management screen" /></ProtectedRoute>} />
        <Route path={ROUTES.ATHLETE_DIRECTORY} element={<ProtectedRoute><PlaceholderScreen title="Athlete Directory" description="// TODO: replace with real Athlete Directory screen" /></ProtectedRoute>} />
        <Route path={ROUTES.ORGANIZATION_DIRECTORY} element={<ProtectedRoute><PlaceholderScreen title="Organization Directory" description="// TODO: replace with real Organization Directory screen" /></ProtectedRoute>} />
        <Route path={ROUTES.REPORTS} element={<ProtectedRoute><PlaceholderScreen title="Reports" description="// TODO: replace with real Reports screen" /></ProtectedRoute>} />
        <Route path={ROUTES.LEADERBOARDS} element={<ProtectedRoute><PlaceholderScreen title="Leaderboards" description="// TODO: replace with real Leaderboards screen" /></ProtectedRoute>} />

        {/* Fallback */}
        <Route
          path="*"
          element={<PlaceholderScreen title="Not Found" description="This page does not exist." />}
        />
      </Routes>
    </BrowserRouter>
  );
}

// Role-aware dashboard routing
function DashboardRouter() {
  const { user } = useAuth();
  
  switch (user?.role) {
    case UserRole.Athlete:
      return <AthleteDashboardScreen />;
    case UserRole.Coach:
      return <CoachDashboardScreen />;
    case UserRole.Organiser:
      return <OrganiserDashboardScreen />;
    case UserRole.Government:
      return <GovernmentDashboardScreen />;
    default:
      return <PlaceholderScreen title="Dashboard - Role Unknown" description="The user role is unrecognized or unset." />;
  }
}
