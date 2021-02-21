import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { FileScreen, FileViewScreen, FolderScreen, HomeScreen } from '../../../screens';
import { GlobalContext } from '../../../Global/Global-state';


const Stack = createStackNavigator();

export default function FileStack() {

  const {Params,Screen} = useContext(GlobalContext)

  console.log(Screen);
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
        {/* <Stack.Screen name="Folder" component={FolderScreen} /> */}
        <Stack.Screen name="File" component={FileScreen} />
        <Stack.Screen name="FileViewScreen" component={FileViewScreen} />
      </Stack.Navigator>
    )
}
