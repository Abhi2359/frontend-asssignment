import React from 'react'

function User({users,loading}) {
    if(loading){
        return <h2>Loading...</h2>
    }
    return <ul className=''>
   {users.map(user =>(<li key={user.id} className='list'></li>))}
    </ul>
 
}

export default User