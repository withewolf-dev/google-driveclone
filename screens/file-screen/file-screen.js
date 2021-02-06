import * as React from 'react';
import {StyleSheet, Text, View,Modal, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

export function FileScreen() {

  const [IsVisible, setIsVisible] = React.useState(true)
  return (
    <>
      <View style={{flex:1}}>
        <Modal animationType="slide" visible={IsVisible}  transparent={true}>
            <TouchableOpacity onPress={()=>setIsVisible(false)} style={{flex:1, justifyContent:"center",alignItems:"center"}}>
              <TouchableWithoutFeedback>
              <View style={{height:"30%",width:"70%",backgroundColor:"white"}}></View>
              </TouchableWithoutFeedback>
            </TouchableOpacity>
        </Modal>
      </View>
    </>
  );
}
  