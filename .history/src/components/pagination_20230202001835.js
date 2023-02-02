import React from 'react';

const pageNumbers = [];

pageNumbers.push(i);
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
}

for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;