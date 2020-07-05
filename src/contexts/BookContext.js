import React, { createContext,useReducer } from 'react';
import { bookReducer } from '../Reducers/BookReducer';
export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [myBooks, dispatch] = useReducer(bookReducer,[]);
  return (
    <div>
      <BookContext.Provider value={{myBooks, dispatch}}>
        {props.children}
      </BookContext.Provider>
    </div>
  );
};

export default BookContextProvider;
