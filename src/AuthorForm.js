import React, { useState } from 'react';

function AuthorForm({ onAddAuthor }) {
  const [authorName, setAuthorName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (authorName) {
      onAddAuthor(authorName);
      setAuthorName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Author Name"
        value={authorName}
        onChange={(e) => setAuthorName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AuthorForm;
