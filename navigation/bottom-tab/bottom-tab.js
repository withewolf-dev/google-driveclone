import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FileScreen, SharedScreen, StarredScreen} from '../../screens';
import HomeStack from '../stack-navigator/home-stack/home-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Portal } from 'react-native-paper';
import { SheetBottom } from '../../components';

const Tab = createMaterialBottomTabNavigator();

export default function BottomTabs() {
  const sheetRef = React.useRef(null);

  return (
    <>
    <Tab.Navigator
      //ref={ref}
      initialRouteName="Feed"
      activeColor="#81d4fa"
      barStyle={{ backgroundColor: '#333333' }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
        name="Home"
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Starred',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="star" color={color} size={26} />
          ),
        }}
        name="Starred"
        component={StarredScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Shared',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-multiple" color={color} size={26} />
          ),
        }}
        name="Shared"
        component={SharedScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'File',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="folder" color={color} size={26} />
          ),
        }}
        name="File"
        component={FileScreen}
      />
      
    </Tab.Navigator>
    <Portal>
      <SheetBottom sheetref={sheetRef}/>
    </Portal>
  </>
  );
}