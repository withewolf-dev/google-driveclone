import React from 'react'
import { StyleSheet, View,TouchableOpacity, Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import EntypoIcon  from 'react-native-vector-icons/Entypo';


export  function SharedListView({item}) {

    console.log(item,"item");
    return (
        <>
        {item && 
            <View style={s.screen}>
            <View style={s.card}>
              <View style={s.smiley}>
                <AntDesign name="smileo" size={30} />
                <SimpleLineIcons name="emotsmile" size={30} />
              </View>
              <View>
                <Text>{item.name}</Text>
                <View style={{flexDirection:"row",alignItems:"center"}}>
                <Text style={{fontSize:10}}>simon sochken</Text>
                <Text style={{fontSize:9}}>24 nov</Text>
                </View>
               
              </View>
              <TouchableOpacity>
                <EntypoIcon name="dots-three-vertical" size={15}/>
              </TouchableOpacity>
              <View>
      
              </View>
            </View>
          </View>
        }
        </>
    )
}


const s = StyleSheet.create({
    screen:{
      flex:1,
      padding:10
    },
    smiley:{
      flexDirection:"row",
    },
    card:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between"
    }
  });
  