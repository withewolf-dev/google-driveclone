import {useNavigation} from '@react-navigation/native';
import React, { useContext, useState,useEffect } from 'react';
import { View, StyleSheet,Button} from 'react-native';
import {TextInput,Text} from 'react-native-paper';
import { AuthContext } from '../../Global/Authglobal';

export function SignupStepTwo() {

const {password, setpassword,confirmPassword, setconfirmPassword} = useContext(AuthContext)

    const [error,seterror]=useState(false)
    const [disable,setDisable]=useState(false)

  //global states
  const navigation = useNavigation();

 const PasswordChechk=()=>{

    if(password !== confirmPassword ){
        setDisable(true);
        seterror(true)
    } else{
        navigation.navigate('SignupStepThree')
    }
 }

 useEffect(() => {
    if(password !== null && confirmPassword !== null){
        setDisable(false);
        seterror(false)
    }
 }, [password,confirmPassword])

  return (
    <View style={styles.container}>
     <View>
     <Text style={{color:"black"}}>Cloud</Text>
      <Text style={{color:"black"}}>Create Your Password</Text>
      <TextInput
        style={styles.input}
        mode="outlined"
        label="Enter password"
        value={password}
        onChangeText={(password) => setpassword(password)}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        mode="outlined"
        label="re-enter password"
        value={confirmPassword}
        onChangeText={(confirmPassword) => setconfirmPassword(confirmPassword)}
        secureTextEntry={true}/>
        <View style={{flex:1,alignItems:"center"}}>
            {error && <Text>password doesn't match</Text>}
        </View>
     </View>
      <Button title="Next"  disabled={disable} onPress={PasswordChechk}>
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
   // height:40,
    width:350,
    marginTop:20,
}
});
