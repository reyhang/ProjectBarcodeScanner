import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import TabBarIcon from '../components/TabBarIcon'
import { colors } from '../constants'

const Tab = createBottomTabNavigator()

export default function TabNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen 
            name="Home"
             component={HomeScreen}
             options={{
                 tabBarIcon: () => <TabBarIcon name="home" color={colors.peachy_pluff} />
             }}
              />
        </Tab.Navigator>
    )
}
