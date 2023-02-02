import React from 'react'
import style from './style.css'
function Button({onClick ,children}) {
  return (
    <div>
        <button className='btn' onClick={onClick} >{children}</button>
    </div>
  )
}

export default Button