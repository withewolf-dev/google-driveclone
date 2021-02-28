import React, {useRef} from 'react';
import { Button, StyleSheet,Text,TouchableOpacity, View } from 'react-native';
import {Modalize} from 'react-native-modalize';
import { FolderButton } from '../button/folder-button';
import { ScanButton } from '../button/scan-button';
import { UploadButton } from '../button/upload-button';

export default function MainBottomSheet() {
  const modalref = useRef(null);

  return (
      <>
      <TouchableOpacity style={s.fab} onPress={()=>modalref.current?.open()}>
          <Text >Opeasdasdn</Text>
      </TouchableOpacity>      
         <Modalize   velocity={4000} threshold={20} modalHeight={200} withHandle={false} ref={modalref}>
      <View style={s.content}> 
          <FolderButton/>
          <UploadButton/>
          <ScanButton/>
      </View>
  </Modalize>
  </>
  );
}

const s = StyleSheet.create({
    content:{
        padding:20,
        paddingVertical:50,
        flexDirection:"row",   
        justifyContent:"space-around"    ,
        alignItems:"center" 
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom:40,
      },
})