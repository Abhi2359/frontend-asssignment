import React from 'react'

const Pagination = ({usersPerPage,totalUsers}) => {
    const pageNumbers =[];
    for(let i=0;i<=Math.ceil(totalUsers/usersPerPage);i++){
        pageNumbers.push(i)
    }
  return (
    <div>
        <ul className='pagination'>pageNumbers.map(number=>(<li key={}></li>))</ul>
    </div>
  )
}

export default Pagination