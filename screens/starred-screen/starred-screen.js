import React from 'react'
import { Image, View } from 'react-native'
import { StarCard } from '../../layouts'

export  function StarredScreen() {
    return (
       <>
       {/* <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
          <Image
          source={ require('../../components/images/star.png') }
          style={{ width: 400, height: 400}}
        />
        </View> */}
        <StarCard/>
       </>
    )
}
