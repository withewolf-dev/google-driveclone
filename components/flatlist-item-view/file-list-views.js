import React, {useContext} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome5';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {navigate} from '../../navigation/root-navigation/RootNavigation';
import {GlobalContext} from '../../Global/Global-state';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function FileListViews({item}) {

  const navigate =useNavigation()

  const {setPath,addToQueue} = useContext(GlobalContext);

  const OnPress = () => {
    navigate.push('Folder',{
      path:item.folder_name
    })
    addToQueue(item.folder_name)
   setPath(item.folder_name)
  };
  return (
    <>
      {item.folder_name && (
        <TouchableOpacity onPress={OnPress}>
          <View style={styles.container}>
            <View style={styles.card}>
              <Icons name="folder" size={25} />
              <Text style={{fontSize: 15, marginLeft: 20}}>
                {item.folder_name}
              </Text>
            </View>
            <EntypoIcon name="dots-three-vertical" size={18} />
          </View>
        </TouchableOpacity>
      )}
      {item.link && (
        <TouchableOpacity>
          <Text>{item.name}</Text>
        </TouchableOpacity>
      )}
     
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
