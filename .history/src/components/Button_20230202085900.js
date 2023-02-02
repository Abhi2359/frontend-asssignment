import React ,{useState} from 'react'
import Description from './Description';
import style from './style.css'
function Button({ ,namechildren}) {
    const [viewDetails ,setViewDetails] =useState(false);
    function handleViewDetails(){
        setViewDetails(!viewDetails)
    }
  return (
    <div>
        <button className='btn' onClick={handleViewDetails} >{viewDetails?"Hide":"View"} {children}</button>
        {viewDetails && <Description name={user.name}/>}

    </div>
  )
}

export default Button