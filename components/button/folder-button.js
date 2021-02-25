import React, {useContext, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Button, Text, TextInput, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {IconButton, Colors, Portal} from 'react-native-paper';
import {GlobalContext} from '../../Global/Global-state';
import {navigate} from '../../navigation/root-navigation/RootNavigation'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';


export function FolderButton(props) {
  const [text, setText] = useState('');

  const [createFolderModal, setCreateFolderModal] = useState(false);

  const {setModalVisible,Params,Path} = useContext(GlobalContext);

  const OpenModal = () => {
    setCreateFolderModal(true);
  };



  const _createFolder =()=>{

    firestore().collection('folders').add({
      folder_name: text,
      folder_id: Date.now(),
      uid:auth().currentUser.uid,
      path:Path,
    })

  }

  const _navigateToFile =()=>{
    _createFolder()
    setCreateFolderModal(false)
    setModalVisible(false)
    navigate('File')
  }

  return (
    <View>
      <IconButton
        icon="folder"
        color={Colors.red500}
        size={30}
        onPress={OpenModal}
      />
      <Modal isVisible={createFolderModal}>
        <View style={{backgroundColor: 'white'}}>
          <View>
            <Text style={{fontSize: 20}}>create folder</Text>
            <TextInput
              style={{height: 40}}
              placeholder="Type here to translate!"
              onChangeText={(text) => setText(text)}
              defaultValue={text}
              autoFocus={true}
            />
            <View style={styles.action}>
              <TouchableOpacity>
                <Button
                  title="cancel"
                  onPress={()=>setCreateFolderModal(false)}
                />
              </TouchableOpacity>
              <TouchableOpacity >
                <Button title="create" onPress={_navigateToFile} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {},
  action: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
