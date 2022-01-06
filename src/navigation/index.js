import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootNavigation from './RootNavigation';

export default function () {
  return (
    <NavigationContainer>
      <RootNavigation/>
    </NavigationContainer>
  );
}
