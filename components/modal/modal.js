import React, {useState} from 'react';
import {Button, Text, View,StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {Fab} from '../Fab/fab';

export function ModalSheet() {
  const [isModalVisible, setModalVisible] = useState(false);
 const [opacity, setOpacity] = useState(0)

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    setOpacity(0.20)
  };

  const toggleModalOff=()=>{
      setOpacity(0)
      setModalVisible(false)
  }
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
        style={styles.view}
        >
        <View
          style={{
            height: '30%',
            width: '100%',
            backgroundColor: 'white',
            
          }}>
          <Text>Hello!</Text>

          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
      <Fab onFabPress={toggleModal} />
    </View>
  );
}

const styles = StyleSheet.create({
    view: {
      justifyContent: 'flex-end',
      margin:0,
    },
  });