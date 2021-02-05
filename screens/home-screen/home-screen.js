import { useNavigation } from '@react-navigation/native'
import React, { useContext, useState } from 'react'
import { Button, Text, View } from 'react-native'
import { GlobalContext } from '../../Global/Global-state';
import auth from '@react-native-firebase/auth';
import {Fab, SheetBottom} from '../../components'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

export  function HomeScreen() {

    const fall = new Animated.Value(1);

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
        <Animated.View style={{margin:20,
        opacity: Animated.add(0.3,Animated.multiply(fall,1.0))
        }}>
        <View>
            <Text>home screen for id {Id}</Text>
            <Text>user</Text>
            <Button title="logout"  onPress={onLogout}>
                logout
            </Button>
            
        </View>
        </Animated.View>
        {/* <SheetBottom/> */}
        
        </>
    )
}
