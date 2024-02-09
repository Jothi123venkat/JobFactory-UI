import React, { createContext, useContext, useState } from 'react'


const ProgressContext = createContext();

export const useProgressBar = () => useContext(ProgressContext);

function LoadingContext({children}) {
const[loading,setLoading]= useState(true)
console.log(children);


// const updateProgress = (value)=>{
//     setLoading(value)
// }

  return (
    <div>
      <ProgressContext.Provider value={{loading,setLoading}}>
         {children}
      </ProgressContext.Provider>
    </div>
  )
}

export default LoadingContext
