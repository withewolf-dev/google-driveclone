import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome5';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {navigate} from '../../navigation/root-navigation/RootNavigation'

export default function FileListViews({item}) {

  const OnPress=()=>{
    console.log(item.id);
    navigate('FileView',{name:item.folder_name})
  }
  return (
    <TouchableOpacity onPress={OnPress}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Icons name="folder" size={25} />
          <Text style={{fontSize: 15, marginLeft: 20}}>{item.folder_name}</Text>
        </View>
        <EntypoIcon name="dots-three-vertical" size={18} />
      </View>
    </TouchableOpacity>
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
