import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {CustomHeader, SheetBottom} from '../../components';
import BottomTabs from '../bottom-tab/bottom-tab'

const Stack = createStackNavigator();

export default function StackNavigator(){
    return(
        <Stack.Navigator
        initialRouteName="MainStack"
        screenOptions={{
          header: (props) => <CustomHeader {...props} />,
        }}>
        <Stack.Screen name="MainStack" component={BottomTabs} />
      </Stack.Navigator>
    )
}