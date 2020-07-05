import React, { createContext, useState } from 'react';
import {v4 as uuid} from 'uuid';
export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [myBooks, setmyBooks] = useState([
    { title: 'wings of fire', author: 'kalam', id: 1 },
    { title: 'percy jackson', author: 'kalam2', id: 2 },
    { title: 'aviation', author: 'kalam3', id: 3 },
  ]);
  const addBooks = (title, author) => {
    setmyBooks([...myBooks, { title, author, id:uuid() }]);
  };
  const removeBooks = (id) => {
    setmyBooks(myBooks.filter((book) => book.id !== id));
  };
  return (
    <div>
      <BookContext.Provider value={{myBooks, addBooks, removeBooks}}>
        {props.children}
      </BookContext.Provider>
    </div>
  );
};

export default BookContextProvider;
