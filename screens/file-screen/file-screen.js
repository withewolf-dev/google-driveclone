import * as React from 'react';
import {StyleSheet, Text, View,Modal, TouchableOpacity, TouchableWithoutFeedback, Button} from 'react-native';
import { GlobalContext } from '../../Global/Global-state';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import FileListViews from '../../components/flatlist-item-view/file-list-views';
import { FileScreenList } from '../../components/Flat-list/file-screen-list';
import {useRoute} from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';


export function FileScreen({navigation}) {

  const route = useRoute();


  const [Documents, setDocuments] = React.useState([]);
  const {setParams} = React.useContext(GlobalContext)

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

  // React.useEffect(() => {
    
  //   setParams(route.name)

  // }, [])


  useFocusEffect(
    React.useCallback(() => {
       setParams(route.name);

    }, [])
  );
  return (
    <>
        <FileScreenList Documents={Documents}/>
        <Button title="view files" onPress={()=>navigation.navigate('FileView')}/>
    </>
  );
}
  