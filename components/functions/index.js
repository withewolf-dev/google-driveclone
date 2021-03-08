import React, { useContext } from 'react'
import { GlobalContext } from '../../Global/Global-state'


 export const FunctionShare=()=>{
     console.log('share log');
 }

export  const FunctionStar =()=> {
    return (
       console.log('star log')
    )
}

export  function FunctionOffline() {
    return (
       console.log('offline log')
    )
}

export  function FunctionCopyLink() {
    return (
       console.log('copy linke log')
    )
}

export  const FunctionMakeCopy =()=> {
    return (
       console.log('make copy log')
    )
}

export  function FunctionDownload() {
    return (
       console.log('download log')
    )
}
export  function FunctionRename() {
    return (
       console.log('rename log')
    )
}

