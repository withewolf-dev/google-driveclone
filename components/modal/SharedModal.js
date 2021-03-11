import React,{useContext, useEffect, useRef} from 'react';
import { Modal} from 'react-native-paper';
import { GlobalContext } from '../../Global/Global-state';
import firestore from '@react-native-firebase/firestore'
import {  View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard, SafeAreaView,ScrollView,Dimensions,TouchableOpacity  } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'



const SharedModal = ({navigation}) => {

  const [visible, setVisible] = React.useState(false);
  const {sharedfunction,DocId} = useContext(GlobalContext)
 
  const [text, setText] = React.useState('');


  const firstRender = useRef(true)
 
  const containerStyle = {backgroundColor: '#f0f0f0'};

 useEffect(() => {
     if(firstRender.current){
         firstRender.current = false;
     } else{
         setVisible(true)
     }
 }, [sharedfunction])


  return (

    <Modal
      visible={visible}
      onDismiss={() => setVisible(false)}
      contentContainerStyle={containerStyle} >
        <View style={s.content}>
          <View style={s.box}>
            <View style={s.header}>
              <MaterialIcons
                name="close"
                color={'#4a4a4a'}
                onPress={() => setVisible(false)}
                size={30}
              />
              <Text
                style={{
                  fontSize: 20,
                  marginLeft: 10,
                  textDecorationColor: '#4a4a4a',
                }}>
                Share
              </Text>
            </View>
            <View style={s.inputView}>
              <MaterialIcons
                name="person-add-alt"
                color={'#4a4a4a'}
                size={30}
              />
              <TextInput style={s.TextInput} autoFocus={true} placeholder="add people" />
            </View>
          </View>
          <View>
            <Button title="click me">click here</Button>
          </View>
        </View>
   

    </Modal>

  );
};
export default SharedModal;


const s = StyleSheet.create({
  content: {
    height: 850,
    padding: 20,
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











































