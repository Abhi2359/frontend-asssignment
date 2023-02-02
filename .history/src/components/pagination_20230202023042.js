import React ,{useState}from 'react';
import style from "./style.css";

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];
  const[Color ,setColor] =useState('white')
  const[paginate,setPaginate] =useState(0)
 function handlePaginate(){
    setColor('red');
    setPaginate()
 }

  

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number) setPageLinkColor('red')}  href='!#' className='page-link {}'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;