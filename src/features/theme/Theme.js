import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { changeTextColor } from './themeSlice'

function Theme() {
    const [color,setColor] =useState("white")
    const dispatch =useDispatch()
  return (
    <div>
        <input type="text" onChange={(e)=>{setColor(e.target.value)}} ></input>
        <button onClick={()=>{dispatch(changeTextColor(color))}}>Change Text Color</button>
        <h1>{color}</h1>
    </div>
  )
}

export default Theme