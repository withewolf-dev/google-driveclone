import React from 'react'
import { View,Text,Button, StyleSheet,TextInput } from 'react-native'
import { navigationRef} from '../navigation/root-navigation/RootNavigation'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function ModalStack() {
    return (
        <View style={s.content}>
          <View style={s.box}>
            <View style={s.header}>
              <MaterialIcons
                name="close"
                color={'#4a4a4a'}
                onPress={() => navigationRef.current.goBack()}
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
          <Button onPress={() => navigationRef.current.goBack()} title="Dismiss" />
          </View>
        </View>
      
    )
}


const s = StyleSheet.create({
    content: {
      //height: 850,
      flex:1,
      padding: 20,
      justifyContent:"space-between"
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