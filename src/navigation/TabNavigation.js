import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import CameraScreen from '../screens/CameraScreen';
import ProductScreen from "../screens/ProductScreen"
import TabBarIcon, { CartIcon } from '../components/Icons';
import {colors, fonts} from '../constants';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Anasayfa"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <TabBarIcon name="home" color={colors.peachy_pluff} />
          ),
        }}
      />
      <Tab.Screen
        name="Kamera"
        component={CameraScreen}
        options={{
          tabBarIcon: () => (
            <TabBarIcon name="camera" color={colors.peachy_pluff} />
          ),
        }}
      />
      <Tab.Screen
        name="Sepetim"
        component={CartScreen}
        options={{
          tabBarIcon: () => (
            <CartIcon size={23} color={colors.peachy_pluff} />
          ),
          headerStyle:styles.header,
          headerTitleAlign:"center",
          headerTintColor:colors.dark_salmon      
        }}
        
      />
       <Tab.Screen
        name="Ürünler"
        component={ProductScreen}
        options={{
          tabBarIcon: () => (
            <TabBarIcon name="shirt" color={colors.peachy_pluff} />
          ),
          headerStyle:styles.header,
          headerTitleAlign:"center",
          headerTintColor:colors.dark_salmon      
        }}
        
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor:colors.white,
    height:50,
    
  }
})