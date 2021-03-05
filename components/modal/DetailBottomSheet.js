import React, {useContext, useEffect, useRef, useState} from 'react';
import { Button, StyleSheet,Text,TouchableOpacity, View } from 'react-native';
import {Modalize} from 'react-native-modalize';
import { GlobalContext, GlobalProvider } from '../../Global/Global-state';
import { useFirstRender } from '../../utils/FirstRender';


export default function DetailBottomsheet() {

    const {detailRef,setdetailRef} = useContext(GlobalContext)
    const detailSheet = useRef(null);
    const firstRender = useRef(true)    

    useEffect(() => {

        if (firstRender.current) {
            firstRender.current = false;
          } else {
            detailSheet.current?.open()
          }
        
    }, [detailRef])

  return (
      <>
      <TouchableOpacity style={s.fab}>
          <Text >Opeasdasdn</Text>
      </TouchableOpacity>      
         <Modalize modalHeight={500} withHandle={false} ref={detailSheet}>
      <View style={s.content}> 
         <Text>this is the detail screen</Text>
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