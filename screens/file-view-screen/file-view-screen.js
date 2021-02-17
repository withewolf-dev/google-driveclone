import { useFocusEffect } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import { GlobalContext } from '../../Global/Global-state';
import { navigate, navigationRef } from '../../navigation/root-navigation/RootNavigation';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export  function FileViewScreen({route,navigation}) {

    const [Documents, setDocuments] = useState([]);
    const { name } = route.params;
    const {setParams} = useContext(GlobalContext)


    const ref = firestore()
    .collection('links')
    .where('uid', '==', auth().currentUser && auth().currentUser.uid).where('path','==',name)


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
          //console.log(Documents, 'doc');
        });
      }, []);

    useFocusEffect(
        React.useCallback(() => {
            //  setParams(navigationRef.current.getCurrentRoute().params.name);
            setParams(name);

    
        }, [])
    )


    return (
        <View style={styles.container}>
            <Text>this is {name}</Text>
            {Documents.map((doc)=>(
                <Text>{doc.link}</Text>
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