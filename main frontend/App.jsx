import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './components/Login';
import Register from './components/Register';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import './App.css';

const Home = () => {
  const { user, logout } = useAuth();
  const [books, setBooks] = useState([]);
  const [currentBook, setCurrentBook] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('/api/books');
      if (Array.isArray(response.data)) {
        setBooks(response.data);
      } else {
        console.error('API response is not an array:', response.data);
      }
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const addBook = async (book) => {
    try {
      const response = await axios.post('/api/books', book);
      setBooks([...books, response.data]);
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const updateBook = async (updatedBook) => {
    try {
      const response = await axios.put(`/api/books/${updatedBook.id}`, updatedBook);
      setBooks(books.map(book => (book.id === updatedBook.id ? response.data : book)));
      setCurrentBook(null);
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`/api/books/${id}`);
      setBooks(books.filter(book => book.id !== id));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const editBook = (book) => {
    setCurrentBook(book);
  };

  return (
    <div className="container">
      <h1>Book Manager</h1>
      {user ? (
        <>
          <BookForm addBook={addBook} currentBook={currentBook} updateBook={updateBook} />
          <BookList books={books} deleteBook={deleteBook} editBook={editBook} />
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <div>
          <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
