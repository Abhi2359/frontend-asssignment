import React, { useState, useEffect } from 'react';
import User from './user'
import Pagination from './components/Pagination';
import axios from 'axios';
import './App.css';

const Layout = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(res.data);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  // Get current 
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = posts.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>My Blog</h1>
      <Posts users={currentUsers} loading={loading} />
      <Pagination
        usersPerPage={usersPerPage}
        totalPosts={users.length}
        
      />
    </div>
  );
};

export default Layout;