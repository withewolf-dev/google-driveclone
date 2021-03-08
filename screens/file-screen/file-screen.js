import * as React from 'react';
import {StyleSheet, Text, View,Modal, TouchableOpacity, TouchableWithoutFeedback, Button} from 'react-native';
import { GlobalContext } from '../../Global/Global-state';
import firestore from '@react-native-firebase/firestore';
import { FileScreenList } from '../../components/Flat-list/file-screen-list';
import {useRoute} from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';


export function FileScreen({route,navigation}) {

  const [path, setpath] = React.useState('File')

  const {setParams} = React.useContext(GlobalContext)



  React.useEffect(() => {
    if(route.params){
      setpath(route.params.path)
    }
    setParams(path);
  }, [path])

  const [Documents, setDocuments] = React.useState([]);
  const [listOflinks, setlistOflinks] = React.useState([])
  const {UserId,Params} = React.useContext(GlobalContext)

  //console.log(path,"path");

  const ref = firestore()
    .collection('folders')
    .where('uid', '==',UserId)?.where('path','==',path)

  
  const linkRef = firestore().collection('links').where('uid','==',UserId)?.where('path','==',path)
  
    React.useEffect(() => {
    return ref.onSnapshot((querysnapshot) => {
      const list = [];
      querysnapshot && querysnapshot.forEach((doc) => {
        const {folder_name, folder_id,path} = doc.data();
        list.push({
          id: doc.id,
          folder_id,
          folder_name,
          path,
        });
      });

      setDocuments(list, 'file-screen');
    });
  }, [path]);


  React.useEffect(() => {
    
    setParams(route.name)

  }, [])

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
      setlistOflinks(list)
    })

  }, [path])


  
  return (
    <>
        <FileScreenList Documents={Documents} Links={listOflinks}/>
         <Text>{path}</Text>
         <Button
          title="go back"
          onPress={() =>
            navigation.goBack()
          }
        />
     </>
  );
}
  