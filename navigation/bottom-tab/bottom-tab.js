import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SharedScreen, StarredScreen } from '../../screens';
import HomeStack from '../stack-navigator/home-stack/home-stack'


const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
   >     
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Starred" component={StarredScreen} />
      <Tab.Screen name="Shared" component={SharedScreen} />
    </Tab.Navigator>
  );
}