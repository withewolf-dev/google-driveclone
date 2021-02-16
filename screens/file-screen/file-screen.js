import * as React from 'react';
import {StyleSheet, Text, View,Modal, TouchableOpacity, TouchableWithoutFeedback, Button} from 'react-native';
import { GlobalContext } from '../../Global/Global-state';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import FileListViews from '../../components/flatlist-item-view/file-list-views';
import { FileScreenList } from '../../components/Flat-list/file-screen-list';


export function FileScreen() {


  const [Documents, setDocuments] = React.useState([]);

  const ref = firestore()
    .collection('folders')
    .where('uid', '==', auth().currentUser && auth().currentUser.uid);

  React.useEffect(() => {
    return ref.onSnapshot((querysnapshot) => {
      const list = [];
      querysnapshot.forEach((doc) => {
        const {folder_name, folder_id} = doc.data();
        list.push({
          id: doc.id,
          folder_id,
          folder_name,
        });
        console.log(list, 'list');
      });

      setDocuments(list, 'list');
      console.log(Documents, 'file-screen-docs');
    });
  }, []);

  return (
    <>
        <FileScreenList Documents={Documents}/>
    </>
  );
}
  