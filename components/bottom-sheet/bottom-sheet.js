import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {Fab} from '../Fab/fab';

export function SheetBottom({child}) {

  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 200,
      }}>
      <Text>Swipe down to close</Text>
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
        enabledContentGestureInteraction={true}
      />
    </>
  );
}
