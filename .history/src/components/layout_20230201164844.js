import React ,{useState,useEffect} from 'react';
import axios from 'axios';

function Layout() {
    const [users,setUsers]=useState([]);
    const[loading,setLoading] =useState(false);
    const[currentPage,setCurrentPage]=useState(1);
    const[userPerPage,setPostPerPage]=useState()
  return (
    <div className='Layout'>
     

    </div>
  )
}

export default Layout;