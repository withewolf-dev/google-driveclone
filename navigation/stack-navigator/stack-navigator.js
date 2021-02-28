import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {CustomHeader, SheetBottom} from '../../components';
import BottomTabs from '../bottom-tab/bottom-tab'
import { DetailModal } from '../../components/modal/DetailModal';
import { Portal } from 'react-native-paper';
import MainBottomSheet from '../../components/modal/MainBottomSheet';

const Stack = createStackNavigator();

export default function StackNavigator(){
    return(
      <>
        <Stack.Navigator
        initialRouteName="MainStack"
        screenOptions={{
          header: (props) => <CustomHeader {...props} />,
        }}>
        <Stack.Screen name="MainStack" component={BottomTabs} />
      </Stack.Navigator>
      <MainBottomSheet/>
      
      </>
    )
}