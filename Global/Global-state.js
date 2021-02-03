import React, {createContext, useState} from 'react';
export const GlobalContext = createContext();
import auth from '@react-native-firebase/auth';

export const GlobalProvider = ({children}) => {

  //auth global state
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [Id, setId] = useState()
  //const [User, setUser] = useState()

  const user = auth().currentUser;

  console.log(isSignedIn, 'global state');
  console.log(user && user.uid,"global user Id");

  return (
    <GlobalContext.Provider value={[isSignedIn, setIsSignedIn,Id,setId]}>
      {children}
    </GlobalContext.Provider>
  );
};
