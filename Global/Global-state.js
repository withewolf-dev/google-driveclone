import React, { useContext, useEffect, useState } from 'react'
import  {createContext}  from "react";
import auth from '@react-native-firebase/auth';

export const GlobalContext = createContext(null)


export const GlobalProvider =({children})=>{

    const [isModalVisible, setModalVisible] = useState(false);
    const [Params, setParams] = useState('File')
    const [path, setpath] = React.useState('File')
    const [Queue, setQueue] = useState()


    const UserId = auth().currentUser && auth().currentUser.uid

    const Values = {
      isModalVisible,
      setModalVisible,
      Params,
      setParams,
      UserId,
      path,
      setpath,
    };

    console.log(Params,"current route param");
    return(
        <GlobalContext.Provider value={Values}>
            {children}
        </GlobalContext.Provider>
    )
}

