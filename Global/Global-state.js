import React, { createContext, useState } from 'react'

export const GlobalContext = createContext()

export  const GlobalProvider =({children})=> {

    //auth global state
    const [isSignedIn, setIsSignedIn] = useState(false)

    const example = "this is the global"
    return (
        <GlobalContext.Provider value={[isSignedIn,setIsSignedIn,example]}>
            {children}
        </GlobalContext.Provider>
    )
}
