import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './routes';
import { PlaceholderScreen } from '../shared/components/PlaceholderScreen';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route
          path={ROUTES.SPLASH}
          element={<PlaceholderScreen title="SportIQ" description="Loading..." />}
        />
        <Route
          path={ROUTES.LOGIN}
          element={<PlaceholderScreen title="Login" description="Authentication will be implemented here." />}
        />
        <Route
          path={ROUTES.SIGNUP}
          element={<PlaceholderScreen title="Sign Up" description="Registration will be implemented here." />}
        />

        {/* App Routes */}
        <Route
          path={ROUTES.HOME}
          element={<PlaceholderScreen title="Home" description="Main feed will be implemented here." />}
        />
        <Route
          path={ROUTES.PROFILE}
          element={<PlaceholderScreen title="Profile" description="User profile will be implemented here." />}
        />
        <Route
          path={ROUTES.SEARCH}
          element={<PlaceholderScreen title="Search" description="Search will be implemented here." />}
        />
        <Route
          path={ROUTES.MESSAGES}
          element={<PlaceholderScreen title="Messages" description="Messaging will be implemented here." />}
        />
        <Route
          path={ROUTES.NOTIFICATIONS}
          element={<PlaceholderScreen title="Notifications" description="Notifications will be implemented here." />}
        />
        <Route
          path={ROUTES.SETTINGS}
          element={<PlaceholderScreen title="Settings" description="Settings will be implemented here." />}
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
