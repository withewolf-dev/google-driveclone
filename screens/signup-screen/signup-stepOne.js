import {useNavigation} from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { View, StyleSheet,Button} from 'react-native';
import {TextInput,Text} from 'react-native-paper';

import { AuthContext } from '../../Global/Authglobal';

export function SignupStepOne() {

  const {fullName, setfullName,userName, setUserName} = useContext(AuthContext)
  //global states
  const navigation = useNavigation();



  return (
    <View style={styles.container}>
     <View>
     <Text style={{color:"black"}}>Cloud</Text>
      <Text style={{color:"black"}}>Create a Cloud account</Text>
      <TextInput  
        style={styles.input}
        mode="outlined"
        label="Enter fullname"
        value={fullName}
        onChangeText={(fullName) => setfullName(fullName)}
      />
      <TextInput
        style={styles.input}
        mode="outlined"
        label="Enter username"
        value={userName}
        onChangeText={(userName) => setUserName(userName)}
      />
     </View>
      <Button title="Next" onPress={()=>navigation.navigate('SignupStepTwo')}>
          next
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:20,
    justifyContent:"space-between"
  },
  input:{
    //height:60,
    width:350,
    marginTop:20,
}
});
