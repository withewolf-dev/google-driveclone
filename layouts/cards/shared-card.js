import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

export function SharedCard() {
  return (
    <View style={s.container}>
        {/* folder view */}
      <View style={s.card}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={s.circle}/>
         <View style={s.circle}>
         <MaterialCommunityIcons
            style={{color: '#3399ff'}}
            name="pdf-box"
            size={35}
          />
          </View>
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
        <View style={s.circle}>
          <EntypoIcon style={{color: '#00b35a'}} name="video" size={25} />
          </View>
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
  },
  circle: {
    height: 40,
    width: 40,
    borderRadius: 40,
    borderWidth:2,
    borderColor:'grey',
    alignItems:"center",
    justifyContent:"center",
  },
});
