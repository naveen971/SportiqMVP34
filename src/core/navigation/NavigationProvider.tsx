import { createContext, useContext, useMemo, type ReactNode } from 'react';
import { useAuth } from '../auth/AuthProvider';
import { UserRole } from '../auth/types';
import { navigationByRole } from './config';
import type { NavigationConfig } from './types';

const NavigationContext = createContext<NavigationConfig | undefined>(undefined);

interface NavigationProviderProps {
  children: ReactNode;
}

export function NavigationProvider({ children }: NavigationProviderProps) {
  const { user } = useAuth();

  const config = useMemo<NavigationConfig>(() => {
    const role = user?.role ?? UserRole.Athlete;
    return navigationByRole[role];
  }, [user?.role]);

  return (
    <NavigationContext.Provider value={config}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation(): NavigationConfig {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
