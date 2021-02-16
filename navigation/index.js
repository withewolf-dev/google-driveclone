import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../Global/Global-state';
import DrawerTab from './drawer-tab/drawer-tab';
import Auth from './auth/auth'
import auth from '@react-native-firebase/auth';

export default function Navigation() {
  

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <Auth/>
    );
  }

  return (
    <DrawerTab/>
  );

}
