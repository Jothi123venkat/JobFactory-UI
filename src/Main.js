import React, { useState } from 'react'
import Navs from './components/Navs'
import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'
import Fourth from './components/Fourth'
import ThemeProvider from './components/ThemeProvider'
import ThemeSet from './components/ThemeSet'
import LoadingContext from './components/Context/LoadingContext'
import Dropdown from './components/AutoComplete/Dropdown'
import Dropdown2 from './components/AutoComplete/Dropdown2'
import Dropdown3 from './components/AutoComplete/Dropdown3'
import { useProgressBar } from './components/Context/LoadingContext'
import Loading from './components/Context/Loading'

const Main = () => {
  const[data,setData]=useState();
  const{loading,setLoading}=useProgressBar(true);

 setTimeout(() => {
  setLoading(false)
 }, 2000);

  return (
    <>
    {loading?(<Loading/>):(
       <LoadingContext>
       <Navs data={data}/>
       <First/>
       <Second/>
       <Third/>
       <Fourth setData={setData} data={data}/>
       {/* <Dropdown/>
       <Dropdown2/>
       <Dropdown3/> */}
       </LoadingContext>
    )}
    
    
    </>
  )
}



export default Main
