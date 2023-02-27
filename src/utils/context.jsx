import React, { createContext } from 'react'


export const LogementsContext = createContext()

export const LogementsProvider = ({ children }) => {
  const logements =  require("../logements.json");


  return (
    <LogementsContext.Provider value={logements}>
      {children}
    </LogementsContext.Provider>
  )
}
