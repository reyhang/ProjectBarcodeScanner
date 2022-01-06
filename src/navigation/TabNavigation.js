import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import CameraScreen from '../screens/CameraScreen';
import IonIcon, { MatIcon } from '../components/Icons';
import {colors} from '../constants';
import { StyleSheet } from 'react-native';
import DatabaseTestScreen from '../screens/DatabaseTestScreen';
import LoginScreen from '../screens/LoginScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  
  return (
    <Tab.Navigator sceneContainerStyle={{backgroundColor:colors.white,borderWidth:1,borderColor:colors.gainsboro}} >
          <Tab.Screen
        name="DataTest"
        component={DatabaseTestScreen}
        options={{
          tabBarIcon: () => (
            <MatIcon name="database-marker" size={25} color={colors.dark_salmon} />
          ),
          headerStyle:styles.header,
          headerTitleAlign:"center",
          headerTintColor:colors.dark_salmon,
         
        }}
        
        
      />
       
      <Tab.Screen
        name="Anasayfa"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <IonIcon name="home" color={colors.dark_salmon} size={25} />
          ),
          
        }}
      />
      <Tab.Screen
        name="Kamera"
        component={CameraScreen}
        options={{
          tabBarIcon: () => (
            <MatIcon name="barcode-scan" color={colors.dark_salmon} size={25} />
          ),
          
        }}
      /><Tab.Screen
        name="Sepetim"
        component={CartScreen}
        options={{
          tabBarIcon: () => (
            <MatIcon name="shopping" size={25} color={colors.dark_salmon} />
          ),
          headerStyle:styles.header,
          headerTitleAlign:"center",
        
        }}
        
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor:colors.white,
    height:50, 
    
  },

})