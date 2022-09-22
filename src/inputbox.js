import React from 'react'
import './inputbox.css'

export default function textbox() {

  function getData()
  {
    console.log(val.target)
  }


  return (
    <div className='wrapper'>
    <input id="input" type= "text" onChange={getData}/>
    </div>
  )
}
