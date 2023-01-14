import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import * as BooksAPI from './BooksAPI'
import MainView from "./views/MainView";
import SearchView from "./views/SearchView";


function App() {

  const [books, setBooks] = useState([]);

  const updateBookShelf = (bookId, shelf) => {
    const updateShelf = async () => {
      const book = { id: bookId };
      const res = await BooksAPI.update(book, shelf);
      const allBooks = await BooksAPI.getAll();
      setBooks(allBooks);
    };
    updateShelf();
  };


  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };

    getBooks();
  }, []);

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <MainView
            myBooks={books}
            updateBookShelf={updateBookShelf}
          />}

      />
      <Route path="/search" element={<SearchView />} />
    </Routes>
  );

}

export default App;
