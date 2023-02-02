import React ,{useState,useEffect} from 'react';
import axios from 'axios';

function Layout() {
    const [users,setUsers]=useState([]);
    const[loading,setLoading] =useState(false);
    const[currentPage,setCurrentPage]=useState(1);
    const[usersPerPage,setUsersPerPage]=useState(3);
    useEffect(()=>{
        const fetchUsers =async()=>{
            setLoading(true);
            const response =await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
            setLoading(false);

        }
        fetchUsers();
    },[])
    console.log(users);
  return (
    <div className='layout'>
        <h1 className='users'>User Details</h1>
     <

    </div>
  )
}

export default Layout;