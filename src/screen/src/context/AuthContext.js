// src/context/AuthContext.js
// context/AuthContext.js
import React, { createContext, useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('userToken');
      setUserToken(token);
      setIsLoading(false);
    };

    checkToken();
  }, []);

  const signIn = async () => {
    setUserToken('abc');
    await AsyncStorage.setItem('userToken', 'abc');
  };

  const signUp = async () => {
    setUserToken('abc');
    await AsyncStorage.setItem('userToken', 'abc');
  };

  const signOut = async () => {
    setUserToken(null);
    await AsyncStorage.removeItem('userToken');
  };

  return (
    <AuthContext.Provider value={{ isLoading, userToken, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
