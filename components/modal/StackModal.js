import React, { useContext, useState } from 'react'
import { View,Text,Button, StyleSheet,TextInput,Alert } from 'react-native'
import { navigationRef} from '../../navigation/root-navigation/RootNavigation'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import firestore from '@react-native-firebase/firestore'
import { Chip } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import { GlobalContext } from '../../Global/Global-state'


export   function StackModal() {

  const {Doclink} = useContext(GlobalContext)

  const [text, settext] = useState()
  const [arr,setArr]=useState([])

  const onShare =()=>{

    firestore().collection('shared').add({
      link:Doclink,
      from: auth().currentUser && auth().currentUser.email,
      To:arr
    }).then(()=>{console.log("shared");setArr([])}).catch((err)=>console.log(err))

  }




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
            <MaterialIcons name="person-add-alt" color={'#4a4a4a'} size={30} />
            <TextInput
              style={s.TextInput}
              autoFocus={true}
              placeholder="add people"
              value={text}
              onChangeText={(text)=>{settext(text)}}
              onKeyPress={(e)=> {if(e.nativeEvent.key === " "){
                console.log("space press");
                setArr([text.trim(),...arr])
                settext('')
               }}}
            />
          </View>
          <View style={s.row}>
            {arr && arr.map((n) => (
              <Chip
                style={{margin:2}}
                textStyle={{color: 'white', fontSize: 15}}
                onPress={() => Alert.alert('Clicked Chip')}>
                  {n}
              </Chip>
            ))}
            </View>
           
        </View>
        <View>
          <Button onPress={onShare} title="Share" />
        </View>
      </View>
    );
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
    },
    row:{
    flexDirection: "row",
    flexWrap: "wrap",
    }
  });