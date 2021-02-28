import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Portal } from 'react-native-paper';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

export function DetailModal() {
  const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 450,
      }}
    >
      <Text>Swipe down to close</Text>
    </View>
  );

  const sheetRef = React.useRef(null);

  return (
    <><Portal>
       <Button
          title="Open Bottom Sheet"
          onPress={() => sheetRef.current.snapTo(0)}
        />
    </Portal>
       
      <BottomSheet
        ref={sheetRef}
        initialSnap={1}
        snapPoints={[200, 0]}
        borderRadius={10}
        renderContent={renderContent}
      />
    </>
  );
}