import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {GlobalContext} from '../../Global/Global-state';

export default function DetailsScreen({navigation}) {
  const [example] = useContext(GlobalContext);

  return (
    <View>
      <Text>detail</Text>
      <Button title="go to detail" onPress={() => navigation.navigate('Home')}>
        go to details
      </Button>
      <Text>{example}</Text>
    </View>
  );
}
