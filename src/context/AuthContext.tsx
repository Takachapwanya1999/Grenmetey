/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { User } from '../types';

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
  const [loading, setLoading] = useState(false);

  // Admin allowlist via env (comma-separated emails)
  const ADMIN_EMAILS: string[] = (
    import.meta.env?.VITE_ADMIN_EMAILS || ''
  )
    .split(',')
    .map((e: string) => e.trim().toLowerCase())
    .filter(Boolean);
  const isAdminEmail = (email?: string | null) =>
    !!email && ADMIN_EMAILS.includes(email.toLowerCase());

  // Load user from localStorage on app start
  useEffect(() => {
    const savedUser = localStorage.getItem('grenmetey_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('grenmetey_user');
      }
    }
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // Mock authentication - accept any credentials
      const mockUser: User = {
        id: 'user-' + Date.now(),
        email: email,
        firstName: email.split('@')[0] || 'User',
        lastName: 'MockUser',
        phone: '+27123456789',
        address: {
          street: '123 Test Street',
          city: 'Cape Town',
          state: 'Western Cape',
          zipCode: '8001',
          country: 'South Africa'
        },
        role: isAdminEmail(email) ? 'admin' : 'customer',
        createdAt: new Date(),
        isVerified: true,
      };
      
      // Save to localStorage
      localStorage.setItem('grenmetey_user', JSON.stringify(mockUser));
      setUser(mockUser);
      
      console.log('Mock login successful for:', email);
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
      // Mock registration - accept any data
      const mockUser: User = {
        id: 'user-' + Date.now(),
        email: userData.email || 'test@example.com',
        firstName: userData.firstName || 'New',
        lastName: userData.lastName || 'User',
        phone: userData.phone || '+27123456789',
        address: userData.address || {
          street: '123 Test Street',
          city: 'Cape Town',
          state: 'Western Cape',
          zipCode: '8001',
          country: 'South Africa'
        },
        role: isAdminEmail(userData.email) ? 'admin' : (userData.role || 'customer'),
        createdAt: new Date(),
        isVerified: true,
      };
      
      // Save to localStorage
      localStorage.setItem('grenmetey_user', JSON.stringify(mockUser));
      setUser(mockUser);
      
      console.log('Mock registration successful for:', userData.email);
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('grenmetey_user');
    setUser(null);
    console.log('User logged out');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
