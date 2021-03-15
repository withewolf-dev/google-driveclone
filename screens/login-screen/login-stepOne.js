import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react'
import { Text, View,StyleSheet,TouchableOpacity } from 'react-native'
import { Button, TextInput } from 'react-native-paper';
import { AuthContext } from '../../Global/Authglobal';
import {navigate} from '../../navigation/root-navigation/RootNavigation'

export  function LoginStepOne() {

    const {email,setemail} = useContext(AuthContext)

    const navigation =useNavigation()



    return (
      <View style={s.container}>
        <View>
          <Text style={{fontFamily: 'Roboto-Medium', fontSize: 30}}>Cloud</Text>
          <Text style={{fontFamily: 'Roboto-Regular', fontSize: 16}}>
            Enter You're Registered Email
          </Text>
          <TextInput
            style={s.input}
            mode="outlined"
            label="Enter email"
            value={email}
            onChangeText={(email) => setemail(email)}
          />
        </View>
        <View style={s.bottom}>
          <TouchableOpacity onPress={() => navigate('SignupStepOne')}>
            <Text style={{fontFamily: 'Roboto-Regular', fontSize: 16}}>
              Create account
            </Text>
          </TouchableOpacity>
          <Button
            mode="contained"
            onPress={() => {
              if (email !== null) {
                return;
              }
              navigation.navigate('LoginSteptwo');
            }}>
            Next
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
    bottom:{
        flexDirection:"row",
        justifyContent:"space-between"
    }

})