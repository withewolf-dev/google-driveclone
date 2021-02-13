import React from "react"
import { DrawerActions } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
import { Avatar } from 'react-native-paper';

export  function CustomHeader(props) {

  return (
  
    <View  style={styles.bottom}>
      <IconButton
      style={styles.menu}
       icon="menu"
      color={Colors.grey300}
      size={25}
      onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}  />
      <Text style={styles.text}>
        Search Drive
      </Text>
      <Avatar.Image style={styles.image} size={30} source={{ uri:'https://images.unsplash.com/photo-1611817757571-75fe5c08ffd9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'}} />
    </View>
   
  );
}


const styles = StyleSheet.create({
  bottom: {
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginTop:5,
    marginLeft:10,
    marginRight:10,
    height: 40,
    backgroundColor:"#333333"
  },
  menu:{
    
    alignItems:"center"
  },
  text:{
    fontSize:20,
    color:"white"
  },
  image:{
    marginRight:5,
  }
});