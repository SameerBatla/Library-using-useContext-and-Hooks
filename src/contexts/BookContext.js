import React, { createContext, useReducer } from 'react';
import { useEffect } from 'react';
import { bookReducer } from '../Reducers/BookReducer';
export const BookContext = createContext();
const BookContextProvider = (props) => {
  const [myBooks, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('myBooks');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem('myBooks', JSON.stringify(myBooks));
  }, [myBooks]);
  return (
    <div>
      <BookContext.Provider value={{ myBooks, dispatch }}>
        {props.children}
      </BookContext.Provider>
    </div>
  );
};

export default BookContextProvider;
