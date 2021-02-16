import React from 'react';
import { View,FlatList } from 'react-native';
import FileListViews from '../flatlist-item-view/file-list-views';


export function FileScreenList({Documents}) {
  const ItemView = ({item}) => {
    return (
      // FlatList Item
      <FileListViews item={item}/>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // FlatList Item Separator
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: 'white',
        }}
      />
    );
  };

  const getItem = (item) => {
    //Function for click on an item
    alert('Id: ' + item.id);
  };

  return (
    <View>
      <FlatList
        data={Documents}
        //data defined in constructor
        ItemSeparatorComponent={ItemSeparatorView}
        //Item Separator View
        renderItem={ItemView}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

