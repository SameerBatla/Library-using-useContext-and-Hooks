import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
const Navbar = () => {
  const { myBooks } = useContext(BookContext);

  return (
    <div className="navbar">
      <h1>Reading List</h1>
      <p>Still need to read {myBooks.length} books</p>
    </div>
  );
};

export default Navbar;
