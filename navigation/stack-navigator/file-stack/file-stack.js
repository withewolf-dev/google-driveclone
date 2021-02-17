import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { FileScreen, FileViewScreen, HomeScreen } from '../../../screens';
import DetailsScreen from '../../../screens/details-screen/details-screen';
import { GlobalProvider } from '../../../Global/Global-state';

const Stack = createStackNavigator();

export default function FileStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
          }} initialRouteName="Home">
        <Stack.Screen name="File" component={FileScreen} />
        <Stack.Screen name="FileView" component={FileViewScreen} />
      </Stack.Navigator>
    )
}
