import React from 'react';
import style from './style.css'


const Users = ({ users, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group '>
      {users.map(user => (
        <div className='element'>

        <li key={user.id} className='list-group-item'>
            <div>

          <h4>Hello {user.username}</h4>
            </div>
            <div>

          <h5>CONTACT</h5>
         {user.name}
            </div>
            <div>

          <h5>CITY</h5>
          {user.address.city}
            </div>




        </li>
        </div>
      ))}
    </ul>
  );
};

export default Users;