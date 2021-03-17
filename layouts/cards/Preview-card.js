import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import EntypoIcon  from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

export default function PreviewCard() {
    return (
      <ScrollView>
        <View style={s.container}>
          <View style={s.card}>
            <View style={s.header}>
              <View style={s.header_container}>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    style={{color: '#fb5c5b'}}
                    name="image"
                    size={30}
                  />
                </TouchableOpacity>
                <Text style={{fontFamily: 'Roboto-Regular', fontSize: 18}}>
                  gitartha pdf is gfdg..
                </Text>
                <TouchableOpacity
                  style={{
                    padding: 6,
                    borderRadius: 100,
                  }}>
                  <EntypoIcon name="dots-three-vertical" size={17} />
                </TouchableOpacity>
              </View>
            </View>
            <Image
              style={s.image}
              source={{
                uri:
                  'https://images.unsplash.com/photo-1615819823617-01028c94850a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
              }}
            />
          </View>
          <View style={s.card}>
            <View style={s.header}>
              <View style={s.header_container}>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    style={{color: '#3399ff'}}
                    name="pdf-box"
                    size={35}
                  />
                </TouchableOpacity>
                <Text style={{fontFamily: 'Roboto-Regular', fontSize: 18}}>
                  gitartha pdf is gfdg..
                </Text>
                <TouchableOpacity
                  style={{
                    padding: 6,
                    borderRadius: 100,
                  }}>
                  <EntypoIcon name="dots-three-vertical" size={17} />
                </TouchableOpacity>
              </View>
            </View>
            <Image
              style={s.image}
              source={{
                uri:
                  'https://images.unsplash.com/photo-1615819823617-01028c94850a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
              }}
            />
          </View>
          <View style={s.card}>
            <View style={s.header}>
              <View style={s.header_container}>
                <TouchableOpacity>
                  <EntypoIcon
                    style={{color: '#00b35a'}}
                    name="video"
                    size={25}
                  />
                </TouchableOpacity>
                <Text style={{fontFamily: 'Roboto-Regular', fontSize: 18}}>
                  gitartha pdf is gfdg..
                </Text>
                <TouchableOpacity
                  style={{
                    padding: 6,
                    borderRadius: 100,
                  }}>
                  <EntypoIcon name="dots-three-vertical" size={17} />
                </TouchableOpacity>
              </View>
            </View>
            <Image
              style={s.image}
              source={{
                uri:
                  'https://images.unsplash.com/photo-1615819823617-01028c94850a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
              }}
            />
          </View>
          <View style={s.card}>
            <View style={s.header}>
              <View style={s.header_container}>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    style={{color: '#fb5c5b'}}
                    name="image"
                    size={30}
                  />
                </TouchableOpacity>
                <Text style={{fontFamily: 'Roboto-Regular', fontSize: 18}}>
                  gitartha pdf is gfdg..
                </Text>
                <TouchableOpacity
                  style={{
                    padding: 6,
                    backgroundColor: 'red',
                    borderRadius: 100,
                  }}>
                  <EntypoIcon name="dots-three-vertical" size={17} />
                </TouchableOpacity>
              </View>
            </View>
            <Image
              style={s.image}
              source={{
                uri:
                  'https://images.unsplash.com/photo-1615819823617-01028c94850a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
              }}
            />
          </View>
        </View>
      </ScrollView>
    );
}

const s = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    card:{
        height:300,
        width: 380, 
        margin:2,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        elevation:1
    
      },
      image:{
          height:200,
          width:360,
          borderRadius:10,
      },
      header:{
        height:40,
        width:360,
        marginBottom:5,
        borderRadius:10,
    },
    header_container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    }
  });
  