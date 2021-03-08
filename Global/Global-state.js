import React, { useContext, useEffect, useState } from 'react'
import  {createContext}  from "react";
import auth from '@react-native-firebase/auth';

export const GlobalContext = createContext(null)


export const GlobalProvider =({children})=>{

    const [isModalVisible, setModalVisible] = useState(false);
    const [Params, setParams] = useState()
    const [IsDetailsModel, setIsDetailModel] = useState(false)
    const [detailRef, setdetailRef] = useState(false)
    const [download,setDownload]=useState(false)
    // path 
    const [Path, setPath] = useState('File')
    //const [GetPath, setGetPath] = useState()
    const [Queue, setQueue] = useState(['File'])


    const addToQueue =(path)=>{
        const list=[]
        list.push(path,...Queue)
        setQueue(list)
    }

    const getPathFromQueue=()=>{
        Queue.shift()
        setPath(Queue && Queue[0])
    }
    

    const UserId = auth().currentUser && auth().currentUser.uid

    const Values = {
      isModalVisible,
      setModalVisible,
      Params,
      setParams,
      UserId,
      Path,
      setPath,
      addToQueue,
      getPathFromQueue,
      detailRef,
      setdetailRef,
      download,
      setDownload
    };

   // console.log(Path,"global path");
   console.log(Queue,'global Queue');
    //console.log(UserId,'global path');
    return(
        <GlobalContext.Provider value={Values}>
            {children}
        </GlobalContext.Provider>
    )
}

