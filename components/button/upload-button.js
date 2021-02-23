import React from 'react'
import {  View } from 'react-native'
import { IconButton,Colors } from 'react-native-paper'
import { Alert } from 'react-native'
import storage from '@react-native-firebase/storage';
import DocumentPicker from 'react-native-document-picker';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { useContext, useState } from 'react';
import { GlobalContext } from '../../Global/Global-state';
var RNFS = require('react-native-fs');


export  function UploadButton() {

  const {Path} = useContext(GlobalContext)

  const UploadFirebase =async()=>{


    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
     
  
 
      const file = await RNFS.readFile(res.uri, 'base64')
      console.log(file,"file3");
     
      const ref = storage().ref(res.name)
      const task = await ref.putString(file,"base64",{contentType:res.type})
      const link = await ref.getDownloadURL()

      console.log(task,"task");
      console.log(link,"link");

      firestore().collection('links').add({
        link:link,
        uid:auth().currentUser.uid,
        metaData:res.type,
        name:res.name,
        path:Path
      }).then((value)=>{
        console.log("added to firestore");
      }).catch((e)=>{
        console.log(e);
      })
      
      //setUploading(false);
      Alert.alert(
        'File uploaded!',
        'Your File has been uploaded to Firebase Cloud Storage!'
      );

    } 
    
    catch (err) {
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
        
           onPress={UploadFirebase}
          />
        </View>
    )
}