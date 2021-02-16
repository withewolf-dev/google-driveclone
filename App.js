import React from 'react';
import 'react-native-gesture-handler';
import Navigation from './navigation';
import {NavigationContainer} from '@react-navigation/native';
import {Modal, Portal, Provider as PaperProvider} from 'react-native-paper';
import {GlobalProvider} from './Global/Global-state';
import { navigationRef } from './navigation/root-navigation/RootNavigation';

const App = () => {
  return (
    <>
      <GlobalProvider>
        <PaperProvider>
          <NavigationContainer ref={navigationRef}>
            <Navigation />
          </NavigationContainer>
        </PaperProvider>
      </GlobalProvider>
    </>
  );
};

export default App;
