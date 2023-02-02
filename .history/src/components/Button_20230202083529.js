import React ,{useState} from 'react'
import style from './style.css'
function Button({ children}) {
    const [viewDetails ,setViewDetails] =useState(false);
    function handleViewDetails(){
        setViewDetails(!viewDetails)
    }
  return (
    <div>
        <button className='btn' onClick={handleViewDetails} >{viewDetails?"Hide":"View"} {children}</button>
        {viewDetails && p}

    </div>
  )
}

export default Button