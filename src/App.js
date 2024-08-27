import React, { useState, useEffect } from 'react';
import AuthorForm from './AuthorForm';
import AuthorList from './AuthorList';

function App() {
  const [authors, setAuthors] = useState([]);
  const [users, setUsers] = useState([]);

  const addAuthor = (authorName) => {
    setAuthors([...authors, authorName]);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Author Submission</h1>
      <AuthorForm onAddAuthor={addAuthor} />
      <h2>Submitted Authors</h2>
      <AuthorList authors={authors} />
      <h2>Users from API</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
