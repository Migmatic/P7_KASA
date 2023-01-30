import React, { createContext } from 'react'


export const LogementsContext = createContext()

export const LogementsProvider = ({ children }) => {
  const logements =  require("../logements.json");
  console.log(logements[0]["title"])

  const array = [];

  for(var i in logements) {
      array.push([i,logements[i]]);
  }
  return (
    <LogementsContext.Provider value={logements}>
      {children}
    </LogementsContext.Provider>
  )
}
