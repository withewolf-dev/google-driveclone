import React, { useContext, useState } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import { Button, TextInput } from 'react-native-paper';
import {AuthContext} from '../../Global/Authglobal'

export  function LoginSteptwo() {

 
    const {password,setpassword,onSignIn} = useContext(AuthContext)


    return (
      <View style={s.container}>
        <View>
          <Text style={{fontFamily: 'Roboto-Medium', fontSize: 30}}>Cloud</Text>
          <Text style={{fontFamily: 'Roboto-Regular', fontSize: 16}}>
            Enter You're Password
          </Text>
          <TextInput
            style={s.input}
            secureTextEntry={true}
            mode="outlined"
            label="Enter password"
            value={password}
            onChangeText={(password) => setpassword(password)}
          />
        </View>
        <View style={{flexDirection:"row",justifyContent:"flex-end"}}>
        <Button
          mode="contained"
          onPress={onSignIn}>
          Sign In
        </Button>
        </View>
       
      </View>
    );
}

const s = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:20,
        paddingVertical:5,
        justifyContent:"space-between"
    },
    input:{
        width:350,
        marginTop:20,
    },
    botton:{
        flexDirection:"row",
        justifyContent:"space-between"
    }

})