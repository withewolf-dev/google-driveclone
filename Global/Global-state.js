import React, { useContext, useState } from 'react'
import  {createContext}  from "react";
import auth from '@react-native-firebase/auth';

export const GlobalContext = createContext(null)


export const GlobalProvider =({children})=>{

    const [isModalVisible, setModalVisible] = useState(false);
    const [Params, setParams] = useState('File')
    //const [Querying, setQuerying] = useState()

    const UserId = auth().currentUser && auth().currentUser.uid


    const Values = {
      isModalVisible,
      setModalVisible,
      Params,
      setParams,
      UserId,
    };

    console.log(Params,"current route param");
    return(
        <GlobalContext.Provider value={Values}>
            {children}
        </GlobalContext.Provider>
    )
}

