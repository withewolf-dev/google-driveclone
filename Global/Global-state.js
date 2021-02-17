import React, { useContext, useState } from 'react'
import  {createContext}  from "react";

export const GlobalContext = createContext(null)


export const GlobalProvider =({children})=>{

    const [visible, setvisible] = useState(true)
    const [isModalVisible, setModalVisible] = useState(false);
    const [Params, setParams] = useState()



    const Values = {
      visible,
      setvisible,
      isModalVisible,
      setModalVisible,
      Params,
      setParams
    };

    console.log(Params,"current route param");
    return(
        <GlobalContext.Provider value={Values}>
            {children}
        </GlobalContext.Provider>
    )
}

