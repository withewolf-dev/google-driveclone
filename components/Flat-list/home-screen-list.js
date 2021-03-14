import React from 'react';
import { View,FlatList } from 'react-native';
import { ItemViews } from '../flatlist-item-view/ItemViews';


export function HomeScreenList({Documents,SharedDoc}) {

  const data = SharedDoc.concat(Documents)

  console.log(data);
  const ItemView = ({item}) => {
    return (
      // FlatList Item
      <ItemViews item={item}/>
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
        data={Documents.concat(SharedDoc)}
        //data defined in constructor
        ItemSeparatorComponent={ItemSeparatorView}
        //Item Separator View
        renderItem={ItemView}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

