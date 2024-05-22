import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('/api/books');
      setBooks(response.data);
    } catch (error) {
      console.error("There was an error fetching the books!", error);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Book List</h1>
      <input 
        type="text" 
        placeholder="Search..." 
        value={search} 
        onChange={handleSearch}
      />
      <ul>
        {filteredBooks.map(book => (
          <li key={book._id}>
            <Link to={`/books/${book._id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
