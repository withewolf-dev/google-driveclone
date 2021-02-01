import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import { Button, TextInput } from 'react-native-paper';

export  function LoginScreen() {

    const [userName, setUserName] =useState('');
    const [password, setpassword] = useState('')

    const navigation =useNavigation()
    //const signup = navigation.navigate('signup')

    return (
        <View style={styles.container}>
            <TextInput
            style={styles.input}
            mode="outlined"
            label="Enter username"
            value={userName}
            onChangeText={userName => setUserName(userName)}
            />
            <TextInput style={styles.input} secureTextEntry={true} mode="outlined"
            label="Enter password"
            value={password}
            onChangeText={password => setpassword(password)} />
            <Button>
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