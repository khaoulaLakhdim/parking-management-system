import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create the AuthContext with default values
const AuthContext = createContext({ token: null, setToken: () => {} });

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  // Load token from storage on mount
  useEffect(() => {
    const loadToken = async () => {
      const storedToken = await AsyncStorage.getItem('token');
      if (storedToken) setToken(storedToken);
    };
    loadToken();
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

// Helper to read the token from storage (for API interceptor)
export const getToken = () => AsyncStorage.getItem('token');

export default AuthContext;
