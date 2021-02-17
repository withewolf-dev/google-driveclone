import { useFocusEffect } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import { GlobalContext } from '../../Global/Global-state';
import { navigate, navigationRef } from '../../navigation/root-navigation/RootNavigation';

export  function FileViewScreen({route,navigation}) {

    const { name } = route.params;
    const {setParams} = useContext(GlobalContext)

    //console.log(navigationRef.current.getCurrentRoute().params.name,"route");



    useFocusEffect(
        React.useCallback(() => {
             setParams(navigationRef.current.getCurrentRoute().params.name);
    
        }, [])
    )
    return (
        <View>
            <Text>this is {name}</Text>
            <Button onPress={()=>navigation.goBack()}>go back</Button>
        </View>
    )
}
