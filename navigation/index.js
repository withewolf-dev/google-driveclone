import React, { useContext } from 'react';
import { GlobalContext } from '../Global/Global-state';
import DrawerTab from './drawer-tab/drawer-tab';
import Auth from './auth/auth'

export default function Navigation() {
  
  const [isSignedIn,setIsSignedIn,example]=useContext(GlobalContext)

  console.log(isSignedIn);

  return (
    <>
    {isSignedIn && <DrawerTab/>}
    {!isSignedIn && <Auth/>}
    </>
  )
}
