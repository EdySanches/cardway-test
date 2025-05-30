'use client';

import { createContext, useContext, useState, ReactNode, useCallback } from 'react';

interface UserData {
  email: string;
  cpf: string;
  birthDate: string;
  name: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: UserData | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);

  const login = useCallback(async (username: string, password: string) => {
    if (username === 'user@example.com' && password === 'password') {
      const mockUser: UserData = {
        email: username,
        cpf: '123.456.789-00',
        birthDate: '1990-01-01',
        name: 'John Doe'
      };
      setIsAuthenticated(true);
      setUser(mockUser);
      return true;
    }
    return false;
  }, []);

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
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