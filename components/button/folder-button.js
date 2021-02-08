import React from 'react'
import { View } from 'react-native'
import { IconButton,Colors } from 'react-native-paper'

export  function FolderButton() {
    return (
        <View>
             <IconButton
            icon="folder"
            color={Colors.red500}
            size={30}
            onPress={() => console.log('Pressed')}
          />
        </View>
    )
}
