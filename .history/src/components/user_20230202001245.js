import React from 'react';

const Users = ({ , loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {.map(post => (
        <li key={post.id} className='list-group-item'>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;