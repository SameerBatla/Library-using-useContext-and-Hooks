import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

const Booklist = () => {
  const { myBooks } = useContext(BookContext);

  return myBooks.length ? (
    <div className="book-list">
      <ul>
        {myBooks.map((book) => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">Nothing to Read</div>
  );
};

export default Booklist;
