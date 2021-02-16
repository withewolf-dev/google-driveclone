import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { GlobalContext, GlobalProvider } from '../../Global/Global-state'

export  function SharedScreen() {

    const {visible,setvisible} = useContext(GlobalContext)
    return (
        <>
        <View>
             {visible && <Text>{'exampleOne'}</Text>}
             <Button title="toggle" onPress={()=>setvisible(!visible)}/>
        </View>
        
        </>
    )
}
