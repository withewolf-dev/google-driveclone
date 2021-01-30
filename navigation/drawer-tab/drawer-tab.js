import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { DrawerContent} from '../../screens';
import StackNavigator from '../stack-navigator/stack-navigator';

const Drawer = createDrawerNavigator();

export default function DrawerTab() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      >
      <Drawer.Screen name="Drawer" component={StackNavigator} />
    </Drawer.Navigator>
  );
}
