import React from "react";
import style from "./style.css";

const Users = ({ users, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
function handleClick(){
    alert('hiii')
}
  return (
    <ul className="list-group ">
      {users.map((user) => (
        <div className="element">
          <li key={user.id} className="list-group-item">
            <div className="userDetails">
              <div className="username">
                <h4>Hello {user.username}</h4>
              </div>
              <div className="contact">
                <h5>CONTACT</h5>
                {user.name}
              </div>
              <div className="city">
                <h5>CITY</h5>
                {user.address.city}
              </div>
              <div >
                <button className="btn" onClick={handleClick}>View Details</button>
              </div>
            </div>
          </li>
        </div>
      ))}
    </ul>
  );
};

export default Users;
