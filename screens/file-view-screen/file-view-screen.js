import { useFocusEffect } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button } from 'react-native-paper'
import { GlobalContext } from '../../Global/Global-state';
import firestore from '@react-native-firebase/firestore';
import {navigate} from '../../navigation/root-navigation/RootNavigation'

export  function FileViewScreen({route,navigation}) {

    const [Documents, setDocuments] = useState([]);
    const [FilesList, setFilesList] = useState([]);

    const { name } = route.params;
    const {setParams,UserId,Params} = useContext(GlobalContext)


    const ref = firestore()
    .collection('links')
    .where('uid', '==', UserId).where('path','==',Params)

    const fileRef = firestore()
    .collection('folders').where('uid','==',UserId)?.where('path','==',Params)

    useEffect(() => {
        return ref.onSnapshot((querysnapshot) => {
          const list = [];
          querysnapshot.forEach((doc) => {
            const {link, metaData} = doc.data();
            list.push({
              id: doc.id,
              link,
              metaData,
            });
           // console.log(metaData, 'docs');
          });
     
          setDocuments(list, 'list');
          //console.log(Documents, 'list');
        });
      }, [Params]);


      useEffect(() => {
         return fileRef.onSnapshot((querysnapshot)=>{
             const list =[];

             querysnapshot.forEach((doc)=>{
                 const {folder_id,folder_name} = doc.data();
                 list.push({
                     id:doc.id,
                     folder_name,
                     folder_id,
                 })

             })

             setFilesList(list)
             console.log(FilesList,'filelist');
         })
      }, [Params])

    useFocusEffect(
        React.useCallback(() => {
            // setParams(navigationRef.current.getCurrentRoute().params.name);
            setParams(name);

    
        }, [name])
    )


    return (
        <View style={styles.container}>
            <Text>this is {name}</Text>
            {Documents.map((doc)=>(
                <Text key={doc.id}>{doc.link}</Text>
            ))}
            <Text>file name</Text>
            {FilesList && FilesList.map((doc)=>(
                <TouchableOpacity onPress={()=>{
                    navigate('FileView',{name:doc.folder_name})
                }}>
                <Text>{doc.folder_name}</Text>
                </TouchableOpacity>
            ))}
            <Button onPress={()=>navigation.goBack()}>go back</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }
})