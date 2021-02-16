import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { IconButton,Colors, Button } from 'react-native-paper'
import storage from '@react-native-firebase/storage';
import { GlobalContext } from '../../Global/Global-state';

export  function ScanButton() {

  const reference = storage().ref('black-t-shirt-sm.png');

  const {visible,setvisible} = useContext(GlobalContext)

    return (
        <View>
             <IconButton
            icon="magnify-scan"
            color={Colors.red500}
            size={30}
            onPress={()=>setvisible(!visible)}
          />
        </View>
    )
}
