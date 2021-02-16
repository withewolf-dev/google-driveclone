import React from 'react'
import { Text, View } from 'react-native'

export default function FileListViews({item}) {

    console.log(item,"item");
    return (
        <View>
            <Text>{item.folder_name}</Text>
        </View>
    )
}
