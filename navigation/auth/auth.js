import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { LoginStepOne, LoginSteptwo, LoginStepTwo, SignupStepOne, SignupStepThree, SignupStepTwo } from '../../screens';

const Stack = createStackNavigator();



export default function Auth() {
    return (
        <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="LoginStepOne" component={LoginStepOne} />
        <Stack.Screen name="LoginSteptwo" component={LoginSteptwo}/>
        <Stack.Screen name="SignupStepOne" component={SignupStepOne} />
        <Stack.Screen name="SignupStepTwo" component={SignupStepTwo} />
        <Stack.Screen name="SignupStepThree" component={SignupStepThree} />
      </Stack.Navigator>
    )
}
