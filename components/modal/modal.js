import React, {useContext, useState} from 'react';
import {Button, Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {Fab} from '../Fab/fab';
import { FolderButton } from '../button/folder-button';
import { UploadButton } from '../button/upload-button';
import { ScanButton } from '../button/scan-button';
import { GlobalContext } from '../../Global/Global-state';
import DialogButton from '../button/dialog-button';


export function ModalSheet () {  


  const [opacity, setOpacity] = useState(0);

  const {isModalVisible, setModalVisible} = useContext(GlobalContext)

  
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    setOpacity(0.2);
  };

  const toggleModalOff = () => {
    setOpacity(0);
    setModalVisible(false);
  };
  return (
    <View style={{flex: 1}}>
      <Modal
        backdropOpacity={opacity}
        backdropTransitionOutTiming={900}
        backdropTransitionInTiming={500}
        animationInTiming={500}
        animationOutTiming={600}
        onBackdropPress={toggleModalOff}
        onSwipeComplete={toggleModalOff}
        swipeDirection="down"
        isVisible={isModalVisible}
        style={styles.view}>
        <View
          style={styles.content}>
            <Text>Create folder</Text>
            <View style={styles.icons}>
              <TouchableOpacity>
              <ScanButton/>
              </TouchableOpacity>
              <FolderButton/>
            <UploadButton/>
            </View>
        </View>
      </Modal>
      <Fab onFabPress={toggleModal} />
    </View>
  
  );
}

const styles = StyleSheet.create({
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  content: {
    height: '20%',
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal:20,
    paddingVertical:20, 
  },
  icons:{
    justifyContent:'space-around',
    flexDirection: 'row',

  }
});
