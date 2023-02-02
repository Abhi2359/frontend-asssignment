import React from 'react'

function User({users,loading}) {
    if(loading){
        return <h2>Loading...</h2>
    }
    return
    <div className='users'>

     <ul className='userList'>
   {users.map(user =>(<li key={user.id} className='list'>
   { user.address.street}
    </li>))}
    </ul>
    </div>
 
}

export default User