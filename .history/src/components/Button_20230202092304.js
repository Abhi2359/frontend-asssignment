import React ,{useState} from 'react'
import Description from './Description';
import style from './style.css'
function Button({ name,address,children}) {
    const [viewDetails ,setViewDetails] =useState(false);
    const [width,setWidth] =useState(0)
    function handleViewDetails(){
        setViewDetails(!viewDetails)
       
    }
  return (
    <div>
        <button className='btn' onClick={handleViewDetails} >{viewDetails?"Hide":"View"} {children}</button>
        {viewDetails && <Description name={name} address={address}/>}

    </div>
  )
}

export default Button;