import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from "../screens/home";
import { Login } from "../screens/login";
import { Signup } from "../screens/signup";
import { html } from "../screens/html";
import { css } from "../screens/css";
import { javascript } from "../screens/javascript";
import { camera } from "../screens/camera";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={Home} options={{
          headerStyle: {
            backgroundColor: '#14532d',
          },
          headerShown: false,
          headerTintColor: '#bbf7d0',
        }} />
        <Stack.Screen name="Login" component={Login} options={{
          headerStyle: {
            backgroundColor: '#14532d',
          },
          headerShown: false,
          headerTintColor: '#bbf7d0',
        }} />
        <Stack.Screen name="Signup" component={Signup} options={{
          headerStyle: {
            backgroundColor: '#14532d',
          },
          headerShown: false,
          headerTintColor: '#fff',
        }} />
        <Stack.Screen name="HTML" component={html} options={{
          headerStyle: {
            backgroundColor: '#14532d',
          },
          headerShown: false,
          headerTintColor: '#fff',
        }} />
        <Stack.Screen name="CSS" component={css} options={{
          headerStyle: {
            backgroundColor: '#14532d',
          },
          headerShown: false,
          headerTintColor: '#fff',
        }} />
        <Stack.Screen name="JavaScript" component={javascript} options={{
          headerStyle: {
            backgroundColor: '#14532d',
          },
          headerShown: false,
          headerTintColor: '#fff',
        }} />
         <Stack.Screen name="Camera" component={camera} options={{
          headerStyle: {
            backgroundColor: '#14532d',
          },
          headerShown: false,
          headerTintColor: '#fff',
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;