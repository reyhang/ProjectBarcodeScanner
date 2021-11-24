import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import TabNavigator from './TabNavigation';

export default function () {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
