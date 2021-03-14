import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {HomeScreenList} from '../../components';
import { GlobalContext } from '../../Global/Global-state';
import auth from '@react-native-firebase/auth';


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

  console.log(SharedDoc,"shared");

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

  


  const onLogout = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User account signed out');
      });
  };

  return (
    <>
      <View style={{marginTop: 20}}>
        <Button title="logout" onPress={onLogout}>
          logout
        </Button>
        <HomeScreenList SharedDoc={SharedDoc} Documents={Documents} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 30,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 90,
  },
});
