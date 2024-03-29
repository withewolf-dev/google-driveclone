import React, { useContext } from 'react';
import { SharedScreen, StarredScreen} from '../../screens';
import HomeStack from '../stack-navigator/home-stack/home-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FileStack from '../stack-navigator/file-stack/file-stack';


const Tab = createMaterialBottomTabNavigator();

export default function BottomTabs() {

  return (
    <>
    <Tab.Navigator
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
        name="FileStack"
        component={FileStack}
      />
    </Tab.Navigator>

  </>
  );
}