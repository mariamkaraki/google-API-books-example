import React from "react";
import Book from "./book";



const BookList = ({ books }) => {
  return (
          books.map((book, index) => (
            <Book key={`${index}-${book.volumeInfo.title}`} book={book} />
          ))  
  );
};


export default BookList;