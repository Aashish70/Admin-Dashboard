import React, { useState } from 'react';
import { fetchBooks } from  '../api'

const SearchBar = ({ onSearch }) => {
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const books = await fetchBooks(1, 10); // Assuming you want to fetch the first page with 10 results
    const filteredBooks = books.filter(book => book.author_name.includes(author));
    onSearch(filteredBooks);
    setAuthor(author);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-center mb-4">
        <input
          type="text"
          placeholder="Search by author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="border rounded-l px-4 py-2 w-80"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
