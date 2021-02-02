import React, {createContext, useState} from 'react';
import firebase from '@react-native-firebase/app'
export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {

  //auth global state
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [Id, setId] = useState()

  // get current user id
//   const user = firebase.auth().currentUser;

//   if (user) {
//       setId(user.id)
//     console.log('User id: ', user.id);
//   }
  console.log(isSignedIn, 'global state');
  return (
    <GlobalContext.Provider value={[isSignedIn, setIsSignedIn]}>
      {children}
    </GlobalContext.Provider>
  );
};
