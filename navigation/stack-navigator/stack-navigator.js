import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {CustomHeader, SheetBottom,StackModal} from '../../components';
import BottomTabs from '../bottom-tab/bottom-tab'
import DetailBottomsheet from '../../components/modal/DetailBottomSheet';
import MainBottomSheet from '../../components/modal/MainBottomSheet';
import RenameModal from '../../components/modal/RenameModal';
// import StackModal from '../../components/modal/StackModal';

const Stack = createStackNavigator();

export default function StackNavigator(){
    return (
      <>
        <Stack.Navigator
          initialRouteName="MainStack"
          screenOptions={{
            headerShown:false
          }}>
          <Stack.Screen name="MainStack" component={BottomTabs} />
          <Stack.Screen name="Modal" component={StackModal} options={{ headerShown: false }}/>
        </Stack.Navigator>
        <MainBottomSheet />
        <DetailBottomsheet />
        <RenameModal />
      </>
    );
}

// header: (props) => <CustomHeader {...props} />,