import { useNavigation } from '@react-navigation/native'
import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { GlobalContext } from '../../Global/Global-state';
import auth from '@react-native-firebase/auth';


export  function HomeScreen() {

     const navigation = useNavigation()

     const [isSignedIn, setIsSignedIn]=useContext(GlobalContext)

     const onLogout =()=>{
        auth()
        .signOut()
        .then(() => {
        console.log("User account signed out")  
         setIsSignedIn(false)
        })}
    return (
        
        <View>
            <Text>home screen for id </Text>
            <Button title="logout"  onPress={onLogout}>
                logout
            </Button>
        </View>
    )
}
