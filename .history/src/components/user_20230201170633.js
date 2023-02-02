import React from 'react'

function User({users,loading}) {
    if(loading){
        return <h2>Loading...</h2>
    }
    return <ul className='list-group mb-4'>
   {users.map(user =>(<li key={user.id} className='list'></li>))}
    </ul>
  return (
    <div>user</div>
  )
}

export default user