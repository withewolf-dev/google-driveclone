import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

export function FilesCard() {
  return (
    <View style={s.container}>
        {/* folder view */}
     <TouchableOpacity>
     <View style={s.card}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <MaterialCommunityIcons
            style={{color: '#a8a8a8'}}
            name="folder"
            size={30}
          />
          <Text
            style={{marginLeft: 10, fontFamily: 'Roboto-Regular', padding: 7}}>
            Article of pdfs
          </Text>
        </View>
        <TouchableOpacity
          style={{
            padding: 6,
            borderRadius: 100,
          }}>
          <EntypoIcon name="dots-three-vertical" size={17} />
        </TouchableOpacity>
      </View>
     </TouchableOpacity>
      <View style={s.card}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={s.image}
            source={{
              uri:
                'https://images.unsplash.com/photo-1615884822058-7bb4a4fb877e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
            }}
          />
          <Text
            style={{
              marginLeft: 10,
              fontFamily: 'Roboto-Regular',
              fontSize: 16,
            }}>
            My image
          </Text>
        </View>
        <TouchableOpacity
          style={{
            padding: 6,
            borderRadius: 100,
          }}>
          <EntypoIcon name="dots-three-vertical" size={17} />
        </TouchableOpacity>
      </View>
      <View style={s.card}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <MaterialCommunityIcons
            style={{color: '#3399ff'}}
            name="pdf-box"
            size={35}
          />
          <Text
            style={{marginLeft: 10, fontFamily: 'Roboto-Regular', padding: 7}}>
            Article of pdfs
          </Text>
        </View>
        <TouchableOpacity
          style={{
            padding: 6,
            borderRadius: 100,
          }}>
          <EntypoIcon name="dots-three-vertical" size={17} />
        </TouchableOpacity>
      </View>
      <View style={s.card}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <EntypoIcon style={{color: '#00b35a'}} name="video" size={25} />
          <Text
            style={{marginLeft: 10, fontFamily: 'Roboto-Regular', padding: 10}}>
            Article of pdfs
          </Text>
        </View>
        <TouchableOpacity
          style={{
            padding: 6,
            borderRadius: 100,
          }}>
          <EntypoIcon name="dots-three-vertical" size={17} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 50,
    width: 380,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 2,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 1,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 10,
  },
});
