import React, { useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native'

export  function FolderScreen({ route, navigation }) {

    const [id, setid] = useState(0)


    useEffect(() => {
        
        if(route.params){
            setid(route.params.itemId)
        }
    }, [])
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Folder screen {id} </Text>
        <Button
          title="folder"
          onPress={() =>
            navigation.push('Folder', {
              itemId: Math.floor(Math.random() * 100),
            })
          }
        />
        {id !== 0 && <Button
          title="go back"
          onPress={() =>
            navigation.goBack()
          }
        />}
      </View>
    );
}
