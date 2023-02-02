import React from 'react';
import style from './style'


const Users = ({ users, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {users.map(user => (
        <div>

        <li key={user.id} className='list-group-item'>
          {user.username}
        </li>
        </div>
      ))}
    </ul>
  );
};

export default Users;