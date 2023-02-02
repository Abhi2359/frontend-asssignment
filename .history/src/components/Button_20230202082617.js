import React from 'react'
import style from './style'
function Button({onClick ,children}) {
  return (
    <div>
        <button className='btn' onClick={onClick} >{Chi}</button>
    </div>
  )
}

export default Button