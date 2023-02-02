import React ,{useState}from 'react';
import style from "./style.css";

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];
  const[Color ,setColor] =useState('white')
  const[pagination,setPagination] =useState(0)
 function handlePaginate(){
    setColor('red');
    setPagination(pageumber);
 }

  

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={handlePaginate}  href='!#' className='page-link {}'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;