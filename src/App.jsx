
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddBook from './pages/AddBook';
import Home from './pages/Home';
import BrowseBooks from './pages/BrowseBooks';
import BookDetails from './pages/BookDetails';
import NotFound from './pages/NotFound';

const App = () => {
  
  const [books, setBooks] = useState([
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', category: 'Fiction' },
    { id: 2, title: 'Sapiens', author: 'Yuval Noah Harari', category: 'Non-Fiction' },
    { id: 3, title: 'Dune', author: 'Frank Herbert', category: 'Sci-Fi' },
    { id: 4, title: 'Sherlock Holmes', author: 'Arthur Conan Doyle', category: 'Mystery' },
    { id: 5, title: 'Steve Jobs', author: 'Walter Isaacson', category: 'Biography' },
  ]);

  
  const handleAddBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  return (
    <>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<BrowseBooks books={books} />} />
        <Route path="/book/:id" element={<BookDetails books={books} />} />
        <Route path="/add" element={<AddBook onAddBook={handleAddBook} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
