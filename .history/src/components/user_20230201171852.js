import React from 'react'

function User({users,loading}) {
    if(loading){
        return <h2>Loading...</h2>
    }
    return <ul className='userList'>
   {users.map(user =>(<li key={user.id} className='list'>{user.title}</li>))}
    </ul>
 
}

export default User