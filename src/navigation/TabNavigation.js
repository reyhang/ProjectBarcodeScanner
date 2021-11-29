import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import CameraScreen from '../screens/CameraScreen';
import IonIcon, { MatIcon } from '../components/Icons';
import {colors} from '../constants';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  
  return (
    <Tab.Navigator>
       <Tab.Screen
        name="Sepetim"
        component={CartScreen}
        options={{
          tabBarIcon: () => (
            <MatIcon name="shopping" size={23} color={colors.peachy_pluff} />
          ),
          headerStyle:styles.header,
          headerTitleAlign:"center",
          headerTintColor:colors.dark_salmon      
        }}
        
      />
      <Tab.Screen
        name="Anasayfa"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <IonIcon name="home" color={colors.peachy_pluff} size={23} />
          ),
        }}
      />
      <Tab.Screen
        name="Kamera"
        component={CameraScreen}
        options={{
          tabBarIcon: () => (
            <MatIcon name="barcode-scan" color={colors.peachy_pluff} size={23} />
          ),
          
        }}
      />
     
{/*        <Tab.Screen
        name="Ürünler"
        component={ProductScreen}
        options={{
          tabBarIcon: () => (
            <IonIcon name="shirt" color={colors.peachy_pluff} />
          ),
          headerStyle:styles.header,
          headerTitleAlign:"center",
          headerTintColor:colors.dark_salmon      
        }}
        
      /> */}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor:colors.white,
    height:50,
    
  }
})