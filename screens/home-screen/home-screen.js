import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Pdf from 'react-native-pdf';

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

  const ItemView = ({item}) => {
    return (
      // FlatList Item
      <>
        {item && item.metaData === 'image/jpeg' && (
          <View>
            <Text
              //style={styles.item}
              onPress={() => getItem(item)}></Text>
            <Image style={{height: 80}} source={{uri: item.link}} />
          </View>
        )}
        {item && item.metaData === 'application/pdf' && (
          <Pdf style={{height: 150}} source={{uri: item.link}} />
        )}
      </>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // FlatList Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    //Function for click on an item
    alert('Id: ' + item.id + ' Value: ' + item.value);
  };

  return (
    <>
      <View style={{margin: 20}}>
        <Text>home screen for</Text>
        <Text>user</Text>
        <Button title="logout" onPress={onLogout}>
          logout
        </Button>
        <FlatList
          data={Documents}
          //data defined in constructor
          ItemSeparatorComponent={ItemSeparatorView}
          //Item Separator View
          renderItem={ItemView}
          keyExtractor={(item, index) => index.toString()}
        />
        <Image style={{height: 80}} source={{uri: `https://firebasestorage.googleapis.com/v0/b/react-native-clone-4a557.appspot.com/o/VID-20210212-WA0001.mp4?alt=media&token=51691e7d-ba11-4721-95b4-abb0d4721e31`}} />
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
