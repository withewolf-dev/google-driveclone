import {useNavigation} from '@react-navigation/native';
import React, { useContext } from 'react';
import { View, StyleSheet,Button} from 'react-native';
import {TextInput,Text} from 'react-native-paper';
import { AuthContext } from '../../Global/Authglobal';

export function SignupStepThree() {


    const {email, setemail,onSignup} = useContext(AuthContext)
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
        label="Email"
        value={email}
        onChangeText={(email) => setemail(email)}
      /> 
     </View>
      <Button title="Sign up" onPress={onSignup}>
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
    width:350,
    marginTop:20,
}
});
