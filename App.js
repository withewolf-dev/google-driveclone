import React from 'react';
import 'react-native-gesture-handler';
import Navigation from './navigation';
import {NavigationContainer} from '@react-navigation/native';
import {GlobalProvider} from './Global/Global-state';
import {Portal, Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <>

      <PaperProvider>
        <GlobalProvider>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </GlobalProvider>
      </PaperProvider>

    </>
  );
};

export default App;
