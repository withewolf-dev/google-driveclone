import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import {Button, Text,TextInput,StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import { IconButton,Colors } from 'react-native-paper'

export  function FolderButton() {

  const [text, setText] = useState('');

  const [isModalVisible, setModalVisible] = useState(false);
  
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


    return (
        <View>
             <IconButton
            icon="folder"
            color={Colors.red500}
            size={30}
            onPress={toggleModal}
          />
          <Modal isVisible={isModalVisible}>
          <View style={{backgroundColor:"white"}}>
          <View>
            <Text style={{fontSize:20}}>create folder</Text>
          <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <View style={styles.action}>
        <TouchableOpacity style={{margin:5}} >
        <Button  title="cancel" onPress={toggleModal} />
        </TouchableOpacity>
        <TouchableOpacity style={{margin:5}}>
        <Button title="create"/>
        </TouchableOpacity>
      </View>
          
          </View>

          </View>
        </Modal>
        </View>
    )
}



const styles =StyleSheet.create({
  card:{
    
  },
  action:{
    flexDirection:"row",
    justifyContent:"flex-end",
  }
})