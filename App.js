// App.js
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import { AuthProvider, AuthContext } from './src/context/AuthContext';
import AuthStackNavigator from './src/navigation/AuthStackNavigator';
import MainStackNavigator from './src/navigation/MainStackNavigator';

const App = () => {
  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    return <View style={styles.container}><Text>Loading...</Text></View>;
  }

  return (
    <NavigationContainer>
      {userToken ? <MainStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);
