import * as React from 'react';
import { Button, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { GlobalContext } from '../../Global/Global-state';
import {navigate} from '../../navigation/root-navigation/RootNavigation'

export const Fab = ({onFabPress}) => {

  const {visible,setvisible} = React.useContext(GlobalContext)
return(
 
  <FAB
    style={styles.fab}
    small
    icon="plus"
    onPress={onFabPress}
  />
)
}

  

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom:60,
  },
})

