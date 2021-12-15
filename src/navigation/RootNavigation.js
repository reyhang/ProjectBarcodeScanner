import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import CameraScreen from '../screens/CameraScreen';
import CartScreen from '../screens/CartScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={CartScreen} />
    </Stack.Navigator>
  );
}
