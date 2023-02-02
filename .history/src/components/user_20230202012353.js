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
            <div className='username'>

          <h4>Hello {user.username}</h4>
            </div>
            <div className='contact'>

          <h5>CONTACT</h5>
         {user.name}
            </div>
            <div class>

          <h5>CITY</h5>
          {user.address.city}
            </div>
<div>
    <button>View Details</button>
</div>



        </li>
        </div>
      ))}
    </ul>
  );
};

export default Users;