import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../../../screens';
import DetailsScreen from '../../../screens/details-screen/details-screen';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
          }} initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    )
}
