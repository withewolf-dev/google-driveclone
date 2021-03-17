import React from 'react';
import { View,FlatList,TouchableOpacity } from 'react-native';
import FileListViews from '../flatlist-item-view/file-list-views';


export function FileScreenList({Documents,Links}) {

  const NewData = Documents.concat(Links)


  const ItemView = ({item}) => {
    return (
      // FlatList Item
     <FileListViews  item={item}/> /*  new data  object*/
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



  return (
    <View>
      <FlatList
        data={NewData} /* new data  array*/
        //data defined in constructor
        ItemSeparatorComponent={ItemSeparatorView}
        //Item Separator View
        renderItem={ItemView}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

