// src/navigation/AuthStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStartedPage from '../Screen/GetStartedPage';
import LoginPage from '../Screen/LoginPage';
import SignupPage from '../Screen/SignupPage';

const AuthStack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="GETSTARTED" component={GetStartedPage} />
      <AuthStack.Screen name="LOGIN" component={LoginPage} />
      <AuthStack.Screen name="SIGNUP" component={SignupPage} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;


