import React from 'react';
import 'react-native-gesture-handler';
import Navigation from './navigation';
import {NavigationContainer} from '@react-navigation/native';
import {Modal, Portal, Provider as PaperProvider} from 'react-native-paper';
import {GlobalProvider} from './Global/Global-state';
import { navigationRef } from './navigation/root-navigation/RootNavigation';
import { AuthProvider } from './Global/Authglobal';
import { CustomHeader } from './components';

const App = () => {
  return (
    <>
    <PaperProvider>
    <AuthProvider>
      <GlobalProvider>
          <NavigationContainer ref={navigationRef}>
            <Navigation />
          </NavigationContainer>
      </GlobalProvider>
      </AuthProvider>
      </PaperProvider>
    </>
  );
};

export default App;
