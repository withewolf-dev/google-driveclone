import React from 'react';
import 'react-native-gesture-handler';
import Navigation from './navigation';
import {NavigationContainer} from '@react-navigation/native';
import { GlobalProvider } from './Global/Global-state';



const App=() => {

  return (
    <GlobalProvider>
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
    </GlobalProvider>

  );
};



export default App;
