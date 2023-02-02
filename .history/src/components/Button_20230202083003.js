import React from 'react'
import style from './style.css'
function Button({o ,children}) {
    const [viewDetails ,setViewDetails] =useState(false);
    function handleViewDetails(){
        setViewDetails(!viewDetails)
    }
  return (
    <div>
        <button className='btn' onClick={onClick} >{children}</button>
    </div>
  )
}

export default Button