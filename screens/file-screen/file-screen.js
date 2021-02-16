import * as React from 'react';
import {StyleSheet, Text, View,Modal, TouchableOpacity, TouchableWithoutFeedback, Button} from 'react-native';
import { GlobalContext } from '../../Global/Global-state';

export function FileScreen() {

  const [IsVisible, setIsVisible] = React.useState(true)

  return (
    <>
      <View style={{flex:1}}>
        <Button title="toggle" />
      </View>
    </>
  );
}
  