import  React, {useState,useEffect} from 'react';
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import { SharedScreenList } from '../../components';


export const SharedScreen = () => {

  const [SharedDoc, setSharedDoc] = useState([])

  const userEmail = auth().currentUser && auth().currentUser.email


  const SharedDocsQuery =  firestore().collection('shared').where('from',"==",userEmail)
  
  useEffect(() => {
    return SharedDocsQuery.onSnapshot((querysnapshot) => {
      const list =[]
      querysnapshot.docs.forEach((doc) => {
       const {name,metaData,shared } = doc.data();
       list.push({
         id: doc.id,
         name,
         metaData,
         shared
       });
     });
     setSharedDoc(list)
     });
  }, [])
  
  return (
    <SharedScreenList SharedDoc={SharedDoc}/>
  );
};




