import React from 'react'
import { useTheme } from './ThemeProvider'
function ThemeSet() {
  
    const{dark,toggletheme} = useTheme();

  return (
    <div style={{ background: dark ? '#333' : 'lightblue', color: dark ? '#fff' : '#333' }}>
      <p>{dark ? 'Dark Mode' : 'Embrace the Shadows change to dark'}</p>
      {/* <button onClick={toggletheme} >c</button> */}
      <input className="switch" type="checkbox" checked="true" onClick={toggletheme}/>
    </div>
  )
}

export default ThemeSet
