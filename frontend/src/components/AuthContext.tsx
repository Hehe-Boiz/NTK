import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'

axios.defaults.baseURL = 'http://localhost:3000';
export type UserRole = 'GUEST' | 'USER' | 'ADMIN';

export interface User {
  id: number;
  name: string;
  role: UserRole;
  email: string;
  fullName: string;
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  isAdmin: boolean;
  isStudent: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const getToken = () => {
  try {
    return localStorage.getItem('accessToken');
  } catch (error) {
    return null;
  }
}

const getUserFromToken = (token: string | null): User | null => {
  if (!token) return null;
  try {
    const decoded: { sub: number; email: string; role: UserRole, name: string } = jwtDecode(token);
    return {
      id: decoded.sub,
      name: decoded.name || `User${decoded.sub}`,
      fullName: decoded.name || `User ${decoded.sub}`,
      email: decoded.email,
      role: decoded.role,
    };
  } catch (error) {
    console.error("Token không hợp lệ:", error);
    return null;
  }
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => getUserFromToken(getToken()));

  // Load user from localStorage on mount
  useEffect(() => {
    const interceptor = axios.interceptors.request.use(config => {
      const token = getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    return () => {
      axios.interceptors.request.eject(interceptor);
    };
  }, [user]);

  const login = async (username: string, password: string): Promise<boolean> => {
    try {
      // Gọi API đăng nhập của NestJS
      const response = await axios.post('/auth/login', {
        name: username, 
        password: password,
      });

      const { access_token } = response.data;

      if (access_token) {
        localStorage.setItem('accessToken', access_token);
        const userData = getUserFromToken(access_token);
        setUser(userData);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Lỗi đăng nhập:', error);
      // Xóa token cũ nếu có lỗi
      localStorage.removeItem('accessToken');
      setUser(null);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('accessToken');
  };

  const value: AuthContextType = {
    user,
    isLoggedIn: !!user,
    isAdmin: user?.role === 'ADMIN',
    isStudent: user?.role === 'USER',
    login,
    logout
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