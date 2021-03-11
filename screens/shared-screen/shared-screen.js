import * as React from 'react';
import { Modal, Portal, Provider,TextInput } from 'react-native-paper';
import {  View, KeyboardAvoidingView, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard, SafeAreaView,ScrollView,Dimensions,TouchableOpacity  } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export const SharedScreen = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <View style={{flex:1,justifyContent:"space-between"}}>
      <TextInput autoFocus={true} placeholder="ajs"/>
      <Button title="click me"/>
    </View>
  );
};



const s = StyleSheet.create({
  content: {
    height: 850,
    padding: 20,
    justifyContent:"space-between"
    //margin:5,
    //marginHorizontal:10,
  },
  box: {
    marginTop:30,
  },
  header:{
      flexDirection:"row",
      alignItems:"center",
  },
  inputView:{
    marginTop:10,
    flexDirection:"row",
    alignItems:"center",
  },
  TextInput:{
      width:340,
      height:50,
      marginLeft:10
  }
});

