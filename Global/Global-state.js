import React, { useContext, useState } from 'react'
import  {createContext}  from "react";

export const GlobalContext = createContext(null)


export const GlobalProvider =({children})=>{

    const [visible, setvisible] = useState(true)
    const [isModalVisible, setModalVisible] = useState(false);


    return(
        <GlobalContext.Provider value={{visible,setvisible,isModalVisible, setModalVisible}}>
            {children}
        </GlobalContext.Provider>
    )
}

