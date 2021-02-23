import React, { useContext, useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import { GlobalContext } from '../../Global/Global-state';
import { FileScreenList } from '../../components/Flat-list/file-screen-list';
import {navigationRef} from '../../navigation/root-navigation/RootNavigation'

export  function FolderScreen({ route, navigation }) {

   // const {path} = route.params
    const {UserId,setPath,Queue,getPathFromQueue} = useContext(GlobalContext)
    
    //const [id, setid] = useState(0)
    const [Route, setRoute] = useState('File')
    const [FolderList, setFolderList] = useState([])
    const [LinkList, setLinkList] = useState([])


    useEffect(() => {
        
        if(route.params){
            setRoute(route.params.path)
           // setPath(route.params.path)
        }else{
          setPath(Route)
        }
    }, [Route])

    const ref = firestore()
      .collection('folders')
      .where('uid', '==', UserId)
      ?.where('path', '==', Route);

    const linkRef = firestore()
      .collection('links')
      .where('uid', '==', UserId)
      ?.where('path', '==', Route);

      React.useEffect(() => {
        return ref.onSnapshot((querysnapshot) => {
          const list = [];
          querysnapshot.forEach((doc) => {
            const {folder_name, folder_id,path} = doc.data();
            list.push({
              id: doc.id,
              folder_id,
              folder_name,
              path,
            });
          });
    
          setFolderList(list, 'file-screen');
        });
      }, [Route]);
      
      React.useEffect(() => {
    
        return linkRef.onSnapshot((querysnapshot)=>{
          const list =[]
          querysnapshot.forEach((doc)=>{
            const {link,metaData,name,path} = doc.data()
            list.push({
              id:doc.id,
              link,
              metaData,
              name
            })
          })
          setLinkList(list)
        })
    
      }, [Route])


      
    return (
      <>
        <FileScreenList Documents={FolderList} Links={LinkList} />
      </>
    );
}
