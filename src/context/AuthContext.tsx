import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  plan: 'free' | 'developer' | 'pro' | 'enterprise';
  apiKey: string;
  usage: {
    requests: number;
    limit: number;
    resetDate: string;
  };
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser: User = {
      id: '1',
      email,
      plan: 'developer',
      apiKey: 'mda_' + Math.random().toString(36).substring(2, 15),
      usage: {
        requests: 1247,
        limit: 7200,
        resetDate: '2025-01-02'
      }
    };
    
    setUser(mockUser);
    setIsLoading(false);
  };

  const signup = async (email: string, password: string) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser: User = {
      id: '1',
      email,
      plan: 'free',
      apiKey: 'mda_' + Math.random().toString(36).substring(2, 15),
      usage: {
        requests: 0,
        limit: 1800,
        resetDate: '2025-01-02'
      }
    };
    
    setUser(mockUser);
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};