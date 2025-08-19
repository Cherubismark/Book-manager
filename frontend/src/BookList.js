import React, { useEffect, useState } from "react";
import { getBooks } from "./BookService"; // import axios service

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await getBooks();
      setBooks(response.data); // store books in state
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <div>
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              {book.title} by {book.author} | ISBN: {book.isbn}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
