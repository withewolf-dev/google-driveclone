import React from 'react'
import {Text, View, FlatList, Image, StyleSheet,TouchableOpacity} from 'react-native';
import Pdf from 'react-native-pdf';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon  from 'react-native-vector-icons/Entypo';

export  function ItemViews({item}) {
    return (
        <>
        {item && item.metaData === 'image/jpeg' && (
          <View style={styles.card}>
            <View style={styles.header}>
              <Icon style={{color:"#bc6c6c"}} name="image"size={30}/>
              <Text style={{fontSize:20,color:"white"}} >nameiosloaskiokas...jpg</Text>
              <TouchableOpacity>
              <EntypoIcon style={styles.icon} name="dots-three-vertical" size={20}/>
              </TouchableOpacity>
            </View>
              <View style={styles.content}>
                  <Image style={{height:140}} source={{uri:item.link}} />
              </View>
          </View>
        )}
        {item && item.metaData === 'application/pdf' && (
          <View>
            {!item.link && <Text>loading</Text>}
            <Pdf
              singlePage={true}
              singlePage={true}
              style={{height: 150}}
              source={{uri: item.link}}
            />
          </View>
        )}
      </>
    )
}


const styles = StyleSheet.create({
    card: {
      backgroundColor: '#2c2c2c',
      height:210,
    },
    content: {
      marginHorizontal:15,
      marginTop:5,
      height: 140,
      borderTopRightRadius:5,
      borderTopLeftRadius:5,
      borderBottomLeftRadius:5,
      borderBottomRightRadius:5,
  
    },
    title: {
      flex:1,
      height:30,
      backgroundColor:"grey"
    },
    icon: {
      color:"white",
      padding:5
    },
    header: {
      marginHorizontal:15,
      marginTop:10,
      height:30,
      flexDirection: 'row',
      justifyContent: 'space-between',
      
    },
    prototype:{
      height:30,
      width:40,
      paddingHorizontal:20,
      backgroundColor:"gray"
    }
  });
  