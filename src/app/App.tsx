import { ThemeProvider } from '../core/theme/ThemeProvider';
import { AuthProvider } from '../core/auth/AuthProvider';
import { NavigationProvider } from '../core/navigation/NavigationProvider';
import { AppRouter } from '../routing/AppRouter';

export function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <NavigationProvider>
          <AppRouter />
        </NavigationProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
