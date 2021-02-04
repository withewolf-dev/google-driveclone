import {useNavigation} from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { View, StyleSheet} from 'react-native';
import {TextInput,Button} from 'react-native-paper';
import Auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import { GlobalContext } from '../../Global/Global-state';

export function SignupScreen() {

  //global states
  const [sSignedIn, setIsSignedIn] =useContext(GlobalContext)

  const navigation = useNavigation();

  const usersCollection = firestore().collection('Users');

  const [fullName, setfullName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [email, setemail] = useState('');

  const onSignup=()=>{
      if(password !== confirmPassword){
          return
      }

      Auth().createUserWithEmailAndPassword(email,password).then((data) => {
        console.log('User account created & signed in!');
        firestore()
          .collection('Users')
          .add({
            name: fullName,
            username:userName,
            email:email,
            uid:data.user.uid
          })
          .then(() => {
            console.log('User added!');
          });
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
    
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
    
        console.error(error);
      });
      setfullName('')
      setemail('')
      setpassword('')
      setconfirmPassword('')
      setUserName('')
      setIsSignedIn(true)
  }
  return (
    <View style={styles.container}>
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
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        mode="outlined"
        label="Email"
        value={email}
        onChangeText={(email) => setemail(email)}
      />
      <Button onPress={onSignup}>
          sign up
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
  },
  input:{
    width:350,
    marginTop:20,
}
});
