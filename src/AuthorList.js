import React from 'react';

function AuthorList({ authors }) {
  return (
    <ul>
      {authors.map((author, index) => (
        <li key={index}>{author}</li>
      ))}
    </ul>
  );
}

export default AuthorList;
