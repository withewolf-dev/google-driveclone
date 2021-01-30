import React, { createContext } from 'react'

export const GlobalContext = createContext()

export  const GlobalProvider =({children})=> {

    const example = "this is the global"
    return (
        <GlobalContext.Provider value={[example]}>
            {children}
        </GlobalContext.Provider>
    )
}
