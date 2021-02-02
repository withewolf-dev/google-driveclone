import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import { Button, TextInput } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import { GlobalContext } from '../../Global/Global-state';

export  function LoginScreen() {

    const [email, setemail] =useState('');
    const [password, setpassword] = useState('')

    const [isSignedIn,setIsSignedIn] =useContext(GlobalContext)

    const navigation =useNavigation()
    //const signup = navigation.navigate('signup')


    const onSignIn =()=>{
        auth().signInWithEmailAndPassword(email,password).then(() => {
            console.log('User account  signed in!');
            setIsSignedIn(true)
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
    }
    return (
        <View style={styles.container}>
            <TextInput
            style={styles.input}
            mode="outlined"
            label="Enter email"
            value={email}
            onChangeText={email => setemail(email)}
            />
            <TextInput style={styles.input} secureTextEntry={true} mode="outlined"
            label="Enter password"
            value={password}
            onChangeText={password => setpassword(password)} />
            <Button onPress={onSignIn}>
                Login in
            </Button>
            <Button onPress={()=>navigation.navigate('signup')}>
                Sign up?
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        marginBottom:100,
    },
    input:{
        width:350,
        marginTop:20,
    }

})