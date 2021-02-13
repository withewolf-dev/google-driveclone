import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {HomeScreenList} from '../../components';

export function HomeScreen() {
  const [Documents, setDocuments] = useState([]);

  const ref = firestore()
    .collection('links')
    .where('uid', '==', auth().currentUser && auth().currentUser.uid);

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
        console.log(metaData, 'docs');
      });

      setDocuments(list, 'list');
      console.log(Documents, 'doc');
    });
  }, []);

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
        {/* <Text>home screen for</Text>
        <Text>user</Text>
        <Button title="logout" onPress={onLogout}>
          logout
        </Button> */}
        <HomeScreenList Documents={Documents} />
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
