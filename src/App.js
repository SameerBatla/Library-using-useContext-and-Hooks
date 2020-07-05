import React from 'react';
import Navbar from './components/Navbar';
import Booklist from './components/Booklist';
import '../src/index.css';
import BookContextProvider from './contexts/BookContext';
import BookForm from './components/BookForm';
const App = () => {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <Booklist />
        <BookForm />
      </BookContextProvider>
    </div>
  );
};

export default App;
