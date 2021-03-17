import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Button, Text, Image,ScrollView} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { HomeScreenList} from '../../components';
import { GlobalContext } from '../../Global/Global-state';
import auth from '@react-native-firebase/auth';
import PreviewCard from '../../layouts/cards/Preview-card';

export function HomeScreen() {
  const [Documents, setDocuments] = useState([]);
  const [SharedDoc, setSharedDoc] = useState([])

  const {UserId} = useContext(GlobalContext)

  const ref = firestore()
    .collection('links')
    .where('uid', '==', UserId);


  const userEmail = auth().currentUser && auth().currentUser.email

  
  const AccessRef = firestore().collection('shared').where('To','array-contains',userEmail)

  useEffect(()=>{

    return AccessRef.onSnapshot((querysnapshot) => {
     const list =[]
     querysnapshot.docs.forEach((doc) => {
      const {link,metaData,shared } = doc.data();
      list.push({
        id: doc.id,
        link,
        metaData,
        shared
      });
    });
    setSharedDoc(list)
    });
  },[UserId])


  useEffect(() => {
    return ref.onSnapshot((querysnapshot) => {
      const list = [];
       querysnapshot.docs.forEach((doc) => {
        const {link, metaData,name,path} = doc.data();
        list.push({
          id: doc.id,
          link,
          metaData,
          name,
          path,
        });
      });
      setDocuments(list)
    });
  }, [UserId]);

  




  return (
    <>
      
        {!SharedDoc.length === 0 && !Documents.length === 0 && (
          <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
          <Image
          source={ require('../../components/images/home.png') }
          style={{ width: 400, height: 400}}
        />
        </View>
        )}
        <PreviewCard/>
        <HomeScreenList SharedDoc={SharedDoc} Documents={Documents} />

    </>
  );
}

