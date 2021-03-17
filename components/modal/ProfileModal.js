import React from 'react'
import {Button} from 'react-native-paper'
import {StyleSheet, Text, View,TouchableOpacity,Modal,TouchableWithoutFeedback} from 'react-native';
import auth from '@react-native-firebase/auth';

export  function ProfileModal({visible,setVisible}) {

    const onLogout = () => {
        auth()
          .signOut()
          .then(() => {
            console.log('User account signed out');
          });
      };

    return (
      <>
        <Modal animationType="none" transparent={true} visible={visible}>
          <TouchableOpacity
            onPress={() => setVisible(false)}
            style={{
              flex: 1,
              justifyContent: 'flex-start',
              alignItems: 'flex-end',
            }}>
            <TouchableWithoutFeedback>
              <View style={styles.modal}>
                <Text>hello world</Text>
                 <Button
                  mode="contained"
                  style={{fontFamily: 'Roboto-Medium'}}
                  title="logout"
                  onPress={onLogout}>
                  logout
                </Button>
              </View>
            </TouchableWithoutFeedback>
          </TouchableOpacity>
        </Modal>
      </>
    );
}

const styles = StyleSheet.create({
    bottom: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 5,
      marginLeft: 10,
      marginRight: 10,
      height: 40,
      backgroundColor: '#333333',
      borderTopLeftRadius: 6,
      borderTopRightRadius: 6,
      borderBottomEndRadius: 6,
      borderBottomStartRadius: 6,
    },
    modal:{
        height:200,
        width:300, 
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        elevation:1
    
      },
  });
  