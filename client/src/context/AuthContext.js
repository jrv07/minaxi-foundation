import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on mount
    const token = localStorage.getItem('auth-token');
    if (token) {
      // In a real app, you would validate the token with the server
      // For now, we'll just set a mock user
      setUser({ 
        id: '1', 
        name: 'Admin User', 
        email: 'admin@minaxigajjar.org', 
        role: 'super_admin' 
      });
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // Mock login - replace with actual API call
      if (email === 'admin@minaxigajjar.org' && password === 'admin123') {
        const mockUser = { 
          id: '1', 
          name: 'Admin User', 
          email: email, 
          role: 'super_admin' 
        };
        setUser(mockUser);
        localStorage.setItem('auth-token', 'mock-jwt-token');
        return { success: true };
      } else {
        return { success: false, message: 'Invalid credentials' };
      }
    } catch (error) {
      return { success: false, message: 'Login failed' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth-token');
  };

  const value = {
    user,
    login,
    logout,
    loading,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};