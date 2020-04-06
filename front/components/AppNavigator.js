import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Chat from './Chat';

// const AppNavigator = createStackNavigator({
//   Home: { screen: Home },
//   Chat: { screen: Chat }
// });

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        initialParams={{ user: 'me' }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;