/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { User } from '../types';
import { supabase, isSupabaseConfigured } from '../services/supabaseClient';
import { upsertProfileFromUser, fetchProfile } from '../services/profileService';
import type { Session } from '@supabase/supabase-js';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: Partial<User> & { password?: string }) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Admin allowlist via env (comma-separated emails)
  const ADMIN_EMAILS: string[] = (
    (import.meta as any).env?.VITE_ADMIN_EMAILS || ''
  )
    .split(',')
    .map((e: string) => e.trim().toLowerCase())
    .filter(Boolean);
  const isAdminEmail = (email?: string | null) =>
    !!email && ADMIN_EMAILS.includes(email.toLowerCase());

  useEffect(() => {
    // Initialize session from Supabase
    const init = async () => {
      setLoading(true);
      if (!isSupabaseConfigured) {
        setLoading(false);
        return;
      }
      const { data } = await supabase.auth.getSession();
      const session = data.session;
      if (session?.user) {
        const sbUser = session.user;
        // Map minimal Supabase user to our User shape where possible
        const mapped: User = {
          id: sbUser.id,
          email: sbUser.email || '',
          firstName: sbUser.user_metadata?.firstName || '',
          lastName: sbUser.user_metadata?.lastName || '',
          phone: sbUser.user_metadata?.phone || '',
          address: sbUser.user_metadata?.address || {
            street: '', city: '', state: '', zipCode: '', country: ''
          },
          role: isAdminEmail(sbUser.email)
            ? 'admin'
            : ((sbUser.user_metadata?.role as User['role']) || 'customer'),
          createdAt: new Date(sbUser.created_at),
          isVerified: !!sbUser.app_metadata?.provider || !!sbUser.email_confirmed_at,
        };
        const prof = await fetchProfile(sbUser.id);
        setUser({ ...mapped, ...(prof || {}) });
      }
      setLoading(false);
    };
    init();

    // Listen to auth changes
  if (!isSupabaseConfigured) return;
  const { data: sub } = supabase.auth.onAuthStateChange((
      _event: any,
      session: Session | null
    ) => {
      if (session?.user) {
        const sbUser = session.user;
        const mapped: User = {
          id: sbUser.id,
          email: sbUser.email || '',
          firstName: sbUser.user_metadata?.firstName || '',
          lastName: sbUser.user_metadata?.lastName || '',
          phone: sbUser.user_metadata?.phone || '',
          address: sbUser.user_metadata?.address || {
            street: '', city: '', state: '', zipCode: '', country: ''
          },
          role: isAdminEmail(sbUser.email)
            ? 'admin'
            : ((sbUser.user_metadata?.role as User['role']) || 'customer'),
          createdAt: new Date(sbUser.created_at),
          isVerified: !!sbUser.app_metadata?.provider || !!sbUser.email_confirmed_at,
        };
        setUser(mapped);
      } else {
        setUser(null);
      }
    });

    return () => {
      sub.subscription.unsubscribe();
    };
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      if (!isSupabaseConfigured) {
        throw new Error('Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env.');
      }
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      const sbUser = data.user;
      if (!sbUser) return;
      const mapped: User = {
        id: sbUser.id,
        email: sbUser.email || '',
        firstName: sbUser.user_metadata?.firstName || '',
        lastName: sbUser.user_metadata?.lastName || '',
        phone: sbUser.user_metadata?.phone || '',
        address: sbUser.user_metadata?.address || {
          street: '', city: '', state: '', zipCode: '', country: ''
        },
        role: isAdminEmail(sbUser.email)
          ? 'admin'
          : ((sbUser.user_metadata?.role as User['role']) || 'customer'),
        createdAt: new Date(sbUser.created_at),
        isVerified: !!sbUser.app_metadata?.provider || !!sbUser.email_confirmed_at,
      };
  // Ensure profile exists/updated
      try {
        await upsertProfileFromUser(mapped);
      } catch (e) {
        console.warn('Profile upsert failed (non-fatal):', e);
      }
  setUser(mapped);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData: Partial<User> & { password?: string }) => {
    setLoading(true);
    try {
      if (!isSupabaseConfigured) {
        throw new Error('Supabase is not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env.');
      }
      const { email, password, firstName, lastName, phone, address, role } = userData;
      if (!email || !password) throw new Error('Email and password are required');
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            firstName: firstName || '',
            lastName: lastName || '',
            phone: phone || '',
            address: address || { street: '', city: '', state: '', zipCode: '', country: '' },
            role: role || 'customer',
          }
        }
      });
      if (error) throw error;
      const sbUser = data.user;
      if (!sbUser) return;
      const mapped: User = {
        id: sbUser.id,
        email: sbUser.email || '',
        firstName: sbUser.user_metadata?.firstName || '',
        lastName: sbUser.user_metadata?.lastName || '',
        phone: sbUser.user_metadata?.phone || '',
        address: sbUser.user_metadata?.address || {
          street: '', city: '', state: '', zipCode: '', country: ''
        },
        role: isAdminEmail(sbUser.email)
          ? 'admin'
          : ((sbUser.user_metadata?.role as User['role']) || 'customer'),
        createdAt: new Date(sbUser.created_at),
        isVerified: !!sbUser.app_metadata?.provider || !!sbUser.email_confirmed_at,
      };
      try {
        await upsertProfileFromUser(mapped);
      } catch (e) {
        console.warn('Profile upsert failed (non-fatal):', e);
      }
  setUser(mapped);
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    if (isSupabaseConfigured) {
      supabase.auth.signOut();
    }
    setUser(null);
  };

  const value = {
    user,
    login,
    register,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
