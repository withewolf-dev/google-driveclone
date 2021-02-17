import React from 'react'
import {  View } from 'react-native'
import { IconButton,Colors } from 'react-native-paper'
import {UploadFirebase} from '../../utils/Uploadfirebase'



export  function UploadButton() {


    return (
        <View>
             <IconButton
            icon="cloud-upload"
            color={Colors.red500}
            size={30}
        
           onPress={UploadFirebase}
          />
        </View>
    )
}