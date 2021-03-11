import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {CustomHeader, SheetBottom} from '../../components';
import BottomTabs from '../bottom-tab/bottom-tab'
import DetailBottomsheet from '../../components/modal/DetailBottomSheet';
import MainBottomSheet from '../../components/modal/MainBottomSheet';
import RenameModal from '../../components/modal/RenameModal';
import SharedModal from '../../components/modal/SharedModal';
import ModalStack from '../../components/ModalStack';

const Stack = createStackNavigator();

export default function StackNavigator(){
    return (
      <>
        <Stack.Navigator
          initialRouteName="MainStack"
          screenOptions={{
            header: (props) => <CustomHeader {...props} />,
          }}>
          <Stack.Screen name="MainStack" component={BottomTabs} />
          <Stack.Screen name="Modal" component={ModalStack} options={{ headerShown: false }}/>
        </Stack.Navigator>
        <MainBottomSheet />
        <DetailBottomsheet />
        <RenameModal />
        <SharedModal />
      </>
    );
}