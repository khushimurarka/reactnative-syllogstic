// src/navigation/MainStack.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';
import HomeScreen from '../Screen/HomeScreen';
import ProductDetailsScreen from '../Screen/ProductDetailsScreen';
import CartScreen from '../Screen/CartScreen';
import ReorderScreen from '../Screen/ReorderScreen';
import AccountScreen from '../Screen/AccountScreen';
import CartIcon from '../components/CartIcon'; // Ensure CartIcon is in components folder

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyHomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HOME" component={HomeScreen} />
      <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};

const MainStackNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="HOME_STACK"
        component={MyHomeStack}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Ionicons name="home" size={size} color={focused ? 'tomato' : 'gray'} />
          ),
        }}
      />
      <Tab.Screen
        name="REORDER"
        component={ReorderScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Entypo name="list" size={size} color={focused ? 'tomato' : 'gray'} />
          ),
        }}
      />
      <Tab.Screen
        name="CART"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused, size }) => <CartIcon />,
        }}
      />
      <Tab.Screen
        name="ACCOUNT"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <FontAwesome name="user" size={size} color={focused ? 'tomato' : 'gray'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainStackNavigator;


