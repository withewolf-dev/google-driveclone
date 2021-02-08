import React, { useState } from 'react'
import { Platform, View } from 'react-native'
import { IconButton,Colors } from 'react-native-paper'
import storage from '@react-native-firebase/storage';
import { utils,firebase} from '@react-native-firebase/app';
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob'

export  function UploadButton() {

  const [File, setFile] = useState(null)
  const [Uploading, setUploading] = useState(false)
  const [Transferred, setTransferred] = useState(0)


   const testing = async()=>{
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
     

      const task = storage()
      .ref('testing')
      .putFile(res.uri)

      console.log(decodeURIComponent(res.uri));

      task.on('state_changed', snapshot => {
        setTransferred(
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
        );
      });
      try {
        await task;
      } catch (e) {
        console.error(e);
      }
      setUploading(false);
      Alert.alert(
        'File uploaded!',
        'Your File has been uploaded to Firebase Cloud Storage!'
      );

    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
    

   }



   
    return (
        <View>
             <IconButton
            icon="cloud-upload"
            color={Colors.red500}
            size={30}
        
           onPress={testing}
          />
        </View>
    )
}
