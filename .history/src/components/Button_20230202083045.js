import React from 'react'
import style from './style.css'
function Button({ children}) {
    const [viewDetails ,setViewDetails] =useState(false);
    function handleViewDetails(){
        setViewDetails(!viewDetails)
    }
  return (
    <div>
        <button className='btn' onClick={handleViewDetails} >{viewD}{children}</button>
    </div>
  )
}

export default Button