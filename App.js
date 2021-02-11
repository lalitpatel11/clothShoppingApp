import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import SignUp from './src/pages/SignUp';
import SignIn from './src/pages/SignIn';
import ProductDetail from './src/pages/ProductDetail';
import Cart from './src/pages/Cart';
import Checkout from './src/pages/Checkout';
import HomePage from './src/pages/HomePage';
import Splash from './src/pages/Splash';
import ProductList from './src/pages/ProductList';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Checkout" component={Checkout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#192A56',
    marginTop:Constants.statusBarHeight,
  },
});