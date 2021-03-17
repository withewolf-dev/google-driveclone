import React, { useContext } from 'react';
import {DrawerActions} from '@react-navigation/native';
import {StyleSheet, Text, View,TouchableOpacity,Modal,TouchableWithoutFeedback} from 'react-native';
import {IconButton, Colors,Portal} from 'react-native-paper';
import {Avatar} from 'react-native-paper';
import { GlobalContext } from '../../Global/Global-state';
import { navigationRef} from '../../navigation/root-navigation/RootNavigation'
import { ProfileModal } from '../modal/ProfileModal';




export function CustomHeader(props) {
  
  const {Path,getPathFromQueue} = useContext(GlobalContext)

  console.log(Path,"custom header");


  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'flex-end',
    alignItems:'flex-end',
  };

  const navigateBack =()=>{
    getPathFromQueue()
    navigationRef.current.goBack()
    }


 
  return (
    <>
      {Path === 'File' && (
        <View style={styles.bottom}>
          <IconButton
            style={styles.menu}
            icon="menu"
            color={Colors.grey300}
            size={25}
            onPress={() =>
              props.navigation.dispatch(DrawerActions.openDrawer())
            }
          />
          <Text style={styles.text}>Search Drive</Text>
          <TouchableOpacity onPress={showModal}>
            <Avatar.Image
              style={styles.image}
              size={30}
              source={{
                uri:
                  'https://images.unsplash.com/photo-1611817757571-75fe5c08ffd9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
              }}
            />
          </TouchableOpacity>
        </View>
      )}

      {Path !== 'File' && (
        <View style={styles.bottom}>
          <IconButton
            style={styles.menu}
            icon="arrow-left"
            color={Colors.grey300}
            size={25}
            onPress={navigateBack}
          />
          <Text style={styles.text}>Search Drive</Text>
          <Avatar.Image
            style={styles.image}
            size={30}
            source={{
              uri:
                'https://images.unsplash.com/photo-1611817757571-75fe5c08ffd9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
            }}
          />
        </View>
      )}
      <ProfileModal visible={visible} setVisible={setVisible}/>

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
  menu: {
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
  image: {
    marginRight: 5,
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
  modalContainer:{
    flex:1,
    justifyContent:"flex-end"
  },
  modalView:{
    margin: 20,
  backgroundColor: "white",
  borderRadius: 20,
  padding: 35,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5
  }
});
