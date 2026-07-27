import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { AuthState, User, UserRole } from './types';
import { supabase } from '../database/supabaseClient';

interface AuthContextValue extends AuthState {
  setUser: (user: User | null) => void;
  login: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string, role: UserRole) => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

/**
 * Resolves the authoritative role for a given user ID.
 * Queries public.profiles first (single source of truth after signup).
 * Falls back to user_metadata only if the profile row does not yet exist
 * (edge case: signup DB trigger hasn't fired yet).
 */
async function resolveRole(userId: string, metadataRole: UserRole | undefined): Promise<UserRole> {
  const { data, error } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', userId)
    .single();

  if (error || !data?.role) {
    // Profile row not yet created (race condition) — fall back to JWT metadata.
    // This path is reachable briefly after signup before the DB trigger completes.
    console.warn('[AuthProvider] profiles.role unavailable, falling back to user_metadata.role:', error?.message);
    return metadataRole as UserRole;
  }

  return data.role as UserRole;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initial session check
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (session?.user) {
        const role = await resolveRole(
          session.user.id,
          session.user.user_metadata?.role as UserRole,
        );
        setUser({
          id: session.user.id,
          name: session.user.user_metadata?.full_name || '',
          email: session.user.email || '',
          role,
        });
      }
      setIsLoading(false);
    });

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        const role = await resolveRole(
          session.user.id,
          session.user.user_metadata?.role as UserRole,
        );
        setUser({
          id: session.user.id,
          name: session.user.user_metadata?.full_name || '',
          email: session.user.email || '',
          role,
        });
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      throw error;
    }
  };

  const signUp = async (name: string, email: string, password: string, role: UserRole) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
          role: role,
        },
      },
    });
    if (error) {
      throw error;
    }
  };

  const value: AuthContextValue = {
    user,
    isAuthenticated: user !== null,
    isLoading,
    setUser,
    login,
    signUp,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
