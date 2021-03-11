import React,{useContext, useEffect, useRef} from 'react';
import { Modal, Portal, Text,TextInput,Button} from 'react-native-paper';
import { GlobalContext } from '../../Global/Global-state';
import firestore from '@react-native-firebase/firestore'


const RenameModal = () => {
  const [visible, setVisible] = React.useState(false);
  const {RenameModalState,setRenameModalState,DocId} = useContext(GlobalContext)
 
  const [text, setText] = React.useState('');


  const firstRender = useRef(true)
 
  const containerStyle = {backgroundColor: 'white', padding: 20};

 useEffect(() => {
     if(firstRender.current){
         firstRender.current = false;
     } else{
         setVisible(true)
     }
 }, [RenameModalState])

 const Rename =()=>{
     firestore().collection('links').doc(DocId).update({
         name:text
     }).then(()=>{setVisible(false);setText('')}).catch((err)=>console.log(err))
     
 }
  return (
    <Modal
      visible={visible}
      onDismiss={() => setVisible(false)}
      contentContainerStyle={containerStyle}>
      <TextInput
        placeholder="rename document"
        value={text}
        onChangeText={(text) => setText(text)}
        autoFocus={true}
        
      />
      <Button onPress={Rename}>Rename</Button>
    </Modal>
  );
};
export default RenameModal;
