import React from 'react'

function User({users,loading}) {
    if(loading){
        return <h2>Loading...</h2>
    }
  return (
    <div>user</div>
  )
}

export default user