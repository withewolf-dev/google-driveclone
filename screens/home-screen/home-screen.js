import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'

export  function HomeScreen() {

     const navigation = useNavigation()
     console.log(navigation);
    return (
        
        <View>
            <Text>home screen</Text>
            <Button title="go to detail"  onPress={()=>navigation.navigate("Details")}>
                go to detail
            </Button>
        </View>
    )
}
