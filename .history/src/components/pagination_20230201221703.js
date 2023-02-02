import React from 'react'

const Pagination = ({usersPerPage,totalUsers}) => {
    const pageNumbers =[];
    for(let i=0;i<=Math.ceil(totalUsers/usersPerPage);i++){
        pageNumbers.push(i)
    }
  return (
    <div>P</div>
  )
}

export default Pagination