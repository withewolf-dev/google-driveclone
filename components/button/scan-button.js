import React from 'react'
import { View } from 'react-native'
import { IconButton,Colors, Button } from 'react-native-paper'
import storage from '@react-native-firebase/storage';

export  function ScanButton() {

  const reference = storage().ref('black-t-shirt-sm.png');

    return (
        <View>
             <IconButton
            icon="magnify-scan"
            color={Colors.red500}
            size={30}
            onPress={async () => {
              // path to existing file on filesystem
              const pathToFile = `${utils.FilePath.PICTURES_DIRECTORY}/black-t-shirt-sm.png`;
              // uploads file
              await reference.putFile(pathToFile);}}
          />
          
        </View>
    )
}
