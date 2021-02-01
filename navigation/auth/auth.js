import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, SignupScreen } from '../../screens';

const Stack = createStackNavigator();



export default function Auth() {
    return (
        <Stack.Navigator initialRouteName="login" >
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signup" component={SignupScreen} />
      </Stack.Navigator>
    )
}
