import { useNavigation } from '@react-navigation/native'
import React, { useContext, useState } from 'react'
import { Button, Text, View } from 'react-native'
import { GlobalContext } from '../../Global/Global-state';
import auth from '@react-native-firebase/auth';
import {Fab, SheetBottom} from '../../components'
import { TouchableOpacity } from 'react-native-gesture-handler';

export  function HomeScreen() {

     const navigation = useNavigation()

     const [isSignedIn, setIsSignedIn,Id]=useContext(GlobalContext)

     const onLogout =()=>{
        auth()
        .signOut()
        .then(() => {
        console.log("User account signed out")  
         setIsSignedIn(false)
        })}
    return (
        <>
        
        <View>
            <Text>home screen for id {Id}</Text>
            <Text>user</Text>
            <Button title="logout"  onPress={onLogout}>
                logout
            </Button>
            
        </View>
        <SheetBottom/>
        
        </>
    )
}
