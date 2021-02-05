import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {Fab} from '../../components'

export  function FileScreen() {

    const renderContent = () => (
        <View
          style={{
            backgroundColor: 'white',
            padding: 16,
            height: 200,
          }}>
          <Text>Swipe down to file</Text>
          <TouchableOpacity onPress={()=>sheetRef.current.snapTo(1)}>
          <Button>close</Button>
          </TouchableOpacity>
        </View>
      );
    
      const sheetRef = React.useRef();
      const fall = new Animated.Value(1);
    
      const onFabPress = () => {
        sheetRef.current.snapTo(0);
      };

    return (
        <>
        
        <Fab onFabPress={onFabPress} />
          <BottomSheet
         ref={sheetRef}
           snapPoints={[200, 0, 0]}
        initialSnap={1}
        borderRadius={10}
        renderContent={renderContent}
        callbackNode={fall}
        enabledContentGestureInteraction={true}/>
        <TouchableNativeFeedback onPress={()=>sheetRef.current.snapTo(1)}>
        <Animated.View style={{margin:20,
        opacity: Animated.add(0.3,Animated.multiply(fall,1.0))
        }}>
             <View style={{alignItems:"center"}}>
                 
                 <Text>my name is gitath akashyap</Text>
                 
             </View>
             
         </Animated.View>
         </TouchableNativeFeedback>
        
        
        </>
    )
}