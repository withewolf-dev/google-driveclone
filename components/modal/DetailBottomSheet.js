import React, {useContext, useEffect, useRef, useState} from 'react';
import { StyleSheet,Text,TouchableOpacity, View } from 'react-native';
import {Modalize} from 'react-native-modalize';
import { GlobalContext} from '../../Global/Global-state';
import Icons from 'react-native-vector-icons/MaterialIcons'
import { FunctionCopyLink, FunctionMakeCopy, FunctionOffline} from '../functions';
import { navigationRef} from '../../navigation/root-navigation/RootNavigation'


export default function DetailBottomsheet() {

    const {
      detailRef,
      download,
      setDownload,
      starred,
      setstarred,
      setRenameModalState,
      RenameModalState,
      setsharedfunction,
      sharedfunction,
    } = useContext(GlobalContext);

    const detailSheet = useRef(null);
    const firstRender = useRef(true)    

    useEffect(() => {

        if (firstRender.current) {
            firstRender.current = false;
          } else {
            detailSheet.current?.open()
          }
        
    }, [detailRef])


    
  const list = [
    {
      id: '0',
      title: 'share',
      icons: 'mobile-screen-share',
      func: (()=>{navigationRef.current.navigate('Modal');detailSheet.current?.close()})
    },
    {
      id: '2',
      title: 'add to Starred',
      icons: 'star-outline',
      func: (()=>{setstarred(!starred); detailSheet.current?.close()}),
    },
    {
      id: '3',
      title: 'Make available offline',
      icons: 'portable-wifi-off',
      func: FunctionOffline,
    },
    {
      id: '4',
      title: 'copy link',
      icons: 'link',
      func: FunctionCopyLink,
    },
    {
      id: '5',
      title: 'make a copy',
      icons: 'content-copy',
      func: FunctionMakeCopy,
    },
    {
      id: '6',
      title: 'Download',
      icons: 'file-download',
      func: (()=>{setDownload(!download); detailSheet.current?.close()}),
    },
    {
      id: '7',
      title: 'Rename',
      icons: 'drive-file-rename-outline',
      func: (()=>{setRenameModalState(!RenameModalState); detailSheet.current?.close()}),
    },
  ];


  const getData = () => (list);

  const renderItem = ({item}) => (
    <View style={s.content}>
          <View key={item.id}>
            <TouchableOpacity onPress={item.func} style={s.touchOpacity}>
                <Icons style={{margin:2}} name={item.icons} size={20}/>
              <Text>{item.title}</Text>
            </TouchableOpacity>
          </View> 
      </View>
  );


  return (
    <>
      <Modalize modalHeight={500} 
      withHandle={false} 
      ref={detailSheet}
      flatListProps={{
        data: getData(),
        renderItem: renderItem,
        keyExtractor: item => item.id,
        showsVerticalScrollIndicator: false,
      }}
      />
    </>
  );




  
}


const s = StyleSheet.create({
    content:{
        padding:10,
        //margin:5,
        //marginHorizontal:10,
    },
    touchOpacity:{
        padding:6,
        margin:5,
        flexDirection:"row",
        backgroundColor:"#f7f8f7"
    }
})



