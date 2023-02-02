import React from 'react'

function User({users,loading}) {
    if(loading){
        return <h2>Loading...</h2>
    }
    return <ul className='list-group mb-4'>
   {users.map(user =>)}
    </ul>
  return (
    <div>user</div>
  )
}

export default user